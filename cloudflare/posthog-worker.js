/**
 * PostHog Cloudflare Worker Proxy
 *
 * Based on: https://posthog.com/docs/advanced/proxy/cloudflare
 * Region: EU
 *
 * Modified from official PostHog code to add CORS headers.
 * Without CORS headers, requests to /array/* paths fail with:
 * "Access-Control-Allow-Origin header is not present"
 */

const API_HOST = 'eu.i.posthog.com'
const ASSET_HOST = 'eu-assets.i.posthog.com'

async function handleRequest(request, ctx) {
  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': '*'
      }
    })
  }

  const url = new URL(request.url)
  const pathname = url.pathname
  const search = url.search
  const pathWithParams = pathname + search

  let response
  if (pathname.startsWith('/static/')) {
    response = await retrieveStatic(request, pathWithParams, ctx)
  } else {
    response = await forwardRequest(request, pathWithParams)
  }

  return addCorsHeaders(response)
}

async function retrieveStatic(request, pathname, ctx) {
  let response = await caches.default.match(request)
  if (!response) {
    response = await fetch(`https://${ASSET_HOST}${pathname}`)
    ctx.waitUntil(caches.default.put(request, response.clone()))
  }
  return response
}

async function forwardRequest(request, pathWithSearch) {
  const ip = request.headers.get('CF-Connecting-IP') || ''
  const originHeaders = new Headers(request.headers)
  originHeaders.delete('cookie')
  originHeaders.set('X-Forwarded-For', ip)

  const originRequest = new Request(`https://${API_HOST}${pathWithSearch}`, {
    method: request.method,
    headers: originHeaders,
    body:
      request.method !== 'GET' && request.method !== 'HEAD'
        ? await request.arrayBuffer()
        : null,
    redirect: request.redirect
  })

  return await fetch(originRequest)
}

/**
 * Add CORS headers to response.
 * Required because cross-origin requests from www.ikerromero.com to i.ikerromero.com
 * need explicit CORS headers that PostHog's servers don't always provide.
 */
function addCorsHeaders(response) {
  const newHeaders = new Headers(response.headers)
  newHeaders.set('Access-Control-Allow-Origin', '*')
  newHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  newHeaders.set('Access-Control-Allow-Headers', '*')
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  })
}

export default {
  async fetch(request, env, ctx) {
    return handleRequest(request, ctx)
  }
}
