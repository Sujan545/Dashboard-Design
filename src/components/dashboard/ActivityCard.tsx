
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
                        <p className="font-semibold">{title}</p>
                        <p className="text-gray-500 text-sm ">{text} sent</p>
                    </div>
                    <div>
                        <p className="font-semibold">{value}</p>
                        <p className="text-gray-500">{time}</p>
                    </div>
                </div>
            
        </>
    )
}