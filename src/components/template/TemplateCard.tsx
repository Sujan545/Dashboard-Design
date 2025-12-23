import { Copy, Edit, View, type LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TemplateProps{
    title:string,
    text:string,
    category:string,
    time:number,
    percentage:number,
    icon:LucideIcon
}

export default function Template({title,category,time,percentage,text,icon:Icon}:TemplateProps) {
   const colorCheck: Record<string, string> = {
    Email: "bg-blue-200 text-blue-600",
    SMS: " bg-green-200 text-green-600",
    Voice: "bg-purple-200 text-purple-600",
};
const navigate = useNavigate();

const bgColor=colorCheck[text] ?? "bg-blue-100"
    return (
        <>
            <div className="rounded-xl border border-gray-200 mt-4 w-75 max-w-75 py-6 px-4">
                <h4 className="font-normal text-md">{title}</h4>
                <div className="flex gap-3 py-4">
                    <button className={`${bgColor} flex gap-2  rounded-xl text-xs items-center font-medium px-2 w-1/3 `} ><Icon className="w-4"/>{text}</button>
                    <button className="border rounded-xl border-gray-300 px-2 text-xs font-medium ">{category}</button>
                </div>
                <div className="bg-gray-100 rounded-xl p-2 mt-4">
                    <div className="w-full max-w-sm rounded-xl border-2 border-dashed border-gray-200 bg-white p-4">
                        <div className="flex flex-col items-center justify-center h-8 text-gray-400">
                            <span className="text-sm">Template Preview</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 py-6">
                    <span>Used {time} times</span>
                    <span>{percentage}% effective</span>
                </div>
                <div className="flex gap-3 items-center  ">
                     <button className="px-2 gap-2 w-1/3 justify-center font-normal flex items-center rounded-lg border border-gray-200 text-sm hover:bg-gray-300">
                        <View className="w-3"/>   Preview
                    </button>
                     <button
                     onClick={()=>navigate("/template/edit")}
                      className="px-3 gap-2 w-1/3 font-normal flex items-center justify-center rounded-lg border border-gray-200 text-sm hover:bg-gray-300">
                        <Edit className="w-3"/>   Edit
                    </button>
                     <button className="px-2 gap-2 font-medium flex items-center rounded-lg border border-gray-200 text-sm hover:bg-gray-300">
                        <Copy className="w-3"/>
                    </button>
                </div>
            </div>
        </>
    )
}