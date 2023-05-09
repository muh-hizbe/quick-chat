import { VscChevronDown } from "react-icons/vsc";
import { Button } from "../buttons/base/Button"
import { TaskCard } from "../cards/TaskCard"
import * as Select from '@radix-ui/react-select';
import { useState } from "react";
import { NewTaskCard } from "../cards/NewTaskCard";

export const TaskSection: React.FC = () => {
  const [openOptionTask, setOpenOptionTask] = useState<boolean>(false)
  const [taskType, setTaskType] = useState<any>(null)
  const [openNewForm, setOpenNewForm] = useState<boolean>(false)
  const [newTask, setNewTask] = useState<any>({
    title: '',
    status: false,
    date: new Date(),
    tags: []
  })

  const handleAddNewTask = () => {
    setOpenNewForm(() => true)
  }

  return (
    <div className="mb-[15px] px-8 py-6 bg-white overflow-hidden w-[600px] h-[600px] rounded-lg flex flex-col">
      <div className="bg-white pb-3 flex items-center justify-between">
        <div className="ml-20">
          <Select.Root
            open={openOptionTask}
            onOpenChange={(val) => {
              setOpenOptionTask(val)
              // setTimeout(() => (document.body.style.pointerEvents = ""), 0)
            }}
            value={taskType}
            onValueChange={setTaskType}
          >
            <Select.Trigger
              className='rounded-lg w-auto h-10 flex items-center justify-center px-4 whitespace-nowrap text-sm border-2'
              aria-label="MyTask"
            >
              <span>
                My Task
              </span>
              <Select.Icon className={`text-secondary transform ${openOptionTask ? 'rotate-180' : ''}`}>
                <VscChevronDown />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content
                className="overflow-hidden bg-white rounded-md border-2 w-full"
                align='center'
                position='popper'
                side='bottom'
                sideOffset={4}
              >
                <Select.ScrollUpButton />
                <Select.Viewport className="divide-y-2 w-[205px]">
                  <Select.Item value="personal-errands">
                    <div className='px-3 py-2'>
                      Personal Errands
                    </div>
                  </Select.Item>
                  <Select.Item value="urgent-to-do">
                    <div className='px-3 py-2'>
                      Urgent To-Do
                    </div>
                  </Select.Item>
                </Select.Viewport>
                <Select.ScrollDownButton />
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        <div>
          <Button
            className='px-4 whitespace-nowrap text-sm w-auto'
            onClick={handleAddNewTask}
          >
            New Task
          </Button>
        </div>
      </div>

      <div className="h-full overflow-auto divide-y-2">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        {openNewForm ?
          <NewTaskCard
            onCancel={() => setOpenNewForm(() => false)}
          />
          : null
        }
      </div>
    </div>
  )
}