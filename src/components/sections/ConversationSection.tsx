import { useQuery } from "react-query"
import { VscLoading } from 'react-icons/vsc';
import { MessageCard } from "../cards/MessageCard";
import dayjs from "dayjs";
import { FormEvent, useEffect, useState } from "react";
import { LoadingConnectionTeamCard } from "../cards/LoadingConnectionTeamCard";
import { DividerText } from "../others/DividerText";
import { useQueryClient, useMutation } from "react-query"
import { Button } from "../buttons/base/Button";
import { MdClose } from "react-icons/md";

export const ConversationSection: React.FC<{ data: any }> = ({ data }) => {
    const queryClient = useQueryClient()
    const [isConnecting, setIsConnecting] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [replyOn, setReplyOn] = useState<any>(null)

    const { isLoading, error, data: conversationData } = useQuery('commentData', () =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${data?.id}/comments`).then(res =>
            res.json()
        )
    )

    const mutation = useMutation({
        mutationFn: (reqData: any) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${data?.id}/comments`, {
                method: 'POST',
                body: JSON.stringify(reqData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        },
        onSuccess: data => {
            setMessage(() => '')
            queryClient.setQueryData(['commentData', { id: 5 }], data)
        }
    })

    const handleOnReply = (conv: any) => {
        setReplyOn(() => conv)
    }

    const handleCancelOnReply = () => {
        setReplyOn(() => null)
    }

    const handleSendMessage = (e: FormEvent) => {
        e.preventDefault()
        mutation.mutate({
            name: 'Simpul Tech - Hizbullah',
            email: 'muhammad@hizbullah.com',
            body: message,
            postId: data?.id
        })
    }

    useEffect(() => {
        setIsConnecting(() => true)

        const timeoutId = setTimeout(() => {
            setIsConnecting(() => false);
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [])

    return (
        <div className="h-full p-5 pb-0">
            {isLoading ?
                <div className="flex items-center justify-center h-full">
                    <VscLoading className="animate-spin w-8 h-8" />
                </div>
                : null
            }

            <div className="p-2">
                {conversationData?.map((item: any, idx: number) => (
                    <>
                        {(idx === (conversationData?.length - 1)) ?
                            <DividerText
                                text={`New Message`}
                                textClass="text-[#EB5757]"
                                borderClass="border-[#EB5757]"
                            />
                            : null
                        }

                        <MessageCard
                            key={idx}
                            className={`${idx % 2 === 0 ? 'bg-[#FCEED3]' : 'bg-[#EEDCFF]'}`}
                            name={item?.name}
                            message={item?.body}
                            position={idx % 2 === 0 ? 'left' : 'right'}
                            date={dayjs().add(idx, 'm').format('HH:mm')}
                            onReply={() => handleOnReply(item)}
                            replyOn={(idx % 3 === 0 && idx % 2 !== 0) ? conversationData[idx - 1] : null}
                        />

                        {(idx % 5 === 0) ?
                            <DividerText
                                text={`Today ${dayjs().add(idx, 'day').format('MMMM DD, YYYY')}`}
                                textClass="text-[#4F4F4F]"
                                borderClass="border-[#4F4F4F]"
                            />
                            : null
                        }
                    </>
                ))}
            </div>

            <div
                className="flex flex-col gap-2 sticky bottom-0"
            >
                {isConnecting ?
                    <div className="px-4">
                        <LoadingConnectionTeamCard />
                    </div>
                    : null
                }

                <form
                    className="bg-white px-3 py-5 flex gap-2"
                    onSubmit={handleSendMessage}
                >
                    <div className="flex flex-col w-full relative">
                        {!replyOn ? null :
                            <div
                                className="rounded-t-lg border border-b-0 border-[#828282] p-4 text-[#4F4F4F] text-sm flex flex-col gap-1 bg-[#F2F2F2] absolute bottom-[100%] w-[calc(100%-73px)]"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="font-semibold">
                                        {replyOn?.name}
                                    </div>

                                    <MdClose
                                        className="h-6 w-6 cursor-pointer"
                                        onClick={handleCancelOnReply}
                                    />
                                </div>

                                <p>
                                    {replyOn?.body}
                                </p>
                            </div>
                        }
                        <div className="flex gap-2 w-full">
                            <input
                                placeholder="Type a new message"
                                className={`${replyOn ? 'rounded-b-lg' : 'rounded-lg'} border border-[#828282] w-full px-4 focus:outline-none resize-none text-[#4F4F4F]`}
                                value={message}
                                onChange={(e) => setMessage(() => e?.target?.value)}
                            />
                            <Button
                                type="submit"
                                className='!w-[76px]'
                            >
                                Send
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}