import svgPaths from "./svg-v7n73w4geb";
import imgHeroImage from "figma:asset/3a119a53476727ba30f6774a30257e61c70a4354.png";
import imgGettyImages11751179862 from "figma:asset/6f822317969cb39a219c32841c1eb8ada57ae892.png";
import imgDemand0011 from "figma:asset/0707e6b2022462187b7b2dab43ed95bab6b24a66.png";

function Background() {
  return <div className="absolute bg-[#fff2f0] inset-0" data-name="Background" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p19eb30c0} fill="var(--fill-0, #DD1D21)" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text">
      <p className="flex-[1_0_0] font-['ShellHeavy:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#343434] text-[17px] w-full whitespace-pre-wrap">Service Outage</p>
    </div>
  );
}

function Message1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px py-[9px] relative" data-name="Message">
      <Icon />
      <Text />
    </div>
  );
}

function NavigationCross() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation/Cross">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation/Cross">
          <path d={svgPaths.pd321100} fill="var(--fill-0, #343434)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Inner() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6px] py-[12px] relative rounded-[2px] shrink-0" data-name="Inner">
      <NavigationCross />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 w-[48px]" data-name="Button">
      <Inner />
    </div>
  );
}

function VersionHelperOverlay() {
  return <div className="absolute bg-[rgba(255,0,0,0)] inset-0" data-name="Version Helper Overlay" />;
}

function Message() {
  return (
    <div className="absolute bg-white h-[145px] left-0 rounded-[2px] top-[111px] w-[375px]" data-name="Message">
      <div className="content-stretch flex gap-[8px] items-start overflow-clip pl-[20px] pr-[4px] py-[4px] relative rounded-[inherit] size-full">
        <Background />
        <Message1 />
        <Button />
        <VersionHelperOverlay />
      </div>
      <div aria-hidden="true" className="absolute border-[#dd1d21] border-l-4 border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.1),0px_2px_5px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function SwitchVariant() {
  return (
    <div className="bg-[#f5f5f5] h-[40px] overflow-clip relative shrink-0 w-[110px]" data-name="Switch/Variant3">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['ShellBook:Regular',sans-serif] h-[40px] justify-center leading-[0] left-[55px] not-italic text-[#404040] text-[14px] text-center top-[20px] w-[110px]">
        <p className="leading-[22px] whitespace-pre-wrap">Residential</p>
      </div>
    </div>
  );
}

function SwitchVariant1() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-[110px]" data-name="Switch/Variant3">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['ShellHeavy:Regular',sans-serif] h-[40px] justify-center leading-[0] left-[55px] not-italic text-[#404040] text-[14px] text-center top-[20px] w-[110px]">
          <p className="leading-[22px] whitespace-pre-wrap">Business</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0097bb] border-solid border-t-4 inset-0 pointer-events-none" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center mr-[-68px] relative shrink-0 w-[325px]">
      <SwitchVariant />
      <SwitchVariant1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] h-[40px] min-h-px min-w-px mr-[-68px] relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center pr-[68px] relative shrink-0 w-full">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0.52%_0_0.88%_39.13%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.4743 35.4949">
        <g id="Group">
          <g id="Group_2">
            <path clipRule="evenodd" d={svgPaths.p1420fd00} fill="var(--fill-0, #DD1D21)" fillRule="evenodd" id="Path" />
            <path clipRule="evenodd" d={svgPaths.p1758c000} fill="var(--fill-0, #DD1D21)" fillRule="evenodd" id="Path_2" />
            <path clipRule="evenodd" d={svgPaths.p2b57f580} fill="var(--fill-0, #DD1D21)" fillRule="evenodd" id="Shape" />
            <rect fill="var(--fill-0, #DD1D21)" height="13.3125" id="Rectangle" width="2.93267" x="29.7212" />
            <rect fill="var(--fill-0, #DD1D21)" height="13.3125" id="Rectangle_2" width="2.93267" x="34.3034" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p35ef7e00} fill="var(--fill-0, #0097BB)" fillRule="evenodd" id="Path_3" />
          <path clipRule="evenodd" d={svgPaths.p3eb83bc0} fill="var(--fill-0, #0097BB)" fillRule="evenodd" id="Path_4" />
          <path clipRule="evenodd" d={svgPaths.p37be4a00} fill="var(--fill-0, #0097BB)" fillRule="evenodd" id="Path_5" />
          <path clipRule="evenodd" d={svgPaths.p37371f00} fill="var(--fill-0, #0097BB)" fillRule="evenodd" id="Path_6" />
          <path clipRule="evenodd" d={svgPaths.p39d6e900} fill="var(--fill-0, #0097BB)" fillRule="evenodd" id="Path_7" />
          <path clipRule="evenodd" d={svgPaths.pc2d3270} fill="var(--fill-0, #0097BB)" fillRule="evenodd" id="Path_8" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0.44%_74.17%_0.21%_0.11%]" data-name="Group">
      <div className="absolute inset-[-3.58%_-3.31%_-3.5%_-3.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.3483 38.2933">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p19640e80} fillRule="evenodd" id="Path" stroke="var(--stroke-0, white)" strokeWidth="2.558" />
            <path clipRule="evenodd" d={svgPaths.p19640e80} fill="var(--fill-0, #FBCE07)" fillRule="evenodd" id="Path_2" />
            <path clipRule="evenodd" d={svgPaths.p29e98500} fill="var(--fill-0, #DD1D21)" fillRule="evenodd" id="Shape" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ShellEnergyRgbLu() {
  return (
    <div className="absolute contents inset-[0.44%_0_0.21%_0.11%]" data-name="Shell Energy RGB LU">
      <Group />
      <Group1 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[36px] left-[18px] top-[18px] w-[147px]" data-name="Logo">
      <ShellEnergyRgbLu />
    </div>
  );
}

function IconsEssentialMenu() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+22px)] size-[30px] top-1/2" data-name="Icons / Essential / Menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Icons / Essential / Menu">
          <path clipRule="evenodd" d={svgPaths.p3aa14980} fill="var(--fill-0, #292929)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[30px] overflow-clip right-[18px] top-[21px] w-[74px]" data-name="Group">
      <p className="absolute font-['ShellBook:Regular',sans-serif] leading-[24px] not-italic right-[38px] text-[#404040] text-[14px] text-right top-[calc(50%-11px)]">Menu</p>
      <IconsEssentialMenu />
    </div>
  );
}

function HeaderWebsiteMobileDefault() {
  return (
    <div className="h-[71px] relative shrink-0 w-full" data-name="Header / Website / Mobile / Default">
      <div className="absolute bg-white inset-0" data-name="Background colour" />
      <Logo />
      <Group2 />
    </div>
  );
}

function MobileNav() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[375px]" data-name="Mobile Nav">
      <Frame2 />
      <HeaderWebsiteMobileDefault />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="absolute left-0 overflow-clip size-[375px] top-0" data-name="Hero Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeroImage} />
      <div className="absolute h-[555px] left-[-42px] top-[-107px] w-[833px]" data-name="GettyImages-1175117986 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.01%] left-[-26.57%] max-w-none top-[5.78%] w-full" src={imgGettyImages11751179862} />
        </div>
      </div>
      <div className="absolute h-[376px] left-0 top-[-1px] w-[375px]" data-name="Demand001 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain opacity-20 pointer-events-none size-full" src={imgDemand0011} />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 w-full" data-name="Text">
      <p className="flex-[1_0_0] font-['ShellHeavy:Regular',sans-serif] leading-[40px] min-h-px min-w-px not-italic relative text-[#404040] text-[32px] whitespace-pre-wrap">Demand Response</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 w-full" data-name="Text">
      <p className="flex-[1_0_0] font-['ShellBook:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#404040] text-[20px] whitespace-pre-wrap">Generate a new revenue stream for your business while helping to stabilize the grid, with our demand response program.</p>
    </div>
  );
}

function HeroTitle() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[30px] items-start left-[25px] overflow-clip px-[20px] py-[28px] rounded-[20px] top-[254px] w-[325px]" data-name="Hero Title">
      <Text1 />
      <Text2 />
    </div>
  );
}

function MobileB2BHeroImage() {
  return (
    <div className="absolute h-[532px] left-0 top-[256px] w-[375px]" data-name="Mobile B2B Hero Image">
      <HeroImage />
      <HeroTitle />
    </div>
  );
}

export default function RedServiceBanner() {
  return (
    <div className="relative size-full" data-name="Red Service Banner">
      <Message />
      <MobileNav />
      <MobileB2BHeroImage />
      <p className="absolute font-['ShellBook:Regular',sans-serif] h-[85px] leading-[17px] left-[60px] not-italic text-[#343434] text-[13.6px] top-[154px] w-[276px] whitespace-pre-wrap">We are experiencing a temporary service outage. Please note that self-service options are still available on your customer portal. If you are experiencing a power outage, please contact your local utility.</p>
    </div>
  );
}