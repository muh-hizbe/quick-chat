import { VscLoading } from 'react-icons/vsc';

export const LoadingConnectionTeamCard = () => {
  return (
    <div className="bg-[#E9F3FF] text-[#4F4F4F] p-2.5 rounded-lg flex items-center justify-start gap-2.5">
        <VscLoading className="animate-spin w-5 h-5 text-[#2F80ED]" />
        <p>
            Please wait while we connect you with one of our team ...
        </p>
    </div>
  )
}