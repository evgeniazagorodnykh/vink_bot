import type { Meta, StoryObj } from '@storybook/react'
import Chat from './Chat'
import styles from './Chat.module.scss'
import { FC } from 'react'

const StorybookWrapper: FC = () => {
    return (
        <div className={styles.storybook}>
            <Chat />
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
        id: 1,
        text: 'Готовы помочь!',
        user: 'vink',
        time: '12:00',
    }
}