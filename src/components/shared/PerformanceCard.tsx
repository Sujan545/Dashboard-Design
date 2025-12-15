import type { LucideIcon } from "lucide-react"

interface PerformanceProps{
    title:string,
    value:number,
    percentage:string,
    icon:LucideIcon
}

export default function Performance ({title, value,percentage,icon:Icon}:PerformanceProps){
 const colorCheck: Record<string, string> = {
    Email: "bg-blue-400",
    SMS: " bg-green-400",
    Voice: "bg-purple-400",
};
const bgColor=colorCheck[title] ?? "bg-blue-100"
    return(
        <>
        <div className="flex justify-between items-center px-4 py-2">
                    <div className="flex gap-2 items-center  ">
                        <div className={`${bgColor} rounded-xl p-2 text-white `} >
                        <Icon />
                        </div>
                        <div>
                        <p className="font-semibold">{title}</p>
                        <p className="text-gray-500 text-sm ">{value} sent</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">{percentage}</p>
                        <p className="text-gray-500">response rate</p>
                    </div>
                </div>
        </>
    )
}