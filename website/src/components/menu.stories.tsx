import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./menu";
import images from "../../public/images";
import PopUpButton from "./popups/pop-button";
import { useState } from "react";

const meta: Meta<typeof Header> = {
  title: "components/menu",
  tags: ["autodocs"],
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  render: () => {
    const [isClick, setIsClick] = useState(false);

    return (
      <>
        <header className=" flex justify-end w-[97%] max-w-[1124px] py-[21px] px-[20px] bg-[white] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-[5px]">
          <div className="flex flex-col items-end gap-[10px]">
            <button
              onClick={() => setIsClick(!isClick)}
              className="flex items-center gap-[14px]"
            >
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
            </button>
            <PopUpButton
              className="mt-[75px] w-[200px] h-[200px]"
              clickBoo={isClick}
            />
          </div>

          {/* avatar */}
        </header>
      </>
    );
  },
};
