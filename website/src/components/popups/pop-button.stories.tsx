import { Meta, StoryObj } from "@storybook/react";
import PopUpButton from "./pop-button";
import { useState } from "react";

const meta: Meta<typeof PopUpButton> = {
  title: "popup/popButton",
  component: PopUpButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PopUpButton>;

export const Primary: Story = {
  render: () => {
    // States for Test
    const [isClick, setIsClick] = useState(false);

    // Interface
    interface PopUpButtonInterface {
      className?: string;
      clickBoo?: boolean;
    }

    // Component
    function PopUpButton(props: PopUpButtonInterface) {
      return (
        <div
          className={`${props.clickBoo ? "block" : "hidden"}  ${
            props.className
          } absolute overflow-hidden bg-[white] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg p-[30px]`}
        >
          // Content
        </div>
      );
    }

    // Added effects in the popUp according to your liked

    // Testing
    return (
      <>
        <button
          onClick={() => setIsClick(!isClick)}
          className="mb-[10px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Click here
        </button>

        {/* Define Width and Height with className */}
        <PopUpButton className="w-[300px] h-[300px]" clickBoo={isClick} />

        {/* Modify the popUp according to your liked */}
      </>
    );
  },
};
