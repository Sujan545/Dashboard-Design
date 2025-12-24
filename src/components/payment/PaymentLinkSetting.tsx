import { UploadCloud } from "lucide-react";

export default function PaymentSetting() {

    return (
        <>
            <div className="w-full mt-6 rounded-md border font-normal border-gray-200 p-4">
                <p className=" text-medium">Payment Link Setting</p>
                <p className="py-4 text-sm ">Company Logo</p>

                <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-white p-6">
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                        <UploadCloud className="h-6 w-6 text-gray-400" />

                        <span className="text-sm">Upload your company logo</span>

                        <button
                            type="button"
                            className="rounded-xl font-medium text-gray-800 border border-gray-300 px-2 py-1 text-sm hover:bg-gray-100"
                        >
                            Browse Files
                        </button>
                    </div>
                </div>
                <div className="py-2 gap-2 flex flex-col">
                    <p>Company Name</p>
                    <input type="text"
                    className="w-full bg-gray-200/50 px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                    placeholder="Collect pro" />
                    <p>Sucess Redirect URL</p>
                    <input type="text"
                    className="w-full bg-gray-200/50px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                    placeholder="https://yoursite.com/payment-sucess" />  
                    <p>Failure Redirect URl</p>
                    <input type="text"
                    className="w-full bg-gray-200/50 px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                    placeholder="https://yoursite.com/payment-failed"/>
                    
                </div>
            </div>
        </>
    )
}