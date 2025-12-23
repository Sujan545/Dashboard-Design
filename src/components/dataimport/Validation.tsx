import { CheckCircle, XCircle } from "lucide-react";



function StatusIcon({ status }: { status: "complete" | "missing" }) {
    return status === "complete" ? (
        <CheckCircle className="h-5 w-5 text-green-600" />
    ) : (
        <XCircle className="h-5 w-5 text-red-500" />
    );
}


export default function Validation() {


    const customers = [
        {
            status: "complete",
            customer_name: "John Smith",
            email: "john@example.com",
            phone: "+1234567890",
            amount_due: "$1,250.00",
            due_date: "2024-02-15",
        },
        {
            status: "missing",
            customer_name: "Jane Doe",
            email: "Missing",
            phone: "+1234567891",
            amount_due: "$850.00",
            due_date: "2024-02-20",
        },
        {
            status: "complete",
            customer_name: "Bob Johnson",
            email: "bob@example.com",
            phone: "+1234567892",
            amount_due: "$2,100.00",
            due_date: "2024-02-10",
        },
    ];
    return (
        <>
            <div className="border border-gray-200 flex flex-col rounded-md p-4 gap-2">
                <div className="flex justify-between items-center">
                    <p className="font-normal text-md ">Validation & Preview</p>
                    <button className="rounded-md  text-xs bg-red-600 text-white px-2 ">12 rows need attention</button>
                </div>
                <div className="rounded-md p-2 bg-red-100/70">
                    <p className="p-2 flex items-center text-sm gap-2 text-red-600"><XCircle className="w-4" /> Data Validation Issue found</p>
                    <div className="flex flex-col gap-3 m-2 ">
                        <div className="bg-gray-50 p-2 ">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-md">Row 15: Invalid phone number format</p>
                                    <p className="text-sm text-gray-500">Field: Phone, Value: "123-456"</p>
                                </div>
                                <button className="rounded-md border hover:bg-gray-300 text-xs border-gray-200 px-2">Fix</button>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-2 ">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-md">Row 23: Missing email address</p>
                                    <p className="text-sm text-gray-500">Field: Phone, Value: "123-456"</p>
                                </div>
                                <button className="rounded-md border text-xs hover:bg-gray-300 border-gray-200 px-2">Fix</button>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-2 ">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-md">Row 31: Non-numeric amount</p>
                                    <p className="text-sm text-gray-500">Field: Phone, Value: "123-456"</p>
                                </div>
                                <button className=" text-xs rounded-md border hover:bg-gray-300 border-gray-200 px-2">Fix</button>
                            </div>
                        </div>
                        <hr className="text-gray-400 px-2" />
                        <button className="border py-1 border-gray-200 bg-white rounded-md  text-sm hover:bg-gray-300 px-2 w-full">Bulk Fix Common Issue</button>
                    </div>
                </div>
                <div>
                    <p className="py-4 ">Data Preview (First 20 Rows) </p>
                     <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm border border-gray-300 border-collapse">
                            <thead className="bg-gray-200/50">
                                <tr>
                                    <th className="border border-gray-300 py-3 px-3">Status</th>
                                    <th className="border border-gray-300 py-3 ">Customer Name</th>
                                    <th className="border border-gray-300 px-3">Email</th>
                                    <th className="border border-gray-300 px-3">Phone</th>
                                    <th className="border border-gray-300 px-3">Amount Due</th>
                                    <th className="border border-gray-300 px-3">Due Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {customers.map((item) => (
                                    <tr key={item.email}>
                                        <td className="border border-gray-200 py-3 px-3"><StatusIcon status={item.status}/></td>
                                        <td className="border border-gray-200 py-3 px-3">{item.customer_name}</td>
                                        <td className="border border-gray-200 px-3">{item.email}</td>
                                        <td className="border border-gray-200 px-3">{item.phone}</td>
                                        <td className="border border-gray-200 px-3">{item.amount_due}</td>
                                        <td className="border border-gray-200 px-3">{item.due_date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}