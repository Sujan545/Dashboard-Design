import { CreditCard, Settings, TrainFront } from "lucide-react";





export default function PaymentMethod() {
    return (
        <>
            <div className="w-full mt-6 font-normal rounded-md border border-gray-200 p-4">
                <p className="text-md">Payment Methods</p>
                <div className="py-2 w-full">
                    {/* GROUP WRAPPER */}
                    <div className=" rounded-lg border border-gray-200 m-w-full p-2 flex items-center">
                        {/* LEFT CONTENT */}
                        <div className="flex gap-4 items-center">
                            <div className="rounded-xl p-2">
                                <CreditCard className="w-5" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <p className="font-medium text-md ">Credit Card/ Debit Card</p>
                                </div>
                                <p className="text-gray-500 text-xs">Visa, Mastercard, American Express</p>
                            </div>
                        </div>

                        {/* RIGHT ACTIONS */}
                        <div className="ml-auto flex gap-2">
                            <button className="rounded-xl text-xs text-gray-50 bg-gray-800 px-2 py-0.5  ">
                                Enabled
                            </button>
                            <button className="p-0.5 hover:bg-gray-300 rounded-md">
                                <Settings className="w-4" />
                            </button>

                        </div>

                    </div>
                </div>
                <div className="w-full py-2">
                    {/* GROUP WRAPPER */}
                    <div className="rounded-lg border border-gray-200 w-full p-2 flex items-center">
                        {/* LEFT CONTENT */}
                        <div className="flex gap-4 items-center">
                            <div className="rounded-xl p-2">
                                <TrainFront className="w-5" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <p className="font-medium text-md">Bank Transfer (ACH)</p>
                                </div>
                                <p className="text-gray-500 text-xs">Direct bank transfer</p>
                            </div>
                        </div>

                        {/* RIGHT ACTIONS */}
                        <div className="ml-auto flex gap-4 ">
                            <button className="rounded-xl text-xs text-gray-50 bg-gray-800 px-2 py-0.5  ">
                                Enabled
                            </button>
                            <button className="p-0.5 hover:bg-gray-300 rounded-md">
                                <Settings className="w-4" />
                            </button>

                        </div>

                    </div>
                </div>
                <button className="rounded-xl border border-gray-200 hover:bg-gray-300 w-full px-2 py-0.5 text-sm font-medium">Add Payment Method</button>

            </div>
        </>
    )
}