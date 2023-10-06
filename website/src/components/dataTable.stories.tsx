import { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { filter } from "lodash";

const meta: Meta = {
  title: "components/Data Table",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => {
    interface Column {
      field: string;
      headerName: string;
      offSet: boolean;
    }

    const [listingItems, setListingItems] = React.useState<
      Record<string, string | number | JSX.Element>[]
    >([]);

    const [limitItemsDefine, setLimitItemsDefine] = React.useState(5);
    const [pageSelect, setPageSelect] = React.useState(1);

    const [search, setSearch] = React.useState("");

    const columns: Column[] = [
      {
        field: "id",
        headerName: "ID",
        offSet: true,
      },
      {
        field: "Song",
        headerName: "Song",
        offSet: true,
      },
      {
        field: "Artist",
        headerName: "Artist",
        offSet: true,
      },
      {
        field: "Year",
        headerName: "Year",
        offSet: true,
      },
      {
        field: "button",
        headerName: "Button",
        offSet: true,
      },
    ];

    const rows: Record<string, string | number | JSX.Element>[] = [
      {
        id: 1,
        Song: "Music",
        Artist: "Joe Dohn",
        Year: "19-09-2023",
        button: "Button",
      },
      {
        id: 2,
        Song: "Another Song",
        Artist: "John Smith",
        Year: "25-05-2022",
        button: "Click Me",
      },
      {
        id: 3,
        Song: "Rock Anthem",
        Artist: "Jane Doe",
        Year: "12-12-2024",
        button: "Press Here",
      },
      {
        id: 4,
        Song: "Pop Hit",
        Artist: "Alice Johnson",
        Year: "03-08-2023",
        button: "Listen Now",
      },
      {
        id: 5,
        Song: "Jazz Fusion",
        Artist: "David Brown",
        Year: "15-07-2023",
        button: "Play Song",
      },
      {
        id: 6,
        Song: "Country Ballad",
        Artist: "Emily Wilson",
        Year: "09-11-2024",
        button: "Listen Again",
      },
      {
        id: 7,
        Song: "Hip-Hop Groove",
        Artist: "Michael Clark",
        Year: "30-03-2023",
        button: "Tap Here",
      },
      {
        id: 8,
        Song: "Classical Sonata",
        Artist: "Sophia Taylor",
        Year: "22-06-2023",
        button: "Play Track",
      },
      {
        id: 9,
        Song: "R&B Soul",
        Artist: "Daniel Martinez",
        Year: "14-04-2023",
        button: "Enjoy Music",
      },
      {
        id: 10,
        Song: "Electronic Beats",
        Artist: "Olivia Lee",
        Year: "08-09-2023",
        button: "Press Play",
      },
      {
        id: 11,
        Song: "Indie Melody",
        Artist: "William White",
        Year: "17-10-2024",
        button: "Listen In",
      },
      {
        id: 12,
        Song: "Reggae Vibes",
        Artist: "Mia Green",
        Year: "06-03-2023",
        button: "Groove On",
      },
      {
        id: 13,
        Song: "Blues Jam",
        Artist: "Liam Turner",
        Year: "11-11-2023",
        button: "Blues It",
      },
      {
        id: 14,
        Song: "Funk Groove",
        Artist: "Ava Anderson",
        Year: "28-02-2024",
        button: "Get Funky",
      },
      {
        id: 15,
        Song: "Latin Rhythm",
        Artist: "Noah Garcia",
        Year: "19-05-2023",
        button: "Dance Now",
      },
      {
        id: 16,
        Song: "Metallica",
        Artist: "Ethan Miller",
        Year: "02-07-2024",
        button: "Rock On",
      },
      {
        id: 17,
        Song: "Piano Sonata",
        Artist: "Grace Lewis",
        Year: "10-01-2023",
        button: "Piano Solo",
      },
      {
        id: 18,
        Song: "Opera Aria",
        Artist: "Lily Turner",
        Year: "27-08-2023",
        button: "Aria Play",
      },
      {
        id: 19,
        Song: "Gospel Choir",
        Artist: "Benjamin Hall",
        Year: "04-04-2024",
        button: "Hallelujah",
      },
      {
        id: 20,
        Song: "Acoustic Serenade",
        Artist: "Zoe Davis",
        Year: "13-12-2023",
        button: "Strum Along",
      },
      {
        id: 21,
        Song: "Smooth Jazz",
        Artist: "Lucas Smith",
        Year: "07-09-2023",
        button: "Play Smoothly",
      },
      {
        id: 22,
        Song: "Country Blues",
        Artist: "Ella Brown",
        Year: "18-11-2022",
        button: "Blues Time",
      },
      {
        id: 23,
        Song: "Pop Ballad",
        Artist: "Liam Johnson",
        Year: "14-06-2024",
        button: "Listen to Ballad",
      },
      {
        id: 24,
        Song: "Rap Rhymes",
        Artist: "Sophia Martin",
        Year: "20-02-2023",
        button: "Rhyme On",
      },
      {
        id: 25,
        Song: "Electronic Vibes",
        Artist: "Ethan Davis",
        Year: "03-04-2023",
        button: "Electronic Party",
      },
      {
        id: 26,
        Song: "Reggae Dancehall",
        Artist: "Aiden Clark",
        Year: "29-07-2023",
        button: "Dance to Reggae",
      },
      {
        id: 27,
        Song: "Soulful Ballad",
        Artist: "Ava Turner",
        Year: "08-10-2023",
        button: "Soulful Sounds",
      },
      {
        id: 28,
        Song: "Funky Groove",
        Artist: "Oliver White",
        Year: "17-03-2024",
        button: "Get Funky Now",
      },
      {
        id: 29,
        Song: "Latin Salsa",
        Artist: "Zoe Hernandez",
        Year: "11-12-2023",
        button: "Salsa Dance",
      },
      {
        id: 30,
        Song: "Heavy Metal",
        Artist: "Noah Turner",
        Year: "02-05-2024",
        button: "Rock It Out",
      },
      {
        id: 31,
        Song: "Piano Concerto",
        Artist: "Grace Smith",
        Year: "21-09-2023",
        button: "Concerto Performance",
      },
      {
        id: 32,
        Song: "Opera Duet",
        Artist: "Mia Lewis",
        Year: "15-08-2023",
        button: "Duet Harmony",
      },
      {
        id: 33,
        Song: "Gospel Praise",
        Artist: "Benjamin Davis",
        Year: "10-01-2024",
        button: "Praise the Lord",
      },
      {
        id: 34,
        Song: "Acoustic Folk",
        Artist: "Lily Green",
        Year: "05-06-2023",
        button: "Folk Serenade",
      },
      {
        id: 35,
        Song: "Rhythmic Beatbox",
        Artist: "Ella Turner",
        Year: "28-03-2024",
        button: "Beatbox Groove",
      },
      {
        id: 36,
        Song: "Classical Symphony",
        Artist: "Lucas Anderson",
        Year: "09-11-2023",
        button: "Symphonic Journey",
      },
      {
        id: 37,
        Song: "Alternative Rock",
        Artist: "Ethan Martin",
        Year: "19-12-2022",
        button: "Rock Out Loud",
      },
      {
        id: 38,
        Song: "Jazz Standards",
        Artist: "Sophia Turner",
        Year: "02-02-2023",
        button: "Jazz Classics",
      },
      {
        id: 39,
        Song: "Reggaeton Party",
        Artist: "Aiden Davis",
        Year: "14-07-2023",
        button: "Party Time",
      },
      {
        id: 40,
        Song: "Soulful Serenade",
        Artist: "Ava White",
        Year: "25-05-2023",
        button: "Soul Serenade",
      },
      {
        id: 41,
        Song: "Funky Disco",
        Artist: "Oliver Turner",
        Year: "08-08-2024",
        button: "Disco Fever",
      },
      {
        id: 42,
        Song: "Salsa Dance",
        Artist: "Zoe Smith",
        Year: "30-03-2023",
        button: "Salsa Groove",
      },
      {
        id: 43,
        Song: "Heavy Metal Shred",
        Artist: "Noah Davis",
        Year: "11-11-2023",
        button: "Shred It",
      },
      {
        id: 44,
        Song: "Piano Ballad",
        Artist: "Grace Turner",
        Year: "06-06-2024",
        button: "Piano Emotions",
      },
      {
        id: 45,
        Song: "Opera Diva",
        Artist: "Mia Martin",
        Year: "17-09-2023",
        button: "Diva Performance",
      },
      {
        id: 46,
        Song: "Gospel Harmony",
        Artist: "Benjamin Smith",
        Year: "12-12-2024",
        button: "Harmony of Faith",
      },
      {
        id: 47,
        Song: "Acoustic Melody",
        Artist: "Lily Johnson",
        Year: "05-04-2023",
        button: "Melodic Tune",
      },
      {
        id: 48,
        Song: "Beatbox Groove",
        Artist: "Ella Martin",
        Year: "28-02-2024",
        button: "Groove On",
      },
      {
        id: 49,
        Song: "Classical Overture",
        Artist: "Lucas Turner",
        Year: "19-05-2023",
        button: "Overture Magic",
      },
      {
        id: 50,
        Song: "Alternative Sound",
        Artist: "Ethan White",
        Year: "02-07-2024",
        button: "Explore Sound",
      },
    ];

    function listItems(items: {}[], pageActual: number, limitItems: number) {
      let count = pageActual * limitItems - limitItems;
      let delimiter = count + limitItems;
      let totalPages = Math.ceil(items.length / limitItems);

      let newListingItems: {}[] = [];

      if (pageActual <= totalPages) {
        for (let i = count; i < delimiter; i++) {
          if (items[i] != null) {
            newListingItems.push(items[i]);
          }
          count++;
        }
      }

      setListingItems(newListingItems);
    }

    const filterItems = rows.filter((row) => {
      return Object.values(row).some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(search.toLowerCase());
        }
        return false;
      });
    });

    React.useEffect(() => {
      listItems(filterItems, pageSelect, Number(limitItemsDefine));
    }, [pageSelect]);

    return (
      <>
        <div className="py-[10px] flex items-center gap-[10px]">
          <input
            maxLength={255}
            className="bg-gray-300 p-[10px] rounded-lg outline-0 px-[20px]"
            type="text"
            placeholder="Pesquisar..."
            onChange={(e) => {
              setSearch(e.target.value);
              listItems(filterItems, pageSelect, Number(limitItemsDefine));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                listItems(filterItems, pageSelect, Number(limitItemsDefine));
              }
            }}
          />
          <button
            onClick={() =>
              listItems(filterItems, pageSelect, Number(limitItemsDefine))
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Button
          </button>
        </div>
        {/* search area */}
        <div className="overflow-y-auto w-full h-[200px] border border-[2px] border-black">
          <table className="text-left table-fixed w-full">
            <thead className="sticky top-0 bg-white shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ">
              <tr>
                {columns.map((val, index) => (
                  <>
                    <th
                      key={index}
                      className={`p-[7px] border border-[1px] border-black ${
                        val.offSet ? "" : "hidden"
                      }`}
                    >
                      {val.headerName}
                    </th>
                  </>
                ))}
              </tr>
            </thead>
            <tbody>
              {listingItems.map((row, index) => (
                <tr key={index}>
                  {columns.map((col) => (
                    <td
                      className={`p-[7px] border border-[1px] border-black ${
                        col.offSet ? "" : "hidden"
                      }`}
                      key={col.field}
                    >
                      {row[col.field] ? row[col.field] : "undefined"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center gap-[10px] text-center py-[20px] justify-end">
          <div className="flex items-center gap-[10px]">
            Colunas por página:
            <select
              onChange={(e) => {
                setLimitItemsDefine(Number(e.target.value));
              }}
              onClick={() => {
                setPageSelect(1);
                listItems(rows, pageSelect, limitItemsDefine);
              }}
              className="p-[3px] px-[10px] border border-[1px] border-black text-[15px]"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="1000">1000</option>
              <option value="5000">5000</option>
              <option value={rows.length}>Todos</option>
            </select>
          </div>
          {/* rows per page */}
          <div className=" flex gap-[10px]">
            {(pageSelect - 1) * limitItemsDefine + 1} -{" "}
            {pageSelect * limitItemsDefine} de {rows.length}
          </div>

          <div className="flex items-center gap-[5px]">
            <CaretLeft
              onClick={() => {
                if (pageSelect > 1) {
                  setPageSelect(pageSelect - 1);
                }
              }}
              className="cursor-pointer"
              size={32}
              weight="bold"
            />
            <CaretRight
              onClick={() => {
                if (pageSelect < rows.length / limitItemsDefine) {
                  setPageSelect(pageSelect + 1);
                }
              }}
              className="cursor-pointer"
              size={32}
              weight="bold"
            />
          </div>
        </div>
        {/* pagination */}
      </>
    );
  },
};
