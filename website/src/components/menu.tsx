import images from "../../public/images";

export function Header() {
  return (
    <header className="flex justify-end w-[97%] max-w-[1124px] py-[21px] px-[20px] bg-[white] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-[5px]">
      <div className="flex items-center gap-[14px]">
        <div className="leading-[18px]">
          <h2 className="text-[16px] text-[#454546]">John Doe</h2>
          <h3 className="text-[#9d9d9f]">Admin</h3>
        </div>
        {/* content */}
        <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full overflow-hidden bg-[#7466F0]">
          <img
            className="relative mt-[2px] scale-[1.35]"
            src={`http://localhost:3000/${images.avatar.john}`}
            alt="John Doe"
          />
        </div>
        {/* circle */}
      </div>
      {/* avatar */}
    </header>
  );
}
