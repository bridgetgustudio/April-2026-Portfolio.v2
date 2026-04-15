import { useState } from 'react';
import { motion } from 'motion/react';
import { TimelineItem } from '@/app/components/TimelineItem';
import { ProfileCard } from '@/app/components/ProfileCard';
import { Palette, Users, Target, Layers, Briefcase } from 'lucide-react';

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineData = [
    {
      year: '2012-2015',
      title: 'It started with a love for visual storytelling.',
      organization: 'Graphic Design',
      description: 'I began as a graphic designer creating posters, publications, and visual identities for community organizations. Every project taught me that design isn\'t just about making things beautiful—it\'s about amplifying voices that deserve to be heard. I learned to listen deeply, translate complex ideas into clear visuals, and craft narratives that resonate. This foundation in visual craft and storytelling became the bedrock of everything I would build.',
      keyTakeaway: 'Design is a form of storytelling. Every color, typeface, and layout choice communicates meaning.',
      takeawayIcon: Palette,
      skills: ['Visual Design', 'Typography', 'Branding', 'Print Design', 'Adobe Creative Suite'],
      imageUrls: [
        'https://images.unsplash.com/photo-1589829100333-e215933ccd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvJTIwY3JlYXRpdmUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3Njk5NzczMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1558707538-c56435bdcdf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwcG9zdGVyJTIwZGVzaWduJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2OTk3NzMwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    {
      year: '2015-2017',
      title: 'Then I discovered that design shapes systems, not just screens.',
      organization: 'Product Design Community',
      description: 'As I began mentoring emerging designers, I realized something crucial: the most impactful design work happens when you zoom out. It\'s not just about perfecting individual screens—it\'s about understanding how people flow through experiences, how teams collaborate, and how design decisions ripple through entire organizations. Teaching others helped me articulate what I\'d been learning intuitively: that craft and strategy aren\'t separate—they\'re two sides of the same coin.',
      keyTakeaway: 'Great design thinking combines pixel-perfect craft with strategic systems thinking.',
      takeawayIcon: Users,
      skills: ['Mentorship', 'Design Systems', 'UX Strategy', 'Workshop Facilitation', 'Design Thinking'],
      imageUrls: [
        'https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBtZW50b3JzaGlwJTIwdGVhY2hpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3Njk5NzczMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW1zJTIwY29sbGFib3JhdGlvbiUyMHRlYW18ZW58MXx8fHwxNzY5OTc3MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    {
      year: '2017-2019',
      title: 'I learned to ground advanced tools in the customer voice.',
      organization: 'Comcast',
      description: 'Working on analytics products at Comcast, I confronted a common challenge: how do you design sophisticated tools that people actually want to use? The answer came through deep user research and relentless focus on the customer voice. I learned to balance business objectives with genuine user needs, translating complex data into insights that felt approachable and actionable. This was where I truly understood the power of research-driven design—not design for its own sake, but design in service of real people solving real problems.',
      keyTakeaway: 'The best products emerge when you genuinely listen to users and let their needs guide your decisions.',
      takeawayIcon: Target,
      skills: ['User Research', 'Data Visualization', 'Analytics', 'Prototyping', 'Stakeholder Management'],
      imageUrls: [
        'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njk5NzczMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1580894740397-0946742deb4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnNpZ2h0cyUyMGN1c3RvbWVyJTIwZmVlZGJhY2t8ZW58MXx8fHwxNzY5OTc3MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    {
      year: '2019-2020',
      title: 'Complexity taught me the value of clarity at scale.',
      organization: 'Amazon',
      description: 'At Amazon, I was thrown into the deep end of enterprise design: massive supply chain systems serving thousands of operational users with wildly different needs and contexts. The scale was humbling. I learned that designing for complexity doesn\'t mean adding complexity—it means ruthlessly prioritizing clarity. Every interaction had to work for warehouse managers, logistics coordinators, and delivery drivers, often under time pressure and stress. This experience crystallized my belief that elegant design at scale requires both deep empathy and rigorous systems thinking.',
      keyTakeaway: 'Designing for enterprise scale means making the complex feel simple, even when the stakes are high.',
      takeawayIcon: Layers,
      skills: ['Enterprise UX', 'Complex Systems', 'Cross-functional Collaboration', 'Scalable Design', 'Operational Design'],
      imageUrls: [
        'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMGxvZ2lzdGljcyUyMHRlY2hub2xvZ3klMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY5OTc3MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBjb21wbGV4JTIwc3lzdGVtc3xlbnwxfHx8fDE3Njk5NzczMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    {
      year: '2020-Present',
      title: 'Today, I bridge craft and strategy at the enterprise level.',
      organization: 'IBM',
      description: 'As an Experience Consultant at IBM, I bring together everything I\'ve learned: the visual craft from my design roots, the systems thinking from mentorship, the customer empathy from analytics work, and the clarity-under-complexity from Amazon. I lead strategic design engagements, running workshops with C-suite executives and hands-on prototyping sessions with engineering teams. My work translates messy business challenges into elegant experiences that feel human, even at massive scale. Every project is an opportunity to prove that enterprise software doesn\'t have to be soulless—that with the right blend of craft and strategy, we can create products that are both powerful and delightful.',
      keyTakeaway: 'The most meaningful design work happens at the intersection of beauty, function, and business impact.',
      takeawayIcon: Briefcase,
      skills: ['Design Strategy', 'Rapid Prototyping', 'Executive Workshops', 'Enterprise Design', 'Design Leadership', 'IBM Carbon Design System'],
      imageUrls: [
        'https://images.unsplash.com/photo-1758519288969-4806f015852d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwY29uc3VsdGluZyUyMHdvcmtzcGFjZSUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3Njk5NzczMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHJhdGVneSUyMHdvcmtzaG9wJTIwZXhlY3V0aXZlc3xlbnwxfHx8fDE3Njk5NzczMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
  ];

  const gradientProgress = (activeIndex / (timelineData.length - 1)) * 100;

  return (
    <div className="min-h-screen pt-32 relative">
      {/* Atmospheric background */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'var(--atmospheric-warm)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32 space-y-16"
        >
          {/* Profile Card */}
          <ProfileCard />

          {/* Closing Statement - moved to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl rounded-3xl p-8 md:p-10 max-w-4xl mx-auto relative overflow-hidden group"
            style={{
              background: 'var(--glass-background)',
              border: '1px solid var(--glass-border)',
              boxShadow: 'var(--glass-shadow)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 2px var(--crimson), 0 0 0 2px var(--sunset-orange)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
            }}
          >
            {/* Animated gradient border */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, var(--crimson) 0%, var(--sunset-orange) 50%, var(--amber) 100%)',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                padding: '2px',
              }}
            />

            {/* Atmospheric gradient background */}
            <div 
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                background: 'var(--atmospheric-warm-to-cool)',
              }}
            />
            
            <p className="font-heading text-lg md:text-xl leading-relaxed text-center relative z-10">
              At its core, I believe <span
                className="font-bold cursor-pointer inline-block dark:text-white transition-colors duration-200 hover:text-[#dc2626]"
              >
                good design tells clear stories
              </span> about how products, systems, and people connect. I work to clarify those stories by navigating real constraints, grounding decisions in research, and designing with empathy at scale.
            </p>
          </motion.div>

          {/* Section Title */}
          
        </motion.div>

        {/* Timeline with gradient spine */}
        <div className="relative">
          {/* Vertical gradient line - visual spine */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block">
            {/* Background line */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: 'var(--border)',
              }}
            />
            {/* Animated gradient overlay - progresses as you scroll */}
            <motion.div
              className="absolute top-0 left-0 right-0"
              style={{
                height: `${gradientProgress}%`,
                background: 'linear-gradient(180deg, var(--crimson), var(--sunset-orange), var(--amber))',
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              index={index}
              onInView={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}