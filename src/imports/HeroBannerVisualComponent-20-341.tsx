import svgPaths from "./svg-mdlxarrbnd";

interface HeroBannerProps {
  storytellerHovered?: boolean;
  storytellerClicked?: boolean;
  systemsThinkerHovered?: boolean;
  uiUxDesignerHovered?: boolean;
}

function Group({ storytellerHovered }: { storytellerHovered?: boolean }) {
  return (
    <div 
      className="h-[512.056px] relative w-[366.975px] transition-all duration-300 ease-out"
      style={{
        transform: storytellerHovered ? 'translateX(115px) rotate(61deg) scale(1.15)' : 'translateX(115px) rotate(61deg) scale(1)',
        transformOrigin: 'center center',
      }}
    >
      {/* Glimmer effect on hover */}
      {storytellerHovered && (
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-[10px] z-10"
          style={{
            animation: 'glimmer 1.5s ease-in-out infinite',
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              transform: 'translateX(-100%)',
              animation: 'glimmerSlide 1.5s ease-in-out infinite',
            }}
          />
        </div>
      )}
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 366.975 512.056">
        <g id="Group 882">
          <path d={svgPaths.p4951200} fill="url(#paint0_linear_20_194)" id="Subtract" />
          <path d={svgPaths.p2f27a700} fill="url(#paint1_linear_20_194)" id="Subtract_2" />
          <path d={svgPaths.p1c913172} fill="url(#paint2_linear_20_194)" id="Vector 8" />
          <path d={svgPaths.p35755f00} fill="url(#paint3_linear_20_194)" id="Subtract_3" />
          <path d={svgPaths.p24c7f200} fill="url(#paint4_linear_20_194)" id="Vector 6" />
          <path d={svgPaths.ped0e100} fill="url(#paint5_linear_20_194)" fillOpacity="0.68" id="Vector 7" />
          <path d={svgPaths.p1fe4a000} fill="url(#paint6_linear_20_194)" fillOpacity="0.68" id="Vector 9" />
          <ellipse cx="142.056" cy="267.35" fill="var(--fill-0, #750F0F)" id="Ellipse 5" rx="16.7593" ry="17.5574" />
          <path d={svgPaths.p31abba80} fill="url(#paint7_linear_20_194)" id="Subtract_4" />
          <ellipse cx="265.756" cy="435.742" fill="var(--fill-0, #750F0F)" id="Ellipse 6" rx="16.7593" ry="17.5574" />
          <rect fill="url(#paint8_linear_20_194)" height="21.7849" id="Rectangle 279" rx="10.8924" transform="rotate(-35.2859 193.132 369.194)" width="39.5303" x="193.132" y="369.194" />
          <rect fill="url(#paint9_linear_20_194)" height="21.7849" id="Rectangle 280" rx="10.8924" transform="rotate(-35.2859 205.901 389.145)" width="39.5303" x="205.901" y="389.145" />
          <path d={svgPaths.p3b5caa80} fill="url(#paint10_linear_20_194)" id="Subtract_5" />
          <circle cx="138.863" cy="276.927" fill="url(#paint11_linear_20_194)" id="Ellipse 9" r="3.19225" />
          <circle cx="191.536" cy="334.388" fill="url(#paint12_linear_20_194)" id="Ellipse 11" r="3.19225" />
          <circle cx="262.563" cy="444.52" fill="url(#paint13_linear_20_194)" id="Ellipse 10" r="3.19225" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_194" x1="236.882" x2="206.518" y1="360.929" y2="440.026">
            <stop stopColor="#E13D21" />
            <stop offset="0.515813" stopColor="#D93B20" />
            <stop offset="1" stopColor="#7B2112" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_20_194" x1="263.353" x2="206.042" y1="354.998" y2="417.397">
            <stop stopColor="#E13D21" />
            <stop offset="0.515813" stopColor="#D93B20" />
            <stop offset="1" stopColor="#7B2112" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_20_194" x1="165.998" x2="245.804" y1="339.974" y2="335.186">
            <stop offset="0.26784" stopColor="#84C850" />
            <stop offset="1" stopColor="#416227" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_20_194" x1="93.3682" x2="93.3682" y1="-1.4261e-09" y2="327.304">
            <stop offset="0.335647" stopColor="#E13D21" />
            <stop offset="1" stopColor="#7B2112" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_20_194" x1="283.313" x2="211.088" y1="357.132" y2="401.425">
            <stop stopColor="#E13D21" />
            <stop offset="0.515813" stopColor="#D93B20" />
            <stop offset="1" stopColor="#7B2112" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_20_194" x1="191.1" x2="191.1" y1="312.84" y2="357.531">
            <stop stopColor="#4B9A0F" />
            <stop offset="1" stopColor="#193405" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_20_194" x1="162.481" x2="334.316" y1="356.22" y2="261.822">
            <stop offset="0.0667521" stopColor="#C2F79A" />
            <stop offset="0.342035" stopColor="#193405" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_20_194" x1="142.455" x2="142.455" y1="251.503" y2="275.458">
            <stop stopColor="#750F0F" />
            <stop offset="1" stopColor="#DB1C1C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_20_194" x1="212.897" x2="212.897" y1="369.194" y2="390.978">
            <stop stopColor="#E13D21" />
            <stop offset="1" stopColor="#7B2112" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_20_194" x1="225.666" x2="225.666" y1="389.145" y2="410.93">
            <stop stopColor="#E13D21" />
            <stop offset="1" stopColor="#7B2112" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_20_194" x1="266.156" x2="266.156" y1="420.579" y2="444.536">
            <stop stopColor="#750F0F" />
            <stop offset="1" stopColor="#DB1C1C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_20_194" x1="138.863" x2="138.863" y1="273.735" y2="280.12">
            <stop stopColor="#750F0F" />
            <stop offset="1" stopColor="#F29585" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_20_194" x1="188.343" x2="200.713" y1="331.195" y2="337.58">
            <stop stopColor="#C2F79A" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_20_194" x1="262.563" x2="262.563" y1="441.328" y2="447.713">
            <stop stopColor="#750F0F" />
            <stop offset="1" stopColor="#F29585" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group4({ storytellerHovered, storytellerClicked }: { storytellerHovered?: boolean; storytellerClicked?: boolean }) {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute flex items-center justify-center left-[58.1px] size-[479.344px] top-[23px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[20.66deg]">
          <div className="border-3 border-[#e13d21] border-solid rounded-[10px] size-[372px]" />
        </div>
      </div>
      <Group storytellerHovered={storytellerHovered} />
    </div>
  );
}

function ChineseKnotVisualIllustration({ storytellerHovered, storytellerClicked }: { storytellerHovered?: boolean; storytellerClicked?: boolean }) {
  return (
    <div className="absolute h-[610.109px] left-0 top-0 w-[628.191px]" data-name="chinese knot visual illustration">
      <Group4 storytellerHovered={storytellerHovered} storytellerClicked={storytellerClicked} />
    </div>
  );
}

function Group2({ uiUxDesignerHovered }: { uiUxDesignerHovered?: boolean }) {
  return (
    <div className="absolute h-[303.987px] left-0 top-[132px] w-[418px]">
      <div 
        className="absolute inset-[-2.03%_0_0_-1.48%] transition-all duration-300 ease-out"
        style={{
          transform: uiUxDesignerHovered ? 'scale(1.15)' : 'scale(1)',
          transformOrigin: 'center center',
        }}
      >
        {/* Glimmer effect on hover */}
        {uiUxDesignerHovered && (
          <div 
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-[10px] z-10"
            style={{
              animation: 'glimmer 1.5s ease-in-out infinite',
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                transform: 'translateX(-100%)',
                animation: 'glimmerSlide 1.5s ease-in-out infinite',
              }}
            />
          </div>
        )}
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 424.173 310.16">
          <g id="Group 884">
            <g filter="url(#filter0_f_20_168)" id="Rectangle 283">
              <rect fill="url(#paint0_linear_20_168)" fillOpacity="0.37" height="88.8968" rx="6.17339" width="340.154" x="69.7593" y="125.32" />
            </g>
            <rect fill="url(#paint1_linear_20_168)" height="86.1328" id="Rectangle 284" rx="4.65245" stroke="url(#paint2_linear_20_168)" strokeWidth="3.08669" width="338.302" x="81.7974" y="136.123" />
            <g filter="url(#filter1_f_20_168)" id="Rectangle 285">
              <rect fill="url(#paint3_linear_20_168)" fillOpacity="0.37" height="88.8968" rx="6.17339" width="340.154" x="6.17339" y="6.17339" />
            </g>
            <rect fill="url(#paint4_linear_20_168)" height="87.9385" id="Rectangle 286" rx="5.55529" stroke="url(#paint5_linear_20_168)" strokeWidth="1.28101" width="340.107" x="17.3087" y="16.074" />
            <circle cx="65.1293" cy="59.5732" id="Ellipse 18" r="23.4589" stroke="url(#paint6_linear_20_168)" strokeWidth="1.85202" />
            <circle cx="125.011" cy="178.72" fill="url(#paint7_linear_20_168)" id="Ellipse 19" r="24.3849" />
            <circle cx="125.011" cy="178.72" fill="var(--fill-0, #FFC60B)" id="Ellipse 21" r="16.9768" />
            <path d={svgPaths.p374cc570} fill="url(#paint8_linear_20_168)" id="Vector 1" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="101.244" id="filter0_f_20_168" width="352.501" x="63.5859" y="119.147">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_20_168" stdDeviation="3.08669" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="101.244" id="filter1_f_20_168" width="352.501" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_20_168" stdDeviation="3.08669" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_168" x1="69.7593" x2="409.913" y1="169.768" y2="169.768">
              <stop stopColor="#FFC60B" />
              <stop offset="1" stopColor="#F8904F" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_20_168" x1="80.2541" x2="593.297" y1="179.19" y2="349.148">
              <stop offset="0.341346" stopColor="white" />
              <stop offset="1" stopColor="#F8D44F" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_20_168" x1="80.2541" x2="421.642" y1="179.19" y2="179.19">
              <stop stopColor="#E13D21" />
              <stop offset="1" stopColor="#FFC600" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_20_168" x1="6.17339" x2="346.327" y1="50.6218" y2="50.6218">
              <stop stopColor="#D93B20" />
              <stop offset="1" stopColor="#F8904F" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_20_168" x1="16.6682" x2="529.712" y1="60.0432" y2="230.002">
              <stop offset="0.341346" stopColor="white" />
              <stop offset="1" stopColor="#F8904F" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_20_168" x1="16.6682" x2="358.057" y1="60.0432" y2="60.0432">
              <stop stopColor="#E13D21" />
              <stop offset="1" stopColor="#FFC600" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_20_168" x1="65.1293" x2="65.1293" y1="35.1883" y2="83.958">
              <stop stopColor="#7B2112" />
              <stop offset="1" stopColor="#E13D21" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_20_168" x1="125.011" x2="125.011" y1="154.335" y2="203.105">
              <stop stopColor="#7B2112" />
              <stop offset="1" stopColor="#E13D21" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_20_168" x1="173.468" x2="417.135" y1="245.012" y2="252.933">
              <stop stopColor="#FFD3A4" />
              <stop offset="1" stopColor="#E13D21" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group3({ uiUxDesignerHovered }: { uiUxDesignerHovered?: boolean }) {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute flex items-center justify-center left-[113px] size-[478.326px] top-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[110.4deg]">
          <div className="border-3 border-[#f8904f] border-solid rounded-[10px] size-[372px]" />
        </div>
      </div>
      <Group2 uiUxDesignerHovered={uiUxDesignerHovered} />
    </div>
  );
}

function UxUiDesignCursor({ uiUxDesignerHovered }: { uiUxDesignerHovered?: boolean }) {
  return (
    <div className="absolute h-[478.326px] left-[168.1px] top-[532px] w-[591.326px]" data-name="ux/ui design cursor">
      <Group3 uiUxDesignerHovered={uiUxDesignerHovered} />
    </div>
  );
}

function Group1({ systemsThinkerHovered }: { systemsThinkerHovered?: boolean }) {
  return (
    <div 
      className="absolute h-[373.036px] left-[40px] top-[109px] w-[382px] transition-all duration-300 ease-out" 
      style={{
        transform: systemsThinkerHovered ? 'scale(1.15)' : 'scale(1)',
      }}
    >
      <div className="relative size-full">
        {/* Glimmer effect on hover */}
        {systemsThinkerHovered && (
          <div 
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-[10px] z-10"
            style={{
              animation: 'glimmer 1.5s ease-in-out infinite',
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                transform: 'translateX(-100%)',
                animation: 'glimmerSlide 1.5s ease-in-out infinite',
              }}
            />
          </div>
        )}
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 382 373.036">
          <g id="Group 883">
            <circle cx="121.719" cy="53.8092" fill="url(#paint0_linear_20_178)" id="Ellipse 12" r="38.2766" />
            <circle cx="38.2766" cy="215.336" fill="url(#paint1_linear_20_178)" id="Ellipse 13" r="38.2766" />
            <circle cx="127.844" cy="334.759" fill="url(#paint2_linear_20_178)" id="Ellipse 15" r="38.2766" />
            <circle cx="276.357" cy="234.475" fill="url(#paint3_linear_20_178)" id="Ellipse 16" r="38.2766" />
            <circle cx="343.723" cy="76.0096" fill="url(#paint4_linear_20_178)" id="Ellipse 17" r="38.2766" />
            <path d={svgPaths.p3cabf2c0} id="Vector 12" stroke="url(#paint5_linear_20_178)" strokeLinecap="round" strokeWidth="5" />
            <path d={svgPaths.p308bec80} id="Vector 14" stroke="url(#paint6_linear_20_178)" strokeLinecap="round" strokeWidth="5" />
            <path d={svgPaths.p3c31a080} id="Vector 15" stroke="url(#paint7_linear_20_178)" strokeLinecap="round" strokeWidth="5" />
            <path d={svgPaths.p345bfe20} id="Vector 13" stroke="url(#paint8_linear_20_178)" strokeLinecap="round" strokeWidth="5" />
            <path d={svgPaths.p2d823c00} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.945" id="Polygon 1" />
            <path d={svgPaths.pd2cfe00} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.945" id="Polygon 2" />
            <path d={svgPaths.p3d7fd00} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.945" id="Polygon 3" />
            <path d={svgPaths.pf4e6e00} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.945" id="Polygon 6" />
            <circle cx="198.273" cy="124.238" fill="url(#paint9_linear_20_178)" id="Ellipse 14" r="38.2766" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_178" x1="121.719" x2="121.719" y1="15.5327" y2="92.0858">
              <stop stopColor="#E13D21" />
              <stop offset="1" stopColor="#4B9A0F" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_20_178" x1="38.2766" x2="38.2766" y1="177.06" y2="253.613">
              <stop stopColor="#E13D21" />
              <stop offset="1" stopColor="#376215" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_20_178" x1="127.844" x2="127.844" y1="296.483" y2="373.036">
              <stop stopColor="#E13D21" />
              <stop offset="1" stopColor="#4B9A0F" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_20_178" x1="276.357" x2="276.357" y1="196.198" y2="272.751">
              <stop stopColor="#E13D21" />
              <stop offset="1" stopColor="#376215" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_20_178" x1="343.723" x2="343.723" y1="37.7331" y2="114.286">
              <stop stopColor="#E13D21" />
              <stop offset="1" stopColor="#4B9A0F" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_20_178" x1="53.7786" x2="53.7786" y1="72.182" y2="169.787">
              <stop stopColor="#7B2112" />
              <stop offset="1" stopColor="#376215" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_20_178" x1="180.993" x2="234.185" y1="26.6925" y2="108.53">
              <stop stopColor="#7B2112" />
              <stop offset="1" stopColor="#376215" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_20_178" x1="114.536" x2="187.363" y1="270.001" y2="205.017">
              <stop stopColor="#7B2112" />
              <stop offset="1" stopColor="#376215" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_20_178" x1="100.037" x2="107.276" y1="194.769" y2="97.4321">
              <stop stopColor="#7B2112" />
              <stop offset="1" stopColor="#376215" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_20_178" x1="198.273" x2="198.273" y1="85.9615" y2="162.515">
              <stop stopColor="#E13D21" />
              <stop offset="1" stopColor="#4B9A0F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group5({ systemsThinkerHovered }: { systemsThinkerHovered?: boolean }) {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute flex items-center justify-center left-0 size-[478.298px] top-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[20.39deg]">
          <div className="border-3 border-[#4b9a0f] border-solid rounded-[10px] size-[372px]" />
        </div>
      </div>
      <Group1 systemsThinkerHovered={systemsThinkerHovered} />
    </div>
  );
}

function SystemsThinkingExample({ systemsThinkerHovered }: { systemsThinkerHovered?: boolean }) {
  return (
    <div className="absolute h-[482.036px] left-[418.1px] top-[163px] w-[478.298px]" data-name="systems thinking example">
      <Group5 systemsThinkerHovered={systemsThinkerHovered} />
    </div>
  );
}

function Group6({ storytellerHovered, storytellerClicked, systemsThinkerHovered, uiUxDesignerHovered }: { storytellerHovered?: boolean; storytellerClicked?: boolean; systemsThinkerHovered?: boolean; uiUxDesignerHovered?: boolean }) {
  return (
    <div className="absolute contents left-0 top-0">
      <ChineseKnotVisualIllustration storytellerHovered={storytellerHovered} storytellerClicked={storytellerClicked} />
      <UxUiDesignCursor uiUxDesignerHovered={uiUxDesignerHovered} />
      <SystemsThinkingExample systemsThinkerHovered={systemsThinkerHovered} />
    </div>
  );
}

export default function HeroBannerVisualComponent({ storytellerHovered, storytellerClicked, systemsThinkerHovered, uiUxDesignerHovered }: HeroBannerProps) {
  return (
    <div className="relative size-full" data-name="Hero banner visual component">
      <Group6 storytellerHovered={storytellerHovered} storytellerClicked={storytellerClicked} systemsThinkerHovered={systemsThinkerHovered} uiUxDesignerHovered={uiUxDesignerHovered} />
    </div>
  );
}