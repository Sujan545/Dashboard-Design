import { ComponentIcon, MessageCircle, type LucideIcon } from "lucide-react";
import { CheckCircle, AlertTriangle } from "lucide-react";

type ComplianceStatus = "passed" | "warning";

interface ComplianceItem {
    id: number;
    title: string;
    description: string;
    status: ComplianceStatus;
    icon: LucideIcon;
}

function Card({ title, icon: Icon, status, description }: ComplianceItem) {
    const colorCheck: Record<string, string> = {
        passed: " text-green-600 ",
        warning: " text-yellow-600 ",
    };
    const color = colorCheck[status] ?? "bg-blue-100"
    const statusCheck: Record<string, string> = {
        passed: "bg-black text-white",
        warning: "bg-gray-100 border border-gray-200"
    };
    const result = statusCheck[status]
    return (
        <div className="mt-4 font-normal flex items-center justify-between rounded-md border border-gray-200 p-3">
            <div className="flex items-center gap-3">
                <Icon className={`${ color}`} />
                <div className="flex flex-col">
                    <span className="text-sm font-medium">{title}</span>
                    <span className="text-xs text-gray-500">
                        {description}
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-3">

                <button
                    className={`rounded-full ${result}  px-2 py-0.5 text-xs capitalize `}
                >
                    {status}
                </button>
            </div>
        </div>

    )
};
export default function ComplianceChecker() {
    const complianceData: ComplianceItem[] = [
        {
            id: 1,
            title: "TCPA Compliance",
            description: "All voice calls have proper consent",
            status: "passed",
            icon: CheckCircle,
        },
        {
            id: 2,
            title: "CAN-SPAM Act",
            description: "Email opt-out mechanisms in place",
            status: "passed",
            icon: CheckCircle,
        },
        {
            id: 3,
            title: "FDCPA Guidelines",
            description: "2 messages sent outside business hours",
            status: "warning",
            icon: AlertTriangle,
        },
        {
            id: 4,
            title: "State Regulations",
            description: "All state-specific rules followed",
            status: "passed",
            icon: CheckCircle,
        },
    ];
    return (
        <>
            <div className="flex  font-normal flex-col gap-4 mt-6">
                <div className=" rounded-md border border-gray-200 p-4 flex flex-col  gap-4">
                    <p className="flex text-md gap-2 items-center"> <MessageCircle className="w-4" />Send Test Compliance Checker</p>
                    <div className="flex justify-between items-center mt-6">
                        <div className="w-1/2">
                            <p className="text-md">Customer Contact</p>
                            <input
                                className="w-full px-2 py-1 bg-gray-200/50 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                                type="email"
                                placeholder="test@example.com" />
                        </div>
                        <div className="pl-2 w-1/2">
                            <p className="text-md">Message Type</p>
                            <select
                                className="w-full border border-gray-200 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                <option value="Friendly">Collection Email</option>
                                <option value="Firm">Collection SMS</option>
                                <option value="Final Notice">Collection Voice</option>
                                <option value="Custom">Custom</option>
                            </select>
                        </div>
                    </div>
                    <button className="rounded-md bg-gray-900 text-white text-sm font-medium w-full px-2 py-1 ">Check Compliance</button>
                    <div className="rounded-md border border-gray-200 bg-gray-100 px-2">
                        <span className="flex gap-2 items-center font-medium text-sm text-green-700"><ComponentIcon className="w-4" />Compliance Checked Passed</span>
                        <div className="flex flex-col text-gray-500 text-xs gap-1">
                            <span>✓ Customer has opted in for email communications</span>
                            <span>✓ Message content follows FDCPA guidelines</span>
                            <span>✓ Sending within allowed business hours</span>
                            <span>✓ Proper identification and opt-out instructions included</span>
                        </div>
                    </div>
                </div>
                <div className="rounded-md font-normal  border border-gray-200 p-4">
                    <p className=" text-md">Compliance Rules Status</p>

                    {complianceData.map((item) => (
                        <Card
                            id={item.id}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            status={item.status}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}