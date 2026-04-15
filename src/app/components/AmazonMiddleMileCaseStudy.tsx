import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Truck, TrendingDown, Calendar, Database, MapPin, BarChart3, Layers } from 'lucide-react';

export function AmazonMiddleMileCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
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
                Reconfiguring a Middle-Mile Supply Chain
              </h1>
              <p className="font-body text-xl md:text-2xl leading-relaxed text-muted-foreground font-light max-w-3xl mb-12">
                Using service blueprinting and data analysis to redesign how truck capacity is scheduled across a logistics network.
              </p>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-border/50">
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    Role
                  </p>
                  <p className="font-body text-base font-light">Business Analyst Intern</p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    Focus
                  </p>
                  <p className="font-body text-base font-light">Service Design + Systems Analysis</p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    Methods
                  </p>
                  <p className="font-body text-base font-light">SQL Analysis, Forecast Modeling, Operational Mapping</p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    Impact
                  </p>
                  <p className="font-body text-base font-light">Estimated $8.4M annual transportation savings</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Visual - Supply Chain System Diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6 mb-32"
      >
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 border border-border flex items-center justify-center p-12">
            <div className="w-full flex items-center justify-between gap-8">
              <div className="flex-1 flex flex-col items-center">
                <BarChart3 className="w-12 h-12 mb-3 opacity-60" />
                <p className="font-body text-sm text-center text-muted-foreground">Forecast Signals</p>
              </div>
              <div className="w-12 h-0.5 bg-border" />
              <div className="flex-1 flex flex-col items-center">
                <Database className="w-12 h-12 mb-3 opacity-60" />
                <p className="font-body text-sm text-center text-muted-foreground">Planning System</p>
              </div>
              <div className="w-12 h-0.5 bg-border" />
              <div className="flex-1 flex flex-col items-center">
                <Truck className="w-12 h-12 mb-3 opacity-60" />
                <p className="font-body text-sm text-center text-muted-foreground">Truck Capacity</p>
              </div>
              <div className="w-12 h-0.5 bg-border" />
              <div className="flex-1 flex flex-col items-center">
                <TrendingDown className="w-12 h-12 mb-3 opacity-60" />
                <p className="font-body text-sm text-center text-muted-foreground">Demand Changes</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="px-6 pb-32">
        <div className="max-w-5xl mx-auto">
          
          {/* Overview Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="font-body text-lg leading-relaxed text-foreground/90 font-light">
                  As a Business Analyst Intern, I applied UX service design and systems thinking to analyze how demand signals moved through a supply chain network—helping identify an opportunity to redesign scheduling decisions that could reduce transportation costs by an estimated $8.4M annually.
                </p>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden bg-muted border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 mx-auto mb-3 opacity-40" />
                  <p className="font-body text-sm text-muted-foreground">
                    Logistics network map visualization
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* The Challenge Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">The Challenge</h2>
            
            {/* Timeline Visualization */}
            <div className="mb-12 p-8 rounded-2xl bg-muted/30 border border-border">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mx-auto mb-3 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-body text-sm mb-1">Monday</p>
                  <p className="font-body text-xs text-muted-foreground">Forecast created</p>
                </div>
                <div className="flex-1 h-0.5 bg-border" />
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 mx-auto mb-3 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-body text-sm mb-1">Tuesday</p>
                  <p className="font-body text-xs text-muted-foreground">Capacity reserved</p>
                </div>
                <div className="flex-1 h-0.5 bg-border" />
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 mx-auto mb-3 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-body text-sm mb-1">Thursday</p>
                  <p className="font-body text-xs text-muted-foreground">Demand changes</p>
                </div>
                <div className="flex-1 h-0.5 bg-border" />
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 mx-auto mb-3 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-body text-sm mb-1">Friday</p>
                  <p className="font-body text-xs text-muted-foreground">System reacts poorly</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Large supply chains rely on forecasting demand and reserving truck capacity days in advance.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                But demand rarely stays static.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Imagine reserving hundreds of trucks on Monday based on a forecast—only to realize by Thursday that demand has changed. Some trucks are now unnecessary, while others are missing.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                That exact problem was occurring within the transportation planning system I analyzed.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Truck capacity was being scheduled too early, before the most accurate demand signals became available.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-8">
                The result was predictable inefficiencies:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-crimson">•</span>
                  <span>Trucks scheduled that weren't needed</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-sunset-orange">•</span>
                  <span>Too few trucks when demand spiked</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-amber">•</span>
                  <span>Expensive last-minute shipments to fill the gaps</span>
                </li>
              </ul>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light">
                Even small inefficiencies at this scale can create millions of dollars in additional logistics costs.
              </p>
            </div>
          </motion.section>

          {/* The Opportunity Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">The Opportunity</h2>
            
            {/* Concept Diagram */}
            <div className="mb-12 grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/20">
                <p className="font-body text-sm uppercase tracking-widest mb-4 text-red-600 dark:text-red-400">
                  Current State
                </p>
                <p className="font-body text-base mb-2">Early scheduling</p>
                <p className="font-body text-sm text-muted-foreground">↓</p>
                <p className="font-body text-base text-muted-foreground">Inaccurate capacity</p>
              </div>
              <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20">
                <p className="font-body text-sm uppercase tracking-widest mb-4 text-green-600 dark:text-green-400">
                  Proposed State
                </p>
                <p className="font-body text-base mb-2">Delayed scheduling</p>
                <p className="font-body text-sm text-muted-foreground">↓</p>
                <p className="font-body text-base text-muted-foreground">Better demand alignment</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                The initiative I worked on—Late Available Supply Optimization (LASO)—explored a simple but powerful idea:
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                What if we delayed some scheduling decisions until we had better information?
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Instead of locking in truck capacity several days in advance, we investigated whether waiting for more accurate demand signals closer to execution time could produce a more efficient system.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                The hypothesis:
              </p>
              <p className="font-body text-xl leading-relaxed mb-6 px-6 py-4 border-l-4 border-crimson bg-muted/30">
                Better timing of decisions → better alignment between supply and demand.
              </p>
            </div>
          </motion.section>

          {/* My Role Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">My Role</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <Database className="w-8 h-8 mb-3 opacity-60" />
                <h3 className="font-body text-base mb-2">SQL Data Analysis</h3>
              </div>
              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <BarChart3 className="w-8 h-8 mb-3 opacity-60" />
                <h3 className="font-body text-base mb-2">Demand Signal Investigation</h3>
              </div>
              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <MapPin className="w-8 h-8 mb-3 opacity-60" />
                <h3 className="font-body text-base mb-2">Operational Flow Mapping</h3>
              </div>
              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <Layers className="w-8 h-8 mb-3 opacity-60" />
                <h3 className="font-body text-base mb-2">System-Level Insight Translation</h3>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Business Analyst Intern | Service Design & Systems Analysis
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Although the project was framed as a data analysis initiative, my design background shaped how I approached the work.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Rather than looking only at the data, I focused on understanding how information moved through the system.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                My work included:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-crimson">•</span>
                  <span>Writing SQL queries to analyze operational datasets</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-sunset-orange">•</span>
                  <span>Investigating how demand forecasts flowed through planning systems</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-amber">•</span>
                  <span>Mapping relationships between forecasting, planning, and routing teams</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-sage">•</span>
                  <span>Modeling how scheduling decisions impacted downstream operations</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-crimson">•</span>
                  <span>Translating technical findings into system-level insights</span>
                </li>
              </ul>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                What surprised me most was how naturally UX design thinking translated to supply chain analysis.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light">
                The same skills used to map user journeys—identifying bottlenecks, dependencies, and flows—proved incredibly valuable when applied to operational systems.
              </p>
            </div>
          </motion.section>

          {/* Understanding the Existing System Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">Understanding the Existing System</h2>
            
            {/* System Flow Diagram */}
            <div className="mb-12 p-8 rounded-2xl bg-muted/30 border border-border">
              <div className="flex flex-col items-center gap-6">
                <div className="w-full max-w-md p-4 rounded-lg bg-background border border-border text-center">
                  <p className="font-body text-base">Demand Forecast</p>
                </div>
                <div className="w-0.5 h-8 bg-border" />
                <div className="w-full max-w-md p-4 rounded-lg bg-background border border-border text-center">
                  <p className="font-body text-base">Short-Term Resource Planning (STRP)</p>
                </div>
                <div className="w-0.5 h-8 bg-border" />
                <div className="w-full max-w-md p-4 rounded-lg bg-background border border-border text-center">
                  <p className="font-body text-base">Truck Blocks Tendered</p>
                </div>
                <div className="w-0.5 h-8 bg-border" />
                <div className="w-full max-w-md p-4 rounded-lg bg-background border border-border text-center">
                  <p className="font-body text-base">Actual Demand Evolves</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                The transportation planning system followed a simple but rigid structure.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Demand forecasts were generated several days before execution.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                A planning system called Short-Term Resource Planning (STRP) used those forecasts to reserve truck capacity.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Truck blocks were tendered early in the week.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Actual demand continued evolving throughout the week.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Because decisions were made early, the system often reacted poorly to changing conditions.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                When forecasts overestimated demand, trucks were scheduled unnecessarily.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                When forecasts underestimated demand, additional loads had to be covered through more expensive last-minute transportation options.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light">
                In other words: the system was making decisions before it had the best information.
              </p>
            </div>
          </motion.section>

          {/* Reframing the Problem Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">Reframing the Problem</h2>
            
            {/* Key Insight Block */}
            <div className="mb-12 p-12 rounded-2xl bg-gradient-to-br from-crimson/10 to-sunset-orange/10 border border-crimson/20 text-center">
              <p className="font-heading text-3xl md:text-4xl mb-4">
                "The issue was not forecast accuracy.
                <br />
                It was decision timing."
              </p>
            </div>

            {/* Question Comparison */}
            <div className="mb-12 grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-muted/30 border border-border">
                <p className="font-body text-sm uppercase tracking-widest mb-4 text-muted-foreground">
                  Old Question
                </p>
                <p className="font-body text-xl">"How accurate are our forecasts?"</p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <p className="font-body text-sm uppercase tracking-widest mb-4 text-green-600 dark:text-green-400">
                  Better Question
                </p>
                <p className="font-body text-xl">"When should the system make scheduling decisions?"</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                The key insight from this project was that the issue wasn't just forecast accuracy.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                It was decision timing.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Transportation capacity was being scheduled before the most reliable demand signals appeared.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                We hypothesized that a Very Short-Term Forecast (VST)—generated closer to execution time—could provide a more accurate signal for scheduling decisions.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Instead of asking:
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6 pl-6">
                "How accurate are our forecasts?"
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                The better question became:
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light pl-6">
                "When should the system make scheduling decisions?"
              </p>
            </div>
          </motion.section>

          {/* Testing the Hypothesis Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">Testing the Hypothesis</h2>
            
            {/* Forecast Model Evaluation Table */}
            <div className="mb-12 overflow-hidden rounded-2xl border border-border">
              <div className="bg-muted/50 p-6 border-b border-border">
                <h3 className="font-body text-lg">Forecast Model Evaluation</h3>
                <p className="font-body text-sm text-muted-foreground mt-1">Weighted Average Percentage Error (WAPE)</p>
              </div>
              <div className="divide-y divide-border">
                <div className="grid grid-cols-2 p-6 bg-green-500/10">
                  <p className="font-body text-base">Very Short-Term Forecast (VST)</p>
                  <p className="font-body text-base text-right">
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-600 dark:text-green-400 text-sm">
                      Best Performance ✓
                    </span>
                  </p>
                </div>
                <div className="grid grid-cols-2 p-6 bg-background">
                  <p className="font-body text-base text-muted-foreground">Phoenix Continuous Scheduling (CS)</p>
                  <p className="font-body text-base text-muted-foreground text-right">Moderate</p>
                </div>
                <div className="grid grid-cols-2 p-6 bg-background">
                  <p className="font-body text-base text-muted-foreground">Phoenix Baseline Scheduling (BS)</p>
                  <p className="font-body text-base text-muted-foreground text-right">Lower</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                To evaluate this idea, we analyzed several forecasting models to determine which performed best at the 48-hour planning horizon.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                The models evaluated were:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-crimson">•</span>
                  <span>Very Short-Term Forecast (VST)</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-sunset-orange">•</span>
                  <span>Phoenix Continuous Scheduling (CS)</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-amber">•</span>
                  <span>Phoenix Baseline Scheduling (BS)</span>
                </li>
              </ul>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Forecast accuracy was measured using Weighted Average Percentage Error (WAPE).
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light">
                The results showed that VST consistently provided the most accurate demand signal at the 48-hour window, making it the best candidate for intra-week scheduling decisions.
              </p>
            </div>
          </motion.section>

          {/* Modeling the System Impact Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">Modeling the System Impact</h2>
            
            {/* Scenario Diagrams */}
            <div className="mb-12 grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
                <p className="font-body text-sm uppercase tracking-widest mb-6 text-blue-600 dark:text-blue-400">
                  Scenario 1: Demand Increases
                </p>
                <div className="space-y-4">
                  <p className="font-body text-base">Demand increases</p>
                  <div className="pl-4 border-l-2 border-blue-500/30">
                    <p className="font-body text-base text-muted-foreground mb-2">↓ Add truck blocks</p>
                    <p className="font-body text-base text-muted-foreground">↓ Avoid expensive last-minute shipments</p>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <p className="font-body text-sm uppercase tracking-widest mb-6 text-purple-600 dark:text-purple-400">
                  Scenario 2: Demand Decreases
                </p>
                <div className="space-y-4">
                  <p className="font-body text-base">Demand decreases</p>
                  <div className="pl-4 border-l-2 border-purple-500/30">
                    <p className="font-body text-base text-muted-foreground mb-2">↓ Remove unnecessary truck blocks</p>
                    <p className="font-body text-base text-muted-foreground">↓ Avoid paying for unused trucks</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Once the improved forecast signal was identified, we modeled how scheduling decisions would change if the system used that signal.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Two types of adjustments emerged.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                <strong>When demand increased</strong>
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                The system could add transportation blocks, allowing loads to be covered by pre-planned capacity rather than expensive last-minute shipments.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                <strong>When demand decreased</strong>
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                The system could remove unnecessary transportation blocks, avoiding paying for trucks that weren't needed.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light">
                Both adjustments improved how transportation capacity aligned with real demand conditions.
              </p>
            </div>
          </motion.section>

          {/* Impact Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">Impact</h2>
            
            {/* Large Impact Number */}
            <div className="mb-12 text-center p-16 rounded-2xl bg-gradient-to-br from-crimson/10 via-sunset-orange/10 to-amber/10 border border-crimson/20">
              <p className="font-heading text-6xl md:text-7xl mb-4" style={{ color: 'var(--crimson)' }}>
                $8.4M
              </p>
              <p className="font-body text-xl text-muted-foreground">Annual Savings</p>
            </div>

            {/* Breakdown Cards */}
            <div className="mb-12 grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-muted/30 border border-border">
                <p className="font-heading text-4xl mb-2">$6.8M</p>
                <p className="font-body text-base text-muted-foreground">Savings during non-peak weeks</p>
              </div>
              <div className="p-8 rounded-2xl bg-muted/30 border border-border">
                <p className="font-heading text-4xl mb-2">$1.6M</p>
                <p className="font-body text-base text-muted-foreground">Savings during peak weeks</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                The entitlement analysis estimated that implementing LASO could generate significant cost savings across the network.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Estimated annual impact:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-crimson">•</span>
                  <span>$6.8M in savings during non-peak weeks</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-sunset-orange">•</span>
                  <span>$1.6M in savings during peak weeks</span>
                </li>
              </ul>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Total estimated savings:
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                $8.4M annually in transportation cost reductions.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light">
                Beyond the financial benefit, the study demonstrated how improved information flow and better decision timing could make the entire planning system more responsive to real demand conditions.
              </p>
            </div>
          </motion.section>

          {/* Why This Was a Design Problem Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">Why This Was a Design Problem</h2>
            
            {/* Service Blueprint Diagram */}
            <div className="mb-12 p-8 rounded-2xl bg-muted/30 border border-border">
              <div className="space-y-8">
                <div>
                  <p className="font-body text-sm uppercase tracking-widest mb-4 text-muted-foreground">Teams</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 p-4 rounded-lg bg-background border border-border text-center">
                      <p className="font-body text-sm">Forecasting</p>
                    </div>
                    <div className="w-4 h-0.5 bg-border" />
                    <div className="flex-1 p-4 rounded-lg bg-background border border-border text-center">
                      <p className="font-body text-sm">Resource Planning</p>
                    </div>
                    <div className="w-4 h-0.5 bg-border" />
                    <div className="flex-1 p-4 rounded-lg bg-background border border-border text-center">
                      <p className="font-body text-sm">Routing</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-body text-sm uppercase tracking-widest mb-4 text-muted-foreground">Systems</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 p-4 rounded-lg bg-background border border-border text-center">
                      <p className="font-body text-sm">Forecast Models</p>
                    </div>
                    <div className="w-4 h-0.5 bg-border" />
                    <div className="flex-1 p-4 rounded-lg bg-background border border-border text-center">
                      <p className="font-body text-sm">STRP</p>
                    </div>
                    <div className="w-4 h-0.5 bg-border" />
                    <div className="flex-1 p-4 rounded-lg bg-background border border-border text-center">
                      <p className="font-body text-sm">Scheduling Tools</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-body text-sm uppercase tracking-widest mb-4 text-muted-foreground">Information Flow</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 p-4 rounded-lg bg-background border border-border text-center">
                      <p className="font-body text-sm">Demand Signals</p>
                    </div>
                    <div className="w-4 h-0.5 bg-border" />
                    <div className="flex-1 p-4 rounded-lg bg-background border border-border text-center">
                      <p className="font-body text-sm">Planning Decisions</p>
                    </div>
                    <div className="w-4 h-0.5 bg-border" />
                    <div className="flex-1 p-4 rounded-lg bg-background border border-border text-center">
                      <p className="font-body text-sm">Execution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                What began as a data analysis project ultimately revealed a deeper systems challenge.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                The inefficiency was not simply caused by inaccurate forecasts—it was caused by how information moved through the planning system.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Forecasting teams, resource planners, and routing teams all operated within different processes and timelines. Decisions made upstream often created downstream ripple effects.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Solving the problem required understanding:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-crimson">•</span>
                  <span>how information moved between teams</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-sunset-orange">•</span>
                  <span>where timing mismatches occurred</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-amber">•</span>
                  <span>how upstream decisions affected downstream operations</span>
                </li>
              </ul>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light">
                This type of work closely mirrors service blueprinting, where designers analyze how people, systems, and processes interact across complex operational environments.
              </p>
            </div>
          </motion.section>

          {/* Reflection Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="border-t border-border pt-16">
              <h2 className="font-heading text-4xl mb-12 text-center">Reflection</h2>
              
              <div className="max-w-3xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                    One of the most surprising takeaways from this project was how naturally design thinking translated into operational analysis.
                  </p>
                  <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                    Skills that I developed as a UX designer—mapping journeys, identifying bottlenecks, and understanding how information flows between actors—proved incredibly valuable when applied to supply chain systems.
                  </p>
                  <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                    Instead of designing interfaces, the work involved designing how information moved through a complex operational network.
                  </p>
                  <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                    This experience reinforced something fundamental about design:
                  </p>
                  <p className="font-body text-xl leading-relaxed mb-6 px-6 py-4 border-l-4 border-crimson bg-muted/30">
                    UX is not limited to screens. At its core, design is about understanding systems and improving how people interact with them, whether those interactions occur within software interfaces or within large-scale operational processes.
                  </p>
                </div>
              </div>
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
                to="/work/soundtouch"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <ArrowLeft className="size-4" />
                Previous Case Study
              </Link>
              <Link
                to="/work/shell-energy"
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
