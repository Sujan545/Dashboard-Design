import { Mail } from "lucide-react";



export default function Channels() {
    return (
        <>
            <div>
                <div className="rounded-md border border-gray-200 mt-6 gap-4 flex flex-col p-4 ">
                    <p className="flex items-center gap-2 "> <Mail className="w-4" />Email Cofiguration</p>

                    <div className="flex gap-4">

                        <div className="flex flex-col gap-2 w-1/2">
                            <p className="mt-4">SMTP Host</p>
                            <input type="text"
                                className="w-full bg-gray-200 px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                                placeholder="smtp.gmail.com" />
                            <p>SMTP Port</p>
                            <input type="text"
                                className="w-full bg-gray-200 px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                                placeholder="587" />
                            <p>Username</p>
                            <input type="text"
                                className="w-full bg-gray-200 px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                                placeholder="youremailid.domain.com" />
                            <p>Password</p>
                            <input type="password"
                                className="w-full bg-gray-200 px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                                placeholder="*********" />
                        </div>
                        <div className="rounded-md border border-gray-200 flex flex-col gap-2 h-1/2 w-1/2 p-4">
                            <p>DNS Verification</p>
                            <p className="text-sm text-gray-500">Add these DNS records to verify your domain:</p>
                            <div className="bg-gray-200 p-4 rounded-md">
                                <p >TXT: v=spf1 include:_spf.google.com ~all</p>
                                <p>CNAME: mail.yourdomain.com</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-gray-200 rounded-sm text-sm px-2">Pending Verification</button>
                                <button className="rounded-sm border border-gray-200 px-2 hover:bg-gray-200">Verify Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className="rounded-md border border-gray-200 hover:bg-gray-200 px-2 ">Test Connection</button>
                        <button className="rounded-md bg-gray-900 text-white px-2 not-last-of-type:">Save Email Setting</button>
                    </div>
                </div>
            </div>
        </>
    )
}