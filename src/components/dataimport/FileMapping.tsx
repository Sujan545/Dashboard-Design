
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";



interface DetectedColumn {
    field: string;
    status: "Auto-matched" | "Manual";
    sample: string;
}



interface Props {
    value: string | null;
    onChange: (value: string | null) => void;
}

function RequiredFieldDropdown({ value, onChange }: Props) {

    const availableFields = [
        "customer_name",
        "email_address",
        "phone_number",
        "amount_due",
        "due_date",
    ];
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-full">
            {/* Trigger */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between rounded-md bg-gray-200 px-3 py-2 text-sm hover:bg-gray-300"
            >
                <span className="truncate">
                    {value ?? "Select field"}
                </span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute z-20 mt-1 w-full rounded-md border bg-white shadow-lg">
                    {availableFields.map((field) => (
                        <button
                            key={field}
                            onClick={() => {
                                onChange(field);
                                setOpen(false);
                            }}
                            className="flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-gray-100"
                        >
                            <span>{field}</span>
                            {value === field && (
                                <Check className="h-4 w-4 text-gray-900" />
                            )}
                        </button>
                    ))}

                    {/* Ignore option */}
                    <button
                        onClick={() => {
                            onChange(null);
                            setOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left text-sm text-red-500 hover:bg-gray-100"
                    >
                        Ignore
                    </button>
                </div>
            )}
        </div>
    );
}

function Card({ field, status, sample }: DetectedColumn) {
    return (
        <>
            <div className="p-2 rounded-md border border-gray-200 ">
                <div className="flex flex-col ">
                    <div className="flex justify-between items-center">
                        <p>{field}</p>
                        <button className="rounded-md bg-gray-300  text-xs px-2 ">{status}</button>
                    </div>
                    <p className="text-sm text-gray-500">Sample: {sample}</p>
                </div>

            </div>
        </>
    )
}

export default function FieldMapping() {
    const detectedColumns: DetectedColumn[] = [
        {
            field: "customer_name",
            status: "Auto-matched",
            sample: "John Smith",
        },
        {
            field: "email_address",
            status: "Auto-matched",
            sample: "john@example.com",
        },
        {
            field: "phone_number",
            status: "Auto-matched",
            sample: "+1234567890",
        },
        {
            field: "amount_due",
            status: "Auto-matched",
            sample: "$1,250.00",
        },
        {
            field: "due_date",
            status: "Auto-matched",
            sample: "2024-02-15",
        },
    ];
    const [mapping, setMapping] = useState<Record<string, string | null>>({
        customerName: "customer_name",
        email: "email_address",
        phone: "phone_number",
        amountDue: "amount_due",
        dueDate: "due_date",
    });
    const customers = [
        {
            customer_name: "John Smith",
            email: "john@example.com",
            phone: "+1234567890",
            amount_due: 1250.0,
            due_date: "2024-02-15",
        },
        {
            customer_name: "Jane Doe",
            email: "jane@example.com",
            phone: "+1234567891",
            amount_due: 850.0,
            due_date: "2024-02-20",
        },
        {
            customer_name: "Bob Johnson",
            email: "bob@example.com",
            phone: "+1234567892",
            amount_due: 2100.0,
            due_date: "2024-02-10",
        },
    ]
    return (
        <>
            <div className="border border-gray-200 flex flex-col rounded-md p-4 gap-2">
                <p className=" ">Field Mapping</p>
                <div className="flex gap-4">
                    <div className="flex py-4 flex-col gap-2 w-1/2">
                        <p className="">Deleted Columns</p>
                        {detectedColumns.map((item) => (
                            <Card
                                field={item.field}
                                sample={item.sample}
                                status={item.status}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <p className="w-1/2">Required Field</p>
                        <div className="">
                            <div>
                                <label className="text-sm font-medium">Customer Name</label>
                                <RequiredFieldDropdown
                                    value={mapping.customerName}
                                    onChange={(val) =>
                                        setMapping({ ...mapping, customerName: val })
                                    }
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Email</label>
                                <RequiredFieldDropdown
                                    value={mapping.email}
                                    onChange={(val) =>
                                        setMapping({ ...mapping, email: val })
                                    }
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Phone</label>
                                <RequiredFieldDropdown
                                    value={mapping.phone}
                                    onChange={(val) =>
                                        setMapping({ ...mapping, phone: val })
                                    }
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Amount Due</label>
                                <RequiredFieldDropdown
                                    value={mapping.amountDue}
                                    onChange={(val) =>
                                        setMapping({ ...mapping, amountDue: val })
                                    }
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Due Date</label>
                                <RequiredFieldDropdown
                                    value={mapping.dueDate}
                                    onChange={(val) =>
                                        setMapping({ ...mapping, dueDate: val })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="py-4 ">Data Preview (First 3 Rowa) </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm border border-gray-300 border-collapse">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="border border-gray-300 py-3 px-3">Customer Name</th>
                                    <th className="border border-gray-300 px-3">Email</th>
                                    <th className="border border-gray-300 px-3">Phone</th>
                                    <th className="border border-gray-300 px-3">Amount Due</th>
                                    <th className="border border-gray-300 px-3">Due Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {customers.map((item) => (
                                    <tr key={item.email}>
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