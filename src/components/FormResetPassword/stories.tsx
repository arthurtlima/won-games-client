import { Story, Meta } from '@storybook/react'
import FormSigin from '.'

export default {
  title: 'Form/FormSigin',
  component: FormSigin
} as Meta

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSigin />
  </div>
)
