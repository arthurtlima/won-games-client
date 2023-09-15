import { useState } from 'react'
import { useSession } from 'next-auth/client'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import Button, { ButtonProps } from 'components/Button'
import Spinner from 'components/Spinner'

import { useWishlist } from 'hooks/use-wishlist'

type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
  id,
  hasText = false,
  size = 'small'
}: WishlistButtonProps) => {
  const [session] = useSession()
  const [loading, setLoading] = useState(false)
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const handleClick = async () => {
    setLoading(true)
    isInWishlist(id) ? await removeFromWishlist(id) : await addToWishlist(id)
    setLoading(false)
  }

  const ButtonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  if (!session) return null

  return (
    <Button
      onClick={handleClick}
      icon={
        loading ? (
          <Spinner />
        ) : isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      minimal
      size={size}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default WishlistButton
