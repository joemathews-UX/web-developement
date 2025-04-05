// Name: Joe Jacob
// Student Number: 100977645
// Date: April 04, 2025
// Description: This JavaScript document is designed to present a bouncing ball platform

// ---------------------------
// Setup canvas
// ---------------------------

// Get canvas element and its drawing context
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions to full browser window
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// ---------------------------
// Utility functions
// ---------------------------

// Generate a random number between min and max (inclusive)
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random RGB color string
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// ---------------------------
// Ball class definition
// ---------------------------
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;         // Horizontal position
    this.y = y;         // Vertical position
    this.velX = velX;   // Horizontal velocity
    this.velY = velY;   // Vertical velocity
    this.color = color; // Ball color
    this.size = size;   // Radius of the ball
  }

  // Draw the ball on the canvas
  draw() {
    ctx.beginPath(); // Start drawing path
    ctx.fillStyle = this.color; // Set fill color
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); // Draw circle
    ctx.fill(); // Fill the circle
  }

  // Update ball position and reverse direction when hitting canvas edges
  update() {
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
      this.velX = -this.velX; // Reverse horizontal direction
    }

    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
      this.velY = -this.velY; // Reverse vertical direction
    }

    this.x += this.velX; // Move horizontally
    this.y += this.velY; // Move vertically
  }

  // Check for collisions with other balls and change colors if they collide
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) { // Avoid comparing the ball to itself
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          // If balls collide, assign a new random color to both
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

// ---------------------------
// Create multiple Ball instances
// ---------------------------

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20); // Random size for each ball
  const ball = new Ball(
    // Ensure balls are drawn within canvas bounds
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7), // Horizontal speed
    random(-7, 7), // Vertical speed
    randomRGB(),   // Random color
    size
  );

  balls.push(ball); // Add new ball to the array
}

// ---------------------------
// Animation loop
// ---------------------------

function loop() {
  // Create semi-transparent black background for trailing effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height); // Clear canvas with transparency

  // Draw and update each ball
  for (const ball of balls) {
    ball.draw();            // Draw the ball
    ball.update();          // Update position
    ball.collisionDetect(); // Handle collisions
  }

  // Repeat animation on next frame
  requestAnimationFrame(loop);
}

// Start the animation
loop();
