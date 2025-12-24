
import { Settings, TimerReset, type LucideIcon } from "lucide-react"


interface PerformanceProps {
    title: string;
    icon: LucideIcon; // or LucideIcon if you prefer strict typing
    text: string;
    days: number;
    number: number;
    category: string;

}

export default function Timeline({ title, text, days, category, number, icon: Icon }: PerformanceProps) {
    const colorCheck: Record<string, string> = {
        Email: "bg-blue-400",
        SMS: " bg-green-400",
        Voice: "bg-purple-400",
    };
    const bgColor = colorCheck[category] ?? "bg-blue-100"
    return (
        <>
            <div className="px-4 py-2">
                {/* GROUP WRAPPER */}
                <div className="group rounded-lg border border-gray-200 w-full p-3 flex items-center">

                    {/* LEFT CONTENT */}
                    <div className="flex gap-4 items-center">
                        <div className="bg-black rounded-full w-5 h-5 p-4 text-sm text-white flex items-center justify-center">{number}</div>
                        <div className={`${bgColor} rounded-xl p-2 text-white`}>
                            <Icon />
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2 items-center">
                                <p className="font-normal text-md">{title}</p>

                                <button className="rounded-lg border border-gray-200 px-2 text-xs">
                                    {category}
                                </button>
                                {days > 0 && (
                                    <div className="rounded-lg  font-medium px-2 text-xs bg-gray-200/50 items-center flex gap-2 ">
                                        <TimerReset className="w-4 text-gray-400" />
                                        <p>
                                            wait {days} days
                                        </p>
                                    </div>
                                )}

                            </div>

                            <p className="text-gray-500 text-xs">{text}</p>
                        </div>
                    </div>

                    {/* RIGHT ACTIONS */}
                    <div className="ml-auto flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 hover:bg-gray-300 rounded-md">
                            <Settings className="w-4" />
                        </button>

                        <button className="rounded-xl text-sm text-red-500 hover:bg-gray-300 hover:text-gray-900 px-2 ">
                            Remove
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}