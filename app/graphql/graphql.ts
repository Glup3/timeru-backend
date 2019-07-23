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

export type AddPermissionMutationResponse = MutationResponse & {
  __typename?: 'AddPermissionMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  permission?: Maybe<Permission>;
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

export interface CredentialsInput {
  email: Scalars['String'];
  password: Scalars['String'];
}

export type LoginMutationResponse = MutationResponse & {
  __typename?: 'LoginMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export interface Mutation {
  __typename?: 'Mutation';
  root?: Maybe<Scalars['String']>;
  register?: Maybe<Maybe<RegisterMutationResponse>[]>;
  login?: Maybe<LoginMutationResponse>;
  invalidateTokens?: Maybe<Scalars['Boolean']>;
  addCategory?: Maybe<AddCategoryMutationResponse>;
  removeCategory?: Maybe<RemoveCategoryMutationResponse>;
  updateCategory?: Maybe<UpdateCategoryMutationResponse>;
  addPermission?: Maybe<AddPermissionMutationResponse>;
  updatePermission?: Maybe<UpdatePermissionMutationResponse>;
  removePermission?: Maybe<RemovePermissionMutationResponse>;
}

export interface MutationRegisterArgs {
  credentials: CredentialsInput;
  personalInfo: PersonalInfoInput;
}

export interface MutationLoginArgs {
  credentials: CredentialsInput;
}

export interface MutationAddCategoryArgs {
  category: CategoryInput;
}

export interface MutationRemoveCategoryArgs {
  id: Scalars['ID'];
}

export interface MutationUpdateCategoryArgs {
  id: Scalars['ID'];
  category: CategoryInput;
}

export interface MutationAddPermissionArgs {
  permission: PermissionInput;
}

export interface MutationUpdatePermissionArgs {
  id: Scalars['ID'];
  permission: PermissionInput;
}

export interface MutationRemovePermissionArgs {
  id: Scalars['ID'];
}

export interface MutationResponse {
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
}

export interface Permission {
  __typename?: 'Permission';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
}

export interface PermissionInput {
  title?: Maybe<Scalars['String']>;
}

export interface PersonalInfoInput {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}

export interface Query {
  __typename?: 'Query';
  root?: Maybe<Scalars['String']>;
  me?: Maybe<User>;
  getAllCategories?: Maybe<Maybe<Category>[]>;
  getCategory?: Maybe<Category>;
}

export interface QueryGetCategoryArgs {
  id?: Maybe<Scalars['ID']>;
}

export type RegisterMutationResponse = MutationResponse & {
  __typename?: 'RegisterMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type RemoveCategoryMutationResponse = MutationResponse & {
  __typename?: 'RemoveCategoryMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  category?: Maybe<Category>;
};

export type RemovePermissionMutationResponse = MutationResponse & {
  __typename?: 'RemovePermissionMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  permission?: Maybe<Permission>;
};

export type UpdateCategoryMutationResponse = MutationResponse & {
  __typename?: 'UpdateCategoryMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  category?: Maybe<Category>;
};

export type UpdatePermissionMutationResponse = MutationResponse & {
  __typename?: 'UpdatePermissionMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  permission?: Maybe<Permission>;
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
  CredentialsInput: CredentialsInput;
  PersonalInfoInput: PersonalInfoInput;
  RegisterMutationResponse: ResolverTypeWrapper<RegisterMutationResponse>;
  MutationResponse: ResolverTypeWrapper<MutationResponse>;
  LoginMutationResponse: ResolverTypeWrapper<LoginMutationResponse>;
  CategoryInput: CategoryInput;
  AddCategoryMutationResponse: ResolverTypeWrapper<AddCategoryMutationResponse>;
  RemoveCategoryMutationResponse: ResolverTypeWrapper<RemoveCategoryMutationResponse>;
  UpdateCategoryMutationResponse: ResolverTypeWrapper<UpdateCategoryMutationResponse>;
  PermissionInput: PermissionInput;
  AddPermissionMutationResponse: ResolverTypeWrapper<AddPermissionMutationResponse>;
  Permission: ResolverTypeWrapper<Permission>;
  UpdatePermissionMutationResponse: ResolverTypeWrapper<UpdatePermissionMutationResponse>;
  RemovePermissionMutationResponse: ResolverTypeWrapper<RemovePermissionMutationResponse>;
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
  CredentialsInput: CredentialsInput;
  PersonalInfoInput: PersonalInfoInput;
  RegisterMutationResponse: RegisterMutationResponse;
  MutationResponse: MutationResponse;
  LoginMutationResponse: LoginMutationResponse;
  CategoryInput: CategoryInput;
  AddCategoryMutationResponse: AddCategoryMutationResponse;
  RemoveCategoryMutationResponse: RemoveCategoryMutationResponse;
  UpdateCategoryMutationResponse: UpdateCategoryMutationResponse;
  PermissionInput: PermissionInput;
  AddPermissionMutationResponse: AddPermissionMutationResponse;
  Permission: Permission;
  UpdatePermissionMutationResponse: UpdatePermissionMutationResponse;
  RemovePermissionMutationResponse: RemovePermissionMutationResponse;
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

export interface AddPermissionMutationResponseResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AddPermissionMutationResponse']
> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>;
}

export interface CategoryResolvers<ContextType = any, ParentType = ResolversParentTypes['Category']> {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valuable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
}

export interface LoginMutationResponseResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['LoginMutationResponse']
> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}

export interface MutationResolvers<ContextType = any, ParentType = ResolversParentTypes['Mutation']> {
  root?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  register?: Resolver<
    Maybe<Maybe<ResolversTypes['RegisterMutationResponse']>[]>,
    ParentType,
    ContextType,
    MutationRegisterArgs
  >;
  login?: Resolver<Maybe<ResolversTypes['LoginMutationResponse']>, ParentType, ContextType, MutationLoginArgs>;
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
  addPermission?: Resolver<
    Maybe<ResolversTypes['AddPermissionMutationResponse']>,
    ParentType,
    ContextType,
    MutationAddPermissionArgs
  >;
  updatePermission?: Resolver<
    Maybe<ResolversTypes['UpdatePermissionMutationResponse']>,
    ParentType,
    ContextType,
    MutationUpdatePermissionArgs
  >;
  removePermission?: Resolver<
    Maybe<ResolversTypes['RemovePermissionMutationResponse']>,
    ParentType,
    ContextType,
    MutationRemovePermissionArgs
  >;
}

export interface MutationResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['MutationResponse']> {
  __resolveType: TypeResolveFn<
    | 'RegisterMutationResponse'
    | 'LoginMutationResponse'
    | 'AddCategoryMutationResponse'
    | 'RemoveCategoryMutationResponse'
    | 'UpdateCategoryMutationResponse'
    | 'AddPermissionMutationResponse'
    | 'UpdatePermissionMutationResponse'
    | 'RemovePermissionMutationResponse',
    ParentType,
    ContextType
  >;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}

export interface PermissionResolvers<ContextType = any, ParentType = ResolversParentTypes['Permission']> {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}

export interface QueryResolvers<ContextType = any, ParentType = ResolversParentTypes['Query']> {
  root?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getAllCategories?: Resolver<Maybe<Maybe<ResolversTypes['Category']>[]>, ParentType, ContextType>;
  getCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, QueryGetCategoryArgs>;
}

export interface RegisterMutationResponseResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['RegisterMutationResponse']
> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export interface RemovePermissionMutationResponseResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['RemovePermissionMutationResponse']
> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>;
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

export interface UpdatePermissionMutationResponseResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['UpdatePermissionMutationResponse']
> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>;
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
  AddPermissionMutationResponse?: AddPermissionMutationResponseResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  LoginMutationResponse?: LoginMutationResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers;
  Permission?: PermissionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegisterMutationResponse?: RegisterMutationResponseResolvers<ContextType>;
  RemoveCategoryMutationResponse?: RemoveCategoryMutationResponseResolvers<ContextType>;
  RemovePermissionMutationResponse?: RemovePermissionMutationResponseResolvers<ContextType>;
  UpdateCategoryMutationResponse?: UpdateCategoryMutationResponseResolvers<ContextType>;
  UpdatePermissionMutationResponse?: UpdatePermissionMutationResponseResolvers<ContextType>;
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
