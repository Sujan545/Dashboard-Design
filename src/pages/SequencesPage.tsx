import { CircleAlert, LightbulbIcon, LineChart, Settings, Timer } from "lucide-react";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import Timeline from "../components/sequence/SequenceTimeline";

interface buttonProps {
    isLast: Boolean;
}
function MyButton({ isLast }: buttonProps) {
    return (
        <button className="border border-gray-200 px-2 py-1 text-sm rounded-lg hover:bg-gray-300">
            + {isLast ? "Final" : "Add"} Step
        </button>
    )
}
export default function Sequences() {
    const templateSteps = [
        {
            title: "Initial Notice",
            icon: Mail,
            text: "Automated email with payment link and personalized message",
            days: 0,
            category: "Email",
        },
        {
            title: "SMS Reminder",
            icon: MessageCircle,
            text: "Text message reminder with short, actionable content",
            days: 3,
            category: "SMS",
        },
        {
            title: "Follow-up Email",
            icon: Mail,
            text: "Automated email with payment link and personalized message",
            days: 7,
            category: "Email",
        },
        {
            title: "Voice Call",
            icon: PhoneCall,
            text: "Automated voice call with interactive options",
            days: 14,
            category: "Voice",
        },
        {
            title: "Final Notice",
            icon: Mail,
            text: "Automated email with payment link and personalized message",
            days: 21,
            category: "Email",
        },
    ];

    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-medium text-lg">Sequence Generator</h1>
                    <p className="text-gray-500 text-sm">Create automated multi-channel collection sequences </p>
                </div>
                <div className="flex gap-2">
                    <button className="border border-gray-200 rounded-md px-2 hover:bg-gray-300 text-sm flex gap-1 items-center"> <LightbulbIcon className="w-4" /> AI Optimize</button>
                    <button className="bg-black text-white rounded-md px-2 text-sm ">Save Sequences</button>
                </div>
            </div>
            <div className="flex gap-2 w-full">

                <div className="flex flex-col w-3/4">
                    <div className="rounded-md  border border-gray-200 mt-6 p-6">
                        <div className="flex gap-2 items-center font-normal text-md pb-2">
                            <LineChart className="w-4" />
                            <p>Sequence Timeline</p>
                        </div>
                        {templateSteps.map((card, index) => (
                            <>
                                <Timeline
                                    title={card.title}
                                    text={card.text}
                                    icon={card.icon}
                                    days={card.days}
                                    category={card.category}
                                    number={index + 1}
                                />
                                <div className="flex items-center justify-center">
                                    <MyButton isLast={index + 1 === templateSteps.length} />
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="rounded-md  border border-gray-200 font-normal mt-6 p-6">
                        <div className="flex gap-2 items-center">
                            <CircleAlert className="w-4" />
                            <p className="font-normal text-md">Exit Criteria</p>
                        </div>
                        <div className="gap-2 flex flex-col ">
                            <div className="flex rounded-lg m-4 border border-gray-200  justify-between items-center p-2 px-4">
                                <div>
                                    <p>Payment Received</p>
                                    <span className="text-xs text-gray-400">Stop sequence when payment is confirmed</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                </div>
                            </div>
                            <div className="flex rounded-lg mx-4 border border-gray-200  justify-between items-center p-2 px-4">
                                <div>
                                    <p>Customer Reply</p>
                                    <span className="text-xs text-gray-400">Pause sequence when customer responds</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                </div>
                            </div>
                            <div className="flex rounded-lg m-4 border border-gray-200  justify-between items-center p-2 px-4">
                                <div>
                                    <p>Manual Stop</p>
                                    <span className="text-xs text-gray-400">Allow manual intervention to stop sequence</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/4 gap-4 flex flex-col">
                    <div className="rounded-xl font-normal border border-gray-200 mt-6">
                        <p className="flex gap-1 p-4 font-medium "><Timer className="w-4" /> Channel Mix</p>
                        <div className="flex justify-between text-sm px-4">
                            <div className="flex items-center gap-2">
                                <div className="rounded-full w-2 h-2 bg-blue-700"></div>
                                <span className="tex">Email</span>
                            </div>
                            <span> 65%</span>
                        </div>
                        <div className="flex justify-between text-sm py-2 px-4">
                            <div className="flex items-center  gap-2">
                                <div className="rounded-full w-2 h-2 bg-green-700"></div>
                                <span>Sms</span>
                            </div>
                            <span> 65%</span>
                        </div>
                        <div className="flex justify-between text-sm px-4">
                            <div className="flex items-center gap-2">
                                <div className="rounded-full w-2 h-2 bg-purple-700"></div>
                                <span>Voice</span>
                            </div>
                            <span> 65%</span>
                        </div>
                        <hr className="my-3 mx-4 border-gray-200" />
                        <div className="flex justify-between p-4">

                            <span>Ai Recomended</span>
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div className="rounded-xl  font-normal border border-gray-200 ">
                        <p className=" py-4 px-4"> Performance Prediction</p>
                        <div className="flex text-sm justify-between px-4">
                            <span>Expected Open Rate</span>
                            <span> 65%</span>
                        </div>
                        <div className="flex text-sm  justify-between py-2 px-4">
                            <span>Expected Response Rate</span>
                            <span> 65%</span>
                        </div>
                        <div className="flex text-sm  justify-between  px-4">
                            <span>Expected Collection Rate</span>
                            <span> 65%</span>
                        </div>
                        <div className="flex text-sm ljustify-between py-2 px-4">
                            <span>Avg. Days to Payment</span>
                            <span>8.5</span>
                        </div>
                        <hr className="my-3 mx-4 border-gray-200" />
                        <div className="rounded-md bg-green-100 px-2 py-2 m-2 flex flex-col">
                            <div className="flex items-center gap-2 ">
                                <div className="rounded-full w-2 h-2 bg-green-700"></div>
                                <span>Optimized</span>
                            </div>
                            <span className="text-xs text-green-800">This sequence is optimized for your historical performance data </span>
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-200  px-4">
                        <p className=" py-4 "> Timing Setting</p>
                        <div className="flex text-sm flex-col ">
                            <span>Business Hour</span>
                            <span className="text-xs text-gray-600">9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex text-sm flex-col py-2">
                            <span>Time Zone</span>
                            <span className="text-xs text-gray-600">Eastern Time (EST)</span>
                        </div>
                        <div className="flex text-sm flex-col py-2">
                            <span>Send Days</span>
                            <span className="text-xs text-gray-600">Monday - Friday</span>
                        </div>

                        <button className="flex justify-center w-full rounded-xl mb-4 text-sm items-center border border-gray-200 hover:bg-gray-300 gap-2 "><Settings className="w-4" />Configure</button>
                    </div>
                    <div className="rounded-xl border border-gray-200  px-4">
                        <p className=" py-4 "> Quick Start</p>
                        <div className="flex text-sm  flex-col gap-2  ">
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