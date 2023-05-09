export const DividerText: React.FC<{ text: string, borderClass: string, textClass:string }> = ({ text, borderClass, textClass }) => {
    return (
        <div className="flex items-center">
            <div className={`w-full border-t-2 ${borderClass}`}></div>
            <div className={`px-4 font-bold whitespace-nowrap ${textClass}`}>{text}</div>
            <div className={`w-full border-t-2 ${borderClass}`}></div>
        </div>
    )
}