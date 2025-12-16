import { ArrowRight, ArrowUpNarrowWide, BookAIcon, BookTemplate, DollarSign, Mail, MessageCircle,  PhoneCall, Share,  Timer, User, Users2 } from "lucide-react";
import DisplayCard from "../components/dashboard/DisplayCard";
import Action from "../components/dashboard/ActionCard";
import Activity from "../components/dashboard/ActivityCard";
import Performance from "../components/dashboard/PerformanceCard";


export default function Dashboard() {

    const cardInfo = [
        {
            title: "Total Outstanding",
            amount: "$2,345,678",
            percentage: "+12.5%",
            icon: DollarSign
        },
        {
            title: "Active Campaigns",
            amount: "24",
            percentage: "+3",
            icon: User
        },
        {

            title: "Collections Rate",
            amount: "68%",
            percentage: "+5.2%",
            icon: ArrowUpNarrowWide
        },
        {
            title: "Avg Day to pay",
            amount: "12.6",
            percentage: "-2.5%",
            icon: Timer
        }
    ]
    const actionInfo = [
        {
            title: "Import Data",
            icon: Share
        },
        {
            title: "New Template",
            icon: BookTemplate
        },
        {
            title: "Create Campaign",
            icon: Users2
        },
        {
            title: "View Reports",
            icon: BookAIcon
        }
    ]
    const performanceInfo = [
        {
            title: "Email",
            icon: Mail,
            value: 1250,
            percentage: "18.75%",
        },
        {
            title: "SMS",
            icon: MessageCircle,
            value: 680,
            percentage: "22.9%",
        },
        {
            title: "Voice",
            icon: PhoneCall,
            value: 320,
            percentage: "22.8%",
        },
    ]
    const activityInfo = [
        {
            title: "Payment received",
            text: "Smith Corp",
            value: "$ 1250",
            time: "12m ago"
        },
        {
            title: "Email sequence completed",
            text: "Johnson LLC",
            value: " ",
            time: "2m ago"
        },
        {
            title: "New import processed",
            text: "450 records",
            value: "$ 1250",
            time: "30m ago"
        },
        {
            title: "Campaign started",
            text: "Anderson Inc",
            value: " ",
            time: "1h ago"
        },
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
                {cardInfo.map((card) => (
                    <DisplayCard
                        title={card.title}
                        amount={card.amount}
                        percentage={card.percentage}
                        icon={card.icon}
                    />
                ))}
            </div>

            <div className="flex gap-6 py-4">

                <div className="border border-gray-300 w-1/2 max-h-1/2 rounded-xl">
                    <p className="p-6">Channel Performance</p>
                    {performanceInfo.map((card) => (

                        <Performance
                            title={card.title}
                            value={card.value}
                            icon={card.icon}
                            percentage={card.percentage}
                        />
                    ))}

                </div>
                <div className="border border-gray-300 w-1/2 max-h-1/2 rounded-xl">
                    <div className="flex justify-between px-4 py-2">
                        <p className="py-4"> Recent Activity</p>

                        <button className="flex hover:bg-gray-200 items-center rounded-md h-6 mt-2 px-2 py-4">view all <ArrowRight className="text-sm w-5 ml-2" /></button>
                    </div>
                    {activityInfo.map((card) => (

                        <Activity
                            title={card.title}
                            text={card.text}
                            time={card.time}
                            value={card.value}
                        />
                    ))}

                </div>
            </div>
            <div className="rounded-xl border border-gray-300 w-full p-4">
                <p>Quick Action</p>
                <div className="flex w-full gap-6 items-center justify-center mt-8">
                    {actionInfo.map((card) =>
                        <Action
                            title={card.title}
                            icon={card.icon}
                        />
                    )}
                </div>
            </div>
        </>
    )
}