export const Button: React.FC<any> = (props) => {
    return (
        <button
            {...props}
            className={`bg-[#2F80ED] text-white rounded-lg w-auto h-10 flex items-center justify-center ${props?.className}`}
        >
            {props?.children}
        </button>
    )
}