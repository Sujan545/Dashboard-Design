
interface ActivityProps {
    title: string,
    value: string,
    text: string,
    time: string
}
export default function Activity({ title, value, text, time }: ActivityProps) {


    return (
        <>
            
                <div className=" flex justify-between items-center px-4 py-2 ">
                    <div>
                        <p className="font-medium">{title}</p>
                        <p className="text-gray-500 text-xs ">{text} sent</p>
                    </div>
                    <div>
                        <p className="font-medium">{value}</p>
                        <p className="text-gray-500 text-xs">{time}</p>
                    </div>
                </div>
            
        </>
    )
}