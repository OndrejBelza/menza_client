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
  UUID: any;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['UUID'];
  meals: Array<Meal>;
  name: Scalars['String'];
};

export type CreateMealInput = {
  categoryId: Scalars['UUID'];
  name: Scalars['String'];
};

export type CreateMealPictureInput = {
  img: Scalars['String'];
  mealId: Scalars['UUID'];
  restaurantId: Scalars['UUID'];
};

export type CreateMealPriceInput = {
  date: Scalars['DateTime'];
  mealId: Scalars['UUID'];
  priceRegular: Scalars['Float'];
  priceStudent: Scalars['Float'];
  restaurantId: Scalars['UUID'];
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
  averagePriceNormal?: Maybe<Scalars['Float']>;
  averagePriceStudent?: Maybe<Scalars['Float']>;
  category?: Maybe<Category>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  pictures: Array<MealPicture>;
  prices: Array<MealPrice>;
};

export type MealFilter = {
  category?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MealOption = {
  __typename?: 'MealOption';
  id: Scalars['UUID'];
  name: Scalars['String'];
};

export type MealPicture = {
  __typename?: 'MealPicture';
  id: Scalars['UUID'];
  img: Scalars['String'];
  meal?: Maybe<Meal>;
  restaurant?: Maybe<Restaurant>;
};

export type MealPrice = {
  __typename?: 'MealPrice';
  date: Scalars['DateTime'];
  id: Scalars['UUID'];
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
  id: Scalars['UUID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['UUID'];
};


export type MutationDeleteRestaurantArgs = {
  id: Scalars['UUID'];
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
  id: Scalars['UUID'];
};


export type QueryMealArgs = {
  id: Scalars['UUID'];
};


export type QueryMealPictureArgs = {
  id: Scalars['UUID'];
};


export type QueryMealPriceArgs = {
  id: Scalars['UUID'];
};


export type QueryMealsArgs = {
  filter?: InputMaybe<MealFilter>;
  sort?: InputMaybe<Sort>;
};


export type QueryMenuArgs = {
  date: Scalars['DateTime'];
  restaurantId: Scalars['UUID'];
};


export type QueryRestaurantArgs = {
  id: Scalars['UUID'];
};


export type QuerySearchMealArgs = {
  query: Scalars['String'];
};

export type Restaurant = {
  __typename?: 'Restaurant';
  address: Scalars['String'];
  id: Scalars['UUID'];
  img: Scalars['String'];
  mealPrices: Array<MealPrice>;
  menuUrl: Scalars['String'];
  name: Scalars['String'];
  openingHours: Scalars['String'];
  scrape: Scalars['Boolean'];
  scrapingStartedAt: Scalars['DateTime'];
};

export type Sort = {
  by: Scalars['String'];
  order?: InputMaybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  id: Scalars['UUID'];
  name: Scalars['String'];
};

export type UpdateMealInput = {
  categoryId: Scalars['UUID'];
  id: Scalars['UUID'];
  name: Scalars['String'];
};

export type UpdateMealPictureInput = {
  id: Scalars['UUID'];
  img: Scalars['String'];
  mealId: Scalars['UUID'];
  restaurantId: Scalars['UUID'];
};

export type UpdateMealPriceInput = {
  date: Scalars['DateTime'];
  id: Scalars['UUID'];
  mealId: Scalars['UUID'];
  priceRegular: Scalars['Float'];
  priceStudent: Scalars['Float'];
  restaurantId: Scalars['UUID'];
};

export type UpdateRestaurantInput = {
  address: Scalars['String'];
  id: Scalars['UUID'];
  img: Scalars['String'];
  menuUrl: Scalars['String'];
  name: Scalars['String'];
  openingHours: Scalars['String'];
  scrapingStartedAt: Scalars['DateTime'];
};

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: any, name: string }> };

export type MealQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type MealQuery = { __typename?: 'Query', meal?: { __typename?: 'Meal', id: any, name: string, category?: { __typename?: 'Category', id: any, name: string } | null, pictures: Array<{ __typename?: 'MealPicture', id: any, img: string, restaurant?: { __typename?: 'Restaurant', id: any, name: string } | null }>, prices: Array<{ __typename?: 'MealPrice', id: any, date: any, priceStudent: number, priceRegular: number, restaurant?: { __typename?: 'Restaurant', id: any, name: string } | null }> } | null };

export type MealsQueryVariables = Exact<{
  filter?: InputMaybe<MealFilter>;
}>;


export type MealsQuery = { __typename?: 'Query', meals: Array<{ __typename?: 'Meal', id: any, name: string, averagePriceStudent?: number | null, averagePriceNormal?: number | null, category?: { __typename?: 'Category', name: string } | null }> };

export type MenuQueryVariables = Exact<{
  restaurantId: Scalars['UUID'];
  date: Scalars['DateTime'];
}>;


export type MenuQuery = { __typename?: 'Query', menu: { __typename?: 'Menu', date: any, mealPrices: Array<{ __typename?: 'MealPrice', id: any, priceStudent: number, priceRegular: number, meal?: { __typename?: 'Meal', id: any, name: string, category?: { __typename?: 'Category', name: string } | null, pictures: Array<{ __typename?: 'MealPicture', id: any }> } | null }> } };

export type RestaurantQueryVariables = Exact<{
  restaurantId: Scalars['UUID'];
}>;


export type RestaurantQuery = { __typename?: 'Query', restaurant?: { __typename?: 'Restaurant', id: any, img: string, address: string, openingHours: string, scrapingStartedAt: any, name: string } | null };

export type RestaurantsQueryVariables = Exact<{ [key: string]: never; }>;


export type RestaurantsQuery = { __typename?: 'Query', restaurants: Array<{ __typename?: 'Restaurant', id: any, name: string, img: string, openingHours: string, address: string }> };


export const CategoriesDocument = gql`
    query categories {
  categories {
    id
    name
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const MealDocument = gql`
    query meal($id: UUID!) {
  meal(id: $id) {
    id
    name
    category {
      id
      name
    }
    pictures {
      id
      img
      restaurant {
        id
        name
      }
    }
    prices {
      id
      date
      priceStudent
      priceRegular
      restaurant {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useMealQuery__
 *
 * To run a query within a React component, call `useMealQuery` and pass it any options that fit your needs.
 * When your component renders, `useMealQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMealQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMealQuery(baseOptions: Apollo.QueryHookOptions<MealQuery, MealQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MealQuery, MealQueryVariables>(MealDocument, options);
      }
export function useMealLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MealQuery, MealQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MealQuery, MealQueryVariables>(MealDocument, options);
        }
export type MealQueryHookResult = ReturnType<typeof useMealQuery>;
export type MealLazyQueryHookResult = ReturnType<typeof useMealLazyQuery>;
export type MealQueryResult = Apollo.QueryResult<MealQuery, MealQueryVariables>;
export const MealsDocument = gql`
    query meals($filter: MealFilter) {
  meals(filter: $filter) {
    id
    name
    category {
      name
    }
    averagePriceStudent
    averagePriceNormal
  }
}
    `;

/**
 * __useMealsQuery__
 *
 * To run a query within a React component, call `useMealsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMealsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMealsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useMealsQuery(baseOptions?: Apollo.QueryHookOptions<MealsQuery, MealsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MealsQuery, MealsQueryVariables>(MealsDocument, options);
      }
export function useMealsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MealsQuery, MealsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MealsQuery, MealsQueryVariables>(MealsDocument, options);
        }
export type MealsQueryHookResult = ReturnType<typeof useMealsQuery>;
export type MealsLazyQueryHookResult = ReturnType<typeof useMealsLazyQuery>;
export type MealsQueryResult = Apollo.QueryResult<MealsQuery, MealsQueryVariables>;
export const MenuDocument = gql`
    query menu($restaurantId: UUID!, $date: DateTime!) {
  menu(date: $date, restaurantId: $restaurantId) {
    date
    mealPrices {
      id
      priceStudent
      priceRegular
      meal {
        id
        name
        category {
          name
        }
        pictures {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useMenuQuery__
 *
 * To run a query within a React component, call `useMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuQuery({
 *   variables: {
 *      restaurantId: // value for 'restaurantId'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useMenuQuery(baseOptions: Apollo.QueryHookOptions<MenuQuery, MenuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MenuQuery, MenuQueryVariables>(MenuDocument, options);
      }
export function useMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenuQuery, MenuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MenuQuery, MenuQueryVariables>(MenuDocument, options);
        }
export type MenuQueryHookResult = ReturnType<typeof useMenuQuery>;
export type MenuLazyQueryHookResult = ReturnType<typeof useMenuLazyQuery>;
export type MenuQueryResult = Apollo.QueryResult<MenuQuery, MenuQueryVariables>;
export const RestaurantDocument = gql`
    query restaurant($restaurantId: UUID!) {
  restaurant(id: $restaurantId) {
    id
    img
    address
    openingHours
    scrapingStartedAt
    name
  }
}
    `;

/**
 * __useRestaurantQuery__
 *
 * To run a query within a React component, call `useRestaurantQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantQuery({
 *   variables: {
 *      restaurantId: // value for 'restaurantId'
 *   },
 * });
 */
export function useRestaurantQuery(baseOptions: Apollo.QueryHookOptions<RestaurantQuery, RestaurantQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RestaurantQuery, RestaurantQueryVariables>(RestaurantDocument, options);
      }
export function useRestaurantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RestaurantQuery, RestaurantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RestaurantQuery, RestaurantQueryVariables>(RestaurantDocument, options);
        }
export type RestaurantQueryHookResult = ReturnType<typeof useRestaurantQuery>;
export type RestaurantLazyQueryHookResult = ReturnType<typeof useRestaurantLazyQuery>;
export type RestaurantQueryResult = Apollo.QueryResult<RestaurantQuery, RestaurantQueryVariables>;
export const RestaurantsDocument = gql`
    query restaurants {
  restaurants {
    id
    name
    img
    openingHours
    address
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