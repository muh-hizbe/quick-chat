import { QuickAction } from '@/components/sections/QuickAction'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>

      <QuickAction className='fixed bottom-[27px] right-[34px]' />
    </MainLayout>
  )
}
