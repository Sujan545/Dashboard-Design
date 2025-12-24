import { Mail, MessageCircle, PhoneCall, PhoneCallIcon } from "lucide-react";
import { useState } from "react";



export default function Channels() {
    const [enabled, setEnabled]=useState(false)
    return (
        <>
            <div className="flex flex-col font-normal gap-4">
                <div className="rounded-md border border-gray-200 mt-6 gap-4 flex flex-col p-4 ">
                    <p className="flex items-center text-md gap-2 "> <Mail className="w-4" />Email Cofiguration</p>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-2 w-1/2">
                            <p className="mt-2">SMTP Host</p>
                            <input type="text"
                                className="w-full bg-gray-200/50  px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                                placeholder="smtp.gmail.com" />
                            <p>SMTP Port</p>
                            <input type="text"
                                className="w-full bg-gray-200/50 px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                                placeholder="587" />
                            <p>Username</p>
                            <input type="text"
                                className="w-full bg-gray-200/50 px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                                placeholder="youremailid.domain.com" />
                            <p>Password</p>
                            <input type="password"
                                className="w-full bg-gray-200/50 px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                                placeholder="*********" />
                        </div>
                        <div className="rounded-md border border-gray-200 flex flex-col gap-2 h-1/2 w-1/2 p-4">
                            <p className="text-md ">DNS Verification</p>
                            <p className="text-sm text-gray-500">Add these DNS records to verify your domain:</p>
                            <div className="bg-gray-200 p-4 text-sm rounded-md">
                                <p >TXT: v=spf1 include:_spf.google.com ~all</p>
                                <p>CNAME: mail.yourdomain.com</p>
                            </div>
                            <div className="flex text-sm  gap-2">
                                <button className="bg-gray-200 rounded-sm text-sm py-0.5 px-2">Pending Verification</button>
                                <button className="rounded-sm border border-gray-200 px-2 py-0.5 hover:bg-gray-300">Verify Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between text-sm items-center">
                        <button className="rounded-md border border-gray-200 hover:bg-gray-300 py-1  px-2 ">Test Connection</button>
                        <button className="rounded-md bg-gray-900 text-white px-2 py-1  not-last-of-type:">Save Email Setting</button>
                    </div>
                </div>
                <div className="rounded-md border border-gray-200 gap-4 flex flex-col p-4 ">
                    <p className="flex items-center text-md  gap-2 "> <MessageCircle className="w-4" />SMS Cofiguration</p>

                    <div className="flex gap-4">

                        <div className="flex flex-col gap-2 w-1/2">
                            <p className="mt-4">SMS Provider</p>
                            <select
                                className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                <option value="Friendly">Twilio</option>
                                <option value="Firm">AWS SNS</option>
                                <option value="Final Notice">MessageBird</option>

                            </select>
                            <p>Sender ID</p>
                            <select
                                className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                <option value="Friendly">1 (555) 123-4567</option>
                                <option value="Firm">+1 (555) 123-4568</option>

                            </select>
                        </div>
                        <div className="rounded-md border border-gray-200 flex flex-col gap-2 h-1/2 w-1/2 p-4">
                            <p className="text-sm">Available Numbers</p>
                            <div className="flex justify-between text-sm items-center">
                                <p>+1 (555) 123-4567</p>
                                <button className="rounded-sm bg-gray-900 text-white text-xs py-0.5 px-2">Active</button>
                            </div>
                            <div className="flex text-sm justify-between items-center">
                                <p>+1 (555) 123-4568</p>
                                <button className="rounded-sm bg-gray-200 hover:bg-gray-300 text-xs py-0.5 px-2">Backup</button>
                            </div>
                            <button className="rounded-md border border-gray-200 text-sm py-1 px-2 hover:bg-gray-300">Buy Now</button>
                        </div>
                    </div>
                    <button className="bg-gray-900 text-white px-2 w-1/7 text-sm py-1 rounded-md">Save SMS Setting</button>
                </div>
                <div className="rounded-md border border-gray-200 gap-4 flex flex-col p-4 ">
                    <p className="flex text-md items-center gap-2 "> <PhoneCall className="w-4" />Voice Cofiguration</p>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-2 w-1/2">
                            <p className="mt-4 text-md ">Caller ID</p>
                            <select
                                className="w-full border border-gray-300 rounded-lg px-2 py-1  text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                <option value="Friendly">1 (555) 123-4567</option>
                                <option value="Firm">+1 (555) 123-4568</option>


                            </select>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm ">STIR/SHAKEN Compliance</p>
                                    <span className="text-xs text-gray-500">Enable call authentication</span>
                                </div>
                                <div>
                                    <button
                                        onClick={() => setEnabled(!enabled)}
                                        role="switch"
                                        aria-checked={enabled}
                                        className={`relative inline-flex h-4 w-8 items-center rounded-full transition-colors
          ${enabled ? "bg-gray-900" : "bg-gray-300"}
        `}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
            ${enabled ? "translate-x-4" : "translate-x-0.5"}
          `}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-md border border-gray-200 flex flex-col gap-2 h-1/2 w-1/2 p-4">
                            <p className="text-md ">Test Your Setup</p>
                            <p className="text-gray-500 text-sm">Test the voice configuration with a sample call</p>
                            <input type="text"
                                className="w-full bg-gray-200/50 px-2 py-1 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                                placeholder="Phone Number" />
                            <button className="flex gap-2 bg-gray-900 text-white rounded-md px-2 py-1 mt-2 items-center justify-center"><PhoneCallIcon className="w-4" />Sent Test Call</button>
                        </div>
                    </div>
                    <button className="bg-gray-900 text-white px-2 py-1 text-sm w-1/7 rounded-md">Save Voice Setting</button>
                </div>
            </div>
        </>
    )
}