import * as Checkbox from '@radix-ui/react-checkbox';
import { BiCheck, BiChevronUp } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useState } from 'react';
import { TaskOptionButton } from '../buttons/TaskOptionButton';
import { MdOutlineModeEdit } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';

export const TaskCard: React.FC<any> = ({ data }) => {
    const [isChecked, setIsChecked] = useState<boolean>(data?.id % 2 === 0 ? true : false)
    const [collapsed, setCollapsed] = useState<boolean>(data?.id % 3 === 0 ? true : false)
    const [description, setDescription] = useState<string>(data?.company?.catchPhrase ?? '')

    return (
        <div className="flex items-start justify-between w-full py-[22px]">
            <div>
                <Checkbox.Root
                    className="flex !h-[18px] !w-[18px] appearance-none items-center justify-center rounded-[2px] bg-white focus:outline-none outline-none border-[3px] border-[#828282]"
                    defaultChecked
                    checked={isChecked}
                    onCheckedChange={(val) => {
                        setIsChecked(() => val as boolean)
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
                    <div className={`leading-none ${isChecked ? 'text-[#828282] line-through' : 'text-[#4F4F4F]'}`}>
                        {data?.name}
                    </div>

                    <div className='flex items-center text-[#4F4F4F] text-xs'>
                        <div className='text-[#EB5757] mr-5 whitespace-nowrap'>
                            2 Days Left
                        </div>
                        <div className='mr-2.5'>
                            12/06/2021
                        </div>
                        <div>
                            <BiChevronUp
                                className={`transform ${!collapsed ? 'rotate-180' : ''} w-5 h-5 cursor-pointer`}
                                onClick={() => {
                                    setCollapsed((current) => !current)
                                }}
                            />
                        </div>
                    </div>
                </div>

                {!collapsed ? null :
                    <div className='flex flex-col gap-3 py-3 text-[#828282]'>
                        <div className='flex items-center gap-5'>
                            <AiOutlineClockCircle
                                className={`w-4 h-4 ${isChecked ? 'text-[#2F80ED]' : ''}`}
                            />
                            <input type='date'
                                className='rounded-lg px-3 py-2 border focus:outline-none'
                            />
                        </div>

                        <div className='flex items-start gap-5'>
                            <MdOutlineModeEdit
                                className={`w-4 h-4 ${isChecked ? 'text-[#2F80ED]' : ''}`}
                            />
                            <TextareaAutosize
                                placeholder={'No Description'}
                                className='rounded-lg focus:p-3 focus:border w-full focus:outline-none resize-none min-h-[50px]'
                                value={description}
                                onChange={(e) => setDescription(() => e?.target?.value)}
                            />
                        </div>
                    </div>
                }
            </div>

            <div>
                <TaskOptionButton />
            </div>
        </div>
    )
}