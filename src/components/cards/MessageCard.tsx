import { BsThreeDots } from "react-icons/bs"
import { MessageOptionButton } from "../buttons/MessageOptionButton"

export const MessageCard: React.FC<{ message: string, position: string, className: string, date: string, name: string, onReply?: any, replyOn?: any }> = ({ message, position = 'left', className, date, name, onReply, replyOn }) => {
    return (
        <div
            className={`p-2.5 flex flex-col items-center ${position === 'right' ? 'text-right justify-end' : 'text-left justify-start'}`}
        >
            <div className={`w-full text-sm font-semibold ${position === 'left' ? 'text-left text-[#E5A443]' : 'text-right text-[#9B51E0]'}`}>
                {position === 'right' ? 'You' : name}
            </div>

            {!replyOn ? null :
                <div
                    className={`flex w-full items-start text-[#4F4F4F] justify-end mb-2`}
                >
                    <p className="p-2.5 text-left rounded-lg max-w-[380px] bg-[#F2F2F2] border-[#E0E0E0] border">
                        {replyOn?.body}
                    </p>
                </div>
            }

            <div className={`flex w-full items-start gap-2 text-[#4F4F4F] ${position === 'right' ? 'justify-end' : 'justify-start'}`}>
                {position === 'right' ?
                    <MessageOptionButton />
                    : null
                }
                <div className={`p-2.5 text-left rounded-lg max-w-[380px] ${className}`}>
                    <p>
                        {message}
                    </p>
                    <div className="mt-3 text-sm">
                        {date}
                    </div>
                </div>
                {position === 'left' ?
                    <MessageOptionButton position="right" onReply={onReply} />
                    : null
                }
            </div>
        </div>
    )
}