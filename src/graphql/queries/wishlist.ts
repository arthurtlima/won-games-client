import { QueryHookOptions, gql, useQuery } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import {
  QueryWishList,
  QueryWishListVariables
} from 'graphql/generated/QueryWishList'

export const QUERY_WISHLIST = gql`
  query QueryWishList($identifier: String!) {
    wishlists(where: { user: { email: $identifier } }) {
      id
      games {
        ...GameFragment
      }
    }
  }
  ${GameFragment}
`

export function useQueryWishList(
  options?: QueryHookOptions<QueryWishList, QueryWishListVariables>
) {
  return useQuery<QueryWishList, QueryWishListVariables>(
    QUERY_WISHLIST,
    options
  )
}
