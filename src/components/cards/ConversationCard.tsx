export const ConversationCard: React.FC<{ title?: string, name?: string, message?: string, date?: string, image?: string, className?: string, onClick: any }> = ({ title, name, message, date, image, className, onClick }) => {

    return (
        <div className={`py-[22px] flex gap-2 ${className}`}
            onClick={onClick}
        >
            <img
                loading="lazy"
                src={`https://api.dicebear.com/6.x/initials/svg?seed=${image}`}
                alt={name}
                className="rounded-full w-9 h-9"
            />
            <div className="flex flex-col gap-0">
                <div className="flex items-start gap-4">
                    <div className="text-[#2F80ED] font-bold leading-none">
                        {title}
                    </div>
                    <span className="text-xs text-[#4F4F4F]">
                        {date}
                    </span>
                </div>

                <div>
                    <div className="font-bold text-sm text-[#4F4F4F]">
                        {name}
                    </div>
                    <div className="text-sm text-[#4F4F4F]">
                        {message}
                    </div>
                </div>
            </div>
        </div>
    )
}