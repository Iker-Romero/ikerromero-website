const addScrollAnimationsListener = () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.animate-hidden')
  hiddenElements.forEach(element => observer.observe(element))

  return () => observer.disconnect()
}

export default addScrollAnimationsListener
