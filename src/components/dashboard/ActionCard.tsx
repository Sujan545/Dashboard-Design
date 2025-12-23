import type { LucideIcon } from "lucide-react"

interface ActionProps {
    icon: LucideIcon,
    title: string
}
export default function Action({ icon: Icon, title }: ActionProps) {

    return (
        <div className="rounded-xl border border-gray-200 w-70 hover:bg-gray-200 max-w-75 flex flex-col gap-4 justify-center items-center p-4 ">
           
           <Icon />
            <p className="text-sm font-medium">{title}</p>
        </div>
    )
}