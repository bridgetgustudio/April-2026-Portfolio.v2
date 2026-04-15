import imgStickySidebarCta1 from "figma:asset/d8a7d51631e77ebb878d8d0d2b038229c436e65e.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[432px] left-0 top-0 w-[768px]" data-name="Sticky Sidebar CTA 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStickySidebarCta1} />
      </div>
    </div>
  );
}