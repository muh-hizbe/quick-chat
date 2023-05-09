import { BsThreeDots } from "react-icons/bs"
import * as Menubar from "@radix-ui/react-menubar"

export const TaskOptionButton: React.FC<any> = ({onDelete}) => {
    return (
        <div>
            <Menubar.Root className="!h-4">
                <Menubar.Menu>
                    <Menubar.Trigger>
                        <BsThreeDots
                            className="cursor-pointer"
                        />
                    </Menubar.Trigger>
                    <Menubar.Portal>
                        <Menubar.Content
                            className="w-[126px] bg-white rounded-lg border border-[#BDBDBD] divide-y divide-[#BDBDBD]"
                            align={'end'}
                        >
                            <Menubar.Item
                                className="px-3 py-2 text-[#EB5757]"
                                onClick={onDelete}
                            >
                                Delete
                            </Menubar.Item>
                        </Menubar.Content>
                    </Menubar.Portal>
                </Menubar.Menu>
            </Menubar.Root>
        </div>
    )
}