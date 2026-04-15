import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '@/app/data/caseStudies';
import { ShellEnergyCaseStudy } from '@/app/components/ShellEnergyCaseStudy';
import { SoundTouchCaseStudy } from '@/app/components/SoundTouchCaseStudy';
import { AmazonMiddleMileCaseStudy } from '@/app/components/AmazonMiddleMileCaseStudy';
import { ATTAICaseStudy } from '@/app/components/ATTAICaseStudy';

export default function CaseStudy() {
  const { slug } = useParams();
  const study = slug ? caseStudies[slug] : null;

  // Use custom Shell Energy case study component
  if (slug === 'shell-energy') {
    return <ShellEnergyCaseStudy />;
  }

  // Use custom SoundTouch case study component
  if (slug === 'soundtouch') {
    return <SoundTouchCaseStudy />;
  }

  // Use custom Amazon Middle Mile case study component
  if (slug === 'amazon-middle-mile') {
    return <AmazonMiddleMileCaseStudy />;
  }

  // Use custom AT&T AI case study component
  if (slug === 'att-smb') {
    return <ATTAICaseStudy />;
  }

  if (!study) {
    return (
      <div className="min-h-screen pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-heading text-5xl mb-4">Case study not found</h1>
          <Link to="/" className="font-body text-sm text-muted-foreground hover:text-foreground">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to work
            </Link>

            <div className="mb-12">
              <span className="font-body text-sm uppercase tracking-widest mb-4 block" style={{ color: 'var(--sunset-orange)' }}>
                {study.category}
              </span>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
                {study.title}
              </h1>
              <p className="font-body text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
                {study.subtitle}
              </p>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div>
                <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--amber)' }}>
                  Role
                </p>
                <p className="font-body text-base">{study.role}</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--amber)' }}>
                  Organization
                </p>
                <p className="font-body text-base">{study.organization}</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--amber)' }}>
                  Year
                </p>
                <p className="font-body text-base">{study.year}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6 mb-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
            <img
              src={study.heroImage}
              alt={study.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="px-6 mb-32">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-heading text-3xl mb-6 relative inline-block">
              Overview
              <div 
                className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                style={{
                  width: '40%',
                  backgroundColor: 'var(--crimson)',
                }}
              />
            </h2>
            <p className="font-body text-lg leading-relaxed text-muted-foreground font-light">
              {study.overview}
            </p>
          </motion.section>

          {/* Challenge */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-heading text-3xl mb-6 relative inline-block">
              Challenge
              <div 
                className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                style={{
                  width: '40%',
                  backgroundColor: 'var(--sunset-orange)',
                }}
              />
            </h2>
            <p className="font-body text-lg leading-relaxed text-muted-foreground font-light">
              {study.challenge}
            </p>
          </motion.section>

          {/* Approach */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-heading text-3xl mb-6 relative inline-block">
              Approach
              <div 
                className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                style={{
                  width: '40%',
                  backgroundColor: 'var(--amber)',
                }}
              />
            </h2>
            <ul className="space-y-4">
              {study.approach.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <span className="size-6 rounded-full bg-gradient-to-br from-[var(--warm-gradient-start)] to-[var(--warm-gradient-end)] flex-shrink-0 mt-1" />
                  <p className="font-body text-lg leading-relaxed text-muted-foreground font-light">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Images Grid */}
          {study.images.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.images.map((image, index) => (
                  <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                    <img
                      src={image}
                      alt={`${study.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Impact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-heading text-3xl mb-6 relative inline-block">
              Impact
              <div 
                className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                style={{
                  width: '40%',
                  background: 'linear-gradient(90deg, var(--crimson), var(--sunset-orange))',
                }}
              />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.impact.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl backdrop-blur-sm bg-card border border-border"
                >
                  <p className="font-body text-base leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tags */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap gap-3">
              {study.tags.map(tag => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-body font-light backdrop-blur-sm bg-accent text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}