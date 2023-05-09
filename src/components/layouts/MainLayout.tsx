import { Lato } from 'next/font/google'
import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"

const lato = Lato({
    weight: ['400', '700'],
    subsets: ['latin']
})

export const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div
            className={`flex w-full min-h-screen bg-[#262626] ${lato.className}`}
        >
            <Sidebar />
            <div className='h-full w-5/6'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}