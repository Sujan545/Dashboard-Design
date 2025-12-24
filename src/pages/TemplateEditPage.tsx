import { AtomIcon, Mail, MessageCircle, PhoneCallIcon, Plus, type LucideIcon } from "lucide-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface ButtonProps {
    button: string;
    icon: LucideIcon;
    activeCategory: string;
    setActiveCategory: (cat: string) => void;
}
interface TokenProps {
    text: string
};


function Token({ text }: TokenProps) {
    return (
        <button className="hover:bg-gray-300 text-gray-700 tracking-wider w-full text-xs text-left px-4 py-2 rounded-md">
            {"{{" + text + "}}"}
        </button>
    )
}

function Button({ button, icon: Icon, activeCategory, setActiveCategory }: ButtonProps) {
    const isActive = activeCategory === button;

    return (
        <button
            onClick={() => setActiveCategory(button)}
            className={`border rounded-lg px-4 py-1 flex justify-center text-sm font-medium gap-2 items-center w-1/3
        ${isActive ? "bg-black text-white" : "border-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
            <Icon className="w-4 h-4" />
            {button}
        </button>
    );
}


export default function TemplateEdit() {

    const templateText: string = `Dear {{First Name}},
    We hope this message finds you well. We wanted to remind you that your payment of {{Amount}} was due on {{Due Date}}.\n
    Please click the link below to make your payment:\n
    {{Payment Link}}\n
    If you have any questions, please don't hesitate to contact us.\n
    Best regards,\n
    Collections Team`;

    const [activeCategory, setActiveCategory] = useState("Email");
    const [messageBody, setMessageBody] = useState(templateText);
    const [value, setValue] = useState<number>(0.44);
    const navigate = useNavigate();
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
    ];

    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-medium text-lg">Template Editor</h1>
                    <span className="text-gray-500 text-sm">Create and customize your collection message templates</span>
                </div>
                <div className="flex gap-3 items-center justify-center">
                    <button
                        onClick={() => navigate(-1)}
                        className=" border border-gray-200 hover:bg-gray-300 rounded-md  items-center p-2 text-sm gap-2">
                        Cancel</button>
                    <button className="bg-black text-white rounded-md  items-center p-2 text-sm gap-2 ">Save Template</button>
                </div>
            </div>
            <div className="flex gap-6 w-full">
                <div className="flex flex-col gap-6 w-3/4">
                    <div className="rounded-md  border border-gray-200 mt-6 p-4 font-normal">
                        <p className="text-md">Template Details</p>
                        <div className="flex justify-between items-center mt-6">
                            <div className="w-1/2">
                                <p className="text-md">Template Name</p>
                                <input
                                    className="w-full p-2 bg-gray-200/50 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    type="text"
                                    placeholder="Enter template name" />
                            </div>
                            <div className="pl-2 w-1/2">
                                <p className="text-md">Category</p>
                                <select
                                    className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
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
                        <p className="font-normal text-md">Channel</p>
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
                    <div className="rounded-md border border-gray-200 p-4">
                        <p className="font-normal text-md ">Message Content</p>
                        <div className="w-full ">
                            <p className="pt-4 text-md font-normal">Subject Line</p>
                            <input
                                className="w-full p-2  bg-gray-200/50 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                                type="text"
                                placeholder="Payment Reminder {{ Company Name }}" />
                        </div>
                        <div>
                            <p className="py-4 text-md font-normal ">Message Body</p>
                            <textarea
                                className="w-full h-40 p-2 text-sm font-normal focus:ring-2 focus:outline-none rounded-md focus:ring-gray-300"
                                name="" id="" value={messageBody}
                                onChange={(e) => setMessageBody(e.target.value)}></textarea>
                        </div>
                    </div>

                    <div className="rounded-md border border-gray-200 p-4">
                        <p className="font-normal text-md">Preview</p>
                        <div className="rounded-md bg-gray-100 p-2 text-sm font-normal whitespace-pre-wrap">
                            {messageBody}
                        </div>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="rounded-xl border border-gray-200 mt-6">
                        <p className="p-4 mb-2 font-normal text-md">Insert Tokens </p>
                        <div className="flex flex-col justify-center items-start gap-2 px-6 py-2">
                            {tokenInfo.map((token, idx) => (
                                <Token key={idx} text={token} />
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl border border-gray-200 mt-6">
                        <p className="p-4 flex gap-2 text-md font-normal items-center"><AtomIcon className="w-4" />AI Assistant</p>
                        <div className="px-4 py-4">
                            <p className="font-normal text-md ">Tone</p>
                            <div className="flex justify-between text-xs pt-2">
                                <span>Casual</span>
                                <span>Formal</span>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                {/* Range Input */}
                                <input
                                    type="range"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    value={value}
                                    onChange={(e) => setValue(Number(e.target.value))}
                                    className="w-full accent-blue-600 cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col p-4 gap-2 text-sm ">
                            <button className="border border-gray-200 hover:bg-gray-300 rounded-xl">Rewrite</button>
                            <button className="border border-gray-200 hover:bg-gray-300 rounded-xl">Shorten</button>
                            <button className="border border-gray-200 hover:bg-gray-300 rounded-xl">Make Friendlier</button>

                        </div>
                    </div>
                    <div className="rounded-xl border border-gray-200 mt-6 p-4">
                        <p className="text-md font-normal">A/B Testing</p>
                        <div className="flex justify-between items-center pt-6">
                            <span>Varient A</span>
                            <button className="rounded-xl bg-gray-900 text-gray-50 px-2 text-xs">Active</button>
                        </div>
                        <div className="p-2">

                            <button className="flex w-full gap-1 rounded-xl border justify-center items-center border-gray-200 hover:bg-gray-300"><Plus className="w-3" /> Create Varient B</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}