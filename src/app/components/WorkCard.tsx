import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface WorkCardProps {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  index: number;
  externalUrl?: string;
}

export function WorkCard({ slug, title, category, description, tags, imageUrl, index, externalUrl }: WorkCardProps) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Check if this is a "coming soon" card
  const isComingSoon = slug === 'amazon-middle-mile' || slug === 'soundtouch';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isComingSoon) {
      const rect = e.currentTarget.getBoundingClientRect();
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = () => {
    if (isComingSoon) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (isComingSoon) {
      setIsHovering(false);
    }
  };
  const content = (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="relative rounded-2xl overflow-hidden backdrop-blur-xl h-full flex flex-col"
      style={{
        background: 'var(--glass-background)',
        border: '1px solid var(--glass-border)',
        boxShadow: 'var(--glass-shadow)',
        cursor: isComingSoon ? 'none' : 'pointer',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Custom "coming soon" cursor */}
      {isComingSoon && isHovering && (
        <div
          className="fixed pointer-events-none z-50 font-body text-sm px-4 py-2 rounded-full"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#000000',
            color: '#ffffff',
            fontWeight: 700,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
          }}
        >
          coming soon
        </div>
      )}

      {/* Atmospheric gradient decoration */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'var(--atmospheric-warm-to-cool)',
        }}
      />

      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden bg-muted relative flex-shrink-0">
        <motion.img
          src={slug === 'soundtouch' ? (isHovering ? '/src/imports/Screenshot_2026-04-15_at_10.15.51 AM.png' : '/src/imports/Screenshot_2026-04-15_at_10.24.53 AM.png') : imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          style={{
            transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        />
        {/* Image overlay gradient */}
        
      </div>

      {/* Content */}
      <div className="p-8 relative z-10 flex-1 flex flex-col">
        {/* Category */}
        <div className="flex items-center justify-between mb-3">
          <span 
            className="font-body text-xs uppercase tracking-widest" 
            style={{ color: 'var(--sunset-orange)' }}
          >
            {category}
          </span>
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ArrowUpRight className="size-5" style={{ color: 'var(--crimson)' }} />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-3xl mb-3 group-hover:text-foreground transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, idx) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-body font-light backdrop-blur-sm"
              style={{
                background: idx === 0 
                  ? 'rgba(220, 38, 38, 0.1)' 
                  : idx === 1 
                    ? 'rgba(253, 164, 175, 0.15)' 
                    : 'rgba(187, 247, 208, 0.15)',
                color: 'var(--foreground)',
                opacity: 0.8,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      {isComingSoon ? (
        <div className="group block h-full">
          {content}
        </div>
      ) : externalUrl ? (
        <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="group block h-full">
          {content}
        </a>
      ) : (
        <Link to={`/work/${slug}`} className="group block h-full">
          {content}
        </Link>
      )}
    </motion.div>
  );
}