import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type Query = {
  __typename?: 'Query';
  getBook?: Maybe<Book>;
  getBooks?: Maybe<Array<Book>>;
  getListItem?: Maybe<ListItem>;
  getListItems?: Maybe<Array<ListItem>>;
  me: User;
};

export type QueryGetBookArgs = {
  id: Scalars['ID'];
};

export type QueryGetBooksArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
};

export type QueryGetListItemArgs = {
  id: Scalars['ID'];
};

export type QueryGetListItemsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['String'];
  title: Scalars['String'];
  author: Scalars['String'];
  coverImageUrl: Scalars['String'];
  pageCount: Scalars['Int'];
  publisher: Scalars['String'];
  synopsis: Scalars['String'];
  listItems?: Maybe<Array<ListItem>>;
};

export type BookListItemsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ListItem = {
  __typename?: 'ListItem';
  id: Scalars['String'];
  book: Book;
  owner: User;
  finishDate?: Maybe<Scalars['DateTime']>;
  startDate: Scalars['DateTime'];
  notes?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  listItems?: Maybe<Array<ListItem>>;
};

export type UserListItemsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook: Book;
  createListItem: ListItem;
  deleteBook: Book;
  signIn: AuthResponse;
  signUp: AuthResponse;
  updateBook: Book;
  updateListItem: ListItem;
  deleteListItem?: Maybe<ListItem>;
};

export type MutationCreateBookArgs = {
  title: Scalars['String'];
  author: Scalars['String'];
  coverImageUrl: Scalars['String'];
  pageCount: Scalars['Int'];
  publisher: Scalars['String'];
  synopsis: Scalars['String'];
};

export type MutationCreateListItemArgs = {
  bookId: Scalars['ID'];
  ownerId: Scalars['ID'];
};

export type MutationDeleteBookArgs = {
  id: Scalars['ID'];
};

export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationUpdateBookArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  coverImageUrl?: Maybe<Scalars['String']>;
  pageCount?: Maybe<Scalars['Int']>;
  publisher?: Maybe<Scalars['String']>;
  synopsis?: Maybe<Scalars['String']>;
};

export type MutationUpdateListItemArgs = {
  id: Scalars['ID'];
  rating?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  finishDate?: Maybe<Scalars['String']>;
};

export type MutationDeleteListItemArgs = {
  id: Scalars['ID'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String'];
  user: User;
};

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type SignInMutation = { __typename?: 'Mutation' } & {
  signIn: { __typename?: 'AuthResponse' } & Pick<AuthResponse, 'token'>;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = { __typename?: 'Query' } & { me: { __typename?: 'User' } & Pick<User, 'id' | 'email'> };

export const SignInDocument = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const CurrentUserDocument = gql`
  query CurrentUser {
    me {
      id
      email
    }
  }
`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>,
) {
  return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
}
export function useCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>,
) {
  return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
}
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}
const result: IntrospectionResultData = {
  __schema: {
    types: [],
  },
};
export default result;
