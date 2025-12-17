

export default function PaymentTest() {
    return (
        <>
            <div className="w-full mt-6 rounded-md border border-gray-200 p-4">
                <p className="font-medium ">Payment Methods</p>
                <div className="flex justify-between py-4">
                    <div>
                        <p>Test Amount</p>
                        <input type="text"
                            className="bg-gray-100 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 "
                            placeholder="$100.00" />
                    </div>
                    <div>
                        <p>Customer Email</p>
                        <input type="email"
                            className="bg-gray-100 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 "
                            placeholder="test@example.com" />
                    </div>
                </div>
                <button className="w-full p-1 rounded-md bg-gray-800 text-white items-center">Generate Test Payment Link</button>

            </div>
        </>
    )
}