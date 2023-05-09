import { BsThreeDots } from "react-icons/bs"
import * as Menubar from "@radix-ui/react-menubar"

export const MessageOptionButton: React.FC<{ position?: string, onReply?: any }> = ({ position = 'left', onReply }) => {

    return (
        <div>
            <Menubar.Root>
                <Menubar.Menu>
                    <Menubar.Trigger>
                        <BsThreeDots
                            className="cursor-pointer"
                        />
                    </Menubar.Trigger>
                    <Menubar.Portal>
                        <Menubar.Content
                            className="w-[126px] bg-white rounded-lg border border-[#BDBDBD] divide-y divide-[#BDBDBD]"
                            align={position === 'left' ? 'start' : 'end'}
                        >
                            {position === 'right' ?
                                <>
                                    <Menubar.Item
                                        className="px-3 py-2 text-[#2F80ED]"
                                    >
                                        Share
                                    </Menubar.Item>
                                    <Menubar.Item
                                        className="px-3 py-2 text-[#2F80ED]"
                                        onClick={onReply}
                                    >
                                        Reply
                                    </Menubar.Item>
                                </>
                                : null
                            }
                            {position === 'left' ?
                                <>
                                    <Menubar.Item
                                        className="px-3 py-2 text-[#2F80ED]"
                                    >
                                        Edit
                                    </Menubar.Item>
                                    <Menubar.Item
                                        className="px-3 py-2 text-[#EB5757]"
                                    >
                                        Delete
                                    </Menubar.Item>
                                </>
                                : null
                            }
                        </Menubar.Content>
                    </Menubar.Portal>
                </Menubar.Menu>
            </Menubar.Root>
        </div>
    )
}