import imgRectangle2 from "figma:asset/6f140da1efae4ab6f986b6da3050fafcc798c4d8.png";

export default function Frame() {
  return (
    <div className="relative size-full mx-[0px] my-[20px]">
      <div className="absolute h-[311px] left-0 top-0 w-[768px]">
        <img alt="" className="absolute top-0 left-0 max-w-none object-contain pointer-events-none size-full m-[30px]" style={{ transform: 'scale(1.5)', transformOrigin: 'top left' }} src={imgRectangle2} />
      </div>
    </div>
  );
}