import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquare, Users, TrendingDown, Sparkles, Zap, CheckCircle2, FileText } from 'lucide-react';
import attAssistantImage from '../../imports/at&t_virtual_assistant.png';

export function ATTAICaseStudy() {
  return (
    <div className="min-h-screen bg-background relative z-10">
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
                AI Meets Product Discovery
              </h1>
              <p className="font-body text-xl md:text-2xl leading-relaxed text-muted-foreground font-light max-w-3xl mb-12">
                Empowering AT&T's SMB Customers with Self-Service
              </p>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-border/50">
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    Role
                  </p>
                  <p className="font-body text-base font-light">UX Research Analyst</p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    Client
                  </p>
                  <p className="font-body text-base font-light">AT&T (via IBM Consulting)</p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    Focus
                  </p>
                  <p className="font-body text-base font-light">AI Product Design</p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    Methods
                  </p>
                  <p className="font-body text-base font-light">Interaction Design, AI Experience Framework</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Visual - AT&T AI Assistant Interface */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6 mb-32"
      >
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border border-border p-12 space-y-8">
            <div className="w-full">
              <img
                src="/src/imports/AT&T_CASE_STUDY_banner.jpeg"
                alt="AT&T Case Study Banner"
                className="w-full h-auto rounded-2xl mb-8"
              />
              <motion.img
                src={attAssistantImage}
                alt="AT&T AI Assistant Interface"
                className="w-full h-auto rounded-2xl"
                style={{
                  boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.3), 0 10px 30px -15px rgba(0, 0, 0, 0.2)'
                }}
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              />
              <p className="font-body text-sm text-muted-foreground text-center mt-6">
                We re-imagined the customer experience through an AI-powered digital assistant, strategically placed at key touch-points within the Business Internet experience to improve AT&T's product discovery and decision-making process for SMB users
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="px-[24px] pt-[0px] pb-[166px]">
        <div className="max-w-5xl mx-auto px-[0px] py-[11px]">
          
          {/* Context Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">Context</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="prose prose-lg max-w-none">
                <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">While working within IBM Consulting, our team partnered with AT&T to improve the purchasing experience for <span className="font-bold">Small MediumSized Business (SMB) customers</span> on the AT&T&nbsp;&nbsp;Business Internet website.</p>
                <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">SMBs represent one of the                <span className="font-bold">largest buyers in telecom</span>, yet the digital experience was largely built for enterprise-level users with technical expertise. As a result, small&nbsp;&nbsp;business owners often <span className="font-bold">struggled to navigate product&nbsp;&nbsp;information</span> and <span className="font-bold">confidently select the right service.</span></p>
                <p className="font-body text-lg leading-relaxed text-foreground/90 font-light">AT&T wanted to explore how                <span className="font-bold">AI could support product discovery</span>, reduce friction during decision-making, and ultimately improve the SMB purchasing journey.</p>
              </div>
              <div className="space-y-8">
                {/* Telecom spending graph */}
                <div>
                  <img
                    src="/src/imports/Mckinsey_graphic.png"
                    alt="Telecom spending graph showing SMB market opportunity"
                    className="w-full h-auto rounded-xl border border-border"
                  />
                  <p className="font-body text-xs text-muted-foreground mt-2">
                    | Figure 1: The incentive behind capturing SMB Customers
                  </p>
                </div>

                {/* AT&T Business website screenshot */}
                <div>
                  <img
                    src="/src/imports/image.png"
                    alt="AT&T Business website screenshot"
                    className="w-full h-auto rounded-xl border border-border"
                  />
                  <p className="font-body text-xs text-muted-foreground mt-2 leading-relaxed">From inconsistent design, overly technical messaging, and poor navigation, AT&T Business observed high attrition rates among SMB users, one of the largest buyers in the Telecommunications space.                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* The Problem Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">The Problem</h2>
            
            {/* Problem Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
                <FileText className="w-8 h-8 mb-4 text-red-600 dark:text-red-400" />
                <h3 className="font-body text-lg mb-3">Complex Product Messaging</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Technical telecom terminology confused SMB customers.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                <MessageSquare className="w-8 h-8 mb-4 text-orange-600 dark:text-orange-400" />
                <h3 className="font-body text-lg mb-3">Limited Self-Service Support</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Customers forced into call centers and live agents.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                <TrendingDown className="w-8 h-8 mb-4 text-amber-600 dark:text-amber-400" />
                <h3 className="font-body text-lg mb-3">High Abandonment During Discovery</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Users left the purchasing journey when questions weren't answered quickly.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              
              
              
              
              
              
              
              
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6"><span className="font-bold">The challenge became clear:</span></p>
              <p className="font-body text-xl leading-relaxed mb-6 px-6 py-4 border-l-4 border-crimson bg-muted/30">
                How might we guide SMB customers through product discovery without forcing them into slow, frustrating support channels?
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
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <Sparkles className="w-8 h-8 mb-3 opacity-60" />
                <h3 className="font-body text-base mb-2">AI Assistant Framework Definition</h3>
              </div>
              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <MessageSquare className="w-8 h-8 mb-3 opacity-60" />
                <h3 className="font-body text-base mb-2">Virtual Assistant UI Design</h3>
              </div>
              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <Zap className="w-8 h-8 mb-3 opacity-60" />
                <h3 className="font-body text-base mb-2">Carbon AI Pattern Integration</h3>
              </div>
              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <CheckCircle2 className="w-8 h-8 mb-3 opacity-60" />
                <h3 className="font-body text-base mb-2">Enterprise UX Integration</h3>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6 font-bold">
                I worked on the experience strategy and interaction design for an AI-assisted support experience embedded within the AT&T Business Internet journey.
              </p>
              
              <ul className="space-y-3 mb-6">
                
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-sunset-orange">•</span>
                  <span>Designing the virtual assistant UI and conversational experience</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-amber">•</span>
                  <span>Applying patterns from IBM's Carbon for AI design system</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-sage">•</span>
                  <span>Ensuring the experience integrated with AT&T's existing UI components</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-crimson">•</span>
                  <span>Translating AI capabilities into clear, trustworthy user interactions</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* The Solution Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">The Solution</h2>
            
            {/* Solution Concept Diagram */}
            <div className="mb-12">
              <div className="space-y-16">
                {/* Mobile View */}
                <div className="grid md:grid-cols-2 gap-8 items-center group">
                  <div className="flex justify-center">
                    <motion.img
                      src="/src/imports/image_103-2.png"
                      alt="Mobile view of AT&T Virtual Assistant chatbot integration"
                      className="rounded-xl"
                      style={{
                        boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.3), 0 10px 30px -15px rgba(0, 0, 0, 0.2)',
                        width: '250px',
                        height: 'auto'
                      }}
                      whileHover={{ scale: 1.125, rotate: -15 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </div>
                  <motion.div
                    className="p-6 rounded-xl"
                    initial={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0), rgba(147, 197, 253, 0))' }}
                    whileHover={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.15))'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-body text-base leading-relaxed text-foreground/90"> - Additionally, we created another form/modal element by integrating the AT&T Virtual Assistant into the existing chatbot experience to enhance consistency and streamline interactions for customers for all types of queries.<span className="font-semibold">| Figure 2: Mobile View</span></p>
                  </motion.div>
                </div>

                {/* Desktop Format */}
                <div className="grid md:grid-cols-2 gap-8 items-center group">
                  <div className="flex justify-center">
                    <motion.img
                      src="/src/imports/Group_403.png"
                      alt="Desktop format showing AT&T Virtual Assistant user flow end state"
                      className="w-auto h-auto max-w-full rounded-xl"
                      style={{
                        boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.3), 0 10px 30px -15px rgba(0, 0, 0, 0.2)'
                      }}
                      whileHover={{ scale: 1.125, rotate: 15 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </div>
                  <motion.div
                    className="p-6 rounded-xl"
                    initial={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0), rgba(147, 197, 253, 0))' }}
                    whileHover={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.15))'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-body text-base leading-relaxed text-foreground/90"> - At the end of the user flow with the AI Virtual Assistant, users are presented with additional pathways, such as exploring relevant source articles in greater detail and providing feedback through the feedback loop ("Additional Feedback") to improve the experience.<span className="font-semibold">| Figure 3: Desktop Format</span></p>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mx-[0px] mt-[87px] mb-[24px] font-bold">
                We introduced an AI-powered virtual assistant embedded directly within the product discovery experience.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                The assistant acts as a 24/7 self-service support layer, enabling SMB customers to ask questions and receive immediate, contextual answers without leaving the purchasing journey.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Powered by ChatGPT-4, the assistant helps users:
              </p>
              <ul className="space-y-3 mb-6 px-[0px] py-[15px]">
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-crimson">•</span>
                  <span>Understand telecom offerings in plain language</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-sunset-orange">•</span>
                  <span>Compare services and identify relevant products</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-amber">•</span>
                  <span>Resolve questions instantly without contacting support</span>
                </li>
              </ul>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light">
                The goal was simple: make product discovery faster, clearer, and less intimidating for SMB users.
              </p>
            </div>
          </motion.section>

          {/* Designing the AI Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">Designing the AI Experience</h2>
            
            {/* Framework Diagram */}
            <div className="mb-12 p-8 rounded-2xl border border-border space-y-8" style={{ backgroundColor: 'rgba(30, 30, 30, 0.8)' }}>
              <div>
                <p className="font-body text-sm uppercase tracking-widest mb-4 text-muted-foreground text-[#c6c6ce]">Role</p>
                <p className="text-lg text-[#ffffff]">Assistant — supporting users with product questions and discovery.</p>
              </div>
              <div>
                <p className="font-body text-sm uppercase tracking-widest mb-4 text-muted-foreground text-[#c6c6ce]">Capability</p>
                <p className="font-body text-lg text-[#ffffff]">Conversational Q&A — enabling open-ended customer questions.</p>
              </div>
              <div>
                <p className="font-body text-sm uppercase tracking-widest mb-4 text-muted-foreground text-[#c6c6ce]">Modalities</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <p className="font-body text-base">Embedded within product pages</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <p className="font-body text-base">Integrated into AT&T's existing chatbot experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6 font-bold">
                Before designing the interface, we defined a framework to guide how the assistant would function.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                <strong>Role</strong>
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Assistant — supporting users with product questions and discovery.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                <strong>Capability</strong>
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                Conversational Q&A — enabling open-ended customer questions.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                <strong>Modalities</strong>
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                The assistant appears across multiple contexts:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-crimson">•</span>
                  <span>Embedded within product pages</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-sunset-orange">•</span>
                  <span>Integrated into AT&T's existing chatbot experience</span>
                </li>
              </ul>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light">
                This approach allowed the AI to enhance existing support systems rather than replace them, making the experience feel familiar and intuitive.
              </p>
            </div>
          </motion.section>

          {/* Building Trust in AI Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">Building Trust in AI</h2>
            
            {/* Trust Pattern Cards */}
            <div className="mb-12 grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border border-blue-500/20">
                <h3 className="font-body text-lg mb-6">AI Identity Indicator</h3>
                <div className="p-6 rounded-lg bg-background border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-body">AI</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    Visual marker identifying AI responses
                  </p>
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20">
                <h3 className="font-body text-lg mb-6">Explainability Popover</h3>
                <div className="p-6 rounded-lg bg-background border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span className="font-body text-xs text-muted-foreground">Hover for details</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    Hover interaction explaining how the assistant works
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-2">
                <motion.img
                  src="/src/imports/1718127637812.png"
                  alt="AI trust and transparency patterns"
                  className="w-full h-auto rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                />
              </div>

              <div className="md:col-span-3 prose prose-lg max-w-none">
                <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6 font-bold">
                  Because SMB users may be unfamiliar with AI tools, transparency was critical.
                </p>
                <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                  We incorporated patterns from IBM's Carbon for AI design system to ensure the assistant felt trustworthy and understandable.
                </p>
                <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                  Key elements included:
                </p>
                <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-4">
                  <strong>AI Identity Indicator</strong>
                </p>
                <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                  A visual marker ("AI Slug") signals when users are interacting with an AI system.
                </p>
                <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-4">
                  <strong>Explainability Popover</strong>
                </p>
                <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                  Hover interactions provide guidance on how the assistant works and what types of questions it can answer.
                </p>
                <p className="font-body text-lg leading-relaxed text-foreground/90 font-light">
                  These patterns helped ensure users understood what the system was doing and how to interact with it effectively.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Experience Highlights Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="font-heading text-4xl mb-12">Experience Highlights</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-8 rounded-2xl bg-muted/30 border border-border">
                <Zap className="w-8 h-8 mb-4 opacity-60" />
                <h3 className="font-body text-lg mb-3">Guided Prompt Suggestions</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Pre-populated prompts help users quickly ask common questions.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-muted/30 border border-border">
                <MessageSquare className="w-8 h-8 mb-4 opacity-60" />
                <h3 className="font-body text-lg mb-3">Context-Aware Responses</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  The AI generates dynamic answers instead of redirecting users to static FAQ pages.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-muted/30 border border-border">
                <FileText className="w-8 h-8 mb-4 opacity-60" />
                <h3 className="font-body text-lg mb-3">Direct Resource Linking</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Responses include links to relevant product documentation and support materials.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6 font-bold">
                The assistant introduced several improvements to the support experience:
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


            <div className="grid md:grid-cols-3 gap-6 mb-2">



            </div>

            <div className="prose prose-lg max-w-none p-[0px] mx-[0px] my-[-110px]">

              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-crimson">•</span>
                  <span>Providing instant answers during product discovery</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-sunset-orange">•</span>
                  <span>Reducing reliance on call centers and live support agents</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-amber">•</span>
                  <span>Helping users navigate complex telecom offerings</span>
                </li>
                <li className="flex gap-3 font-body text-lg leading-relaxed text-foreground/90 font-light">
                  <span className="text-sage">•</span>
                  <span>Creating a more intuitive self-service experience</span>
                </li>
              </ul>
              <p className="font-body text-lg leading-relaxed text-foreground/90 font-light">
                Most importantly, the concept showed how AI could be integrated into existing digital ecosystems without disrupting familiar workflows.
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
              <motion.img
                src="/src/imports/1389_web_graphics_Report_thumbnail_1456x728_a0cd19795f.jpg"
                alt="AT&T Report Banner"
                className="w-full h-auto rounded-2xl mb-12"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              />
              <h2 className="font-heading text-4xl mb-12 text-center">Reflection</h2>
              
              <div className="max-w-3xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                    <strong className="font-bold">AT&T's Virtual Assistant project underscores the emerging role of AI in transforming traditional digital channels.</strong>
                  </p>
                  <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                    The integration of a cutting-edge AI framework into an existing, legacy UI highlighted the importance of thoughtful design—AI must be introduced in a way that feels natural and intuitive for users. This project demonstrated how blending new technologies with established user experiences can drive better engagement and understanding.
                  </p>
                  <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                    While the initial proof of concept successfully met AT&T's goal of enhancing the SMB purchasing experience with AI, future research with focus groups will be crucial in refining the solution. This feedback will help ensure that the assistant is not only functional but also user-friendly across a variety of customer touchpoints.
                  </p>
                  <p className="font-body text-lg leading-relaxed text-foreground/90 font-light mb-6">
                    Looking ahead, for industries like telecommunications and other legacy sectors, this project reveals how AI can modernize traditional digital support by integrating seamlessly into familiar systems, making technology more approachable without overwhelming users.
                  </p>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground font-light italic">
                    Disclaimer: This piece represents general thought-leadership, experimentation and exploration aimed at providing a wholistic view of what's happening in and impacting experience design. These opinions are not reflective of official IBM offerings and services and are not approved for client or internal use unless otherwise specified.
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
                to="/work/amazon-middle-mile"
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
