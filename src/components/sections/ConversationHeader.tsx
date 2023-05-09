import { LeftArrowIcon } from "../icons/LeftArrowIcon"
import { MdClose } from "react-icons/md"

export const ConversationHeader: React.FC<{ title: string, participant?: string, onClose: any, onBack: any }> = ({ title, participant, onClose, onBack }) => {
    return (
        <div className="flex gap-4 border-b bg-white items-center justify-between px-8 py-4">
            <LeftArrowIcon
                className={'cursor-pointer'}
                onClick={onBack}
            />

            <div className="w-full text-left">
                <div className="text-[#2F80ED] font-bold leading-none">
                    {title}
                </div>
                <div className="text-sm text-[#4F4F4F]">
                    {participant}
                </div>
            </div>

            <MdClose
                className="h-6 w-6 cursor-pointer"
                onClick={onClose}
            />
        </div>
    )
}