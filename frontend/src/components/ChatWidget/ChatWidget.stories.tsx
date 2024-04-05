import type { Meta, StoryObj } from '@storybook/react'
import ChatWidget from './ChatWidget'
import style from './ChatWidget.module.css'
import { FC } from 'react'

const StorybookWrapper: FC = () => {
    return (
        <div className={style.storybook}>
            <ChatWidget />
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

    }
}