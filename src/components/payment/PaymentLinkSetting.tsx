import {  UploadCloud } from "lucide-react";

export default function PaymentSetting() {

    return (
        <>
            <div className="w-1/2 mt-6 rounded-md border border-gray-200 p-4">
                <p className="font-medium">Payment Link Setting</p>
                <p className="py-4 text-sm text-gray-600">Company Logo</p>

                <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-white p-6">
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                        <UploadCloud className="h-6 w-6 text-gray-400" />

                        <span className="text-sm">Upload your company logo</span>

                        <button
                            type="button"
                            className="rounded-xl text-gray-800 border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100"
                        >
                            Browse Files
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}