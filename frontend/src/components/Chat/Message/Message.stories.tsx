import type { Meta, StoryObj } from '@storybook/react'
import Message from './Message'


const meta = {
    title: 'chat/Message',
    component: Message,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        user: 'vink',
        message: 'Прошу помочь',
        time: '12:00'
    }
}