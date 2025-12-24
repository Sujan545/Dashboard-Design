
interface ABTestVariant {

    variant: "A" | "B";
    title: string;
    conversionRate: number;
    sent: number;
    isWinner: boolean;
};


function VarientCard({ variant, title, conversionRate, sent, isWinner }: ABTestVariant) {
    return (
        <>
            <div className={`w-1/2 rounded-md border ${isWinner ? "bg-green-50" : "bg-white"} border-gray-200 p-2`}>
                <div className="flex justify-between items-center ">
                    <span className="font-medium text-sm">Varient {variant}</span>
                    {isWinner &&
                        <button className="rounded-md bg-green-400 text-xs py-0.5 text-white px-2">Winner</button>
                    }
                </div>
                <span className="text-xs text-gray-500">{title}</span>
                <div className="flex justify-between items-center">
                    <span className="text-xs">Conversion:{conversionRate}%</span>
                    <span className="text-xs">Sent:{sent}</span>
                </div>
            </div>
        </>
    )
}


export default function AbTesting() {
    const abTestResults: ABTestVariant[] = [
        {

            variant: "A",
            title: "Payment Reminder",
            conversionRate: 12.5,
            sent: 500,
            isWinner: false,
        },
        {

            variant: "B",
            title: "Action Required",
            conversionRate: 15.2,
            sent: 500,
            isWinner: true,
        },
    ];
    const abSentResults: ABTestVariant[] = [
        {

            variant: "A",
            title: "Morning (9 AM)",
            conversionRate: 14.1,
            sent: 300,
            isWinner: false,
        },
        {

            variant: "B",
            title: "Afternoon (2 PM)",
            conversionRate: 16.8,
            sent: 300,
            isWinner: true,
        },
    ]
    return (
        <>
            <div className="border border-gray-200 rounded-md mt-6 p-4">
                <p className="py-2 font-normal text-md ">A/B Testing Result</p>
                <div className="p-4 rounded-md border w-full border-gray-200">
                    <div className="flex justify-between items-center">
                        <p className="py-2 font-normal text-md">Subject Line A/B</p>
                        <button className="rounded-xl py-0.5 bg-gray-900 text-white px-2 text-xs ">Significant</button>
                    </div>
                    <div className="flex gap-2 w-full">

                        {abTestResults.map((item) => (
                            <VarientCard
                                variant={item.variant}
                                title={item.title}
                                conversionRate={item.conversionRate}
                                sent={item.sent}
                                isWinner={item.isWinner}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="border border-gray-200 rounded-md mt-6 p-4">
                <p className="py-2 text-md font-normal">A/B Sent Result</p>
                <div className="p-4 rounded-md border w-full border-gray-200">
                   <div className="flex justify-between items-center">
                        <p className="py-2 font-normal text-md">Subject Line A/B</p>
                        <button className="rounded-xl py-0.5 bg-gray-900 text-white px-2 text-xs ">Significant</button>
                    </div>
                    <div className="flex gap-2 w-full">

                        {abSentResults.map((item) => (
                            <VarientCard
                                variant={item.variant}
                                title={item.title}
                                conversionRate={item.conversionRate}
                                sent={item.sent}
                                isWinner={item.isWinner}
                            />
                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}