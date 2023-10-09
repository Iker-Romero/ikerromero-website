const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect()
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight
  const windowWidth = window.innerWidth || document.documentElement.clientWidth

  const isCompletelyVisible =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= windowWidth

  if (isCompletelyVisible) return true

  const isPartiallyVisible =
    (rect.top >= 0 && rect.top < windowHeight) ||
    (rect.bottom > 0 && rect.bottom <= windowHeight) ||
    (rect.left >= 0 && rect.left < windowWidth) ||
    (rect.right > 0 && rect.right <= windowWidth)

  return isPartiallyVisible
}

export default isInViewport
