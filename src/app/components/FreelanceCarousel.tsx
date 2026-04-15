import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import imgWorkplaceCard from 'figma:asset/0d69f34f9f6ab4d225d2349500286f21f77d3389.png';
import imgGadAbout from 'figma:asset/265d4bafcbf68bcc4b1d25bb90098de8ac12ef68.png';
import imgGadActivities from 'figma:asset/6232e270b8fe10b1b3a9ac5abde66abe7306db21.png';
import imgCheesecake1 from 'figma:asset/b55e5d85e5026f106114e91dd0e3a883759ab00a.png';
import imgCheesecake2 from 'figma:asset/b17863a4db973551a010ecaf1a4a8dfe0e334742.png';
import imgMdWithLove from 'figma:asset/03ddb794564c46e67074acd471412390a026b7d9.png';
import imgSpotted from 'figma:asset/71e989d312997ce32cbce998cb00c92832504199.png';
import imgIxl from 'figma:asset/3a07d9e28b7d8d1199c496b37186ba9a9164926c.png';
import imgToppings from 'figma:asset/078a0391c55bd41bb5ed4bb6af90ced5a8793795.png';
import imgTherapy from 'figma:asset/606db612a0aab25754e09cda91e8923824a97839.png';

export function FreelanceCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: imgWorkplaceCard, alt: 'IBM Workplace and Closed Room Etiquette Cards' },
    { image: imgGadAbout, alt: 'IBM Global Associates Day 2025 - About' },
    { image: imgGadActivities, alt: 'IBM Global Associates Day - A day full of Activities' },
    { image: imgCheesecake1, alt: 'How to enjoy a cheesecake' },
    { image: imgCheesecake2, alt: 'How to place an order' },
    { image: imgMdWithLove, alt: 'md, with love - alternative logos' },
    { image: imgSpotted, alt: 'Spotted - how to play' },
    { image: imgIxl, alt: 'IXL Overview of Analytics Annotations' },
    { image: imgToppings, alt: 'Toppings $20 giveaway' },
    { image: imgTherapy, alt: 'therapy thru music' },
  ];

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden"
      style={{
        background: 'var(--glass-background)',
        border: '1px solid var(--glass-border)',
        boxShadow: 'var(--glass-shadow)',
      }}
    >
      {/* Atmospheric gradient background */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: 'var(--atmospheric-warm-to-cool)',
        }}
      />

      <div className="relative z-10">
        {/* Arrow Controls */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={goToPrevious}
            className="p-3 rounded-xl transition-all duration-300"
            style={{
              background: 'var(--glass-background)',
              border: '1px solid var(--glass-border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--crimson)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-6 text-foreground/80" />
          </button>
          
          <button
            onClick={goToNext}
            className="p-3 rounded-xl transition-all duration-300"
            style={{
              background: 'var(--glass-background)',
              border: '1px solid var(--glass-border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--crimson)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}
            aria-label="Next slide"
          >
            <ChevronRight className="size-6 text-foreground/80" />
          </button>
        </div>

        {/* Image Display */}
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="w-full"
        >
          <div 
            className="w-full rounded-2xl overflow-hidden"
            style={{
              background: 'var(--background)',
              border: '1px solid var(--glass-border)',
            }}
          >
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].alt}
              className="w-full h-auto object-contain"
              style={{
                maxHeight: '500px',
              }}
            />
          </div>
        </motion.div>

        {/* Dot Navigation */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: currentSlide === index ? '32px' : '8px',
                height: '8px',
                background: currentSlide === index 
                  ? 'linear-gradient(90deg, var(--crimson), var(--sunset-orange))' 
                  : 'var(--foreground)',
                opacity: currentSlide === index ? 1 : 0.3,
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}