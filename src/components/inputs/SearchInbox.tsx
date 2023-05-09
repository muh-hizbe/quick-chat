import { MouseEvent, useRef } from "react"
import { SearchIcon } from "../icons/SearchIcon"

export const SearchInbox: React.FC<{ onSearch: any, value: string, onChange: any }> = ({ onSearch, value, onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        onSearch()
    }

    return (
        <div className="rounded-lg border-2 px-16 py-2 bg-white flex items-center justify-between" onClick={(e) => {
            e.stopPropagation()
            inputRef?.current?.focus()
        }}>
            <input ref={inputRef}
                placeholder="Search"
                className="w-full focus:outline-none"
                onChange={(e) => {
                    onChange(() => e?.target?.value)
                }}
                onKeyDown={(e) => {
                    if (e?.key === 'Enter') {
                        console.log('this enter');
                    }
                }}
            />
            <button onClick={handleSubmit}>
                <SearchIcon />
            </button>
        </div>
    )
}