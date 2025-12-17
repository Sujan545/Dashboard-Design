import { Eye } from "lucide-react";
import PaymentSetting from "../components/payment/PaymentLinkSetting";


export default function Payment(){

    return(
        <>
           <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-semibold text-2xl">Payment Portal</h1>
                    <p className="text-gray-500">Configure payment methods and manage transactions </p>
                </div>
                <div className="flex gap-2 items-center">
                    <button className="bg-black text-white rounded-md p-2 text-sm flex gap-2 items-center"><Eye className="w-4"/> Preview Portal</button>
                </div>
            </div>
            <PaymentSetting/>
        </>
    )
}