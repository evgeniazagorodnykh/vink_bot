import { FC } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ChatWidget from './ChatWidget'
import style from './ChatWidget.module.scss'

type TStorybookWrapperProps = {
    setIsOpenChat: (arg: boolean) => void
}

const StorybookWrapper: FC<TStorybookWrapperProps> = ({ setIsOpenChat }) => {
    return (
        <div className={style.storybook}>
            <ChatWidget setIsOpenChat={setIsOpenChat} />
        </div>
    )
}

const meta = {
    title: 'chatOpen/ChatWidget',
    component: StorybookWrapper,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        setIsOpenChat: () => { }
    }
}