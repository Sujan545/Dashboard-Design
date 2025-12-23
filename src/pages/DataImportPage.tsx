import { useState } from "react";
import CampaignSetup from "../components/dataimport/CampaignSetup";
import UploadFile from "../components/dataimport/UploadFile";
import Validation from "../components/dataimport/Validation";
import { Check } from "lucide-react";
import FieldMapping from "../components/dataimport/FileMapping";

function Stepper({ step }: { step: number }) {

    const steps = [
  {
    id: 1,
    title: "Upload File",
    subtitle: "Select and upload your data file",
  },
  {
    id: 2,
    title: "Field Mapping",
    subtitle: "Map your columns to required fields",
  },
  {
    id: 3,
    title: "Validation",
    subtitle: "Review and fix any data issues",
  },
  {
    id: 4,
    title: "Campaign Setup",
    subtitle: "Configure your collection sequence",
  },
];
  return (
    <div className="flex items-start justify-between mb-10">
      {steps.map((s, index) => {
        const isCompleted = s.id < step;
        const isActive = s.id === step;
        return (
          <div key={s.id} className="flex flex-1 items-start">
            {/* Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border
                  ${
                    isCompleted
                      ? "bg-black text-white border-black"
                      : isActive
                      ? "border-black text-black"
                      : "border-gray-300 text-gray-400"
                  }`}
              >
                {isCompleted ? <Check size={16} /> : s.id}
              </div>

              <p className="mt-2 text-sm font-medium">{s.title}</p>
              <p className="text-xs text-gray-500 text-center max-w-35">
                {s.subtitle}
              </p>
            </div>

            {/* Line */}
            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mt-4 mx-2
                  ${isCompleted ? "bg-black" : "bg-gray-200"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}



function StepContent({ step }: { step: number }) {
    switch (step) {
        case 1:
            return <UploadFile />;
        case 2:
            return <FieldMapping />;
        case 3:
            return <Validation />;
        case 4:
            return <CampaignSetup />;
        default:
            return null;
    }
}

export default function DataImport() {
  const [step, setStep] = useState(1);

    return (

        <>
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-semibold mb-2">Data Import Wizard</h1>
                <p className="text-gray-500 mb-6">
                    Import your customer data and set up collection campaigns
                </p>

                <Stepper step={step} />
                <StepContent step={step} />

                <div className="flex justify-between mt-6">
                    <button
                        disabled={step === 1}
                        onClick={() => setStep(step - 1)}
                        className="px-4 py-2 border rounded-md disabled:opacity-50"
                    >
                        ← Previous
                    </button>

                    <button
                        disabled={step === 4}
                        onClick={() => setStep(step + 1)}
                        className="px-4 py-2 bg-black text-white rounded-md disabled:opacity-50"
                    >
                        Next →
                    </button>
                </div>
            </div>
        </>
    );
}