import { ArrowUpNarrowWide, BookAIcon, BookTemplate, DollarSign, Share, Timer, User, Users2 } from "lucide-react";
import DisplayCard from "../components/shared/DisplayCard";
import Action from "../components/shared/ActionCard";
import Activity from "../components/shared/ActivityCard";


export default function DashboardPage () {

    const cardInfo = [
        {
            title:"Total Outstanding",
            amount:"$2,345,678",
            percentage:"+12.5%",
            icon:DollarSign
        },
        {
            title:"Active Campaigns",
            amount:"24",
            percentage:"+3",
            icon:User
        },
        {

            title:"Collections Rate",
            amount:"68%",
            percentage:"+5.2%",
            icon:ArrowUpNarrowWide
        },
        {
            title:"Avg Day to pay",
            amount:"12.6",
            percentage:"-2.5%",
            icon:Timer
        }
    ]
const actionInfo=[
    {
        title:"Import Data",
        icon:Share
    },
    {
        title:"New Template",
        icon:BookTemplate
    },
    {
        title:"Create Campaign",
        icon:Users2
    },
    {
        title:"View Reports",
        icon:BookAIcon
    }
]
return (
    
<>
<div className="flex justify-between items-center">

<div>
        <h1 className="font-semibold text-2xl">Dashboard</h1>
        <p className="text-gray-500">Overview of your collections performance </p>
    </div>
    <div className="flex gap-2">
        <button className="border rounded-md p-2 hover:bg-gray-400 text-sm">Export Report</button>
        <button className="bg-black text-white rounded-md p-2 text-sm ">New Campagin</button>
    </div>

</div>
<div className="flex gap-6 w-full">
    {cardInfo.map((card) =>(
        <DisplayCard
            title={card.title}
            amount={card.amount}
            percentage={card.percentage}
            icon={card.icon}
        />
    ))}
</div>
<div className="flex gap-6 mt-8 p-4">
    <Activity/>
    <Activity/>
</div>
<div className="rounded-xl border border-gray-300 w-full p-4 mt-8">
<p>Quick Action</p>
<div className="flex w-full gap-6 items-center justify-center mt-8">
    {actionInfo.map((card)=>
    <Action
    title={card.title}
    icon={card.icon}
    />
    )}
</div>
</div>
</>
    )}