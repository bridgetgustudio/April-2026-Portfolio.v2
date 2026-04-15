import image_31edc1a39d3ecb287c3b75f37253dfe85eecc516 from 'figma:asset/31edc1a39d3ecb287c3b75f37253dfe85eecc516.png'
import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
import paintingImage from 'figma:asset/5235fe5fc66588c7d7b342d16fd4b48e8bebb588.png';
import runningImage from 'figma:asset/4ec29b3aa77263ab5013aee1f2d08ad29e9f440f.png';
import specialOlympicsLogo from 'figma:asset/4952bc350d94a56be759c4f3bbd0e3b170abcafb.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [showMoreAboutMe, setShowMoreAboutMe] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Painting & Art',
      description: 'I started painting in high school and still keep it as a creative outlet today. Living in New York City, I love spending time in museums and exploring the art scene.',
    },
    {
      title: 'Movement & Physical Activity',
      description: 'In my free time, I enjoy staying active, often running by the water or spending time rock climbing.',
    },
    {
      title: 'Accessibility & Advocacy',
      description: 'A cause I\'m passionate about is advocating for children with special needs, shaped by growing up with a brother who has special needs. This experience influenced my decision to study psychology and research in undergrad, and continues to inform my focus on accessibility and inclusive design.',
    },
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Safety check: reset if currentSlide is out of bounds
  const safeCurrentSlide = currentSlide >= slides.length ? 0 : currentSlide;

  return (
    <motion.div
      className="relative backdrop-blur-xl rounded-3xl p-1"
      style={{
        background: 'var(--glass-background)',
        border: '1px solid var(--glass-border)',
        boxShadow: 'var(--glass-shadow)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glimmering sparkle effect overlay */}
      {isHovered && (
        <>
          <motion.div
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{ top: '15%', right: '20%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          <motion.div
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{ bottom: '25%', left: '15%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 bg-white rounded-full"
            style={{ top: '40%', left: '10%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 bg-white rounded-full"
            style={{ top: '20%', left: '85%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </>
      )}

      <div className="relative z-10 rounded-3xl overflow-hidden p-8 bg-background/30">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Picture with Contact Icons */}
          <div className="flex flex-col gap-4 w-full md:w-48">
            <motion.div
              className="relative w-full aspect-square rounded-2xl overflow-hidden flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, var(--crimson), var(--sunset-orange))',
              }}
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {/* Orange gradient background with BG text - visible on hover */}
              <motion.div 
                className="absolute inset-0 flex items-start justify-end text-white text-7xl font-display p-4"
                animate={{
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                BG
              </motion.div>
              
              {/* Subject image */}
              <motion.img
                src={image_31edc1a39d3ecb287c3b75f37253dfe85eecc516}
                alt="Bridget Gu Lee portrait"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="font-display text-3xl md:text-4xl mb-3 tracking-tight">
              Bridget Gu Lee
            </h2>
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-4">
              I began as a graphic designer focused on visual storytelling, and grew into a systems thinker designing beyond the interface. At IBM, I bridge craft and strategy to transform complex enterprise challenges into clear, human experiences at scale.
            </p>
            
            {/* Contact Links Row */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-body text-sm font-light transition-all"
                style={{ 
                  border: '2px solid var(--crimson)',
                  backgroundColor: 'transparent',
                  color: 'var(--crimson)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--crimson)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--crimson)';
                }}
              >
                <Linkedin className="size-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1PwHokQ7d3KYXE0CJHr6NRR-7ahnQviE8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-body text-sm font-light transition-all"
                style={{
                  border: '2px solid var(--crimson)',
                  backgroundColor: 'transparent',
                  color: 'var(--crimson)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--crimson)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--crimson)';
                }}
              >
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Resume</span>
              </a>
              <a
                href="mailto:bridget.gu.lee@gmail.com"
                className="group flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-body text-sm font-light transition-all"
                style={{
                  border: '2px solid var(--crimson)',
                  backgroundColor: 'transparent',
                  color: 'var(--crimson)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--crimson)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--crimson)';
                }}
              >
                <Mail className="size-5" />
                <span>Send me an email</span>
              </a>
            </div>
            
            {/* More About Me Trigger */}
            <button
              onClick={() => setShowMoreAboutMe(!showMoreAboutMe)}
              className="text-sm font-body text-foreground/60 hover:text-foreground transition-colors duration-300 underline decoration-foreground/20 hover:decoration-foreground/60 underline-offset-4"
            >
              {showMoreAboutMe ? 'Show Less' : 'More About Me'}
            </button>
          </div>
        </div>

        {/* More About Me Panel */}
        <motion.div
          initial={false}
          animate={{
            height: showMoreAboutMe ? 'auto' : 0,
            opacity: showMoreAboutMe ? 1 : 0,
            marginTop: showMoreAboutMe ? 32 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="overflow-hidden"
        >
          <div className="backdrop-blur-sm rounded-2xl p-6"
            style={{
              background: 'var(--glass-background)',
              border: '1px solid var(--glass-border)',
            }}
          >
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`px-4 py-2 text-xs font-body whitespace-nowrap rounded-lg transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-foreground/10 text-foreground'
                      : 'text-foreground/50 hover:text-foreground/80 hover:bg-foreground/5'
                  }`}
                >
                  {slide.title}
                </button>
              ))}
            </div>

            {/* Carousel Content */}
            <div className="relative">
              {/* Arrow Controls */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={goToPrevious}
                  className="p-2 rounded-lg hover:bg-foreground/5 transition-colors duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="size-5 text-foreground/60" />
                </button>
                <button
                  onClick={goToNext}
                  className="p-2 rounded-lg hover:bg-foreground/5 transition-colors duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight className="size-5 text-foreground/60" />
                </button>
              </div>

              {/* Slides */}
              <motion.div
                key={safeCurrentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Placeholder Image Frame */}
                <div 
                  className="w-full h-[288px] rounded-xl mb-4 overflow-hidden flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, var(--muted-rose)/20, var(--muted-sage)/20)',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  {safeCurrentSlide === 0 ? (
                    <img src={paintingImage} alt="Painting" className="w-full h-full object-cover object-[center_75%] rounded-xl" />
                  ) : safeCurrentSlide === 1 ? (
                    <img src={runningImage} alt="Running" className="w-full h-full object-cover object-[center_40%] rounded-xl" />
                  ) : (
                    <ImageWithFallback src={specialOlympicsLogo} alt="Special Olympics Unified Sports" className="w-full h-full object-cover rounded-xl" style={{ backgroundColor: '#ffffff' }} fallbackSrc="https://images.unsplash.com/photo-1761039808205-9fb23b15350f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsJTIwb2x5bXBpY3MlMjB1bmlmaWVkJTIwc3BvcnRzJTIwbG9nb3xlbnwxfHx8fDE3NzU0OTM2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080" />
                  )}
                </div>

                {/* Slide Content */}
                <h3 className="font-display text-xl mb-2">{slides[safeCurrentSlide].title}</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {slides[safeCurrentSlide].description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}