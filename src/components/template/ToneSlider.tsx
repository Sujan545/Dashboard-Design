import { useState } from "react";


type Tone = "Casual" | "Neutral" | "Formal";

export default function ToneSlider() {
    const [value, setValue] = useState<number>(1);
    const toneMap: Record<number, Tone> = {
        0: "Casual",
        1: "Neutral",
        2: "Formal"
    };
    const tone = toneMap[value];


    return (
        <div>
            <div className="flex flex-col gap-2 w-full">
                {/* Range Input */}
                <input
                    type="range"
                    min={0}
                    max={2}
                    step={1}
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                />

                {/* Selected Tone Display */}
                <div className="text-sm text-gray-600">
                    Selected tone:{" "}
                    <span className="font-semibold text-gray-900">{tone}</span>
                </div>
            </div>
        </div>
    )
}