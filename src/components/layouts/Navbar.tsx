import { SearchIconWhite } from "../icons/SearchIconWhite"

export const Navbar = () => {
  return (
    <div className="border-b border-white bg-[#4F4F4F] h-[58px] px-3 py-2 flex items-center">
        <SearchIconWhite className={'w-6 h-6'} />
    </div>
  )
}