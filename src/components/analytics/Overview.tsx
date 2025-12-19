import { ArrowUpNarrowWide, ChartArea, DollarSign, Mail, MessageCircle, PhoneCall, Timer, User} from "lucide-react";
import DisplayCard from "../dashboard/DisplayCard";
import Performance from "../dashboard/PerformanceCard";



export default function Overview() {
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
    ];
    const funnelData = [
        { label: "Sent", value: 1250, percentage: 100 },
        { label: "Delivered", value: 1189, percentage: 95.1 },
        { label: "Opened", value: 845, percentage: 67.6 },
        { label: "Clicked", value: 234, percentage: 18.7 },
        { label: "Paid", value: 156, percentage: 12.5, color: "bg-green-500" },
    ];
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

    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2 w-full">
                    {cardInfo.map((card) => (
                        <DisplayCard
                            title={card.title}
                            amount={card.amount}
                            percentage={card.percentage}
                            icon={card.icon}
                        />
                    ))}
                </div>
                <div className="rounded-md border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold mb-6">Conversion Funnel</h2>
                    <div className="space-y-5">
                        {funnelData.map((step) => (
                            <>
                                <div key={step.label} className="w-full gap-3 flex">
                                    {/* Label + Value + % */}
                                    <span className="font-medium">{step.label}</span>
                                    <div className="w-full">
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center">
                                                <span className="text-gray-600">{step.value.toLocaleString()}</span>
                                            </div>
                                            <span className="text-gray-500">{step.percentage}%</span>
                                        </div>
                                        {/* Progress bar */}
                                        <div className="h-2 w-full  rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-500 ${step.color ?? "bg-blue-500"
                                                    }`}
                                                style={{ width: `${step.percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>

                <div className="flex gap-2 ">
                    <div className="rounded-md border w-full border-gray-200 p-4">
                        {performanceInfo.map((item) => (
                            <Performance
                                title={item.title}
                                icon={item.icon}
                                percentage={item.percentage}
                                value={item.value}

                            />
                        ))}
                    </div>

                    <div className="rounded-md border flex w-full border-gray-200 p-4">
                        <p>Collection Trends</p>
                        <div className="flex justify-center gap-2  items-center">
                            <ChartArea/>
                            <p className="text-gray-500"> Chart Visualization would be here</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}