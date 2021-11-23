const eventDate = new Date('Jan 14 2022 12:00:00 EDT')

const msEl = document.getElementById('countdown-ms')
const sEl = document.getElementById('countdown-s')

function updateCountdown() {
  const msLeft = eventDate - new Date()

  msEl.innerHTML = `${msLeft}ms`
  sEl.innerHTML  = `${Math.floor(msLeft / 1000)}s`

  requestAnimationFrame(updateCountdown)
}

requestAnimationFrame(updateCountdown)
