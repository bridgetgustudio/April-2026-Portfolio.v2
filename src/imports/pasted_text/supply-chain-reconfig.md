Reconfiguring a Middle-Mile Supply Chain 

Using service blueprinting and data analysis to redesign how truck capacity is scheduled across a logistics network 

As a Business Analyst Intern, I applied UX service design and systems thinking to analyze how demand signals moved through a supply chain network—helping identify an opportunity to redesign scheduling decisions that could reduce transportation costs by an estimated $8.4M annually. 

 

The Challenge 

Large supply chains rely on forecasting demand and reserving truck capacity days in advance. 

But demand rarely stays static. 

Imagine reserving hundreds of trucks on Monday based on a forecast—only to realize by Thursday that demand has changed. Some trucks are now unnecessary, while others are missing. 

That exact problem was occurring within the transportation planning system I analyzed. 

Truck capacity was being scheduled too early, before the most accurate demand signals became available. 

The result was predictable inefficiencies: 

• Trucks scheduled that weren’t needed 
• Too few trucks when demand spiked 
• Expensive last-minute shipments to fill the gaps 

Even small inefficiencies at this scale can create millions of dollars in additional logistics costs. 

 

The Opportunity 

The initiative I worked on—Late Available Supply Optimization (LASO)—explored a simple but powerful idea: 

What if we delayed some scheduling decisions until we had better information? 

Instead of locking in truck capacity several days in advance, we investigated whether waiting for more accurate demand signals closer to execution time could produce a more efficient system. 

The hypothesis: 

Better timing of decisions → better alignment between supply and demand. 

 

My Role 

Business Analyst Intern | Service Design & Systems Analysis 

Although the project was framed as a data analysis initiative, my design background shaped how I approached the work. 

Rather than looking only at the data, I focused on understanding how information moved through the system. 

My work included: 

• Writing SQL queries to analyze operational datasets 
• Investigating how demand forecasts flowed through planning systems 
• Mapping relationships between forecasting, planning, and routing teams 
• Modeling how scheduling decisions impacted downstream operations 
• Translating technical findings into system-level insights 

What surprised me most was how naturally UX design thinking translated to supply chain analysis. 

The same skills used to map user journeys—identifying bottlenecks, dependencies, and flows—proved incredibly valuable when applied to operational systems. 

 

Understanding the Existing System 

The transportation planning system followed a simple but rigid structure. 

Demand forecasts were generated several days before execution.  

A planning system called Short-Term Resource Planning (STRP) used those forecasts to reserve truck capacity.  

Truck blocks were tendered early in the week.  

Actual demand continued evolving throughout the week.  

Because decisions were made early, the system often reacted poorly to changing conditions. 

When forecasts overestimated demand, trucks were scheduled unnecessarily. 

When forecasts underestimated demand, additional loads had to be covered through more expensive last-minute transportation options. 

In other words: 

the system was making decisions before it had the best information. 

 

Reframing the Problem 

The key insight from this project was that the issue wasn’t just forecast accuracy. 

It was decision timing. 

Transportation capacity was being scheduled before the most reliable demand signals appeared. 

We hypothesized that a Very Short-Term Forecast (VST)—generated closer to execution time—could provide a more accurate signal for scheduling decisions. 

Instead of asking: 

“How accurate are our forecasts?” 

The better question became: 

“When should the system make scheduling decisions?” 

 

Testing the Hypothesis 

To evaluate this idea, we analyzed several forecasting models to determine which performed best at the 48-hour planning horizon. 

The models evaluated were: 

• Very Short-Term Forecast (VST) 
• Phoenix Continuous Scheduling (CS) 
• Phoenix Baseline Scheduling (BS) 

Forecast accuracy was measured using Weighted Average Percentage Error (WAPE). 

The results showed that VST consistently provided the most accurate demand signal at the 48-hour window, making it the best candidate for intra-week scheduling decisions.  

 

Modeling the System Impact 

Once the improved forecast signal was identified, we modeled how scheduling decisions would change if the system used that signal. 

Two types of adjustments emerged. 

When demand increased 

The system could add transportation blocks, allowing loads to be covered by pre-planned capacity rather than expensive last-minute shipments. 

When demand decreased 

The system could remove unnecessary transportation blocks, avoiding paying for trucks that weren’t needed. 

Both adjustments improved how transportation capacity aligned with real demand conditions. 

 

Impact 

The entitlement analysis estimated that implementing LASO could generate significant cost savings across the network. 

Estimated annual impact: 

• $6.8M in savings during non-peak weeks 
• $1.6M in savings during peak weeks 

Total estimated savings: 

$8.4M annually in transportation cost reductions.  

Beyond the financial benefit, the study demonstrated how improved information flow and better decision timing could make the entire planning system more responsive to real demand conditions. 

 

Why This Was a Design Problem 

What began as a data analysis project ultimately revealed a deeper systems challenge. 

The inefficiency was not simply caused by inaccurate forecasts—it was caused by how information moved through the planning system. 

Forecasting teams, resource planners, and routing teams all operated within different processes and timelines. Decisions made upstream often created downstream ripple effects. 

Solving the problem required understanding: 

• how information moved between teams 
• where timing mismatches occurred 
• how upstream decisions affected downstream operations 

This type of work closely mirrors service blueprinting, where designers analyze how people, systems, and processes interact across complex operational environments. 

 

Reflection 

One of the most surprising takeaways from this project was how naturally design thinking translated into operational analysis. 

Skills that I developed as a UX designer—mapping journeys, identifying bottlenecks, and understanding how information flows between actors—proved incredibly valuable when applied to supply chain systems. 

Instead of designing interfaces, the work involved designing how information moved through a complex operational network. 

This experience reinforced something fundamental about design: 

UX is not limited to screens. At its core, design is about understanding systems and improving how people interact with them, whether those interactions occur within software interfaces or within large-scale operational processes. 