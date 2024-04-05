import type { Meta, StoryObj } from '@storybook/react'
import MessageBlock from './MessageBlock'


const meta = {
    title: 'chat/MessageBlock',
    component: MessageBlock,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof MessageBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        messages: [{
            id: 1,
            text: 'Готовы помочь!',
            user: 'vink',
            time: '12:00'
        },
        {
            id: 2,
            text: 'Мне нужна помощь!',
            user: 'me',
            time: '13:00'
        }]
    }
}