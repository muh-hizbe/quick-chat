import { MouseEventHandler } from "react"
import { QuickIcon } from "../icons/QuickIcon"
import { CircleButton } from "./base/CircleButton"

export const QuickButton: React.FC<{ isOpen: boolean, onClick: MouseEventHandler }> = ({ isOpen, onClick }) => {
    return (
        <CircleButton
            icon={<QuickIcon />}
            className="w-[68px] h-[68px] bg-[#2F80ED] p-[6px]"
            onClick={onClick}
        />
    )
}