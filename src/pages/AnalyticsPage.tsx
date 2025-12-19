import { Filter, Import } from "lucide-react";
import { useState } from "react";
import AbTesting from "../components/analytics/AbTesting";
import Overview from "../components/analytics/Overview";
import Performance from "../components/analytics/Performance";
import Channels from "../components/analytics/Channels";


function OverviewBtn() {
    return <Overview />
}
function AbTestingBtn() {
    return <AbTesting />
}
function ChannelsBtn() {
    return <Channels />
}
function PerformanceBtn() {
    return <Performance />
}


export default function Analytics() {

    const [active, setActive] = useState<string>("Last 7d");
    const [activeTab, setActiveTab] = useState("overview")
    const buttons = ["Last 7d", "Last 30d", "Last 90d", "Custom"];
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-normal text-2xl">Analytics & Reportin</h1>
                    <p className="text-gray-500">Track performance and optimize your collection campaigns</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="border rounded-md px-3 py-1 transition hover:bg-gray-400 text-sm border-gray-200 flex gap-2"> <Filter className="w-4" />Filter</button>
                    <button className="border rounded-md px-3 py-1 trransition hover:bg-gray-400 text-sm border-gray-200 flex gap-2"><Import className="w-4" />Export</button>
                </div>
            </div>
            <div className="flex gap-2 mt-6">
                {buttons.map((label) => (
                    <button
                        key={label}
                        onClick={() => setActive(label)}
                        className={`
            rounded-md border text-sm px-3 py-1 transition
            ${active === label
                                ? "bg-gray-900 text-white border-gray-900"
                                : "border-gray-200 hover:bg-gray-300"
                            }
          `}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="flex gap-2 mt-6 py-1 font-normal w-1/3 px-1 rounded-lg bg-gray-300 text-sm">
                <button
                    className={`px-3 py-1 rounded-sm ${activeTab === "overview"
                        ? "bg-white"
                        : "bg-gray-300"
                        }`}
                    onClick={() => setActiveTab("overview")}
                >
                    Overview                </button>

                <button
                    className={`px-3 py-1 rounded-sm ${activeTab === "performance"
                        ? " bg-white"
                        : "bg-gray-300"
                        }`}
                    onClick={() => setActiveTab("performance")}
                >
                    Performance
                </button>

                <button
                    className={`px-3 py-1 rounded-sm ${activeTab === "channels"
                        ? "bg-white"
                        : "bg-gray-300 "
                        }`}
                    onClick={() => setActiveTab("channels")}
                >
                    Channels
                </button>
                <button
                    className={`px-3 py-1 rounded-sm ${activeTab === "ab-testing"
                        ? "bg-white"
                        : "bg-gray-300 "
                        }`}
                    onClick={() => setActiveTab("ab-testing")}
                >
                    A/B Testing
                </button>
            </div>
            <div className="tab-content">
                {activeTab === "overview" && <OverviewBtn />}
                {activeTab === "performance" && <PerformanceBtn />}
                {activeTab === "channels" && <ChannelsBtn />}
                {activeTab === "ab-testing" && <AbTestingBtn />}
            </div>
        </>
    )
}