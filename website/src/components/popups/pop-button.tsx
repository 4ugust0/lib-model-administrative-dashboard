interface PopUpButtonInterface {
  className?: string;
  clickBoo: boolean;
}

export default function PopUpButton(props: PopUpButtonInterface) {
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
