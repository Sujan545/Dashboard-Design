import { useState } from "react";
import { Eye, EyeOff, Copy, ConeIcon, AppWindow } from "lucide-react";


interface ApiKeyItem {
    id: string;
    name: string;
    status: "active" | "inactive";
    apiKey: string;
    createdAt: string;
    lastUsed: string;
};

function Card({ id, name, apiKey, createdAt, status, lastUsed }: ApiKeyItem) {

    console.log(id, name, apiKey, createdAt, status, lastUsed)
    const [showHalf, setShowHalf] = useState(false);

    const halfLength = Math.floor(apiKey.length / 2);

    const maskedKey = showHalf
        ? apiKey.slice(0, halfLength) + "*".repeat(4)
        : apiKey;

    const handleCopy = async () => {
        await navigator.clipboard.writeText(apiKey);

    };
    const bgColorChecker: Record<string, string> = {
        active: "bg-gray-900 text-white",
        inactive: "bg-gray-200 "
    };
    const color = bgColorChecker[status];
    return (
        <>
            <div className="rounded-md font-normal gap-2 flex flex-col  px-2 py-4 border border-gray-200 ">
                <p className="flex text-sm  gap-2">{name}<button className={`text-xs py-0.5 px-2 ${color}  rounded-lg`} >{status}</button></p>
                <div className="flex justify-between items-center">
                    {/* Left */}
                    <div className="flex gap-2 items-center text-sm">
                        <p className="bg-gray-200/50 rounded-md px-2">{maskedKey}</p>
                        {/* Eye toggle */}
                        <button
                            onClick={() => setShowHalf(!showHalf)}
                            className="text-gray-500 hover:text-gray-800 rounded-md py-0.5 hover:bg-gray-300 px-2 "
                        >
                            {showHalf ? <Eye className="w-4" /> : <EyeOff className="w-4" />}
                        </button>
                        {/* Copy */}
                        <button
                            onClick={handleCopy}
                            className="text-gray-500 hover:text-gray-800 py-0.5 rounded-md hover:bg-gray-300 px-2"
                        >
                            <Copy className="w-4" />
                        </button>
                    </div>
                    {/* Right */}
                    <div className="flex gap-2">
                        <button className="border text-xs py-0.5  border-gray-200 px-2 gap-2 flex items-center hover:bg-gray-100 rounded-md">
                            <ConeIcon className="w-4" />
                            Regenerate
                        </button>
                        <button className="text-red-600 py-0.5 text-xs  hover:bg-gray-300 hover:text-gray-900 rounded-md px-2">
                            Delete
                        </button>
                    </div>
                </div>
                <p className="text-xs text-gray-500">
                    Created:{createdAt}• Last used: {lastUsed}</p>
            </div>
        </>

    )
}

export default function ApiKeys() {

    const apiKeysData: ApiKeyItem[] = [
        {
            id: "prod_1",
            name: "Production API Key",
            status: "active",
            apiKey: "sk_live_abcd1234efgh5678",
            createdAt: "2024-01-15",
            lastUsed: "2 hours ago",
        },
        {
            id: "dev_1",
            name: "Development API apiKey",
            status: "active",
            apiKey: "sk_test_abcd1234efgh5678",
            createdAt: "2024-01-10",
            lastUsed: "5 days ago",
        },
        {
            id: "webhook_1",
            name: "Webhook API apiKey",
            status: "inactive",
            apiKey: "wh_abcd1234efgh5678",
            createdAt: "2024-01-05",
            lastUsed: "Never",
        },
    ];

    return (
        <>
            <div className="flex flex-col font-normal gap-2">
                <div className="rounded-md border flex flex-col border-gray-200 gap-3 p-6 mt-6">
                    <p className="flex gap-2 text-md  items-center"><AppWindow className="w-4" /> API Keys</p>
                    {apiKeysData.map((item) => (
                        <Card
                            id={item.id}
                            name={item.name}
                            status={item.status}
                            apiKey={item.apiKey}
                            createdAt={item.createdAt}
                            lastUsed={item.lastUsed}
                        />
                    ))}
                    <button className="bg-gray-900 text-white rounded-md text-sm py-1  w-full text-center">Create New API Key</button>
                </div>
                <div className="rounded-md border flex flex-col gap-4 border-gray-200 p-6 ">
                    <p className="text-md ">API Documentation</p>
                    <p className="text-sm text-gray-500 ">Use our REST API to integrate CollectPro with your existing systems.</p>
                    <div className="flex gap-2 ">
                        <button className="rounded-md border border-gray-200 text-left px-2 py-1 w-full hover:bg-gray-300">View API Documentation</button>
                        <button className="rounded-md border border-gray-200 px-2 w-full py-1 text-left hover:bg-gray-300">Download Postman Collection</button>
                    </div>
                    <div className="bg-gray-200/50 rounded-md p-2">
                        <p className="text-sm py-2">Rate Limits</p>
                        <div className="text-gray-500 text-xs flex flex-col gap-2 ">
                            <p>• 1000 requests per hour for standard endpoints</p>
                            <p>• 100 requests per hour for bulk operations</p>
                            <p>• 10 requests per minute for authentication</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}