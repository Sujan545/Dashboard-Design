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
        Failed: " bg-red-200 ",
        Completed: "bg-green-200 ",
        Pending: " bg-yellow-200 ",
    };
    const color = colorCheck[status] ?? "bg-blue-100"
    const Check: Record<string, string> = {
        Failed: " text-red-600 ",
        Completed: "text-green-600 ",
        Pending: " text-yellow-600 ",
    };
    const txtColor = Check[status] ?? "bg-blue-100"
    return (
        <div className="mt-4 flex font-normal items-center justify-between rounded-md border border-gray-200 p-3">
            <div className="flex items-center gap-3">
                    <Icon className={`${txtColor}`} />
                <div className="flex flex-col">
                    <span className="text-md font-medium">{title}</span>
                    <span className="text-xs text-gray-500">
                        {method} • {time}
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <span className="text-sm font-medium">
                    ${amount.toLocaleString()}
                </span>
                <span
                    className={`rounded-full px-2 py-0.5 text-xs capitalize ${color}`}
                >
                    {status}
                </span>
            </div>
        </div>

    )
};