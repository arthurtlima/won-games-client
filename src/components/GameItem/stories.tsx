import { Story, Meta } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  id: '1',
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://link',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/cards/mastercard.png',
    number: '*** *** *** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
