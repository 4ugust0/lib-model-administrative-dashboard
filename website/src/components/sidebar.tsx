import { CaretDown } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

/* This object is a controller for your datas */
interface ObjectDataModelInterface {
  title: string; // Title of your group sidebar
  navsButton: {
    icon: string; // Icon of Button
    title: string; // Title of Button
    urlSync: string; // Sync this button at a page
    offSetCategory: boolean;
    categories?: {
      icon: string; // Icon of Button
      title: string; // Title of Button
      urlSync: string; // Sync this button at a page
    }[];
  }[];
}
[];

const objectDataModel: ObjectDataModelInterface[] = [
  {
    // Button no-category
    title: "Home",
    navsButton: [
      {
        icon: "your-icon",
        title: "Dashboard",
        urlSync: "#",
        offSetCategory: false,
        categories: [],
      },
    ],
  },
  {
    title: "Title of Buttons Category",
    navsButton: [
      {
        // Button category
        icon: "your-icon",
        title: "Item 1",
        urlSync: "#",
        offSetCategory: false,
        categories: [
          {
            icon: "",
            title: "SubItem 01",
            urlSync: "your-url",
          },
          {
            icon: "",
            title: "SubItem 02",
            urlSync: "your-url",
          },
        ],
      },
      {
        icon: "your-icon",
        title: "Item 2",
        urlSync: "#",
        offSetCategory: false,
        categories: [
          {
            icon: "",
            title: "SubItem 01",
            urlSync: "your-url",
          },
          {
            icon: "",
            title: "SubItem 02",
            urlSync: "your-url",
          },
          {
            icon: "",
            title: "SubItem 03",
            urlSync: "your-url",
          },
        ],
      },
      {
        icon: "your-icon",
        title: "Item 3",
        urlSync: "#",
        offSetCategory: false,
        categories: [
          {
            icon: "",
            title: "SubItem 01",
            urlSync: "your-url",
          },
          {
            icon: "",
            title: "SubItem 02",
            urlSync: "your-url",
          },
          {
            icon: "",
            title: "SubItem 03",
            urlSync: "your-url",
          },
          {
            icon: "",
            title: "SubItem 04",
            urlSync: "your-url",
          },
        ],
      },
    ],
  },
];

/* --------------------------------------------------------------------------------- */

export default function Sidebar() {
  const [objectData, setObjectData] = useState<ObjectDataModelInterface[]>([]);

  useEffect(() => {
    setObjectData(objectDataModel);
  }, []);

  const toggleContent = (idGroup: string, idButton: string) => {
    setObjectData((prevData) => {
      return prevData.map((group) => {
        if (group.title === idGroup) {
          return {
            ...group,
            navsButton: group.navsButton.map((button) => {
              if (button.title === idButton) {
                return {
                  ...button,
                  offSetCategory: !button.offSetCategory,
                };
              }
              return button;
            }),
          };
        }
        return group;
      });
    });

    console.log(objectData);
  };

  return (
    <>
      <section className="flex flex-col gap-[5px] w-[257px] bg-[white] h-[100vh] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <div className="p-[10px] py-[30px]">
          <a href="#">
            <img
              className=" mx-auto w-[162px] h-[62px] bg-[#c4c4c4]"
              src="#"
              alt="your-logotype"
            />
          </a>
        </div>
        {/* logotipo */}
        <hr className="w-full bg-[#c4c4c4] h-[1.5px] opacity-[0.4]" />
        {/* Define map  */}
        {objectData.map((val, index) => (
          <>
            <div
              key={index}
              className="mt-[20px] px-[20px] flex flex-col gap-[10px]"
            >
              <h1 className="text-[#898989] font-[600] text-[16px]">
                {val.title}
              </h1>
              {val.navsButton.map((buttonValues, index) => (
                <>
                  {(buttonValues.categories?.length as any) > 0 ? (
                    <button
                      key={index}
                      onClick={() =>
                        toggleContent(val.title, buttonValues.title)
                      }
                      className="flex item-center gap-[10px] hover:bg-[#1e40af] hover:text-[white] rounded-[5px] p-[10px] duration-200"
                    >
                      <img
                        className="bg-[#c4c4c4] w-[24px] h-[24px]"
                        src={buttonValues.icon}
                        alt={buttonValues.title}
                      />
                      <div className="w-full flex justify-between items-center">
                        <p className="text-left">{buttonValues.title}</p>
                        <CaretDown
                          className={`${
                            buttonValues.offSetCategory
                              ? "rotate-[180deg]"
                              : "rotate-[0deg]"
                          } duration-300`}
                          size={24}
                          weight="bold"
                        />
                        {/* Phosphor Icons */}
                      </div>
                    </button>
                  ) : (
                    <a
                      key={index}
                      className="w-full"
                      href={buttonValues.urlSync}
                    >
                      <button className="w-full flex item-center gap-[10px] hover:bg-[#1e40af] hover:text-[white] rounded-[5px] p-[10px] duration-200">
                        <img
                          className="bg-[#c4c4c4] w-[24px] h-[24px]"
                          src={buttonValues.icon}
                          alt={buttonValues.title}
                        />
                        <div className="w-full flex justify-between items-center">
                          <p className="text-left">{buttonValues.title}</p>
                        </div>
                      </button>
                    </a>
                  )}
                  {/* item */}
                  {/* ---------------------------------------- */}
                  {buttonValues.categories?.map(
                    (valueCategoriesButton, index) => (
                      <>
                        {buttonValues.offSetCategory ? (
                          <div key={index} className="flex flex-col gap-[4px]">
                            <a
                              className="w-[95%]"
                              href={valueCategoriesButton.urlSync}
                            >
                              <button className="w-[95%] ml-[20px] flex item-center gap-[10px] hover:bg-[#1e40af] hover:text-[white] rounded-[5px] p-[10px] duration-200">
                                <img
                                  className="bg-[#c4c4c4] w-[24px] h-[24px]"
                                  src={valueCategoriesButton.urlSync}
                                  alt={valueCategoriesButton.title}
                                />
                                <div className="w-full flex justify-between items-center">
                                  <p className="text-left">
                                    {valueCategoriesButton.title}
                                  </p>
                                </div>
                              </button>
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                        {/* pop up button category */}
                      </>
                    )
                  )}
                </>
              ))}
            </div>

            <hr className="w-full bg-[#c4c4c4] h-[1.5px] opacity-[0.7]" />
          </>
        ))}
        {/* wrapper-elements-group */}
      </section>
    </>
  );
}
