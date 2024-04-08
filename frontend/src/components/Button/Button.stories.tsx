import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import style from './Button.module.css'

const meta = {
    title: 'chatOpen/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        className: style.storybook
    }
}
