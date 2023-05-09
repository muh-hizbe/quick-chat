import { useQuery } from "react-query"
import { SearchInbox } from "../inputs/SearchInbox"
import { ConversationCard } from "../cards/ConversationCard"
import { VscLoading } from 'react-icons/vsc';
import dayjs from "dayjs";
import { useState } from "react"
import { ConversationSection } from "./ConversationSection";
import { ConversationHeader } from "./ConversationHeader";

export const InboxSection: React.FC = () => {
    const [openDetail, setOpenDetail] = useState<boolean>(false)
    const [detail, setDetail] = useState<any>(null)
    const [searchkey, setSearchKey] = useState<string>('')

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://jsonplaceholder.typicode.com/users').then(res =>
            res.json()
        )
    )

    const handleDetail = (item: any) => {
        setDetail(() => item)
        setOpenDetail(() => true)
    }

    const handleCloseConvesation = () => {
        setDetail(() => null)
        setOpenDetail(() => false)
    }

    const handleBackConvesation = () => {
        setDetail(() => null)
        setOpenDetail(() => false)
    }

    const handleSearchAction = () => {

    }

    return (
        <div className={`mb-[15px] pb-6 bg-white overflow-hidden w-[600px] h-[600px] rounded-lg flex flex-col ${openDetail ? '' : 'px-8'}`}>
            {openDetail ?
                <div className="bg-white">
                    <ConversationHeader
                        title={detail?.company?.name}
                        participant={detail?.email}
                        onClose={handleCloseConvesation}
                        onBack={handleBackConvesation}
                    />
                </div>
                :
                <div className="pt-6 pb-2 bg-white">
                    <SearchInbox onChange={setSearchKey} onSearch={handleSearchAction} value={searchkey} />
                </div>
            }

            <div className="overflow-auto h-full">
                {isLoading ?
                    <div className="flex items-center justify-center h-full">
                        <div className="flex flex-col gap-6">
                            <VscLoading className="animate-spin w-8 h-8 mx-auto" />
                            <span className="text-[#4F4F4F]">
                                Loading Chats ...
                            </span>
                        </div>
                    </div>
                    : null
                }

                {(data && !openDetail) ?
                    <div className="divide-y">
                        {searchkey === '' && data?.map((item: any, idx: number) => (
                            <ConversationCard
                                key={idx}
                                className="hover:cursor-pointer"
                                name={item?.name}
                                title={item?.company?.name}
                                message={item?.company?.catchPhrase}
                                image={item?.name}
                                date={dayjs().add(idx, 'm').format('DD/MM/YYYY HH:mm')}
                                onClick={() => handleDetail(item)}
                            />
                        ))}

                        {searchkey !== '' && data?.filter((itm: any) => itm?.company?.name?.toLowerCase()?.includes(searchkey))?.map((item: any, idx: number) => (
                            <ConversationCard
                                key={idx}
                                className="hover:cursor-pointer"
                                name={item?.name}
                                title={item?.company?.name}
                                message={item?.company?.catchPhrase}
                                image={item?.name}
                                date={dayjs().add(idx, 'm').format('DD/MM/YYYY HH:mm')}
                                onClick={() => handleDetail(item)}
                            />
                        ))}
                    </div>
                    : null
                }

                {(openDetail && detail) ?
                    <div>
                        <ConversationSection data={detail} />
                    </div>
                    : null
                }
            </div>
        </div>
    )
}