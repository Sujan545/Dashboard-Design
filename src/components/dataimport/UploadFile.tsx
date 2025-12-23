import { File, Import, Upload } from "lucide-react";



export default function UploadFile() {
    return (
        <>
            <div className="border border-gray-200 flex flex-col rounded-md p-4 gap-2">
                <p className="font-normal text-md mb-4 flex gap-2 "><Upload className="w-4" />Upload Your Data File</p>

                <div className="border-gray-200 border-2 flex justify-center hover:border-gray-400 border-dashed rounded-md p-10  text-gray-500">

                    <div className="flex flex-col gap-2 items-center">
                        <File size={50} />
                        <p>
                            Drag and drop your file here
                        </p>
                        <button className=" px-4 border border-gray-200 hover:bg-gray-300 rounded-md">
                            Browse Files
                        </button>
                    </div>
                </div>
                <div className="p-2 bg-gray-100 items-center rounded-md flex justify-between">
                    <div className="font-normal">
                        <p>Need a template?</p>
                        <p className="text-sm text-gray-500">Download our sample CSV file to get started</p>
                    </div>

                    <button className="flex gap-2 rounded-md border text-sm py-1 font-normal border-gray-300 hover:bg-gray-300 px-2 items-center"><Import />Download Template</button>

                </div>
            </div>
        </>
    )
}