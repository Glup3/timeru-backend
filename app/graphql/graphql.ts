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

export type AddProjectMutationResponse = MutationResponse & {
  __typename?: 'AddProjectMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  project?: Maybe<Project>;
};

export type AddUserPermissionMutationResponse = MutationResponse & {
  __typename?: 'AddUserPermissionMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  userPermission?: Maybe<UserPermission>;
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
  updateUser?: Maybe<UpdateUserMutationResponse>;
  addPermission?: Maybe<AddPermissionMutationResponse>;
  updatePermission?: Maybe<UpdatePermissionMutationResponse>;
  removePermission?: Maybe<RemovePermissionMutationResponse>;
  addProject?: Maybe<AddProjectMutationResponse>;
  updateProject?: Maybe<UpdateProjectMutationResponse>;
  removeProject?: Maybe<RemoveProjectMutationResponse>;
  addUserPermission?: Maybe<AddUserPermissionMutationResponse>;
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

export interface MutationUpdateUserArgs {
  id: Scalars['ID'];
  user: UserInput;
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

export interface MutationAddProjectArgs {
  project: ProjectInput;
}

export interface MutationUpdateProjectArgs {
  id: Scalars['ID'];
  project: ProjectInput;
}

export interface MutationRemoveProjectArgs {
  id: Scalars['ID'];
}

export interface MutationAddUserPermissionArgs {
  userPermissionInput: UserPermissionInput;
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

export interface Project {
  __typename?: 'Project';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  codename?: Maybe<Scalars['String']>;
}

export interface ProjectInput {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  codename?: Maybe<Scalars['String']>;
}

export interface Query {
  __typename?: 'Query';
  root?: Maybe<Scalars['String']>;
  me?: Maybe<User>;
  categories?: Maybe<Maybe<Category>[]>;
  category?: Maybe<Category>;
  permissions?: Maybe<Maybe<Permission>[]>;
  permission?: Maybe<Permission>;
  projects?: Maybe<Maybe<Project>[]>;
  project?: Maybe<Project>;
}

export interface QueryCategoryArgs {
  id?: Maybe<Scalars['ID']>;
}

export interface QueryPermissionArgs {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
}

export interface QueryProjectArgs {
  id?: Maybe<Scalars['ID']>;
  codename?: Maybe<Scalars['String']>;
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

export type RemoveProjectMutationResponse = MutationResponse & {
  __typename?: 'RemoveProjectMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  project?: Maybe<Project>;
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

export type UpdateProjectMutationResponse = MutationResponse & {
  __typename?: 'UpdateProjectMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  project?: Maybe<Project>;
};

export type UpdateUserMutationResponse = MutationResponse & {
  __typename?: 'UpdateUserMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  user?: Maybe<User>;
};

export interface User {
  __typename?: 'User';
  username?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
}

export interface UserInput {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['String']>;
}

export interface UserPermission {
  __typename?: 'UserPermission';
  id?: Maybe<Scalars['ID']>;
  user?: Maybe<User>;
  project?: Maybe<Project>;
  permission?: Maybe<Permission>;
}

export interface UserPermissionInput {
  userId?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['ID']>;
  projectCodename?: Maybe<Scalars['String']>;
  permissionId?: Maybe<Scalars['ID']>;
  permissionTitle?: Maybe<Scalars['String']>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: ResolverTypeWrapper<Category>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Permission: ResolverTypeWrapper<Permission>;
  Project: ResolverTypeWrapper<Project>;
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
  UserInput: UserInput;
  UpdateUserMutationResponse: ResolverTypeWrapper<UpdateUserMutationResponse>;
  PermissionInput: PermissionInput;
  AddPermissionMutationResponse: ResolverTypeWrapper<AddPermissionMutationResponse>;
  UpdatePermissionMutationResponse: ResolverTypeWrapper<UpdatePermissionMutationResponse>;
  RemovePermissionMutationResponse: ResolverTypeWrapper<RemovePermissionMutationResponse>;
  ProjectInput: ProjectInput;
  AddProjectMutationResponse: ResolverTypeWrapper<AddProjectMutationResponse>;
  UpdateProjectMutationResponse: ResolverTypeWrapper<UpdateProjectMutationResponse>;
  RemoveProjectMutationResponse: ResolverTypeWrapper<RemoveProjectMutationResponse>;
  UserPermissionInput: UserPermissionInput;
  AddUserPermissionMutationResponse: ResolverTypeWrapper<AddUserPermissionMutationResponse>;
  UserPermission: ResolverTypeWrapper<UserPermission>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
}

/** Mapping between all available schema types and the resolvers parents */
export interface ResolversParentTypes {
  Query: {};
  String: Scalars['String'];
  User: User;
  Boolean: Scalars['Boolean'];
  Category: Category;
  ID: Scalars['ID'];
  Permission: Permission;
  Project: Project;
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
  UserInput: UserInput;
  UpdateUserMutationResponse: UpdateUserMutationResponse;
  PermissionInput: PermissionInput;
  AddPermissionMutationResponse: AddPermissionMutationResponse;
  UpdatePermissionMutationResponse: UpdatePermissionMutationResponse;
  RemovePermissionMutationResponse: RemovePermissionMutationResponse;
  ProjectInput: ProjectInput;
  AddProjectMutationResponse: AddProjectMutationResponse;
  UpdateProjectMutationResponse: UpdateProjectMutationResponse;
  RemoveProjectMutationResponse: RemoveProjectMutationResponse;
  UserPermissionInput: UserPermissionInput;
  AddUserPermissionMutationResponse: AddUserPermissionMutationResponse;
  UserPermission: UserPermission;
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

export interface AddProjectMutationResponseResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AddProjectMutationResponse']
> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
}

export interface AddUserPermissionMutationResponseResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AddUserPermissionMutationResponse']
> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userPermission?: Resolver<Maybe<ResolversTypes['UserPermission']>, ParentType, ContextType>;
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
  updateUser?: Resolver<
    Maybe<ResolversTypes['UpdateUserMutationResponse']>,
    ParentType,
    ContextType,
    MutationUpdateUserArgs
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
  addProject?: Resolver<
    Maybe<ResolversTypes['AddProjectMutationResponse']>,
    ParentType,
    ContextType,
    MutationAddProjectArgs
  >;
  updateProject?: Resolver<
    Maybe<ResolversTypes['UpdateProjectMutationResponse']>,
    ParentType,
    ContextType,
    MutationUpdateProjectArgs
  >;
  removeProject?: Resolver<
    Maybe<ResolversTypes['RemoveProjectMutationResponse']>,
    ParentType,
    ContextType,
    MutationRemoveProjectArgs
  >;
  addUserPermission?: Resolver<
    Maybe<ResolversTypes['AddUserPermissionMutationResponse']>,
    ParentType,
    ContextType,
    MutationAddUserPermissionArgs
  >;
}

export interface MutationResponseResolvers<ContextType = any, ParentType = ResolversParentTypes['MutationResponse']> {
  __resolveType: TypeResolveFn<
    | 'RegisterMutationResponse'
    | 'LoginMutationResponse'
    | 'AddCategoryMutationResponse'
    | 'RemoveCategoryMutationResponse'
    | 'UpdateCategoryMutationResponse'
    | 'UpdateUserMutationResponse'
    | 'AddPermissionMutationResponse'
    | 'UpdatePermissionMutationResponse'
    | 'RemovePermissionMutationResponse'
    | 'AddProjectMutationResponse'
    | 'UpdateProjectMutationResponse'
    | 'RemoveProjectMutationResponse'
    | 'AddUserPermissionMutationResponse',
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

export interface ProjectResolvers<ContextType = any, ParentType = ResolversParentTypes['Project']> {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  codename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}

export interface QueryResolvers<ContextType = any, ParentType = ResolversParentTypes['Query']> {
  root?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Maybe<ResolversTypes['Category']>[]>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, QueryCategoryArgs>;
  permissions?: Resolver<Maybe<Maybe<ResolversTypes['Permission']>[]>, ParentType, ContextType>;
  permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, QueryPermissionArgs>;
  projects?: Resolver<Maybe<Maybe<ResolversTypes['Project']>[]>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, QueryProjectArgs>;
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

export interface RemoveProjectMutationResponseResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['RemoveProjectMutationResponse']
> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
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

export interface UpdateProjectMutationResponseResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['UpdateProjectMutationResponse']
> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
}

export interface UpdateUserMutationResponseResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['UpdateUserMutationResponse']
> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export interface UserResolvers<ContextType = any, ParentType = ResolversParentTypes['User']> {
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
}

export interface UserPermissionResolvers<ContextType = any, ParentType = ResolversParentTypes['UserPermission']> {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>;
}

export interface Resolvers<ContextType = any> {
  AddCategoryMutationResponse?: AddCategoryMutationResponseResolvers<ContextType>;
  AddPermissionMutationResponse?: AddPermissionMutationResponseResolvers<ContextType>;
  AddProjectMutationResponse?: AddProjectMutationResponseResolvers<ContextType>;
  AddUserPermissionMutationResponse?: AddUserPermissionMutationResponseResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  LoginMutationResponse?: LoginMutationResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers;
  Permission?: PermissionResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegisterMutationResponse?: RegisterMutationResponseResolvers<ContextType>;
  RemoveCategoryMutationResponse?: RemoveCategoryMutationResponseResolvers<ContextType>;
  RemovePermissionMutationResponse?: RemovePermissionMutationResponseResolvers<ContextType>;
  RemoveProjectMutationResponse?: RemoveProjectMutationResponseResolvers<ContextType>;
  UpdateCategoryMutationResponse?: UpdateCategoryMutationResponseResolvers<ContextType>;
  UpdatePermissionMutationResponse?: UpdatePermissionMutationResponseResolvers<ContextType>;
  UpdateProjectMutationResponse?: UpdateProjectMutationResponseResolvers<ContextType>;
  UpdateUserMutationResponse?: UpdateUserMutationResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserPermission?: UserPermissionResolvers<ContextType>;
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
