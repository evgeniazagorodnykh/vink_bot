import type { Meta, StoryObj } from '@storybook/react'
import Form from './Form'

const meta = {
    title: 'chat/Form',
    component: Form,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        setCurrentMessage: () => { },
        currentMessage: "test",
        handleSubmit: () => { },
        handleMessageSubmit: () => { }
    }
}