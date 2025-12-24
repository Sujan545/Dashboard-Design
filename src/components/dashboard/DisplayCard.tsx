import {ArrowUpRightIcon, ArrowDownLeftIcon, type LucideIcon}  from "lucide-react"

interface displayProps{
    title: string
    amount: string
    percentage: string
    icon:LucideIcon
}

export default function DisplayCard ({amount, title, percentage, icon:Icon}:displayProps){

    return(
        <div className="rounded-xl border border-gray-200 mt-4 w-75 max-w-75 py-6 px-4">
            <div className="flex flex-col gap-6">

            <div className="flex items-center justify-between ">
                <p className="font-normal text-md">{title}</p>
                <Icon size={16} className="text-gray-500" />
            </div>
            <div>
                <p className="font-medium text-md ">{amount}</p>
                <span className={`text-sm flex gap-2 ${percentage[0] == '+' ? "text-green-500" : "text-red-500" }`}>
                    {percentage[0] == '+' ? <ArrowUpRightIcon className="w-5 h-5"/> : <ArrowDownLeftIcon className="w-5 h-5"/>}
                    {percentage} from last month  
                    </span>
            </div>
            </div>
        </div>
    )
}