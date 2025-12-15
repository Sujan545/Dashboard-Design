import { Mail, MessageCircle, PhoneCallIcon, type LucideIcon } from "lucide-react"
import { useState } from "react";

interface ButtonProps {
    button: string;
    icon: LucideIcon;
    activeCategory: string;
    setActiveCategory: (cat: string) => void;
}
interface TokenProps {
    text: string
}

function Token({ text }: TokenProps) {
    return (
        <button className="hover:bg-gray-200 text-gray-700 tracking-wider w-full text-xs text-left px-4 py-2 rounded-md">
            {"{{"+text+"}}"}
        </button>
    )
}

function Button({ button, icon: Icon, activeCategory, setActiveCategory }: ButtonProps) {
    const isActive = activeCategory === button;

    return (
        <button
            onClick={() => setActiveCategory(button)}
            className={`border rounded-lg px-4 py-1 flex justify-center text-sm gap-2 items-center w-1/3
        ${isActive ? "bg-black text-white border-black" : "border-gray-200 text-gray-700 hover:bg-gray-100"}`}
        >
            <Icon className="w-4 h-4" />
            {button}
        </button>
    );
}


export default function TemplateEdit() {

    const [activeCategory, setActiveCategory] = useState("Email");
    const tokenInfo = [
        "First Name",
        "Last Name",
        "Company",
        "Amount",
        "Due Date",
        "Days Overdue",
        "Payment Link",
        "Phone"
    ];
    const buttonInfo = [
        {
            button: "Email",
            icon: Mail
        },
        {
            button: "SMS",
            icon: MessageCircle
        },
        {
            button: "Voice",
            icon: PhoneCallIcon
        }
    ]
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-semibold">Template Editor</h1>
                    <span className="text-gray-500">Create and customize your collection message templates</span>
                </div>
                <div className="flex gap-3 items-center justify-center">
                    <button className=" border border-gray-200 hover:bg-gray-300 rounded-md  items-center p-2 text-sm gap-2">Cancel</button>
                    <button className="bg-black text-white rounded-md  items-center p-2 text-sm gap-2 ">Save Template</button>
                </div>
            </div>
            <div className="flex gap-6 w-full">

                <div className="flex flex-col gap-6 w-3/4">
                    <div className="rounded-md  border border-gray-200 mt-6 p-6">
                        <p>Template Details</p>
                        <div className="flex justify-between items-center mt-6">
                            <div className="w-1/2">
                                <p>Template Name</p>
                                <input
                                    className="w-full p-2 bg-gray-100 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    type="text"
                                    placeholder="Enter template name" />
                            </div>
                            <div className="pl-2 w-1/2">
                                <p>Category</p>
                                <select
                                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                                >
                                    <option value="Friendly">Friendly</option>
                                    <option value="Firm">Firm</option>
                                    <option value="Final Notice">Final Notice</option>
                                    <option value="Custom">Custom</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md border border-gray-200 p-4">
                        <p>Channel</p>
                        <div className="flex gap-6 items-center mt-6 w-full">
                            {buttonInfo.map((card) => (
                                <Button
                                    key={card.button}
                                    button={card.button}
                                    icon={card.icon}
                                    activeCategory={activeCategory}
                                    setActiveCategory={setActiveCategory}
                                />

                            ))}
                        </div>
                    </div>

                </div>
                <div className="w-1/4">
                    <div className="rounded-xl border border-gray-200 mt-6">
                        <p className="p-4 mb-2">Insert Tokens </p>
                        <div className="flex flex-col justify-center items-start gap-2 px-6 py-2">
                            {tokenInfo.map((token, idx) => (
                                <Token key={idx} text={token} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}