import { MouseEventHandler } from "react"
import { CircleButton } from "./base/CircleButton"
import { TaskColorIcon } from "../icons/TaskColorIcon"
import { TaskIcon } from "../icons/TaskIcon"

export const TaskButton: React.FC<{ isOpen: boolean, onClick: MouseEventHandler }> = ({ isOpen, onClick }) => {
    return (
        <div className={`flex relative ${isOpen ? 'justify-end w-[83px]' : ''}`}>
            {isOpen ?
                <CircleButton
                    className="bg-[#4F4F4F] w-[68px] h-[68px] absolute left-0"
                />
                : null
            }
            <CircleButton
                icon={isOpen ? <TaskIcon /> : <TaskColorIcon />}
                className={`w-[68px] h-[68px] p-[6px] ${isOpen ? 'bg-[#F8B76B] relative' : 'bg-white'}`}
                onClick={onClick}
            />
        </div>
    )
}