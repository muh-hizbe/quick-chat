import { MouseEventHandler } from "react"

export const CircleButton: React.FC<{ icon?: React.ReactNode, className?: string, onClick?: MouseEventHandler<HTMLButtonElement> }> = ({ icon, className = '', onClick }) => {
    return (
        <button
            className={`rounded-full p-4 flex items-center justify-center ${className}`}
            onClick={onClick}
        >
            {icon}
        </button>
    )
}