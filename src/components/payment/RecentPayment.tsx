import { type LucideIcon } from "lucide-react";



interface TransactionProps {
    title: string;
    icon: LucideIcon;
    status: string;
    amount: number;
    method: string;
    time: string;
};
export default function RecentPayment({ title, icon: Icon, status, amount, method, time }: TransactionProps) {
    const colorCheck: Record<string, string> = {
        failed: "bg-red-200",
        completed: " bg-green-200",
        pending: "bg-yellow-200",
    };
    const bgColor = colorCheck[status] ?? "bg-blue-100"
    return (
        <div className="mt-4 flex items-center justify-between rounded-md border border-gray-200 p-3">
            <div className="flex items-center gap-3">
                <div className={`${bgColor} rounded-xl p-2 text-white`}>
                    <Icon />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-medium">{title}</span>
                    <span className="text-xs text-gray-500">
                        {method} • {time}
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <span className="text-sm font-semibold">
                    ${amount.toLocaleString()}
                </span>

                <span
                    className={`rounded-full px-2 py-0.5 text-xs capitalize ${bgColor}`}
                >
                    {status}
                </span>
            </div>
        </div>

    )
};