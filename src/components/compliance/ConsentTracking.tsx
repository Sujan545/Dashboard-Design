
import { User2 } from "lucide-react";



type ConsentStatus = "Consent" | "No Consent" | "Pending";


interface ConsentSummary {
    channel: "Email" | "SMS" | "Voice";
    consented: number;
    noConsent: number;
    pending: number;
}

interface ConsentRow {
    id: number;
    customer: string;
    email: ConsentStatus;
    sms: ConsentStatus;
    voice: ConsentStatus;
    lastUpdated: string;
    action: string;
}

function Card({ channel, consented, noConsent, pending }: ConsentSummary) {
    return (
        <div className="rounded-md border border-gray-200 w-1/3 p-4">
            <p className="font-semibold">{channel} Consent</p>
            <div className="flex justify-between pt-4 ">
                <span className="text-sm">Consented</span>
                <span className="font-semibold">{consented}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-sm">No Consent</span>
                <span className="font-semibold">{noConsent}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-sm">pending</span>
                <span className="font-semibold">{pending}</span>
            </div>
        </div>
    )
}
export default function ConsentTracking() {


    const consentTableData: ConsentRow[] = [
        {
            id: 1,
            customer: "Acme Corp",
            email: "Consent",
            sms: "Consent",
            voice: "No Consent",
            lastUpdated: "2024-01-15",
            action: "Edit",
        },
        {
            id: 2,
            customer: "Smith LLC",
            email: "Consent",
            sms: "No Consent",
            voice: "Consent",
            lastUpdated: "2024-01-14",
            action: "Edit",
        },
        {
            id: 3,
            customer: "Johnson Inc",
            email: "No Consent",
            sms: "Consent",
            voice: "Consent",
            lastUpdated: "2024-01-12",
            action: "Edit",
        },
        {
            id: 4,
            customer: "Wilson Co",
            email: "Consent",
            sms: "Consent",
            voice: "Pending",
            lastUpdated: "2024-01-10",
            action: "Edit",
        },
    ];


    const consentSummaryData: ConsentSummary[] = [
        {
            channel: "Email",
            consented: 1245,
            noConsent: 156,
            pending: 23,
        },
        {
            channel: "SMS",
            consented: 892,
            noConsent: 398,
            pending: 134,
        },
        {
            channel: "Voice",
            consented: 567,
            noConsent: 654,
            pending: 203,
        },
    ];

    const colorCheck: Record<string, string> = {
        "Consent": "bg-green-200",
        "Pending": "bg-yellow-200",
        "No Consent": "bg-orange-200",
    }

    return (
        <>
            <div className=" flex flex-col gap-4">
                <div className="rounded-md border border-gray-200 flex flex-col gap-4 p-4 mt-4">
                    <p className="flex gap-2 "><User2 className="w-4" />Consent Status by Customer</p>

                    <div className="overflow-x-auto">
                        <table className="text-sm text-left w-full">
                            <thead className="border-b text-gray-600">
                                <tr className="border-b border-gray-200">
                                    <th className="py-3">Customer</th>
                                    <th>Email</th>
                                    <th>SMS</th>
                                    <th>Voice</th>
                                    <th>Last Updated</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {consentTableData.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-b border-gray-200 last:border-none"
                                    >
                                        <td className="py-3 font-medium">
                                            {item.customer}
                                        </td>

                                        <td>
                                            <span className={`rounded-full px-2 py-0.5 text-xs ${colorCheck[item.email]}`}>
                                                {item.email}
                                            </span>
                                        </td>

                                        <td >
                                            <span className={`rounded-full  px-2 py-0.5 text-xs  ${colorCheck[item.sms]}`}>
                                                {item.sms}
                                            </span>
                                        </td>

                                        <td >
                                            <span className={`rounded-full  px-2 py-0.5 text-xs ${colorCheck[item.voice]}`}>
                                                {item.voice}
                                            </span>
                                        </td>
                                        <td className="text-gray-500">
                                            {item.lastUpdated}
                                        </td>

                                        <td className="">
                                            <button className="text-sm font-mediu hover:bg-gray-300 px-2 rounded-md">
                                                {item.action}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="flex gap-4 ">
                    {consentSummaryData.map((item) => (
                        <Card
                            channel={item.channel}
                            consented={item.consented}
                            noConsent={item.noConsent}
                            pending={item.pending}
                        />
                    ))}

                </div>
            </div>
        </>
    )
}