import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['String'];
  meals: Array<Meal>;
  name: Scalars['String'];
};

export type CreateMealInput = {
  categoryId: Scalars['ID'];
  name: Scalars['String'];
};

export type CreateMealPictureInput = {
  img: Scalars['String'];
  mealId: Scalars['ID'];
  restaurantId: Scalars['ID'];
};

export type CreateMealPriceInput = {
  date: Scalars['DateTime'];
  mealId: Scalars['ID'];
  priceRegular: Scalars['Float'];
  priceStudent: Scalars['Float'];
  restaurantId: Scalars['ID'];
};

export type CreateRestaurantInput = {
  address: Scalars['String'];
  img: Scalars['String'];
  menuUrl: Scalars['String'];
  name: Scalars['String'];
  openingHours: Scalars['String'];
  scrapingStartedAt: Scalars['DateTime'];
};

export type Meal = {
  __typename?: 'Meal';
  category?: Maybe<Category>;
  id: Scalars['ID'];
  name: Scalars['String'];
  pictures: Array<MealPicture>;
  prices: Array<MealPrice>;
};

export type MealOption = {
  __typename?: 'MealOption';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type MealPicture = {
  __typename?: 'MealPicture';
  id: Scalars['ID'];
  img: Scalars['String'];
  meal?: Maybe<Meal>;
  restaurant?: Maybe<Restaurant>;
};

export type MealPrice = {
  __typename?: 'MealPrice';
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  meal?: Maybe<Meal>;
  priceRegular: Scalars['Float'];
  priceStudent: Scalars['Float'];
  restaurant?: Maybe<Restaurant>;
};

export type Menu = {
  __typename?: 'Menu';
  date: Scalars['DateTime'];
  mealPrices: Array<MealPrice>;
  restaurant?: Maybe<Restaurant>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createMeal: Meal;
  createMealPicture: MealPicture;
  createMealPrice: MealPrice;
  createRestaurant: Restaurant;
  delateMealPicture: MealPicture;
  deleteCategory: Category;
  deleteRestaurant: Restaurant;
  updateCategory: Category;
  updateMeal: Meal;
  updateMealPicture: MealPicture;
  updateMealPrice: MealPrice;
  updateRestaurant: Restaurant;
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String'];
};


export type MutationCreateMealArgs = {
  input: CreateMealInput;
};


export type MutationCreateMealPictureArgs = {
  input: CreateMealPictureInput;
};


export type MutationCreateMealPriceArgs = {
  input: CreateMealPriceInput;
};


export type MutationCreateRestaurantArgs = {
  input: CreateRestaurantInput;
};


export type MutationDelateMealPictureArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String'];
};


export type MutationDeleteRestaurantArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type MutationUpdateMealArgs = {
  input: UpdateMealInput;
};


export type MutationUpdateMealPictureArgs = {
  input: UpdateMealPictureInput;
};


export type MutationUpdateMealPriceArgs = {
  input: UpdateMealPriceInput;
};


export type MutationUpdateRestaurantArgs = {
  input: UpdateRestaurantInput;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category?: Maybe<Category>;
  meal?: Maybe<Meal>;
  mealPicture?: Maybe<MealPicture>;
  mealPrice?: Maybe<MealPrice>;
  meals: Array<Meal>;
  mealsPictures: Array<MealPicture>;
  mealsPrices: Array<MealPrice>;
  menu: Menu;
  restaurant?: Maybe<Restaurant>;
  restaurants: Array<Restaurant>;
  searchMeal: Array<MealOption>;
};


export type QueryCategoryArgs = {
  id: Scalars['String'];
};


export type QueryMealArgs = {
  id: Scalars['String'];
};


export type QueryMealPictureArgs = {
  id: Scalars['String'];
};


export type QueryMealPriceArgs = {
  id: Scalars['ID'];
};


export type QueryMenuArgs = {
  date: Scalars['DateTime'];
  restaurantId: Scalars['String'];
};


export type QueryRestaurantArgs = {
  id: Scalars['ID'];
};


export type QuerySearchMealArgs = {
  query: Scalars['String'];
};

export type Restaurant = {
  __typename?: 'Restaurant';
  id: Scalars['ID'];
  mealPrices: Array<MealPrice>;
  menuUrl: Scalars['String'];
  name: Scalars['String'];
  scrape: Scalars['Boolean'];
};

export type UpdateCategoryInput = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type UpdateMealInput = {
  categoryId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UpdateMealPictureInput = {
  id: Scalars['ID'];
  img: Scalars['String'];
  mealId: Scalars['ID'];
  restaurantId: Scalars['ID'];
};

export type UpdateMealPriceInput = {
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  mealId: Scalars['ID'];
  priceRegular: Scalars['Float'];
  priceStudent: Scalars['Float'];
  restaurantId: Scalars['ID'];
};

export type UpdateRestaurantInput = {
  address: Scalars['String'];
  id: Scalars['ID'];
  img: Scalars['String'];
  menuUrl: Scalars['String'];
  name: Scalars['String'];
  openingHours: Scalars['String'];
  scrapingStartedAt: Scalars['DateTime'];
};

export type RestaurantsQueryVariables = Exact<{ [key: string]: never; }>;


export type RestaurantsQuery = { __typename?: 'Query', restaurants: Array<{ __typename?: 'Restaurant', id: string, name: string }> };


export const RestaurantsDocument = gql`
    query restaurants {
  restaurants {
    id
    name
  }
}
    `;

/**
 * __useRestaurantsQuery__
 *
 * To run a query within a React component, call `useRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRestaurantsQuery(baseOptions?: Apollo.QueryHookOptions<RestaurantsQuery, RestaurantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RestaurantsQuery, RestaurantsQueryVariables>(RestaurantsDocument, options);
      }
export function useRestaurantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RestaurantsQuery, RestaurantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RestaurantsQuery, RestaurantsQueryVariables>(RestaurantsDocument, options);
        }
export type RestaurantsQueryHookResult = ReturnType<typeof useRestaurantsQuery>;
export type RestaurantsLazyQueryHookResult = ReturnType<typeof useRestaurantsLazyQuery>;
export type RestaurantsQueryResult = Apollo.QueryResult<RestaurantsQuery, RestaurantsQueryVariables>;