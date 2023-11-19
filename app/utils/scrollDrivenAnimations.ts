import isInViewport from './isInViewport'

const addScrollAnimationsListener = () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const handleAnimationEnd = (e: Event) => {
        const target = e.target as HTMLElement

        entry.target.classList.remove('animating')

        // Check if the element leaved the viewport while animating because the IntersectionObserver is not allowed to hide while animating
        if (target && !isInViewport(target)) {
          entry.target.classList.remove('visible')
        }
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('visible', 'animating')

        entry.target.removeEventListener('animationend', handleAnimationEnd)
        entry.target.addEventListener('animationend', handleAnimationEnd)
      } else if (!entry.target.classList.contains('animating')) {
        entry.target.classList.remove('visible')

        entry.target.removeEventListener('animationend', handleAnimationEnd)
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden')

  hiddenElements.forEach(element => {
    observer.observe(element)
  })

  window.addEventListener('scroll', () => {
    hiddenElements.forEach(element => {
      if (
        element.classList.contains('animating') &&
        isInViewport(element as HTMLElement)
      ) {
        element.classList.remove('animating')
      }
    })
  })
}

export default addScrollAnimationsListener
