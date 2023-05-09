import * as Checkbox from '@radix-ui/react-checkbox';
import { BiCheck, BiChevronUp } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useState } from 'react';
import { TaskOptionButton } from '../buttons/TaskOptionButton';
import { MdOutlineModeEdit } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';

export const NewTaskCard: React.FC<{ onCancel?: any, onSubmit?: any }> = ({ onCancel, onSubmit }) => {
    const [taskTitle, setTaskTitle] = useState<string>('')
    const [taskDate, setTaskDate] = useState<any>(null)
    const [taskDescription, setTaskDescription] = useState<string>('')
    const [taskStatus, setTaskStatus] = useState<boolean>(false)

    return (
        <div className="flex items-start justify-between w-full py-[22px]">
            <div className='mt-2.5'>
                <Checkbox.Root
                    className="flex !h-[18px] !w-[18px] appearance-none items-center justify-center rounded-[2px] bg-white focus:outline-none outline-none border-[3px] border-[#828282]"
                    defaultChecked
                    checked={taskStatus}
                    onCheckedChange={(val) => {
                        setTaskStatus(() => val as boolean)
                    }}
                    id="c1"
                >
                    <Checkbox.Indicator className="text-[#828282]">
                        <BiCheck className='h-4 w-4' />
                    </Checkbox.Indicator>
                </Checkbox.Root>
            </div>

            <div className='w-full mr-[15px] ml-[22px]'>
                <div className='flex items-start justify-between'>
                    <input type='text'
                        className='rounded-lg px-3 py-2 border focus:outline-none w-5/6'
                        placeholder='Type Task Title'
                    />

                    <div className='flex items-center text-[#4F4F4F] text-xs'>
                        <div>
                            <BiChevronUp
                                className={`transform rotate-180 w-5 h-5 cursor-pointer`}
                            />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-3 py-3 text-[#828282]'>
                    <div className='flex items-center gap-5'>
                        <AiOutlineClockCircle
                            className={`w-4 h-4 ${taskStatus ? 'text-[#2F80ED]' : ''}`}
                        />
                        <input type='date'
                            className='rounded-lg px-3 py-2 border focus:outline-none'
                            placeholder='Set Date'
                        />
                    </div>

                    <div className='flex items-start gap-5'>
                        <MdOutlineModeEdit
                            className={`w-4 h-4 ${taskStatus ? 'text-[#2F80ED]' : ''}`}
                        />
                        <TextareaAutosize
                            placeholder={'No Description'}
                            className='rounded-lg focus:p-3 focus:border w-full focus:outline-none resize-none min-h-[50px]'
                        />
                    </div>
                </div>
            </div>

            <div>
                <TaskOptionButton onDelete={onCancel} />
            </div>
        </div>
    )
}