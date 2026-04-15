import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  ArrowLeft,
  Layers,
  Sparkles,
  Globe,
  Clock,
  Lightbulb,
  Target,
  Scale,
  CheckCircle,
  FileText,
  ArrowRight
} from 'lucide-react';
import heroImage from '../../imports/Screenshot_2026-04-14_at_9.29.04 PM.png';

export function ShellEnergyCaseStudy() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
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

            <div className="mb-16">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
                Shell Energy Design System
              </h1>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-border/50">
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    My Role
                  </p>
                  <p className="font-body text-base font-light">UX Designer & Strategist</p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    My Team
                  </p>
                  <p className="font-body text-base font-light">
                    1 Product Manager, 2 FrontEnd Developers, 1 Contentful Systems Architect
                  </p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    Duration
                  </p>
                  <p className="font-body text-base font-light">January 2025 – November 2025</p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    Tools
                  </p>
                  <p className="font-body text-base font-light">Figma, Contentful, Storybook</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="px-6 mb-32"
      >
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <img
              src={heroImage}
              alt="Shell Energy Design System Components"
              className="w-full h-auto"
              style={{ transform: 'scale(1.02)' }}
            />
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-6 mb-32">
        <div className="max-w-5xl mx-auto space-y-24">

          {/* Section 1 — Key Metrics */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Metric Card 1 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl backdrop-blur-xl border"
                style={{
                  background: 'var(--glass-background)',
                  borderColor: 'var(--glass-border)',
                }}
              >
                <Layers className="size-8 mb-4" style={{ color: 'var(--crimson)' }} />
                <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">Components</p>
                <p className="font-heading text-4xl mb-2">100+</p>
                <p className="font-body text-sm text-muted-foreground font-light">Standardized web components</p>
              </motion.div>

              {/* Metric Card 2 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl backdrop-blur-xl border"
                style={{
                  background: 'var(--glass-background)',
                  borderColor: 'var(--glass-border)',
                }}
              >
                <Sparkles className="size-8 mb-4" style={{ color: 'var(--sunset-orange)' }} />
                <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">UX/UI Enhancements</p>
                <p className="font-heading text-4xl mb-2">13</p>
                <p className="font-body text-sm text-muted-foreground font-light">Scalable improvements introduced</p>
              </motion.div>

              {/* Metric Card 3 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl backdrop-blur-xl border"
                style={{
                  background: 'var(--glass-background)',
                  borderColor: 'var(--glass-border)',
                }}
              >
                <Globe className="size-8 mb-4" style={{ color: 'var(--amber)' }} />
                <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">Countries Supported</p>
                <p className="font-heading text-4xl mb-2">14+</p>
                <p className="font-body text-sm text-muted-foreground font-light">Global website ecosystem</p>
              </motion.div>

              {/* Metric Card 4 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl backdrop-blur-xl border"
                style={{
                  background: 'var(--glass-background)',
                  borderColor: 'var(--glass-border)',
                }}
              >
                <Clock className="size-8 mb-4" style={{ color: 'var(--crimson)' }} />
                <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">Time Saved</p>
                <p className="font-heading text-4xl mb-2">65%</p>
                <p className="font-body text-sm text-muted-foreground font-light">Faster page construction</p>
              </motion.div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#key-decisions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, var(--crimson), var(--sunset-orange))',
                  color: 'white',
                }}
              >
                View key decisions
              </a>
              <a
                href="#artifacts"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm border transition-all duration-300 hover:border-transparent group relative overflow-hidden"
                style={{
                  borderColor: 'var(--glass-border)',
                  background: 'transparent',
                }}
              >
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, var(--crimson), var(--sunset-orange))' }} />
                <span className="relative group-hover:text-white transition-colors duration-300">See artifacts</span>
              </a>
            </div>
          </motion.section>

          {/* Section 2 — The Challenge */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              The Challenge
            </h2>
            <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground font-light max-w-3xl">
              <p>Shell Energy's websites are owned by regional product teams across              <span className="font-bold">14+ countries</span>. Although all sites used the same CMS (Contentful), each region interpreted components differently. Navigation patterns <span className="font-bold">shifted between markets, components varied slightly, and similar features were rebuilt multiple times</span>.</p>
              <p>The organization had standardized the platform, but              <span className="font-bold">not the design logic governing how it should be used</span>.</p>
            </div>
          </motion.section>

          {/* Section 3 — My Role & Collaboration */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              My Role & Collaboration
            </h2>
            <p className="font-body text-lg leading-relaxed text-muted-foreground font-light max-w-3xl mb-12">I helped design and structure the global component library while aligning design patterns directly with the <span className="font-bold">Contentful CMS platform</span>.</p>

            {/* Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative">
                <div
                  className="size-12 rounded-full flex items-center justify-center mb-4 font-heading text-xl"
                  style={{
                    background: 'linear-gradient(135deg, var(--crimson), var(--sunset-orange))',
                    color: 'white',
                  }}
                >
                  1
                </div>
                <h3 className="font-body font-medium text-base mb-2">Audit & Discovery</h3>
                <p className="font-body text-sm text-muted-foreground font-light">
                  Audit existing components across regional websites.
                </p>
              </div>

              <div className="relative">
                <div
                  className="size-12 rounded-full flex items-center justify-center mb-4 font-heading text-xl"
                  style={{
                    background: 'linear-gradient(135deg, var(--crimson), var(--sunset-orange))',
                    color: 'white',
                  }}
                >
                  2
                </div>
                <h3 className="font-body font-medium text-base mb-2">Component System</h3>
                <p className="font-body text-sm text-muted-foreground font-light">
                  Rebuild reusable components into a scalable Figma library.
                </p>
              </div>

              <div className="relative">
                <div
                  className="size-12 rounded-full flex items-center justify-center mb-4 font-heading text-xl"
                  style={{
                    background: 'linear-gradient(135deg, var(--crimson), var(--sunset-orange))',
                    color: 'white',
                  }}
                >
                  3
                </div>
                <h3 className="font-body font-medium text-base mb-2">UX/UI Enhancements</h3>
                <p className="font-body text-sm text-muted-foreground font-light">
                  Design new system-level improvements and scalable components.
                </p>
              </div>

              <div className="relative">
                <div
                  className="size-12 rounded-full flex items-center justify-center mb-4 font-heading text-xl"
                  style={{
                    background: 'linear-gradient(135deg, var(--crimson), var(--sunset-orange))',
                    color: 'white',
                  }}
                >
                  4
                </div>
                <h3 className="font-body font-medium text-base mb-2">Design–Dev Alignment</h3>
                <p className="font-body text-sm text-muted-foreground font-light">
                  Align design patterns with Storybook and CMS implementation.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 4 — Strategy & Key Decisions */}
          <motion.section
            id="key-decisions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Strategy & Key Decisions
            </h2>
            <div
              className="p-8 rounded-xl backdrop-blur-xl border space-y-6"
              style={{
                background: 'var(--glass-background)',
                borderColor: 'var(--glass-border)',
              }}
            >
              <div className="flex gap-4">
                <Lightbulb className="size-6 flex-shrink-0 mt-1" style={{ color: 'var(--amber)' }} />
                <div>
                  <p className="font-body font-medium mb-2">Decision</p>
                  <p className="font-body text-base leading-relaxed text-muted-foreground font-light">Align the design system directly with                  <span className="font-bold">Contentful CMS functionality</span>, elevating components to a <span className="font-bold">“Gold Standard” level</span> where design matched existing development and CMS capabilities <span className="font-bold">1:1</span>. This eliminated translation gaps between design and development, enabling faster implementation and more consistent global experiences.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Target className="size-6 flex-shrink-0 mt-1" style={{ color: 'var(--crimson)' }} />
                <div>
                  <p className="font-body font-medium mb-2">Why</p>
                  <p className="font-body text-base leading-relaxed text-muted-foreground font-light">
                    Ensure design components reflect real implementation constraints and eliminate guesswork during handoff.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Scale className="size-6 flex-shrink-0 mt-1" style={{ color: 'var(--sunset-orange)' }} />
                <div>
                  <p className="font-body font-medium mb-2">Tradeoffs</p>
                  <p className="font-body text-base leading-relaxed text-muted-foreground font-light">
                    Required deeper collaboration between design and engineering teams and additional documentation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 flex-shrink-0 mt-1" style={{ color: 'var(--amber)' }} />
                <div>
                  <p className="font-body font-medium mb-2">Outcome</p>
                  <p className="font-body text-base leading-relaxed text-muted-foreground font-light">
                    Designers could confidently design within CMS constraints while developers trusted that components matched production logic.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 5 — Governance */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Governance
            </h2>
            <div
              className="p-8 rounded-xl backdrop-blur-xl border"
              style={{
                background: 'var(--glass-background)',
                borderColor: 'var(--glass-border)',
              }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Column - Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-body font-medium text-lg mb-3">Decision</h3>
                    <p className="font-body text-base leading-relaxed text-muted-foreground font-light">
                      Establish lightweight governance for the evolving design system.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-body font-medium text-lg mb-3">Why Governance Matters</h3>
                    <p className="font-body text-base leading-relaxed text-muted-foreground font-light">
                      Design systems offer much-needed governance that keeps real workflows aligned and accurate across global teams. Without clear processes, components drift, teams duplicate work, and the system loses its value as a source of truth.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-body font-medium text-lg mb-3">Tradeoffs</h3>
                    <p className="font-body text-base leading-relaxed text-muted-foreground font-light">
                      Required recurring cross-team collaboration and feedback cycles.
                    </p>
                  </div>

                  {/* Card within a card - Outcome spotlight */}
                  <div
                    className="p-6 rounded-lg border"
                    style={{
                      background: 'rgba(var(--amber-rgb), 0.05)',
                      borderColor: 'var(--amber)',
                    }}
                  >
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="size-6 flex-shrink-0 mt-1" style={{ color: 'var(--amber)' }} />
                      <div>
                        <h3 className="font-body font-medium text-lg mb-2">Outcome</h3>
                        <p className="font-body text-base leading-relaxed text-muted-foreground font-light">
                          Introduced weekly design–engineering syncs and monthly sessions with global teams to refine components and guide adoption.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Governance Diagram */}
                <div className="flex items-center justify-center">
                  <div className="space-y-4 w-full max-w-xs">

                    {/* Top level */}
                    <div className="text-center relative z-10">
                      <motion.div
                        className="inline-block p-4 rounded-lg border cursor-pointer transition-all"
                        style={{ borderColor: 'var(--glass-border)', background: 'white', color: '#000' }}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        onMouseEnter={() => setHoveredCard('governance')}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <Scale className="size-10 mx-auto mb-2" style={{ color: 'var(--crimson)' }} />
                        <p className="font-body text-sm font-medium" style={{ color: '#000' }}>Governance</p>
                      </motion.div>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center relative z-10">
                      <div className="h-8 w-0.5 rounded-full" style={{ background: 'var(--glass-border)' }} />
                    </div>

                    {/* Middle level - 2 boxes */}
                    <div className="grid grid-cols-2 gap-3 relative z-10">
                      <motion.div
                        className="p-3 rounded-lg border text-center cursor-pointer"
                        style={{ borderColor: 'var(--glass-border)', background: 'white', color: '#000' }}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        onMouseEnter={() => setHoveredCard('weekly')}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <p className="font-body text-xs font-medium" style={{ color: '#000' }}>Weekly Syncs</p>
                      </motion.div>
                      <motion.div
                        className="p-3 rounded-lg border text-center cursor-pointer"
                        style={{ borderColor: 'var(--glass-border)', background: 'white', color: '#000' }}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        onMouseEnter={() => setHoveredCard('monthly')}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <p className="font-body text-xs font-medium" style={{ color: '#000' }}>Monthly Reviews</p>
                      </motion.div>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center relative z-10">
                      <div className="h-8 w-0.5 rounded-full" style={{ background: 'var(--glass-border)' }} />
                    </div>

                    {/* Bottom level */}
                    <div className="text-center relative z-10">
                      <motion.div
                        className="inline-block p-4 rounded-lg border cursor-pointer"
                        style={{ borderColor: 'var(--glass-border)', background: 'white', color: '#000' }}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        onMouseEnter={() => setHoveredCard('aligned')}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <CheckCircle className="size-10 mx-auto mb-2" style={{ color: 'var(--amber)' }} />
                        <p className="font-body text-sm font-medium" style={{ color: '#000' }}>Aligned Teams</p>
                      </motion.div>
                    </div>

                    {/* Hover explanation texts - stacked */}
                    <div className="relative mt-6 min-h-[6rem]">
                      {/* Governance explanation */}
                      {hoveredCard === 'governance' && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                          className="p-4 rounded-lg border z-20"
                          style={{ borderColor: 'var(--amber)', backgroundColor: '#fef3c7', color: '#000' }}
                        >
                          <p className="font-body text-xs leading-relaxed" style={{ color: '#000' }}>
                            <span className="font-medium" style={{ color: '#000' }}>Governance establishes the foundation.</span> Through consistent weekly syncs and monthly reviews, design and engineering teams maintain alignment, ensuring the system remains accurate and serves real workflows across all global teams.
                          </p>
                        </motion.div>
                      )}

                      {/* Weekly Syncs explanation */}
                      {hoveredCard === 'weekly' && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                          className="p-4 rounded-lg border z-20"
                          style={{ borderColor: 'var(--amber)', backgroundColor: '#fef3c7', color: '#000' }}
                        >
                          <p className="font-body text-xs leading-relaxed" style={{ color: '#000' }}>
                            <span className="font-medium" style={{ color: '#000' }}>Weekly syncs drive rapid iteration.</span> Design and engineering teams meet regularly to review component updates, address technical constraints, and ensure new patterns integrate smoothly into the CMS workflow.
                          </p>
                        </motion.div>
                      )}

                      {/* Monthly Reviews explanation */}
                      {hoveredCard === 'monthly' && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                          className="p-4 rounded-lg border z-20"
                          style={{ borderColor: 'var(--amber)', backgroundColor: '#fef3c7', color: '#000' }}
                        >
                          <p className="font-body text-xs leading-relaxed" style={{ color: '#000' }}>
                            <span className="font-medium" style={{ color: '#000' }}>Monthly reviews ensure global alignment.</span> Cross-regional teams gather to share learnings, refine components based on real-world usage, and coordinate strategic initiatives across all 14+ country sites.
                          </p>
                        </motion.div>
                      )}

                      {/* Aligned Teams explanation */}
                      {hoveredCard === 'aligned' && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                          className="p-4 rounded-lg border z-20"
                          style={{ borderColor: 'var(--amber)', backgroundColor: '#fef3c7', color: '#000' }}
                        >
                          <p className="font-body text-xs leading-relaxed" style={{ color: '#000' }}>
                            <span className="font-medium" style={{ color: '#000' }}>Aligned teams deliver consistent results.</span> When governance structures work effectively, global teams operate with shared understanding, reducing duplication and ensuring users receive a cohesive experience across all regions.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 6 — What We Built */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              What We Built
            </h2>

            {/* Process Flow */}
            <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
              <div className="px-4 py-2 rounded-full backdrop-blur-xl border font-body text-sm" style={{ borderColor: 'var(--glass-border)' }}>
                Design Components
              </div>
              <ArrowRight className="size-5" style={{ color: 'var(--crimson)' }} />
              <div className="px-4 py-2 rounded-full backdrop-blur-xl border font-body text-sm" style={{ borderColor: 'var(--glass-border)' }}>
                CMS Modules
              </div>
              <ArrowRight className="size-5" style={{ color: 'var(--crimson)' }} />
              <div className="px-4 py-2 rounded-full backdrop-blur-xl border font-body text-sm" style={{ borderColor: 'var(--glass-border)' }}>
                Page Templates
              </div>
              <ArrowRight className="size-5" style={{ color: 'var(--crimson)' }} />
              <div className="px-4 py-2 rounded-full backdrop-blur-xl border font-body text-sm" style={{ borderColor: 'var(--glass-border)' }}>
                Regional Websites
              </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl backdrop-blur-xl border text-center"
                style={{
                  background: 'var(--glass-background)',
                  borderColor: 'var(--glass-border)',
                }}
              >
                <Layers className="size-8 mx-auto mb-4" style={{ color: 'var(--crimson)' }} />
                <p className="font-heading text-4xl mb-2">100+</p>
                <p className="font-body text-sm text-muted-foreground font-light">Components</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl backdrop-blur-xl border text-center"
                style={{
                  background: 'var(--glass-background)',
                  borderColor: 'var(--glass-border)',
                }}
              >
                <Sparkles className="size-8 mx-auto mb-4" style={{ color: 'var(--sunset-orange)' }} />
                <p className="font-heading text-4xl mb-2">13</p>
                <p className="font-body text-sm text-muted-foreground font-light">UX/UI Enhancements</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl backdrop-blur-xl border text-center"
                style={{
                  background: 'var(--glass-background)',
                  borderColor: 'var(--glass-border)',
                }}
              >
                <Globe className="size-8 mx-auto mb-4" style={{ color: 'var(--amber)' }} />
                <p className="font-heading text-4xl mb-2">14+</p>
                <p className="font-body text-sm text-muted-foreground font-light">Country Websites</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Section 7 — Outcomes & Impact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Outcomes & Impact
            </h2>
            <p className="font-body text-lg leading-relaxed text-muted-foreground font-light max-w-3xl mb-8">
              The design system improved both consistency and delivery speed across Shell Energy's global websites.
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <CheckCircle className="size-6 flex-shrink-0 mt-1" style={{ color: 'var(--crimson)' }} />
                <p className="font-body text-base leading-relaxed">
                  65% faster page creation using reusable components
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle className="size-6 flex-shrink-0 mt-1" style={{ color: 'var(--sunset-orange)' }} />
                <p className="font-body text-base leading-relaxed">
                  Reduced duplication across regional teams
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle className="size-6 flex-shrink-0 mt-1" style={{ color: 'var(--amber)' }} />
                <p className="font-body text-base leading-relaxed">
                  Improved alignment between design and development
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 8 — Artifacts */}
          <motion.section
            id="artifacts"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Artifacts
            </h2>

            {/* Confidentiality Notice */}
            <div className="mb-8 p-6 rounded-xl backdrop-blur-xl border" style={{
              background: 'var(--glass-background)',
              borderColor: 'var(--glass-border)',
            }}>
              <div className="flex gap-3 items-start">
                <span className="text-2xl flex-shrink-0">✉️</span>
                <div>
                  <p className="font-body text-base leading-relaxed mb-2">
                    <strong>Artifacts unavailable due to confidentiality restrictions.</strong>
                  </p>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground font-light">
                    If you'd like to learn more about this project or request additional context, please contact me at{' '}
                    <a href="mailto:bridget.lee3@ibm.com" className="underline hover:text-foreground transition-colors" style={{ color: 'var(--crimson)' }}>
                      bridget.lee3@ibm.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Artifact Card 1 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl backdrop-blur-xl border"
                style={{
                  background: 'var(--glass-background)',
                  borderColor: 'var(--glass-border)',
                }}
              >
                <FileText className="size-8 mb-4" style={{ color: 'var(--crimson)' }} />
                <h3 className="font-body font-medium text-lg mb-2">Component Library</h3>
                <p className="font-body text-sm text-muted-foreground font-light">
                  Complete Figma component library with variants and usage documentation.
                </p>
              </motion.div>

              {/* Artifact Card 2 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl backdrop-blur-xl border"
                style={{
                  background: 'var(--glass-background)',
                  borderColor: 'var(--glass-border)',
                }}
              >
                <FileText className="size-8 mb-4" style={{ color: 'var(--sunset-orange)' }} />
                <h3 className="font-body font-medium text-lg mb-2">Design System Documentation</h3>
                <p className="font-body text-sm text-muted-foreground font-light">
                  Guidelines covering typography, layout rules, and component usage.
                </p>
              </motion.div>

              {/* Artifact Card 3 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl backdrop-blur-xl border"
                style={{
                  background: 'var(--glass-background)',
                  borderColor: 'var(--glass-border)',
                }}
              >
                <FileText className="size-8 mb-4" style={{ color: 'var(--amber)' }} />
                <h3 className="font-body font-medium text-lg mb-2">High-Fidelity Screens</h3>
                <p className="font-body text-sm text-muted-foreground font-light">
                  Example page compositions using system components.
                </p>
              </motion.div>

              {/* Artifact Card 4 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl backdrop-blur-xl border"
                style={{
                  background: 'var(--glass-background)',
                  borderColor: 'var(--glass-border)',
                }}
              >
                <FileText className="size-8 mb-4" style={{ color: 'var(--crimson)' }} />
                <h3 className="font-body font-medium text-lg mb-2">Component Recipes</h3>
                <p className="font-body text-sm text-muted-foreground font-light">
                  Reusable UI patterns and layout combinations.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Portfolio Navigation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pt-16 border-t border-border"
          >
            <div className="flex items-center justify-between">
              <Link
                to="/work/att-smb"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <ArrowLeft className="size-4" />
                Previous Case Study
              </Link>
              <Link
                to="/work/soundtouch"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                Next Case Study
                <ArrowLeft className="size-4 rotate-180" />
              </Link>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
