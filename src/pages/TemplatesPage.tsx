import { Mail, MessageCircle, PhoneCall, PlusIcon, Search } from "lucide-react";
import Template from "../components/template/TemplateCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Category = "All" | "Friendly" | "Firm" | "Custom" | "Final Notice";

export default function Templates() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState<Category>("Custom");
    const navigate =useNavigate();

    const categories: Category[] = [
        "All",
        "Friendly",
        "Firm",
        "Final Notice",
        "Custom",
    ];
    const templateInfo = [
        {
            title: "Friendly Reminder",
            icon: Mail,
            time: 156,
            percentage: 12.5,
            category: "Friendly",
            text: "Email"
        },
        {
            title: "Payment Due SMS",
            icon: MessageCircle,
            time: 89,
            percentage: 8.2,
            category: "Firm",
            text: "SMS"
        },
        {
            title: "Friendly Reminder",
            icon: Mail,
            time: 156,
            percentage: 12.5,
            category: "Custom",
            text: "Email"
        },
        {
            title: "Final Notice Call",
            icon: PhoneCall,
            time: 156,
            percentage: 12.5,
            category: "Final Notice",
            text: "Voice"
        }
    ];
    const filteredTemplates = templateInfo.filter((card) => {
        const matchesSearch =
            card.category.toLowerCase().includes(search.toLowerCase()) ||
            card.title.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            activeCategory === "All" || card.category === activeCategory;

        return matchesSearch && matchesCategory;
    });
    return (
        <>
            <div className="flex justify-between items-center">

                <div>
                    <h1 className="font-semibold text-2xl">Template Library</h1>
                    <p className="text-gray-500">Create and manage your collection message templates </p>
                </div>
                <div className="flex gap-2">
                    <button
                    onClick={()=>navigate("/template/edit")}
                    className="bg-black text-white rounded-md flex items-center p-2 text-sm gap-2 "><PlusIcon className="h-4 w-4" />Create Template</button>
                </div>

            </div>
            <div className="flex items-center gap-3 mt-6 w-full">

                {/* Search Input */}
                <div className="relative flex-1">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                </div>

                {/* Buttons 
                <div className="flex gap-2 font-semibold">
                    <button className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-100">
                        All
                    </button>
                    <button className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-100">
                        Friendly
                    </button>
                    <button className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-100">
                        Firm
                    </button>
                    <button className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-100">
                        Final Notice
                    </button>
                    <button className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-100">
                        Custom
                    </button>
                </div>
                        */}
                <div className="flex gap-2 font-semibold">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-lg border text-sm transition
        ${activeCategory === cat
                                    ? "bg-black text-white"
                                    : "hover:bg-gray-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

            </div>
            <div className="flex gap-3">
                {filteredTemplates.map((card) => (
                    <Template
                        title={card.title}
                        text={card.text}
                        time={card.time}
                        icon={card.icon}
                        percentage={card.percentage}
                        category={card.category}
                    />
                ))}
                
            </div>
        </>
    )
}