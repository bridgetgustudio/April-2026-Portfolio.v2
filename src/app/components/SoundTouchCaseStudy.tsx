import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Music, Hand, Mic, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SoundTouchCaseStudy() {
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
                SoundTouch
              </h1>
              <p className="font-body text-xl md:text-2xl leading-relaxed text-muted-foreground font-light max-w-3xl mb-12">
                Designing a spatial, gesture-based interface for making music anywhere
              </p>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-border/50">
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    Role
                  </p>
                  <p className="font-body text-base font-light">UX Designer</p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    Type
                  </p>
                  <p className="font-body text-base font-light">Experimental Interaction Design</p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    Tools
                  </p>
                  <p className="font-body text-base font-light">MediaPipe Hands, Tone.js, HTML/CSS/JS</p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    Focus
                  </p>
                  <p className="font-body text-base font-light">Spatial UI, Gesture Interaction, Creative Tools</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Visual with Glow Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6 mb-24 relative"
      >
        <div className="max-w-5xl mx-auto relative">
          {/* Animated glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl blur-3xl opacity-30"
            style={{
              background: 'linear-gradient(135deg, var(--crimson), var(--sunset-orange), var(--amber))',
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
            <div className="text-center p-12">
              <Music className="w-16 h-16 mx-auto mb-4 opacity-40" />
              <p className="font-body text-base text-muted-foreground">
                HERO VISUAL PLACEHOLDER — replace with interaction demo
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-6 mb-32">
        <div className="max-w-5xl mx-auto space-y-24">

          {/* Introduction Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Introduction
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground font-light">
                <p>
                  In my spare time, I'm a singer, songwriter, and music producer. Many of my best ideas come when I'm away from my keyboard or studio — traveling, walking, or in moments when opening a full production tool like GarageBand feels like too much cognitive overhead.
                </p>
                <p>
                  At the same time, I had recently become fascinated with the rise of agentic design tools and "vibe coding" workflows — tools that allow designers to prototype complex interactive systems simply by describing them.
                </p>
                <p>
                  I wanted to explore two things at once:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex gap-4">
                    <span className="text-crimson">•</span>
                    <span>Could I build something meaningful using this new design workflow?</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-crimson">•</span>
                    <span>Could I create a simple, portable tool for capturing musical ideas anywhere?</span>
                  </li>
                </ul>
                <p>
                  The result was SoundTouch — a browser-based experiment that turns hand gestures and voice into musical controls using computer vision and spatial interaction.
                </p>
                <p>
                  Instead of tapping buttons or navigating timelines, the interface treats the space around your hands as the instrument itself.
                </p>
              </div>

              {/* Visual Placeholder */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-border flex items-center justify-center sticky top-24">
                <div className="text-center p-8">
                  <Hand className="w-12 h-12 mx-auto mb-4 opacity-40" />
                  <p className="font-body text-sm text-muted-foreground">
                    VISUAL IDEA — creator using hand gestures<br />in front of camera
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Inspiration Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Inspiration
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground font-light">
                <h3 className="font-heading text-xl text-foreground">
                  Music that exists in space, not just on screens
                </h3>
                <p>
                  This idea was not created in isolation.
                </p>
                <p>
                  The artist Imogen Heap pioneered spatial music performance with the Mi.Mu Gloves, a wearable interface she began developing around 2011–2012.
                </p>
                <p>
                  The gloves allowed performers to manipulate sound through gestures in mid-air — treating music as something performed through physical motion, rather than triggered by keys or buttons.
                </p>
                <p>
                  Her work opened a fascinating design question:
                </p>
                <p className="text-xl italic text-foreground pl-6 border-l-4" style={{ borderColor: 'var(--crimson)' }}>
                  What if we could interact with music through the space around us rather than through a device in front of us?
                </p>
                <p>
                  SoundTouch explores a lightweight version of that idea — using computer vision instead of specialized hardware.
                </p>
                <p>
                  If a camera can detect our hands, then the space around us becomes a potential interface.
                </p>
              </div>

              {/* Diagram Placeholder */}
              <div className="rounded-xl bg-muted border border-border p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <p className="font-body text-sm text-muted-foreground mb-6">
                    Imogen Heap Mi.Mu Gloves inspiration visual
                  </p>
                  <div className="flex items-center justify-center gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-2">
                        <Music className="w-8 h-8" />
                      </div>
                      <p className="font-body text-sm">Artist</p>
                    </div>
                    <div className="text-2xl text-crimson">→</div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-2">
                        <Hand className="w-8 h-8" />
                      </div>
                      <p className="font-body text-sm">Gesture</p>
                    </div>
                    <div className="text-2xl text-crimson">→</div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-2">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <p className="font-body text-sm">Sound</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Problem Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Problem
            </h2>
            <div className="space-y-8">
              <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground font-light max-w-3xl">
                <h3 className="font-heading text-xl text-foreground">
                  Most music tools assume a studio mindset
                </h3>
                <p>
                  Traditional music creation tools are powerful but assume the user:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex gap-4">
                    <span className="text-crimson">•</span>
                    <span>is sitting at a workstation</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-crimson">•</span>
                    <span>has instruments available</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-crimson">•</span>
                    <span>is ready to enter a focused production environment</span>
                  </li>
                </ul>
                <p>
                  But musical ideas rarely arrive under those conditions.
                </p>
                <p>
                  For many musicians — including myself — creativity happens:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex gap-4">
                    <span className="text-amber">•</span>
                    <span>while traveling</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-amber">•</span>
                    <span>walking around</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-amber">•</span>
                    <span>in small moments between tasks</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-amber">•</span>
                    <span>when a melody appears unexpectedly</span>
                  </li>
                </ul>
                <p>
                  Opening a full digital audio workstation in those moments can feel like too much friction.
                </p>
                <p className="text-xl italic text-foreground">
                  The design challenge became: How might we reduce music creation down to its most intuitive gestures?
                </p>
              </div>

              {/* Icon Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-accent/20 border border-border text-center">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎹</span>
                  </div>
                  <h4 className="font-body font-medium mb-2">Studio tools require setup</h4>
                  <p className="font-body text-sm text-muted-foreground">Not portable for spontaneous ideas</p>
                </div>
                <div className="p-6 rounded-xl bg-accent/20 border border-border text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h4 className="font-body font-medium mb-2">Ideas appear unexpectedly</h4>
                  <p className="font-body text-sm text-muted-foreground">Creativity doesn't wait for the studio</p>
                </div>
                <div className="p-6 rounded-xl bg-accent/20 border border-border text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="font-body font-medium mb-2">DAWs create friction</h4>
                  <p className="font-body text-sm text-muted-foreground">Too much overhead for quick capture</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Personal Context Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Personal Context
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground font-light">
                <h3 className="font-heading text-xl text-foreground">
                  How I actually write music
                </h3>
                <p>
                  I started songwriting during COVID, when I began using music as a way to process emotions during that time.
                </p>
                <p>
                  Instead of producing full tracks, I developed a much simpler creative workflow:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex gap-4">
                    <span className="text-crimson">•</span>
                    <span>jotting down chord progressions</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-crimson">•</span>
                    <span>writing lyrics in a notebook</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-crimson">•</span>
                    <span>capturing melodies wherever inspiration struck</span>
                  </li>
                </ul>
                <p>
                  I carried that notebook everywhere.
                </p>
                <p>
                  My goal was usually simple: <strong>capture the feeling before it disappeared.</strong>
                </p>
                <p>
                  That personal workflow strongly influenced SoundTouch.
                </p>
                <p>
                  Instead of designing a full production environment, I focused on creating something that supports quick emotional capture and exploration.
                </p>
              </div>

              {/* Visual Placeholder */}
              <div className="aspect-square rounded-xl overflow-hidden bg-muted border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl mb-4 block">📓</span>
                  <p className="font-body text-sm text-muted-foreground">
                    Notebook with chords and lyrics
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-2 italic">
                    Songwriting workflow during COVID
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Discovery Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Discovery
            </h2>
            <div className="space-y-8">
              <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground font-light max-w-3xl">
                <h3 className="font-heading text-xl text-foreground">
                  People conceptualize music differently
                </h3>
                <p>
                  Early research showed that musicians and creators think about music in very different ways.
                </p>
                <p>
                  Through interviews, observation, and literature on music cognition, three broad archetypes emerged:
                </p>
              </div>

              {/* Persona Cards */}
              <div className="space-y-4">
                <div className="p-8 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">🎵</span>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl mb-3">Harmonic Thinkers</h4>
                      <p className="font-body text-base leading-relaxed text-muted-foreground font-light">
                        Often musicians who approach music through chords and emotional progressions. They quickly translate chord patterns into mood and story.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">🎼</span>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl mb-3">Structural Learners</h4>
                      <p className="font-body text-base leading-relaxed text-muted-foreground font-light mb-3">
                        Often classically trained musicians who understand composition through:
                      </p>
                      <ul className="space-y-2 font-body text-base text-muted-foreground font-light">
                        <li className="flex gap-3">
                          <span className="text-blue-500">•</span>
                          <span>theory</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-blue-500">•</span>
                          <span>structure</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-blue-500">•</span>
                          <span>orchestration</span>
                        </li>
                      </ul>
                      <p className="font-body text-base leading-relaxed text-muted-foreground font-light mt-3">
                        Their mental model is analytical and rule-based.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">🎧</span>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl mb-3">Flow-Based Explorers</h4>
                      <p className="font-body text-base leading-relaxed text-muted-foreground font-light mb-3">
                        Common among DJs and modern producers. Their approach is intuitive and experimental, often based on:
                      </p>
                      <ul className="space-y-2 font-body text-base text-muted-foreground font-light">
                        <li className="flex gap-3">
                          <span className="text-amber-500">•</span>
                          <span>sampling</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-amber-500">•</span>
                          <span>rhythm</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-amber-500">•</span>
                          <span>improvisation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Designing for my workflow */}
              <div
                className="mt-12 p-8 border-l-4 bg-accent/20"
                style={{ borderColor: 'var(--crimson)' }}
              >
                <h3 className="font-heading text-xl mb-4">Designing for my own workflow</h3>
                <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground font-light">
                  <p>
                    For the first prototype, I intentionally designed around my own creative process.
                  </p>
                  <p>
                    My songwriting workflow prioritizes:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-3">
                      <span className="text-crimson">•</span>
                      <span>speed</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-crimson">•</span>
                      <span>emotion</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-crimson">•</span>
                      <span>experimentation</span>
                    </li>
                  </ul>
                  <p className="pt-2">
                    So instead of recreating traditional music tools, I explored a different question:
                  </p>
                  <p className="text-lg italic text-foreground">
                    What if the interface disappeared entirely?
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Concept Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Concept
            </h2>
            <div className="space-y-8">
              <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground font-light max-w-3xl">
                <h3 className="font-heading text-xl text-foreground">
                  Turning gestures into musical controls
                </h3>
                <p>
                  SoundTouch uses computer vision to detect hand gestures through the device's camera.
                </p>
                <p>
                  The system maps natural hand movements to musical actions.
                </p>
                <p className="text-xl italic text-foreground pl-6 border-l-4" style={{ borderColor: 'var(--crimson)' }}>
                  The design principle was simple: Each gesture should feel like a natural extension of musical expression.
                </p>
              </div>

              {/* Gesture Interaction Diagram */}
              <div className="rounded-xl bg-muted border border-border p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-pink-500/20 border-2 border-pink-500/40 flex items-center justify-center mx-auto mb-4">
                      <Hand className="w-12 h-12 text-pink-500" />
                    </div>
                    <p className="font-heading text-xl mb-2">Right Hand</p>
                    <p className="font-body text-base text-muted-foreground">chords</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-amber-500/20 border-2 border-amber-500/40 flex items-center justify-center mx-auto mb-4">
                      <Hand className="w-12 h-12 text-amber-500" />
                    </div>
                    <p className="font-heading text-xl mb-2">Left Hand</p>
                    <p className="font-body text-base text-muted-foreground">audio effects</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Right Hand Interaction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Right Hand: Generating Chords
            </h2>
            <div className="space-y-8">
              <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground font-light max-w-3xl">
                <p>
                  The right hand controls harmonic structure.
                </p>
                <p>
                  Finger counting maps to chords:
                </p>
              </div>

              {/* Chord Mapping Diagram */}
              <div className="rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 p-12">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {[
                    { fingers: '1', chord: 'C major' },
                    { fingers: '2', chord: 'D major' },
                    { fingers: '3', chord: 'E major' },
                    { fingers: '4', chord: 'F major' },
                    { fingers: '5', chord: 'G major' },
                  ].map((item) => (
                    <div key={item.fingers} className="text-center">
                      <div className="w-20 h-20 rounded-full bg-pink-500/20 border-2 border-pink-500/40 flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-heading">{item.fingers}</span>
                      </div>
                      <p className="font-body text-sm text-muted-foreground">{item.chord}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Details */}
              <div
                className="p-6 border-l-4 bg-accent/20"
                style={{ borderColor: 'var(--amber)' }}
              >
                <h3 className="font-body font-medium text-base mb-3">To prevent accidental triggers:</h3>
                <ul className="space-y-2 font-body text-base text-muted-foreground font-light">
                  <li className="flex gap-3">
                    <span className="text-amber">•</span>
                    <span>gestures must remain stable for 300 ms</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber">•</span>
                    <span>small movement jitter is ignored</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber">•</span>
                    <span>a 500 ms cooldown prevents rapid retriggers</span>
                  </li>
                </ul>
                <p className="font-body text-base text-muted-foreground font-light mt-4">
                  This makes the system feel intentional rather than twitchy.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Left Hand Interaction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Left Hand: Shaping Sound
            </h2>
            <div className="space-y-8">
              <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground font-light max-w-3xl">
                <p>
                  The left hand acts as a spatial effects controller.
                </p>
                <p>
                  Hand movement maps directly to audio parameters:
                </p>
              </div>

              {/* Spatial Interaction Diagram */}
              <div className="rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 p-12">
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div className="text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-4xl">⬆️</div>
                      <p className="font-body text-base">Vertical movement</p>
                      <div className="text-2xl text-amber">→</div>
                      <p className="font-body text-base font-medium">reverb intensity</p>
                      <div className="text-4xl">⬇️</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-4xl">⬅️</div>
                      <p className="font-body text-base">Horizontal movement</p>
                      <div className="text-2xl text-amber">→</div>
                      <p className="font-body text-base font-medium">delay timing</p>
                      <div className="text-4xl">➡️</div>
                    </div>
                  </div>
                </div>

                {/* Gesture Modifiers */}
                <div className="pt-8 border-t border-amber-500/20">
                  <h3 className="font-heading text-lg mb-6 text-center">Gesture Modifiers</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-lg bg-background/50 text-center">
                      <span className="text-3xl mb-2 block">✌️</span>
                      <p className="font-body text-sm">peace sign</p>
                      <p className="font-body text-xs text-muted-foreground">minor chord</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 text-center">
                      <span className="text-3xl mb-2 block">✊</span>
                      <p className="font-body text-sm">fist</p>
                      <p className="font-body text-xs text-muted-foreground">mute output</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 text-center">
                      <span className="text-3xl mb-2 block">🖐️</span>
                      <p className="font-body text-sm">open palm</p>
                      <p className="font-body text-xs text-muted-foreground">sustain</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 text-center">
                      <span className="text-3xl mb-2 block">🤏</span>
                      <p className="font-body text-sm">pinch</p>
                      <p className="font-body text-xs text-muted-foreground">vocal texture</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-body text-base leading-relaxed text-muted-foreground font-light italic">
                This creates a layered interaction where one hand generates music while the other sculpts it.
              </p>
            </div>
          </motion.section>

          {/* Voice Interaction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Voice: Adding Spatial Vocal Effects
            </h2>
            <div className="space-y-8">
              <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground font-light max-w-3xl">
                <p>
                  Once chords and effects were working, I explored adding voice interaction.
                </p>
                <p>
                  The inspiration came from artists whose music blends human voice with synthetic textures, including FKA twigs, Billie Eilish, and Imogen Heap.
                </p>
                <p>
                  The challenge was designing a vocal effect that felt expressive, ethereal, and musical — without sounding robotic.
                </p>
              </div>

              {/* Tilt Diagram */}
              <div className="rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 p-12">
                <h3 className="font-heading text-lg mb-8 text-center">Left Hand Tilt Controls Vocal Effect</h3>
                <div className="max-w-2xl mx-auto">
                  <div className="relative">
                    {/* Arc visualization */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-center flex-1">
                        <div className="text-4xl mb-2">🎤</div>
                        <p className="font-body text-base mb-1">0°</p>
                        <p className="font-body text-sm text-muted-foreground">dry voice</p>
                      </div>
                      <div className="text-center flex-1">
                        <div className="text-4xl mb-2">✨</div>
                        <p className="font-body text-base mb-1">25°</p>
                        <p className="font-body text-sm text-muted-foreground">effect begins</p>
                      </div>
                      <div className="text-center flex-1">
                        <div className="text-4xl mb-2">🌟</div>
                        <p className="font-body text-base mb-1">90°</p>
                        <p className="font-body text-sm text-muted-foreground">full effect</p>
                      </div>
                    </div>

                    {/* Effect list */}
                    <div className="mt-8 p-6 rounded-lg bg-background/50">
                      <p className="font-body text-sm font-medium mb-4">The system gradually blends:</p>
                      <ul className="space-y-2 font-body text-sm text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-purple-500">•</span>
                          <span>subtle harmonized pitch layers</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-purple-500">•</span>
                          <span>chorus widening</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-purple-500">•</span>
                          <span>shimmer reverb</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-purple-500">•</span>
                          <span>filtered delay</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-purple-500">•</span>
                          <span>slight formant shifting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-body text-base leading-relaxed text-muted-foreground font-light italic">
                The goal was to create the feeling of a synthetic aura around the voice, rather than replacing the voice entirely.
              </p>
            </div>
          </motion.section>

          {/* Visual Feedback System */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Visual Feedback System
            </h2>
            <div className="space-y-8">
              <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground font-light max-w-3xl">
                <h3 className="font-heading text-xl text-foreground">
                  Making invisible sound visible
                </h3>
                <p>
                  Gesture interfaces require strong visual feedback.
                </p>
                <p>
                  Without it, users cannot understand what the system is detecting.
                </p>
                <p>
                  SoundTouch overlays a visual system on top of the camera feed.
                </p>
              </div>

              {/* Visual Placeholders */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-border flex items-center justify-center p-6">
                  <div className="text-center">
                    <Hand className="w-12 h-12 mx-auto mb-4 opacity-40" />
                    <p className="font-body text-sm text-muted-foreground font-medium mb-2">Hand Skeleton Tracking</p>
                    <p className="font-body text-xs text-muted-foreground">Connected nodes showing detected hand joints</p>
                  </div>
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/10 via-amber-500/10 to-pink-500/10 border border-pink-500/20 flex items-center justify-center p-6">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-60" style={{ color: 'var(--crimson)' }} />
                    <p className="font-body text-sm text-muted-foreground font-medium mb-2">Energy Orbs</p>
                    <p className="font-body text-xs text-muted-foreground">Pink (right) & yellow (left) orbs when gestures trigger</p>
                  </div>
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 flex items-center justify-center p-6">
                  <div className="text-center">
                    <Mic className="w-12 h-12 mx-auto mb-4 opacity-60" style={{ color: 'var(--sunset-orange)' }} />
                    <p className="font-body text-sm text-muted-foreground font-medium mb-2">Vocal Aura</p>
                    <p className="font-body text-xs text-muted-foreground">Pulsating waves & particle fields responding to voice</p>
                  </div>
                </div>
              </div>

              <div
                className="p-6 border-l-4 bg-accent/20"
                style={{ borderColor: 'var(--crimson)' }}
              >
                <h3 className="font-body font-medium text-base mb-3">When both hands are active</h3>
                <p className="font-body text-base text-muted-foreground font-light">
                  A glowing strand connects the pink and yellow orbs, creating a visual metaphor that music is being generated between the hands.
                </p>
              </div>

              <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground font-light">
                <p>
                  The vocal aura responds to the voice itself:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex gap-3">
                    <span className="text-crimson">•</span>
                    <span>louder singing expands the waves</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-crimson">•</span>
                    <span>higher notes lift the particles</span>
                  </li>
                </ul>
                <p className="italic">
                  The result is a visual representation of sound energy in space.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Recording Feature */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Recording the Moment
            </h2>
            <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground font-light max-w-3xl">
              <p>
                Because the goal of SoundTouch is capturing musical ideas quickly, the prototype also includes the ability to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex gap-4">
                  <span className="text-crimson">•</span>
                  <span>record audio from a session, or</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-crimson">•</span>
                  <span>screen record the entire interaction</span>
                </li>
              </ul>
              <p>
                This allows users to save spontaneous musical moments without needing a full production environment.
              </p>
            </div>

            {/* UI Concept Panel */}
            <div className="rounded-xl bg-muted border border-border p-8 max-w-md">
              <div className="space-y-4">
                <button className="w-full py-3 px-6 rounded-lg bg-red-500/20 border border-red-500/40 text-red-500 font-body font-medium flex items-center justify-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  Record Audio
                </button>
                <button className="w-full py-3 px-6 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-500 font-body font-medium flex items-center justify-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  Screen Record Session
                </button>
              </div>
            </div>
          </motion.section>

          {/* Technical Prototype */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Technical Prototype
            </h2>
            <div className="space-y-8">
              <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground font-light max-w-3xl">
                <p>
                  The prototype was built as a browser-based experiment using:
                </p>
              </div>

              {/* Tech Stack Diagram */}
              <div className="max-w-md mx-auto">
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 text-center">
                    <p className="font-heading text-lg">MediaPipe Hands</p>
                    <p className="font-body text-sm text-muted-foreground">gesture detection</p>
                  </div>
                  <div className="text-center text-2xl text-blue-500">↓</div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 text-center">
                    <p className="font-heading text-lg">Tone.js</p>
                    <p className="font-body text-sm text-muted-foreground">audio synthesis</p>
                  </div>
                  <div className="text-center text-2xl text-purple-500">↓</div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 text-center">
                    <p className="font-heading text-lg">Browser Interface</p>
                    <p className="font-body text-sm text-muted-foreground">HTML / CSS / JavaScript</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-lg bg-accent/20 border border-border">
                <h3 className="font-body font-medium text-base mb-4">Design constraints included:</h3>
                <ul className="space-y-2 font-body text-base text-muted-foreground font-light">
                  <li className="flex gap-3">
                    <span className="text-crimson">•</span>
                    <span>real-time gesture stabilization</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-crimson">•</span>
                    <span>smooth audio parameter ramping</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-crimson">•</span>
                    <span>minimal UI complexity</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-crimson">•</span>
                    <span>browser-based accessibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Design Challenges */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Key Design Challenges
            </h2>
            <div className="space-y-6">
              <div className="p-8 rounded-xl border-l-4 bg-gradient-to-br from-red-500/5 to-red-500/10" style={{ borderColor: 'var(--crimson)' }}>
                <h3 className="font-heading text-xl mb-4">Preventing accidental triggers</h3>
                <p className="font-body text-base leading-relaxed text-muted-foreground font-light mb-3">
                  Hand tracking can be noisy.
                </p>
                <p className="font-body text-base leading-relaxed text-muted-foreground font-light mb-3">
                  To maintain usability:
                </p>
                <ul className="space-y-2 font-body text-base text-muted-foreground font-light ml-6">
                  <li className="flex gap-3">
                    <span className="text-crimson">•</span>
                    <span>gestures must remain stable for 300 ms</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-crimson">•</span>
                    <span>small motion jitter is ignored</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-crimson">•</span>
                    <span>cooldowns prevent repeated triggers</span>
                  </li>
                </ul>
                <p className="font-body text-base leading-relaxed font-medium mt-4">
                  This dramatically improved reliability.
                </p>
              </div>

              <div className="p-8 rounded-xl border-l-4 bg-gradient-to-br from-amber-500/5 to-amber-500/10" style={{ borderColor: 'var(--sunset-orange)' }}>
                <h3 className="font-heading text-xl mb-4">Balancing expressive control with simplicity</h3>
                <p className="font-body text-base leading-relaxed text-muted-foreground font-light mb-3">
                  Gesture interfaces can easily become overwhelming.
                </p>
                <p className="font-body text-base leading-relaxed text-muted-foreground font-light mb-3">
                  The system intentionally limits the interaction set to:
                </p>
                <ul className="space-y-2 font-body text-base text-muted-foreground font-light ml-6">
                  <li className="flex gap-3">
                    <span className="text-sunset-orange">•</span>
                    <span>five chord gestures</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sunset-orange">•</span>
                    <span>a small set of effect modifiers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sunset-orange">•</span>
                    <span>one continuous vocal gesture</span>
                  </li>
                </ul>
                <p className="font-body text-base leading-relaxed font-medium mt-4">
                  This keeps the experience playful rather than complicated.
                </p>
              </div>

              <div className="p-8 rounded-xl border-l-4 bg-gradient-to-br from-blue-500/5 to-blue-500/10" style={{ borderColor: 'var(--amber)' }}>
                <h3 className="font-heading text-xl mb-4">Designing for exploration</h3>
                <p className="font-body text-base leading-relaxed text-muted-foreground font-light mb-3">
                  Unlike traditional music tools, this interface encourages experimentation.
                </p>
                <p className="font-body text-base leading-relaxed text-muted-foreground font-light mb-3">
                  The goal was not precise production, but creative discovery.
                </p>
                <p className="font-body text-base leading-relaxed font-medium">
                  Users often stumble into unexpected musical ideas simply by moving their hands through space.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Reflection */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto mb-12"></div>

              <h2 className="font-heading text-3xl md:text-4xl mb-12">
                Reflection
              </h2>

              <div className="space-y-8 font-body text-lg leading-relaxed text-muted-foreground font-light">
                <p>
                  I began this project primarily as a way to explore the emerging capabilities of agentic design tools and vibe coding workflows.
                </p>
                <p>
                  What surprised me most was how quickly I could iterate on ideas that were personally meaningful.
                </p>
                <p>
                  Instead of spending weeks building infrastructure, I could rapidly prototype interaction models that would traditionally require a full engineering team.
                </p>
                <p className="text-xl text-foreground italic">
                  That speed created something addictive: I could test an idea, adjust the interaction, refine the experience, and immediately see the result.
                </p>
                <p>
                  For a designer exploring creative tools, that feedback loop was incredibly powerful.
                </p>
                <p>
                  Projects like SoundTouch make me excited about a future where designers can prototype entirely new interaction paradigms — not just screens and menus, but systems that blend spatial interaction, creative expression, and emerging AI-assisted tools.
                </p>
                <p className="text-xl text-foreground">
                  Sometimes the most interesting ideas happen when curiosity meets new capabilities.
                </p>
                <p>
                  SoundTouch began as an experiment in vibe coding.
                </p>
                <p className="text-xl text-foreground">
                  It ended up becoming a glimpse into what designing creative tools might look like in the next generation of interfaces.
                </p>
              </div>

              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto mt-12"></div>
            </div>
          </motion.section>

          {/* Final Visual Placeholder */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pb-16"
          >
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-crimson/10 via-sunset-orange/10 to-amber/10 border border-border flex items-center justify-center relative">
              <motion.div
                className="absolute inset-0 blur-2xl opacity-20"
                style={{
                  background: 'linear-gradient(135deg, var(--crimson), var(--sunset-orange), var(--amber))',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="text-center p-12 relative z-10">
                <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-40" />
                <p className="font-body text-base text-muted-foreground">
                  SoundTouch interaction moment
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      </div>

      {/* Navigation */}
      <div className="px-6 pb-32">
        <div className="max-w-5xl mx-auto flex items-center justify-between pt-12 border-t border-border">
          <Link
            to="/work/shell-energy"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            Previous Case Study
          </Link>
          <Link
            to="/work/amazon-middle-mile"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Next Case Study
            <ArrowLeft className="size-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
