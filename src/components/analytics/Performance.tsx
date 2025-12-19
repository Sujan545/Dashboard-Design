



export default function Performance() {
    const templatePerformanceData = [
        {
            id: 1,
            template: "Friendly Reminder",
            conversionRate: 15.2,
            avgDaysToPay: 8.3,
            messagesSent: 450,
            status: "High Performer",
        },
        {
            id: 2,
            template: "Firm Notice",
            conversionRate: 12.8,
            avgDaysToPay: 6.1,
            messagesSent: 320,
            status: "Standard",
        },
        {
            id: 3,
            template: "Final Warning",
            conversionRate: 18.7,
            avgDaysToPay: 4.2,
            messagesSent: 180,
            status: "High Performer",
        },
        {
            id: 4,
            template: "Payment Due",
            conversionRate: 11.4,
            avgDaysToPay: 9.7,
            messagesSent: 280,
            status: "Standard",
        },
    ];
   const statusCheck: Record<string, string> = {
        "High Performer": "bg-black text-gray-50 ",
        "Standard": "bg-gray-200 "
    };
   

    return (
        <>
            <div className="rounded-md border border-gray-200 mt-6 p-4">
                <p>Template Placement Leaderboard</p>
                <div className="p-4">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b text-gray-800">
                            <tr className="border-b border-gray-200">
                                <th className="py-3">Template</th>
                                <th>Conversion Rate</th>
                                <th>Avg. Days to Pay</th>
                                <th >Message Sent</th>
                                <th >Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {templatePerformanceData.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-b border-gray-200 last:border-none"
                                >
                                    <td className="py-3 ">
                                      #{item.id}  {item.template}
                                    </td>

                                    <td>
                                        <span className="">
                                            {item.conversionRate}
                                        </span>
                                    </td>

                                    <td className="">
                                        {item.avgDaysToPay}
                                    </td>

                                    <td className="">
                                        {item.messagesSent}
                                    </td>

                                    <td className="">
                                        <button className={` ${statusCheck[item.status]}" text-sm font-medium px-2 rounded-md`}>
                                            {item.status}
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}