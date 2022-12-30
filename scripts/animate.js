let canvas = document.getElementById("my_canvas")
let context = canvas.getContext("2d")

const speed = 4
let position = 0
let moveSpeed = speed
let radius = 40

const moveBall = () => {
  if (position + radius > 640) moveSpeed = -speed
  else if (position - radius < 0) moveSpeed = speed
  position += moveSpeed
}

const drawBall = () => {
  context.clearRect(0, 0, 640, 480)

  context.fillStyle = "#62687f"
  context.beginPath()
  context.arc(position, 50, radius, 0, 2 * Math.PI)
  context.fill()
}

const animate  = () => {
  moveBall()
  drawBall()
  window.requestAnimationFrame(animate)
}

window.requestAnimationFrame(animate)

