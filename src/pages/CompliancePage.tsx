import { Notebook } from "lucide-react";
import { useState } from "react";
import Output from "../components/compliance/OutputManagement";
import ConsentTracking from "../components/compliance/ConsentTracking";
import ComplianceChecker from "../components/compliance/ComplianceChecker";


function OptOutManagement() {
    return <Output />;
}

function Consent() {
    return <ConsentTracking />;
}

function Compliance() {
    return <ComplianceChecker />;
}

export default function Complaince() {

    const [activeTab, setActiveTab] = useState("output");
    return (

        <>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-semibold text-2xl">Compliance Center</h1>
                    <p className="text-gray-500">Manage opt-outs, consent, and regulatory compliance</p>
                </div>
                <div className="flex gap-2">
                    <button

                        className="bg-black text-white rounded-md flex items-center p-2 text-sm gap-2 "><Notebook className="h-4 w-4" />Compliance Report</button>
                </div>
            </div>
            <div className="flex gap-2 mt-6">
                <button
                    className={`px-4 py-2 rounded-full ${activeTab === "optout"
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-700"
                        }`}
                    onClick={() => setActiveTab("optout")}
                >
                    Opt-Out Management
                </button>

                <button
                    className={`px-4 py-2 rounded-full ${activeTab === "consent"
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-700"
                        }`}
                    onClick={() => setActiveTab("consent")}
                >
                    Consent Tracking
                </button>

                <button
                    className={`px-4 py-2 rounded-full ${activeTab === "compliance-checker"
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-700"
                        }`}
                    onClick={() => setActiveTab("compliance-checker")}
                >
                    Compliance Checker
                </button>
            </div>

            <div className="tab-content">
                {activeTab === "optout" && <OptOutManagement />}
                {activeTab === "consent" && <Consent/>}
                {activeTab === "compliance-checker" && <Compliance/>}
            </div>



        </>
    )

}