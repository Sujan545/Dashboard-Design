import { LightbulbIcon, Settings, Timer } from "lucide-react";



export default function Sequences() {


    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-semibold text-2xl">Sequence Generator</h1>
                    <p className="text-gray-500">Create automated multi-channel collection sequences </p>
                </div>
                <div className="flex gap-2">
                    <button className="border rounded-md p-2 hover:bg-gray-400 text-sm flex gap-1 items-center"> <LightbulbIcon className="w-4" /> AI Optimize</button>
                    <button className="bg-black text-white rounded-md p-2 text-sm ">Save Sequences</button>
                </div>
            </div>
            <div className="flex gap-4 w-full">
                <div className="flex flex-col w-3/4">
                    <div className="rounded-md  border border-gray-200 mt-6 p-6">



                    </div>


                    <div className="rounded-md  border border-gray-200 mt-6 p-6">





                    </div>
                </div>

                <div className="w-1/4 gap-4 flex flex-col">
                    <div className="rounded-xl border border-gray-200 mt-6">
                        <p className="flex gap-1 p-4 "><Timer className="w-4" /> Channel Mix</p>
                        <div className="flex justify-between px-4">
                            <span>Email</span>
                            <span> 65%</span>
                        </div>
                        <div className="flex justify-between py-2 px-4">
                            <span>SMS</span>
                            <span> 65%</span>
                        </div>
                        <div className="flex justify-between  px-4">
                            <span>Voice</span>
                            <span> 65%</span>
                        </div>
                        <div className="flex justify-between p-4">

                            <span>Ai Recomended</span>
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-200 ">
                        <p className=" py-4 px-4"> Performance Prediction</p>
                        <div className="flex justify-between px-4">
                            <span>Expected Open Rate</span>
                            <span> 65%</span>
                        </div>
                        <div className="flex justify-between py-2 px-4">
                            <span>Expected Response Rate</span>
                            <span> 65%</span>
                        </div>
                        <div className="flex justify-between  px-4">
                            <span>Expected Collection Rate</span>
                            <span> 65%</span>
                        </div>
                        <div className="flex justify-between py-2 px-4">
                            <span>Avg. Days to Payment</span>
                            <span>8.5</span>
                        </div>
                        <div className="rounded-md bg-green-100 px-2 py-2 m-2 flex flex-col">
                            <span>Optimized</span>
                            <span className="text-xs">This sequence is optimized for your historical performance data </span>
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-200  px-4">
                        <p className=" py-4 "> Timing Setting</p>
                        <div className="flex flex-col ">
                            <span>Business Hour</span>
                            <span className="text-xs text-gray-600">9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex flex-col py-2">
                            <span>Time Zone</span>
                            <span className="text-xs text-gray-600">Eastern Time (EST)</span>
                        </div>
                        <div className="flex flex-col py-2">
                            <span>Send Days</span>
                            <span className="text-xs text-gray-600">Monday - Friday</span>
                        </div>

                        <button className="flex justify-center w-full rounded-xl mb-4 text-sm items-center border border-gray-200 hover:bg-gray-300 gap-2 "><Settings className="w-4" />Configure</button>
                    </div>
                    <div className="rounded-xl border border-gray-200  px-4">
                        <p className=" py-4 "> Quick Start</p>
                        <div className="flex flex-col gap-2  ">
                        <button className="rounded-xl border border-gray-200 hover:bg-gray-300 w-full px-2 text-start">Standard 30-Day</button>
                        <button className="rounded-xl border border-gray-200 hover:bg-gray-300 w-full px-2 text-start">Standard 30-Day</button>
                        <button className="rounded-xl border border-gray-200 hover:bg-gray-300 w-full px-2 mb-4 text-start">Standard 30-Day</button>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}