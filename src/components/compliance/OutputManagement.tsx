import { Import, LucideImport, Option, Search } from "lucide-react";
import { useState } from "react";

export type OptOutType = "Email" | "SMS" | "Voice";

export interface OptOutItem {
    id: number;
    contact: string;
    type: OptOutType;
    dateAdded: string;
    reason: string;
}
export default function Output() {


    const optOutData: OptOutItem[] = [
        {
            id: 1,
            contact: "john@example.com",
            type: "Email",
            dateAdded: "2024-01-15",
            reason: "User request",
        },
        {
            id: 2,
            contact: "+1234567890",
            type: "SMS",
            dateAdded: "2024-01-14",
            reason: "Auto opt-out",
        },
        {
            id: 3,
            contact: "jane@company.com",
            type: "Email",
            dateAdded: "2024-01-12",
            reason: "Bounce back",
        },
        {
            id: 4,
            contact: "+1234567891",
            type: "SMS",
            dateAdded: "2024-01-10",
            reason: "User request",
        },
    ];

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<OptOutType | "All">("All");

    const filteredData = optOutData.filter((item) => {
        const matchesSearch = item.type
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesFilter =
            filter === "All" ? true : item.type === filter;

        return matchesSearch && matchesFilter;
    });
    return (
        <>
            <div className=" flex flex-col gap-4">

                <div className="rounded-md border border-gray-200 flex flex-col gap-4 p-4 mt-4">
                    <div className="flex justify-between items-center ">
                        <p className="flex gap-2 "><Option className="w-4" />Opt-Out List</p>
                        <div className="flex gap-2">
                            <button className="flex gap-2 border border-gray-200 rounded-md hover:bg-gray-300 px-2"> <Import className="w-4" /> Import </button>
                            <button className="flex gap-2 border border-gray-200 rounded-md hover:bg-gray-300 px-2"> <LucideImport className="w-4" /> Export CSV </button>
                        </div>
                    </div>
                    <div className="flex gap-2  ">
                        <div className="relative flex-1">
                            <Search
                                size={18}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="text"
                                placeholder="Search..."

                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                        </div>

                        <select
                            value={filter}
                            onChange={(e) =>
                                setFilter(e.target.value as OptOutType | "All")
                            }
                            className=" border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                            <option value="All">All Types</option>
                            <option value="Email">Email</option>
                            <option value="SMS">SMS</option>
                            <option value="Voice">Voice</option>
                        </select>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="border-b text-gray-600">
                                <tr className="border-b border-gray-200">
                                    <th className="py-3">Contact</th>
                                    <th>Type</th>
                                    <th>Date Added</th>
                                    <th>Reason</th>
                                    <th >Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredData.map((item) => (
                                    <tr
                                    key={item.id}
                                        className="border-b border-gray-200 last:border-none"
                                    >
                                        <td className="py-3 font-medium">
                                            {item.contact}
                                        </td>

                                        <td>
                                            <span className="rounded-full border px-2 py-0.5 text-xs">
                                                {item.type}
                                            </span>
                                        </td>

                                        <td className="text-gray-500">
                                            {item.dateAdded}
                                        </td>

                                        <td className="text-gray-500">
                                            {item.reason}
                                        </td>

                                        <td className="">
                                            <button className="text-sm font-medium border border-gray-200 text-red-500 hover:text-gray-800 hover:bg-gray-300 px-2 rounded-md">
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {filteredData.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="py-6 text-center text-gray-500"
                                        >
                                            No records found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="rounded-md border border-gray-200 p-4 gap-3 flex flex-col ">
                    <p>Add to Opt-Out List</p>
                    <div className="flex gap-2 items-center w-full">
                        <input
                            className="p-2 w-1/3 bg-gray-100 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                            type="text"
                            placeholder="Enter template name" />


                        <select
                            className="border border-gray-300 w-1/3 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                            <option value="all types">All Types</option>
                            <option value="email">Email</option>
                            <option value="sms">SMS</option>
                            <option value="voice">Voice</option>
                        </select>

                        <button className="rounded-md w-1/3 bg-gray-900 text-gray-50 p-2 ">Add to Opt-Out</button>
                    </div>
                </div>

            </div>
        </>
    )
}