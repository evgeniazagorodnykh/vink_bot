import type { Meta, StoryObj } from '@storybook/react'
import Chat from './Chat'
import styles from './Chat.module.scss'
import { FC } from 'react'
import { ChatProps } from '../types/types'

const StorybookWrapper: FC<ChatProps> = ({ isOpen, setIsOpen }) => {
    return (
        <div className={styles.storybook}>
            <Chat isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

const meta = {
    title: 'chat/Chat',
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
        isOpen: true,
        setIsOpen: () => { }
    }
}

