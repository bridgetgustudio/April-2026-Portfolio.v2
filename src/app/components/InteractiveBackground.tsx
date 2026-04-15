import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Cursor-following gradient effect */}
      <motion.div
        className="absolute inset-0 m-[0px]"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(220, 38, 38, 0.08), 
            rgba(251, 146, 60, 0.05), 
            transparent 70%)`,
        }}
      />
    </div>
  );
}
