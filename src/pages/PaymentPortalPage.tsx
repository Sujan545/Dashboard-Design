import { Eye, Share } from "lucide-react";
import PaymentSetting from "../components/payment/PaymentLinkSetting";
import PaymentMethod from "../components/payment/PaymentMethod";
import PaymentTest from "../components/payment/TestPayment";
import PaymentPreview from "../components/payment/PaymentPreview";
import RecentPayment from "../components/payment/RecentPayment";
import {
    CheckCircle, Clock, XCircle} from "lucide-react";





export default function Payment() {

    const transactions = [
        {
            title: "Acme Corp",
            icon: CheckCircle, // ✅ completed icon
            status: "Completed",
            amount: 2450,
            method: "Card",
            time: "2 hours ago",
        },
        {
            title: "Smith LLC",
            icon: Clock, // 🕒 pending icon
            status: "Pending",
            amount: 1250,
            method: "ACH",
            time: "5 hours ago",
        },
        {
            title: "Johnson Inc",
            icon: CheckCircle,
            status: "Completed",
            amount: 875,
            method: "Card",
            time: "1 day ago",
        },
        {
            title: "Wilson Co",
            icon: XCircle, // ❌ failed icon
            status: "Failed",
            amount: 3200,
            method: "ACH",
            time: "2 days ago",
        },
    ];

    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-semibold text-2xl">Payment Portal</h1>
                    <p className="text-gray-500">Configure payment methods and manage transactions </p>
                </div>
                <div className="flex gap-2 items-center">
                    <button className="bg-black text-white rounded-md p-2 text-sm flex gap-2 items-center"><Eye className="w-4" /> Preview Portal</button>
                </div>
            </div>
            <div className="flex gap-2 w-full">
                <div className="flex w-1/2 flex-col">
                    <PaymentSetting />
                    <PaymentMethod />
                    <PaymentTest />
                </div>
                < div className="flex w-1/2 flex-col">
                    <PaymentPreview />
                    <div className="w-full mt-6 rounded-md border border-gray-200 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-medium text-sm">Recent Payments</p>
                            <button className="flex items-center gap-2 rounded-md border border-gray-200 px-2 py-1 text-sm hover:bg-gray-300">
                                <Share className="h-4 w-4" />
                                Export
                            </button>
                        </div>
                        {transactions.map((card) => (
                            <RecentPayment
                                title={card.title}
                                method={card.method}
                                time={card.time}
                                status={card.status}
                                amount={card.amount}
                                icon={card.icon}
                            />
                        ))}
                    </div>
                </div >
            </div >
        </>
    )
}