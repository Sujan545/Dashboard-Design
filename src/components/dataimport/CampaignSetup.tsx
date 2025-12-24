import { Calendar, Timer, Mail, MessageSquare, Phone } from "lucide-react";
import type  { ReactNode } from "react";

interface SequenceStep {
    id: number;
    title: string;
    channel: "Email" | "SMS" | "Voice";
    day: number;
    description: string;
    status: "Scheduled";
}

function Card({ id, title, channel, day, description, status }: SequenceStep) {

    const channelIconMap: Record<SequenceStep["channel"], ReactNode> = {
        Email: (
            <Mail className="rounded-md p-3 h-12 w-12 bg-blue-100 text-blue-600" />
        ),
        SMS: (
            <MessageSquare className="rounded-md p-3 h-12 w-12 bg-green-100 text-green-600" />
        ),
        Voice: (
            <Phone className="rounded-md p-3 h-12 w-12 bg-purple-100 text-purple-600" />
        ),
    };

    return (
        <div key={id} className="flex gap-4 items-center">
            <div title={channel}>
                {channelIconMap[channel]}
            </div>

            <div className="flex justify-between items-center w-full">
                <div>
                    <p className="flex gap-3 text-sm">
                        {title}
                        <span className="rounded-lg border border-gray-200 px-2 text-sm">
                            Day {day}
                        </span>
                    </p>
                    <p className="text-xs text-gray-500">{description}</p>
                </div>

                <button className="flex gap-2 rounded-lg hover:bg-gray-300 px-2 text-sm items-center">
                    <Timer className="w-4" />
                    {status}
                </button>
            </div>
        </div>
    );
}


export default function CampaignSetup() {

    const collectionSequence: SequenceStep[] = [
        {
            id: 1,
            title: "Initial Notice",
            channel: "Email",
            day: 0,
            description: "Automated email with payment link",
            status: "Scheduled",
        },
        {
            id: 2,
            title: "SMS Reminder",
            channel: "SMS",
            day: 3,
            description: "Text message reminder",
            status: "Scheduled",
        },
        {
            id: 3,
            title: "Follow-up Email",
            channel: "Email",
            day: 7,
            description: "Automated email with payment link",
            status: "Scheduled",
        },
        {
            id: 4,
            title: "Voice Call",
            channel: "Voice",
            day: 14,
            description: "Automated voice call",
            status: "Scheduled",
        },
        {
            id: 5,
            title: "Final Notice",
            channel: "Email",
            day: 21,
            description: "Automated email with payment link",
            status: "Scheduled",
        },
    ];
    return (
        <>
            <div className="border border-gray-200 flex flex-col rounded-md p-4 gap-2">
                <p className=" flex gap-2 items-center text-md font-normal "><Calendar className="w-4" /> Campaign Setup</p>
                <div className="flex justify-between gap-2">
                    <div className="w-1/2">
                        <p className="font-normal text-md">Campaign Name</p>
                        <input
                            className="w-full p-2 bg-gray-200/50 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                            type="email"
                            placeholder="February collections 2024" />
                    </div>
                    <div className="w-1/2">
                        <p className="font-normal text-md">Start Date</p>
                        <input
                            className="w-full p-2 bg-gray-200/50 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                            type="date"
                            placeholder="test@example.com" />
                    </div>

                </div>
                <div className="w-full">
                    <p className="font-normal text-md">Time Zone</p>
                    <select
                        defaultValue="Select TimeZOne"
                        className="w-full border border-gray-300 bg-gray-200/50 rounded-lg p-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                        <option value="" disabled hidden>
                            Select Time Zone
                        </option>

                        <option value="EST">Eastern Time (EST)</option>
                        <option value="MST">Mountain Time (MST)</option>
                        <option value="CST">Central Time (CST)</option>
                        <option value="PST">Pacific Time (PST)</option>
                    </select>
                </div>
                <div className="flex flex-col gap-4 ">
                    <p className="py-4 font-normal text-md">AI Generated Sequence Preview</p>
                    {collectionSequence.map((item) => (
                        <Card
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            channel={item.channel}
                            day={item.day}
                            status={item.status}
                        />
                    ))}
                    <div className="rounded-md border border-gray-300 flex gap-2 p-3 bg-gray-200">
                        <div className="rounded-full flex items-center justify-center h-6 w-6 p-2 bg-gray-400/60 ">
                        <span  className="h-2 w-2 bg-gray-800 rounded-full"/>
                        </div>
                        <p>AI is optimizing sequence timing based on your data... </p>
                    </div>
                    <button className="bg-gray-900 text-white items-center px-2 py-1 rounded-md text-sm font-normal">Generate Sequence & Start Campaign</button>
                </div>
            </div>
        </>
    )
}