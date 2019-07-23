import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export type AddCategoryMutationResponse = MutationResponse & {
  __typename?: 'AddCategoryMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  category?: Maybe<Category>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export interface Category {
  __typename?: 'Category';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  valuable?: Maybe<Scalars['Boolean']>;
}

export interface CategoryInput {
  title?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  valuable?: Maybe<Scalars['Boolean']>;
}

export interface Error {
  __typename?: 'Error';
  path: Scalars['String'];
  message: Scalars['String'];
}

export interface Mutation {
  __typename?: 'Mutation';
  register?: Maybe<Error[]>;
  login?: Maybe<Error[]>;
  invalidateTokens?: Maybe<Scalars['Boolean']>;
  addCategory?: Maybe<AddCategoryMutationResponse>;
  removeCategory?: Maybe<RemoveCategoryMutationResponse>;
  updateCategory?: Maybe<UpdateCategoryMutationResponse>;
}

export interface MutationRegisterArgs {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  username: Scalars['String'];
}

export interface MutationLoginArgs {
  email: Scalars['String'];
  password: Scalars['String'];
}

export interface MutationAddCategoryArgs {
  category?: Maybe<CategoryInput>;
}

export interface MutationRemoveCategoryArgs {
  id: Scalars['ID'];
}

export interface MutationUpdateCategoryArgs {
  id: Scalars['ID'];
  category?: Maybe<CategoryInput>;
}

export interface MutationResponse {
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
}

export interface Query {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  me?: Maybe<User>;
  ping?: Maybe<Scalars['String']>;
  currentTime?: Maybe<Scalars['String']>;
  getAllCategories?: Maybe<Maybe<Category>[]>;
  getCategory?: Maybe<Category>;
}

export interface QueryGetCategoryArgs {
  id?: Maybe<Scalars['ID']>;
}

export type RemoveCategoryMutationResponse = MutationResponse & {
  __typename?: 'RemoveCategoryMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  category?: Maybe<Category>;
};

export type UpdateCategoryMutationResponse = MutationResponse & {
  __typename?: 'UpdateCategoryMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  category?: Maybe<Category>;
};

export interface User {
  __typename?: 'User';
  username?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export interface StitchingResolver<TResult, TParent, TContext, TArgs> {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
}

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export interface ResolversTypes {
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  Category: ResolverTypeWrapper<Category>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Mutation: ResolverTypeWrapper<{}>;
  Error: ResolverTypeWrapper<Error>;
  CategoryInput: CategoryInput;
  AddCategoryMutationResponse: ResolverTypeWrapper<AddCategoryMutationResponse>;
  MutationResponse: ResolverTypeWrapper<MutationResponse>;
  RemoveCategoryMutationResponse: ResolverTypeWrapper<RemoveCategoryMutationResponse>;
  UpdateCategoryMutationResponse: ResolverTypeWrapper<UpdateCategoryMutationResponse>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
}

/** Mapping between all available schema types and the resolvers parents */
export interface ResolversParentTypes {
  Query: {};
  String: Scalars['String'];
  User: User;
  Category: Category;
  ID: Scalars['ID'];
  Boolean: Scalars['Boolean'];
  Mutation: {};
  Error: Error;
  CategoryInput: CategoryInput;
  AddCategoryMutationResponse: AddCategoryMutationResponse;
  MutationResponse: MutationResponse;
  RemoveCategoryMutationResponse: RemoveCategoryMutationResponse;
  UpdateCategoryMutationResponse: UpdateCategoryMutationResponse;
  CacheControlScope: CacheControlScope;
  Upload: Scalars['Upload'];
  Int: Scalars['Int'];
}

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = { maxAge?: Maybe<Maybe<Scalars['Int']>>; scope?: Maybe<Maybe<CacheControlScope>> }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface AddCategoryMutationResponseResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AddCategoryMutationResponse']
> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
}

export interface CategoryResolvers<ContextType = any, ParentType = ResolversParentTypes['Category']> {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valuable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
}

export interface ErrorResolvers<ContextType = any, ParentType = ResolversParentTypes['Error']> {
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}

export interface MutationResolvers<ContextType = any, ParentType = ResolversParentTypes['Mutation']> {
  register?: Resolver<Maybe<ResolversTypes['Error'][]>, ParentType, ContextType, MutationRegisterArgs>;
  login?: Resolver<Maybe<ResolversTypes['Error'][]>, ParentType, ContextType, MutationLoginArgs>;
  invalidateTokens?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  addCategory?: Resolver<
    Maybe<ResolversTypes['AddCategoryMutationResponse']>,
    ParentType,
    ContextType,
    MutationAddCategoryArgs
  >;
  removeCategory?: Resolver<
    Maybe<ResolversTypes['RemoveCategoryMutationResponse']>,
    ParentType,
    ContextType,
    MutationRemoveCategoryArgs
  >;
  updateCategory?: Resolver<
    Maybe<ResolversTypes['UpdateCategoryMutationResponse']>,
    ParentType,
    ContextType,
    MutationUpdateCategoryArgs
  >;
}

export interface MutationResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['MutationResponse']> {
  __resolveType: TypeResolveFn<
    'AddCategoryMutationResponse' | 'RemoveCategoryMutationResponse' | 'UpdateCategoryMutationResponse',
    ParentType,
    ContextType
  >;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}

export interface QueryResolvers<ContextType = any, ParentType = ResolversParentTypes['Query']> {
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  ping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getAllCategories?: Resolver<Maybe<Maybe<ResolversTypes['Category']>[]>, ParentType, ContextType>;
  getCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, QueryGetCategoryArgs>;
}

export interface RemoveCategoryMutationResponseResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['RemoveCategoryMutationResponse']
> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
}

export interface UpdateCategoryMutationResponseResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['UpdateCategoryMutationResponse']
> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export interface UserResolvers<ContextType = any, ParentType = ResolversParentTypes['User']> {
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}

export interface Resolvers<ContextType = any> {
  AddCategoryMutationResponse?: AddCategoryMutationResponseResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers;
  Query?: QueryResolvers<ContextType>;
  RemoveCategoryMutationResponse?: RemoveCategoryMutationResponseResolvers<ContextType>;
  UpdateCategoryMutationResponse?: UpdateCategoryMutationResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export interface DirectiveResolvers<ContextType = any> {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
}

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
