import { SquareChevronUp } from "lucide-react";
import { useState } from "react";



export default function Security() {
    const [enabled, setEnabled] = useState(false)
    const [enable, setEnable] = useState(true)
    return (
        <>
            <div className="flex flex-col m-w-full gap-4">
                <div className="rounded-md border flex flex-col border-gray-200 gap-2 p-4 mt-6">
                    <p className="flex gap-2 items-center"><SquareChevronUp className="w-4" /> Security Setting</p>
                    <div className="flex flex-col gap-4 ">
                        <div className="flex justify-between mt-4">
                            <div>
                                <p>Two Factor Authentication</p>
                                <p className="text-sm text-gray-500 ">Add an extra layer of security to your account</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => setEnabled(!enabled)}
                                    role="switch"
                                    aria-checked={enabled}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
          ${enabled ? "bg-gray-900" : "bg-gray-300"}
        `}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
            ${enabled ? "translate-x-6" : "translate-x-1"}
          `}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between ">
                            <div>
                                <p>Organization-wide-MFA</p>
                                <p className="text-sm text-gray-500 ">Require all team members to use MFA</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => setEnabled(!enabled)}
                                    role="switch"
                                    aria-checked={enabled}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
          ${enabled ? "bg-gray-900" : "bg-gray-300"}
        `}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
            ${enabled ? "translate-x-6" : "translate-x-1"}
          `}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between ">
                            <div>
                                <p>Login Notification</p>
                                <p className="text-sm text-gray-500 ">Get notified of new login attempts</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => setEnable(!enable)}
                                    role="switch"
                                    aria-checked={enabled}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
          ${enable ? "bg-gray-900" : "bg-gray-300"}
        `}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
            ${enable ? "translate-x-6" : "translate-x-1"}
          `}
                                    />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="rounded-md border flex flex-col  border-gray-200 gap-2 p-4">
                    <p className=""> Audit Log</p>
                    <div className="rounded-md p-2  border border-gray-200">
                        <div className="flex justify-between items-center">
                            <div>
                                <p>Created new campaign</p>
                                <p className="text-sm text-gray-500">by John Doe from 192.168.1.1</p>
                            </div>
                          <p className="text-sm text-gray-500">2024-01-15 14:30</p>
                        </div>
                    </div>
                    <div className="rounded-md p-2  border border-gray-200">
                        <div className="flex justify-between items-center">
                            <div>
                                <p>Updated template</p>
                                <p className="text-sm text-gray-500">by John Doe from 192.168.1.1</p>
                            </div>
                          <p className="text-sm text-gray-500">2024-01-15 14:30</p>
                        </div>
                    </div>
                    <div className="rounded-md p-2  border border-gray-200">
                        <div className="flex justify-between items-center">
                            <div>
                                <p>Exported compliance report</p>
                                <p className="text-sm text-gray-500">by John Doe from 192.168.1.1</p>
                            </div>
                          <p className="text-sm text-gray-500">2024-01-15 14:30</p>
                        </div>
                    </div>
                    <div className="rounded-md p-2  border border-gray-200">
                        <div className="flex justify-between items-center">
                            <div>
                                <p>Added user to opt-out list</p>
                                <p className="text-sm text-gray-500">by John Doe from 192.168.1.1</p>
                            </div>
                          <p className="text-sm text-gray-500">2024-01-15 14:30</p>
                        </div>
                    </div>
                   
                    <button className="rounded-md border border-gray-200 hover:bg-gray-300 w-full">View Full Audit Log</button>
                </div>
            </div>
        </>
    )
}