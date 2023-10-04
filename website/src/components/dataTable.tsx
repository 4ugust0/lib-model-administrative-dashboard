import * as React from "react";

export default function DataTable() {
  interface Column {
    field: string;
    headerName: string;
  }

  const columns: Column[] = [
    // Create yours columns for table in here
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

  const rows: Record<string, string | number>[] = [
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
  );
}
