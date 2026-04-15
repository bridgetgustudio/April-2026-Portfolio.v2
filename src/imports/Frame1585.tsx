import imgRectangle1 from "figma:asset/d8a7d51631e77ebb878d8d0d2b038229c436e65e.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[423.979px] left-0 rounded-[9.792px] top-0 w-[752px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9.792px] size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}