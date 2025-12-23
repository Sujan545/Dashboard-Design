


export default function UploadFile() {
    return (
        <>
            <div className="border rounded-xl p-6">
                <p className="font-medium mb-4">Upload Your Data File</p>

                <div className="border-2 border-dashed rounded-lg p-10 text-center text-gray-500">
                    Drag and drop your file here
                    <br />
                    <button className="mt-4 px-4 py-2 border rounded-md">
                        Browse Files
                    </button>
                </div>
            </div>
        </>
    )
}