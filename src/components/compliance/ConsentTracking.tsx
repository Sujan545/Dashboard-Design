


export type ConsentStatus = "Consent" | "No Consent" | "Pending";

export interface ConsentRow {
    id: number;
    customer: string;
    email: ConsentStatus;
    sms: ConsentStatus;
    voice: ConsentStatus;
    lastUpdated: string;
}


export default function ConsentTracking() {

    const consentTableData: ConsentRow[] = [
        {
            id: 1,
            customer: "Acme Corp",
            email: "Consent",
            sms: "Consent",
            voice: "No Consent",
            lastUpdated: "2024-01-15",
        },
        {
            id: 2,
            customer: "Smith LLC",
            email: "Consent",
            sms: "No Consent",
            voice: "Consent",
            lastUpdated: "2024-01-14",
        },
        {
            id: 3,
            customer: "Johnson Inc",
            email: "No Consent",
            sms: "Consent",
            voice: "Consent",
            lastUpdated: "2024-01-12",
        },
        {
            id: 4,
            customer: "Wilson Co",
            email: "Consent",
            sms: "Consent",
            voice: "Pending",
            lastUpdated: "2024-01-10",
        },
    ];

    return (
        <>
            <h1>hello form consent tracking</h1>
        </>
    )
}