import { MouseEventHandler } from "react"
import { CircleButton } from "./base/CircleButton"
import { QAIcon } from "../icons/QAIcon"
import { QAColorIcon } from "../icons/QAColorIcon"

export const InboxButton: React.FC<{ isOpen: boolean, onClick: MouseEventHandler }> = ({ isOpen, onClick }) => {
    return (
        <div className={`flex relative ${isOpen ? 'justify-end w-[83px]' : ''}`}>
            {isOpen ?
                <CircleButton
                    className="bg-[#4F4F4F] w-[68px] h-[68px] absolute left-0"
                />
                : null
            }
            <CircleButton
                icon={isOpen ? <QAIcon /> : <QAColorIcon />}
                className={` w-[68px] h-[68px] p-[6px] ${isOpen ? 'bg-[#8885FF] relative' : 'bg-white'}`}
                onClick={onClick}
            />
        </div>
    )
}