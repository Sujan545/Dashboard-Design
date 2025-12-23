import { useState } from "react"
import Channels from "../components/settings/Channels"
import Organization from "../components/settings/Organization"
import SEcurity from "../components/settings/Security"
import ApiKeys from "../components/settings/ApiKeys"

function ChannelsBtn() {
    return <Channels />
}

function OrganizationBtn() {
    return <Organization />
}
function SecurityBtn() {
    return <SEcurity />
}
function ApiKeysBtn() {
    return <ApiKeys />
}
export default function Setting() {
    const [activeTab, setActiveTab] = useState("channels")
    return (
        <>
            <div>
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="font-semibold text-2xl">Settings</h1>
                        <p className="text-gray-500">Configure your account and system preferences </p>
                    </div>
                </div>
                <div className="flex gap-2 mt-6 py-1 w-[29%] px-1 rounded-lg bg-gray-300 text-sm">
                    <button
                        className={`px-2 py-1 rounded-sm ${activeTab === "channels"
                            ? "bg-white"
                            : "bg-gray-300"
                            }`}
                        onClick={() => setActiveTab("channels")}
                    >
                        Channels
                    </button>

                    <button
                        className={`px-2 py-1 rounded-sm ${activeTab === "organization"
                            ? " bg-white"
                            : "bg-gray-300"
                            }`}
                        onClick={() => setActiveTab("organization")}
                    >
                        Organization
                    </button>

                    <button
                        className={`px-2 py-1 rounded-sm ${activeTab === "security"
                            ? "bg-white"
                            : "bg-gray-300 "
                            }`}
                        onClick={() => setActiveTab("security")}
                    >
                        Security
                    </button>
                    <button
                        className={`px-2 py-1 rounded-sm ${activeTab === "api-keys"
                            ? "bg-white"
                            : "bg-gray-300 "
                            }`}
                        onClick={() => setActiveTab("api-keys")}
                    >
                        API Keys
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === "channels" && <ChannelsBtn />}
                    {activeTab === "organization" && <OrganizationBtn />}
                    {activeTab === "security" && <SecurityBtn />}
                    {activeTab === "api-keys" && <ApiKeysBtn />}
                </div>

            </div>
        </>
    )
}