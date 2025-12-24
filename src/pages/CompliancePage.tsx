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

    const [activeTab, setActiveTab] = useState("optout");
    return (

        <>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-medium text-lg">Compliance Center</h1>
                    <p className="text-gray-500 text-xs">Manage opt-outs, consent, and regulatory compliance</p>
                </div>
                <div className="flex font-medium gap-2">
                    <button className="bg-black text-white rounded-md flex items-center px-2 py-1 text-sm gap-2 "><Notebook className="h-4 w-4" />Compliance Report</button>
                </div>
            </div>
            <div className="flex gap-2 mt-6 py-0.5 font-normal  w-[38%] px-1 rounded-lg bg-gray-200 text-sm">
                <button
                    className={`px-2 py-1 rounded-sm ${activeTab === "optout"
                        ? "bg-white"
                        : "bg-gray-200"
                        }`}
                    onClick={() => setActiveTab("optout")}
                >
                    Opt-Out Management
                </button>

                <button
                    className={`px-2 py-1 rounded-sm ${activeTab === "consent"
                        ? " bg-white"
                        : "bg-gray-200"
                        }`}
                    onClick={() => setActiveTab("consent")}
                >
                    Consent Tracking
                </button>

                <button
                    className={`px-1 py-1 rounded-sm ${activeTab === "compliance-checker"
                        ? "bg-white"
                        : "bg-gray-200 "
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