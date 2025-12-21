// SphericalParticle.js
import React, { useEffect, useRef } from "react";

const SphericalParticle = ({
  color = "#22d3ee", // Cyan to match the bot's theme
  size = 180,
  particleCount = 150,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    let animationFrameId;
    const particles = [];

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.theta = Math.random() * Math.PI * 2;
        this.phi = Math.random() * Math.PI;
        this.speed = 0.001 + Math.random() * 0.003;
        this.size = 0.5 + Math.random() * 1.2;
        this.streakHeight = 8 + Math.random() * 12;
      }
      update(time) {
        this.theta += this.speed;
        const verticalDrift = Math.sin(time * 0.001 + this.phi) * 8;
        const x = size * Math.sin(this.phi) * Math.cos(this.theta);
        const y = size * Math.cos(this.phi) + verticalDrift;
        const z = size * Math.sin(this.phi) * Math.sin(this.theta);
        const perspective = (z + size) / (size * 2);
        this.drawX = canvas.width / 2 + x;
        this.drawY = canvas.height / 2 + y;
        this.alpha = 0.1 + perspective * 0.6;
        this.scale = 0.4 + perspective;
      }
      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.drawX, this.drawY, this.size * this.scale, 0, Math.PI * 2);
        ctx.fill();
        
        const lineGradient = ctx.createLinearGradient(
          this.drawX, this.drawY - this.streakHeight,
          this.drawX, this.drawY + this.streakHeight
        );
        lineGradient.addColorStop(0, "transparent");
        lineGradient.addColorStop(0.5, color);
        lineGradient.addColorStop(1, "transparent");
        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const render = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "screen";
      particles.forEach((p) => { p.update(time); p.draw(); });
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", resize);
    resize();
    render(0);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [color, size, particleCount]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-40">
      <canvas ref={canvasRef} className="w-full h-full filter blur-[1px]" />
    </div>
  );
};

export default SphericalParticle;