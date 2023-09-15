import { Story, Meta } from '@storybook/react'
import Spinner, { SpinnerProps } from '.'

export default {
  title: 'Spinner',
  component: Spinner
} as Meta

export const Default: Story<SpinnerProps> = (args) => <Spinner {...args} />
