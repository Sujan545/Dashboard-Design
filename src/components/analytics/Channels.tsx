import { Mail, MessageCircle, Phone, type LucideIcon } from "lucide-react";




interface ConsentSummary {
    channel: "Email" | "SMS" | "Voice";
    openrate: number;
    clickrate: number;
    conversionrate: number;
    bouncerate: number;
    icon: LucideIcon;
}
function Card({ channel, openrate, clickrate, conversionrate, bouncerate, icon: Icon }: ConsentSummary) {
    const colorCheck: Record<string, string> = {
        Email: "text-blue-700",
        SMS: " text-green-700",
        Voice: "text-purple-700",
    };
    const bgColor = colorCheck[channel] ?? "bg-blue-100"

    return (
        <div className=" flex flex-col gap-2  font-normal rounded-md border border-gray-200 w-1/3 p-4">
            <p className=" flex gap-2 text-md"><Icon className={`${bgColor}`} />{channel} Performance</p>
            <div className="flex justify-between pt-4 ">
                <span className="text-sm">Open Rate</span>
                <span className="">{openrate}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-sm">Click Rate</span>
                <span className="">{clickrate}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-sm">Conversion Rate</span>
                <span className="">{conversionrate}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-sm">Bounce Rate</span>
                <span className="">{bouncerate}</span>
            </div>
        </div>
    )
}


export default function Channels() {
    const consentSummaryData: ConsentSummary[] = [
        {
            channel: "Email",
            openrate: 1245,
            clickrate: 156,
            conversionrate: 23,
            bouncerate: 23,
            icon: Mail
        },
        {
            channel: "SMS",
            openrate: 1245,
            clickrate: 156,
            conversionrate: 23,
            bouncerate: 23,
            icon: MessageCircle
        },
        {
            channel: "Voice",
            openrate: 1245,
            clickrate: 156,
            conversionrate: 23,
            bouncerate: 23,
            icon: Phone
        },
    ];
    return (
        <>

            <div className="flex gap-4 mt-6">
                {consentSummaryData.map((item) => (
                    <Card
                        channel={item.channel}
                        conversionrate={item.conversionrate}
                        openrate={item.openrate}
                        bouncerate={item.bouncerate}
                        clickrate={item.clickrate}
                        icon={item.icon}
                    />
                ))}

            </div>
        </>
    )
}