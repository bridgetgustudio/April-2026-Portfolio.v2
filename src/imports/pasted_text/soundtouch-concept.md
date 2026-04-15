SoundTouch 

Designing a spatial, gesture-based interface for making music anywhere 

In my spare time, I’m a singer, songwriter, and music producer. Many of my best ideas come when I’m away from my keyboard or studio — traveling, walking, or in moments when opening a full production tool like GarageBand feels like too much cognitive overhead. 

At the same time, I had recently become fascinated with the rise of agentic design tools and “vibe coding” workflows — tools that allow designers to prototype complex interactive systems simply by describing them. 

I wanted to explore two things at once: 

Could I build something meaningful using this new design workflow?  

Could I create a simple, portable tool for capturing musical ideas anywhere?  

The result was SoundTouch — a browser-based experiment that turns hand gestures and voice into musical controls using computer vision and spatial interaction. 

Instead of tapping buttons or navigating timelines, the interface treats the space around your hands as the instrument itself. 

 

Inspiration 

Music that exists in space, not just on screens 

This idea was not created in isolation. 

The artist Imogen Heap pioneered spatial music performance with the Mi.Mu Gloves, a wearable interface she began developing around 2011–2012. 

The gloves allowed performers to manipulate sound through gestures in mid-air — treating music as something performed through physical motion, rather than triggered by keys or buttons. 

Her work opened a fascinating design question: 

What if we could interact with music through the space around us rather than through a device in front of us? 

SoundTouch explores a lightweight version of that idea — using computer vision instead of specialized hardware. 

If a camera can detect our hands, then the space around us becomes a potential interface. 

 

Problem 

Most music tools assume a studio mindset 

Traditional music creation tools are powerful but assume the user: 

is sitting at a workstation  

has instruments available  

is ready to enter a focused production environment  

But musical ideas rarely arrive under those conditions. 

For many musicians — including myself — creativity happens: 

while traveling  

walking around  

in small moments between tasks  

when a melody appears unexpectedly  

Opening a full digital audio workstation in those moments can feel like too much friction. 

The design challenge became: 

How might we reduce music creation down to its most intuitive gestures? 

 

Personal Context 

How I actually write music 

I started songwriting during COVID, when I began using music as a way to process emotions during that time. 

Instead of producing full tracks, I developed a much simpler creative workflow: 

jotting down chord progressions  

writing lyrics in a notebook  

capturing melodies wherever inspiration struck  

I carried that notebook everywhere. 

My goal was usually simple: 

capture the feeling before it disappeared. 

That personal workflow strongly influenced SoundTouch. 

Instead of designing a full production environment, I focused on creating something that supports quick emotional capture and exploration. 

 

Discovery 

People conceptualize music differently 

Early research showed that musicians and creators think about music in very different ways. 

Through interviews, observation, and literature on music cognition, three broad archetypes emerged: 

 

Harmonic Thinkers 

Often musicians who approach music through chords and emotional progressions. 

They quickly translate chord patterns into mood and story. 

 

Structural Learners 

Often classically trained musicians who understand composition through: 

theory  

structure  

orchestration  

Their mental model is analytical and rule-based. 

 

Flow-Based Explorers 

Common among DJs and modern producers. 

Their approach is intuitive and experimental, often based on: 

sampling  

rhythm  

improvisation  

 

Designing for my own workflow 

For the first prototype, I intentionally designed around my own creative process. 

My songwriting workflow prioritizes: 

speed  

emotion  

experimentation  

So instead of recreating traditional music tools, I explored a different question: 

What if the interface disappeared entirely? 

 

Concept 

Turning gestures into musical controls 

SoundTouch uses computer vision to detect hand gestures through the device’s camera. 

The system maps natural hand movements to musical actions. 

The design principle was simple: 

Each gesture should feel like a natural extension of musical expression. 

 

Right hand: generating chords 

The right hand controls harmonic structure. 

Finger counting maps to chords: 

Fingers 

Chord 

1 

C major 

2 

D major 

3 

E major 

4 

F major 

5 

G major 

To prevent accidental triggers: 

gestures must remain stable for 300 ms  

small movement jitter is ignored  

a 500 ms cooldown prevents rapid retriggers  

This makes the system feel intentional rather than twitchy. 

 

Left hand: shaping sound 

The left hand acts as a spatial effects controller. 

Hand movement maps directly to audio parameters: 

Vertical movement 
→ reverb intensity 

Horizontal movement 
→ delay timing 

Gesture modifiers expand the interaction set: 

Peace sign → minor chord modifier 
Fist → mute output 
Open palm → sustain 
Pinch → toggle alternate vocal texture 

This creates a layered interaction where one hand generates music while the other sculpts it. 

 

Expanding the concept 

Adding voice as a spatial instrument 

Once chords and effects were working, I explored adding voice interaction. 

The inspiration came from artists whose music blends human voice with synthetic textures, including: 

FKA twigs  

Billie Eilish  

Imogen Heap  

The challenge was designing a vocal effect that felt: 

expressive  

ethereal  

musical  

without sounding robotic. 

 

Gesture-controlled vocal transformation 

The left hand tilt controls a layered vocal effect system. 

Tilt zones determine intensity: 

0° 
→ dry voice 

25° 
→ effect begins fading in 

40°–90° 
→ full expressive range 

The system gradually blends: 

subtle harmonized pitch layers  

chorus widening  

shimmer reverb  

filtered delay  

slight formant shifting  

The goal was to create the feeling of a synthetic aura around the voice, rather than replacing the voice entirely. 

 

Designing feedback 

Making invisible sound visible 

Gesture interfaces require strong visual feedback. 

Without it, users cannot understand what the system is detecting. 

SoundTouch overlays a visual system on top of the camera feed. 

 

Hand skeleton tracking 

Detected hand joints appear as connected nodes, helping users understand how the system sees their hands. 

 

Energy orbs 

When gestures trigger actions: 

the right hand generates a pink orb  

the left hand generates a yellow orb  

When both hands are active, a glowing strand connects them. 

This visual metaphor reinforces the idea that music is being generated between the hands. 

 

Vocal aura 

When the voice effect activates, the left hand becomes surrounded by: 

pulsating wave rings  

shimmering particle fields  

glowing energy centered on the palm  

These visuals respond to the voice itself: 

louder singing expands the waves  

higher notes lift the particles  

The result is a visual representation of sound energy in space. 

 

Recording the moment 

Because the goal of SoundTouch is capturing musical ideas quickly, the prototype also includes the ability to: 

record audio from a session, or  

screen record the entire interaction  

This allows users to save spontaneous musical moments without needing a full production environment. 

 

Technical prototype 

The prototype was built as a browser-based experiment using: 

MediaPipe Hands for gesture detection  

Tone.js for audio synthesis  

HTML / CSS / JavaScript for UI and visuals  

Design constraints included: 

real-time gesture stabilization  

smooth audio parameter ramping  

minimal UI complexity  

browser-based accessibility  

 

Key design challenges 

Preventing accidental triggers 

Hand tracking can be noisy. 

To maintain usability: 

gestures must remain stable for 300 ms  

small motion jitter is ignored  

cooldowns prevent repeated triggers  

This dramatically improved reliability. 

 

Balancing expressive control with simplicity 

Gesture interfaces can easily become overwhelming. 

The system intentionally limits the interaction set to: 

five chord gestures  

a small set of effect modifiers  

one continuous vocal gesture  

This keeps the experience playful rather than complicated. 

 

Designing for exploration 

Unlike traditional music tools, this interface encourages experimentation. 

The goal was not precise production, but creative discovery. 

Users often stumble into unexpected musical ideas simply by moving their hands through space. 

 

Reflection 

What I learned about agentic design tools 

I began this project primarily as a way to explore the emerging capabilities of agentic design tools and vibe coding workflows. 

What surprised me most was how quickly I could iterate on ideas that were personally meaningful. 

Instead of spending weeks building infrastructure, I could rapidly prototype interaction models that would traditionally require a full engineering team. 

That speed created something addictive: 

I could test an idea, adjust the interaction, refine the experience, and immediately see the result. 

For a designer exploring creative tools, that feedback loop was incredibly powerful. 

Projects like SoundTouch make me excited about a future where designers can prototype entirely new interaction paradigms — not just screens and menus, but systems that blend: 

spatial interaction  

creative expression  

and emerging AI-assisted tools  

Sometimes the most interesting ideas happen when curiosity meets new capabilities. 

SoundTouch began as an experiment in vibe coding. 

It ended up becoming a glimpse into what designing creative tools might look like in the next generation of interfaces. 

 