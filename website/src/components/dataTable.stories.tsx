import { Meta, StoryObj } from "@storybook/react";
import DataTable from "./dataTable";
import * as React from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const meta: Meta<typeof DataTable> = {
  title: "components/Data Table",
  component: DataTable,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Primary: Story = {
  render: () => {
    interface Column {
      field: string;
      headerName: string;
    }

    const columns: Column[] = [
      {
        field: "id",
        headerName: "ID",
      },
      {
        field: "Song",
        headerName: "Song",
      },
      {
        field: "Artist",
        headerName: "Artist",
      },
      {
        field: "Year",
        headerName: "Year",
      },
      {
        field: "button",
        headerName: "Button",
      },
    ];

    const rows: Record<string, string | number | JSX.Element>[] = [
      // Yours DATA just at columns
      {
        id: 1,
        Song: "Music",
        Artist: "Joe Dohn",
        Year: "19-09-2023",
        button: "Button",
      },
      {
        id: 2,
        Song: "Music",
        Artist: "Joe Dohn",
        Year: "19-09-2023",
        button: "Button",
      },
      {
        id: 3,
        Song: "Music",
        Artist: "Joe Dohn",
        Year: "19-09-2023",
        button: "Button",
      },
      {
        id: 4,
        Song: "Music",
        Artist: "Joe Dohn",
        Year: "19-09-2023",
        button: "Button",
      },
      {
        id: 5,
        Song: "Music",
        Artist: "Joe Dohn",
        Year: "19-09-2023",
        button: "Button",
      },
    ];

    return (
      <>
        <table className="text-left table-fixed w-full">
          <thead>
            <tr>
              {columns.map((val, index) => (
                <>
                  <th
                    key={index}
                    className="p-[7px] border border-[2px] border-black"
                  >
                    {val.headerName}
                  </th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td
                    className="p-[7px] border border-[2px] border-black"
                    key={col.field}
                  >
                    {row[col.field] ? row[col.field] : "undefined"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center gap-[10px] text-center py-[20px] justify-end">
          <div className="flex items-center gap-[10px]">
            Colunas por página:
            <span className="p-[3px] px-[10px] border border-[2px] border-black text-[15px]">
              30
            </span>
          </div>
          {/* rows per page */}
          <div className=" flex gap-[10px]">00 - 00 de 000</div>

          <div className="flex items-center gap-[5px]">
            <CaretLeft className="cursor-pointer" size={32} weight="bold" />
            <CaretRight className="cursor-pointer" size={32} weight="bold" />
          </div>
        </div>
        {/* pagination */}
      </>
    );
  },
};
