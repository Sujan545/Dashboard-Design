import { Building, CreditCard } from "lucide-react";



export default function PaymentPreview() {
    return (
        <>
            <div className="w-full mt-6 rounded-md border border-gray-200 p-4">
                <p className="font-medium py-2">Payment Portal Preview</p>
                <div className="border border-gray-200 rounded-md py-6 mt-4">
                    <div className="items-center flex flex-col">
                        <div className="bg-gray-900 p-2 text-gray-50 rounded-lg">
                            <Building />
                        </div>
                        <p className="pt-2">Collect Pro</p>
                        <p className="text-sm text-gray-500">Payment Request</p>
                    </div>

                    <div className="border border-gray-200 rounded-md p-4 m-6">
                        <div className="flex justify-between">
                            <div>
                                <p>Invoice #12345</p>
                                <p className="text-gray-500 text-sm">Due: February 15, 2024</p>
                            </div>
                            <p className="font-bold">$1250.00</p>
                        </div>
                        <button className="bg-gray-800 rounded-lg text-white flex gap-2 items-center w-full mt-2 text-sm justify-center"><CreditCard className="w-4" /> Pay with card</button>
                        <button className="border border-gray-200 hover:bg-gray-300 rounded-lg flex gap-2 items-center w-full mt-2 text-sm justify-center"><Building className="w-4" /> Pay with Bank Transfer</button>
                        <div className=" flex p-2 justify-center items-center">

                            <p className="text-sm text-gray-500 ">Secure payment powered by collect pro</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}