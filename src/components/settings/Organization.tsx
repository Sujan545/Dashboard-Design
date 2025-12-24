import { UserCircle2 } from "lucide-react";




export default function Organization() {
    return (
        <>
            <div className="flex flex-col font-normal gap-4">
                <div className="rounded-md border flex flex-col border-gray-200 gap-4 p-4 mt-6">
                    <p className="text-md ">Organization Details</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <div className="w-1/2">
                                <p className="text-sm">Organization Name</p>
                                <input type="text"
                                    className="w-full bg-gray-200/50 py-1 px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                                    placeholder="CollectPro Inc" />
                            </div>
                            <div className="w-1/2">
                                <p className=" text-sm">Domain</p>
                                <input type="text"
                                    className="w-full bg-gray-200/50 py-1 px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                                    placeholder="collectPro.com" />
                            </div>
                        </div>
                        <div className="flex gap-2 ">
                            <div className="w-1/2">
                                <p className="text-sm">Address</p>
                                <input type="text"
                                    className="w-full bg-gray-200/50 py-1 px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                                    placeholder="kupondole, Lalitpur" />
                            </div>
                            <div className="w-1/2">
                                <p className="text-sm">Phone</p>
                                <input type="text"
                                    className="w-full bg-gray-200/50 py-1 px-2 rounded-md focus:outline-none focus:ring-gray-400 focus:ring-2"
                                    placeholder="+1 9876543210" />
                            </div>
                        </div>
                    </div>
                    <button className="bg-gray-900 text-white rounded-md px-2 py-1 text-sm  w-1/7">Update Organization</button>
                </div>
                <div className="rounded-md border flex flex-col  border-gray-200 gap-3 p-4">
                    <p className="flex gap-2 text-md mb-4 items-center"><UserCircle2 className="w-4" /> Team Members</p>
                    <div className="rounded-md p-2 flex justify-between items-center  border border-gray-200">
                        <div className="flex items-center justify-center gap-2">
                            <span className="rounded-full w-8 h-8 p-1 bg-gray-900 text-white justify-center ">JD</span>
                            <div>
                                <p className="text-sm ">John Doe</p>
                                <p className="text-xs text-gray-500">johhndoe@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <button className="bg-gray-900 text-white text-xs py-0.5 px-2 rounded-xl">Admin</button>
                            <button className="border border-gray-200 text-xs py-0.5  rounded-md hover:bg-gray-300 px-2">Edit</button>
                        </div>
                    </div>
                    <div className="rounded-md p-2 flex justify-between items-center  border border-gray-200">
                        <div className="flex items-center justify-center gap-2">
                            <span className="rounded-full w-8 h-8 p-1 bg-gray-300  justify-center ">JS</span>
                            <div>
                                <p className="text-sm">Jane Smith</p>
                                <p className="text-xs text-gray-500">janesmith@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <button className="bg-gray-900 text-white px-2 py-0.5 text-xs  rounded-xl">user</button>
                            <button className="border border-gray-200 py-0.5 text-xs  rounded-md hover:bg-gray-300 px-2">Edit</button>
                        </div>
                    </div>
                    <button className="bg-gray-900 text-white rounded-md text-sm  py-1 w-full">Invite Team Member</button>
                </div>
            </div>
        </>
    )
}