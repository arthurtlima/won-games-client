/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryWishList
// ====================================================

export interface QueryWishList_wishlists_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryWishList_wishlists_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryWishList_wishlists_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryWishList_wishlists_games_cover | null;
  developers: QueryWishList_wishlists_games_developers[];
  price: number;
}

export interface QueryWishList_wishlists {
  __typename: "Wishlist";
  id: string;
  games: QueryWishList_wishlists_games[];
}

export interface QueryWishList {
  wishlists: QueryWishList_wishlists[];
}

export interface QueryWishListVariables {
  identifier: string;
}
