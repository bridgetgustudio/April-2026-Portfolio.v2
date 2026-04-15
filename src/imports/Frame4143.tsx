function Header() {
  return (
    <div className="absolute content-stretch flex h-[38px] items-center left-[21px] top-[15px] w-[271px]" data-name="Header">
      <p className="flex-[1_0_0] font-['Avenir_Next:Demi_Bold',sans-serif] leading-[40px] min-h-px min-w-px not-italic relative text-[#0097bb] text-[32px] whitespace-pre-wrap">{`Lead the change. `}</p>
    </div>
  );
}

function Inner1() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[24px] pr-[20px] py-[12px] relative rounded-[2px] shrink-0" data-name="Inner">
      <p className="font-['ShellMedium:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[20px] text-white">Contact Us</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#0097bb] content-stretch flex items-center justify-center left-0 rounded-[8px] top-[10px]" data-name="Button">
      <Inner1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[44px] left-[20px] top-[111px] w-[122px]">
      <Button />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[120px] left-px top-[65px] w-[310px]">
      <p className="absolute font-['ShellBook:Regular',sans-serif] h-[75px] leading-[32px] left-[21px] not-italic text-[#4a4a4a] text-[20px] top-0 w-[270px] whitespace-pre-wrap">Contact us here to learn more about how Shell can help your business energy needs:</p>
      <Frame1 />
    </div>
  );
}

function Component2Up() {
  return (
    <div className="absolute h-[305px] left-[10px] top-0 w-[310px]" data-name="2up">
      <Header />
      <Frame />
    </div>
  );
}

function Inner() {
  return (
    <div className="h-[294px] overflow-clip relative shrink-0 w-full" data-name="Inner">
      <Component2Up />
    </div>
  );
}

function Ygw() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[280px] items-start py-[16px] relative rounded-[24px] shrink-0 w-full" data-name="YGW">
      <Inner />
    </div>
  );
}

function StickySidebarCtaWhiteWithSkyBlueCta() {
  return (
    <div className="relative content-stretch flex flex-col h-[280px] items-start w-[330px]" data-name="Sticky Sidebar CTA/White with Sky Blue CTA">
      <Ygw />
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute content-stretch flex h-[38px] items-center left-[21px] top-[15px] w-[271px]" data-name="Header">
      <p className="flex-[1_0_0] font-['Avenir_Next:Demi_Bold',sans-serif] leading-[40px] min-h-px min-w-px not-italic relative text-[#4a4a4a] text-[32px] whitespace-pre-wrap">{`Lead the change. `}</p>
    </div>
  );
}

function Inner3() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[24px] pr-[20px] py-[12px] relative rounded-[2px] shrink-0" data-name="Inner">
      <p className="font-['ShellMedium:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[20px] text-white">Contact Us</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#ee282a] content-stretch flex items-center justify-center left-0 rounded-[8px] top-0" data-name="Button">
      <Inner3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[44px] left-[21px] top-[120px] w-[122px]">
      <Button1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[120px] left-px top-[65px] w-[310px]">
      <p className="absolute font-['ShellBook:Regular',sans-serif] h-[75px] leading-[32px] left-[21px] not-italic text-[#4a4a4a] text-[20px] top-0 w-[270px] whitespace-pre-wrap">Contact us here to learn more about how Shell can help your business energy needs:</p>
      <Frame3 />
    </div>
  );
}

function Component2Up1() {
  return (
    <div className="absolute h-[305px] left-[10px] top-0 w-[310px]" data-name="2up">
      <Header1 />
      <Frame2 />
    </div>
  );
}

function Inner2() {
  return (
    <div className="h-[294px] overflow-clip relative shrink-0 w-full" data-name="Inner">
      <Component2Up1 />
    </div>
  );
}

function Ygw1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[280px] items-start py-[16px] relative rounded-[24px] shrink-0 w-full" data-name="YGW">
      <Inner2 />
    </div>
  );
}

function StickySidebarCtaWhiteWithRedCta() {
  return (
    <div className="relative content-stretch flex flex-col h-[280px] items-start w-[330px]" data-name="Sticky Sidebar CTA/White with Red CTA">
      <Ygw1 />
    </div>
  );
}

function Header2() {
  return (
    <div className="absolute content-stretch flex h-[38px] items-center left-[21px] top-[15px] w-[271px]" data-name="Header">
      <p className="flex-[1_0_0] font-['Avenir_Next:Demi_Bold',sans-serif] leading-[40px] min-h-px min-w-px not-italic relative text-[#4a4a4a] text-[32px] whitespace-pre-wrap">{`Lead the change. `}</p>
    </div>
  );
}

function Inner5() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[24px] pr-[20px] py-[12px] relative rounded-[2px] shrink-0" data-name="Inner">
      <p className="font-['ShellMedium:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#404040] text-[20px]">Contact Us</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 rounded-[8px] top-0" data-name="Button">
      <Inner5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[44px] left-[21px] top-[120px] w-[122px]">
      <Button2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[120px] left-px top-[65px] w-[310px]">
      <p className="absolute font-['ShellBook:Regular',sans-serif] h-[75px] leading-[32px] left-[21px] not-italic text-[#4a4a4a] text-[20px] top-0 w-[270px] whitespace-pre-wrap">Contact us here to learn more about how Shell can help your business energy needs:</p>
      <Frame5 />
    </div>
  );
}

function Component2Up2() {
  return (
    <div className="absolute h-[305px] left-[10px] top-0 w-[310px]" data-name="2up">
      <Header2 />
      <Frame4 />
    </div>
  );
}

function Inner4() {
  return (
    <div className="h-[294px] overflow-clip relative shrink-0 w-full" data-name="Inner">
      <Component2Up2 />
    </div>
  );
}

function Ygw2() {
  return (
    <div className="bg-[#ffc600] content-stretch flex flex-col h-[280px] items-start relative rounded-[24px] shrink-0 w-full" style={{ paddingTop: '16px', paddingRight: '-75px', paddingBottom: '16px', paddingLeft: '-75px' }} data-name="YGW">
      <Inner4 />
    </div>
  );
}

function StickySidebarCtaYellow() {
  return (
    <div className="relative content-stretch flex flex-col h-[280px] items-start w-[330px]" data-name="Sticky Sidebar CTA/Yellow">
      <Ygw2 />
    </div>
  );
}

function Header3() {
  return (
    <div className="absolute content-stretch flex h-[38px] items-center left-[21px] top-[15px] w-[271px]" data-name="Header">
      <p className="flex-[1_0_0] font-['Avenir_Next:Demi_Bold',sans-serif] leading-[40px] min-h-px min-w-px not-italic relative text-[#4a4a4a] text-[32px] whitespace-pre-wrap">{`Lead the change. `}</p>
    </div>
  );
}

function Inner7() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[24px] pr-[20px] py-[12px] relative rounded-[2px] shrink-0" data-name="Inner">
      <p className="font-['ShellMedium:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[20px] text-white">Contact Us</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#4a4a4a] content-stretch flex items-center justify-center left-0 rounded-[8px] top-0" data-name="Button">
      <Inner7 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[44px] left-[21px] top-[120px] w-[122px]">
      <Button3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[120px] left-px top-[65px] w-[310px]">
      <p className="absolute font-['ShellBook:Regular',sans-serif] h-[75px] leading-[32px] left-[21px] not-italic text-[#4a4a4a] text-[20px] top-0 w-[270px] whitespace-pre-wrap">Contact us here to learn more about how Shell can help your business energy needs:</p>
      <Frame7 />
    </div>
  );
}

function Component2Up3() {
  return (
    <div className="absolute h-[305px] left-[10px] top-0 w-[310px]" data-name="2up">
      <Header3 />
      <Frame6 />
    </div>
  );
}

function Inner6() {
  return (
    <div className="h-[294px] overflow-clip relative shrink-0 w-full" data-name="Inner">
      <Component2Up3 />
    </div>
  );
}

function Ygw3() {
  return (
    <div className="bg-[#ffc600] content-stretch flex flex-col h-[280px] items-start relative rounded-[24px] shrink-0 w-full" style={{ paddingTop: '16px', paddingRight: '-75px', paddingBottom: '16px', paddingLeft: '-75px' }} data-name="YGW">
      <Inner6 />
    </div>
  );
}

function StickySidebarCtaYellowWithGreyCta() {
  return (
    <div className="relative content-stretch flex flex-col h-[280px] items-start w-[330px]" data-name="Sticky Sidebar CTA/Yellow with Grey CTA">
      <Ygw3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[rgba(50,45,52,0.6)] content-stretch flex gap-[10px] h-[217px] items-center justify-center leading-[normal] left-0 not-italic px-[28px] py-[22px] rounded-[20px] text-[33.018px] text-white top-0 w-[1103px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[48px] top-[37px]">Goals and Guidelines:</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[48px] top-[87px] w-[1027px] whitespace-pre-wrap">{`A new component added to the right side column of article pages to relay important messaging/CTA’s. `}</p>
    </div>
  );
}

function Header4() {
  return (
    <div className="absolute content-stretch flex h-[38px] items-center left-[20px] top-[15px] w-[271px]" data-name="Header">
      <p className="flex-[1_0_0] font-['Avenir_Next:Demi_Bold',sans-serif] leading-[40px] min-h-px min-w-px not-italic relative text-[32px] text-white whitespace-pre-wrap">{`Lead the change. `}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[120px] left-px top-[65px] w-[310px]">
      <p className="absolute font-['ShellBook:Regular',sans-serif] h-[75px] leading-[32px] left-[20px] not-italic text-[24px] text-white top-0 w-[270px] whitespace-pre-wrap">Contact us here to learn more about how Shell can help your business energy needs:</p>
    </div>
  );
}

function Inner9() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[24px] pr-[20px] py-[12px] relative rounded-[2px] shrink-0" data-name="Inner">
      <p className="font-['ShellMedium:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#404040] text-[20px]">Contact Us</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#ffcd02] content-stretch flex items-center justify-center left-0 rounded-[8px] top-[-7px]" data-name="Button">
      <Inner9 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[44px] left-[20px] top-[217px] w-[122px]">
      <Button4 />
    </div>
  );
}

function Component2Up4() {
  return (
    <div className="absolute h-[305px] left-[10px] top-0 w-[310px]" data-name="2up">
      <Header4 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Inner8() {
  return (
    <div className="h-[294px] overflow-clip relative shrink-0 w-full" data-name="Inner">
      <Component2Up4 />
    </div>
  );
}

function Ygw4() {
  return (
    <div className="bg-[#0097bb] content-stretch flex flex-col h-[310px] items-start py-[16px] relative rounded-[24px] shrink-0 w-full" data-name="YGW">
      <Inner8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col h-[310px] items-start relative shrink-0 w-full">
      <Ygw4 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col h-[310px] items-start relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function StickySidebarCtaBlue() {
  return (
    <div className="content-stretch flex flex-col h-[310px] items-start pb-[90px] pointer-events-auto sticky top-0 w-[330px]" data-name="Sticky Sidebar CTA/Blue">
      <Frame11 />
    </div>
  );
}

export default function Frame13() {
  return (
    <div className="relative w-full h-[900px] p-4">
      {/* Goals and Guidelines Header */}
      <div className="mb-6">
        
      </div>

      {/* Cards Grid - 2 rows */}
      
    </div>
  );
}