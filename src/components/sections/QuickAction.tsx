import { useState } from "react"
import { QuickButton } from "../buttons/QuickButton"
import { InboxButton } from "../buttons/InboxButton"
import { TaskButton } from "../buttons/TaskButton"
import { InboxSection } from "./InboxSection"
import { TaskSection } from "./TaskSection"

export const QuickAction: React.FC<{ className: string }> = ({ className }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [openMenu, setOpenMenu] = useState<string | null>(null)

    const toggleOpen = () => {
        setIsOpen(currentState => !currentState)
    }
    const toggleInbox = () => {
        setOpenMenu(currentState => {
            if (currentState === 'inbox') {
                return null
            } else {
                return 'inbox'
            }
        })
    }
    const toggleTask = () => {
        setOpenMenu(currentState => (currentState === 'task') ? null : 'task')
    }

    return (
        <div
            className={className}
        >
            {openMenu ?
                <>
                    {openMenu === 'inbox' ? <InboxSection /> : null}
                    {openMenu === 'task' ? <TaskSection /> : null}
                </>
                : null
            }

            <div className="flex gap-[26px] justify-end">
                {isOpen ?
                    <>
                        <div className="flex gap-[26px]">
                            {openMenu === 'task' ?
                                null :
                                <TaskButton isOpen={openMenu === 'task'} onClick={toggleTask} />
                            }
                            {openMenu === 'inbox' ?
                                null :
                                <InboxButton isOpen={openMenu === 'inbox'} onClick={toggleInbox} />
                            }
                        </div>
                        {openMenu === 'task' ?
                            <TaskButton isOpen={openMenu === 'task'} onClick={toggleTask} />
                            : null
                        }
                        {openMenu === 'inbox' ?
                            <InboxButton isOpen={openMenu === 'inbox'} onClick={toggleInbox} />
                            : null
                        }
                    </>
                    : null
                }

                {openMenu ? null :
                    <QuickButton isOpen={isOpen} onClick={toggleOpen} />
                }
            </div>
        </div>
    )
}