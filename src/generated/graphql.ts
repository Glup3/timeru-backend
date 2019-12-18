import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** Date custom scalar type */
  Date: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type AddCategoryMutationResponse = MutationResponse & {
  __typename?: 'AddCategoryMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  category?: Maybe<Category>,
};

export type AddPermissionMutationResponse = MutationResponse & {
  __typename?: 'AddPermissionMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  permission?: Maybe<Permission>,
};

export type AddProjectMutationResponse = MutationResponse & {
  __typename?: 'AddProjectMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  project?: Maybe<Project>,
};

export type AddUserPermissionMutationResponse = MutationResponse & {
  __typename?: 'AddUserPermissionMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  userPermission?: Maybe<UserPermission>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Category = {
  __typename?: 'Category',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  valuable?: Maybe<Scalars['Boolean']>,
};

export type CategoryInput = {
  title?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  valuable?: Maybe<Scalars['Boolean']>,
};

export type CredentialsInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};


export type LoginMutationResponse = MutationResponse & {
  __typename?: 'LoginMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  token?: Maybe<Scalars['String']>,
};

export type Mutation = {
  __typename?: 'Mutation',
  root?: Maybe<Scalars['String']>,
  register?: Maybe<RegisterMutationResponse>,
  login?: Maybe<LoginMutationResponse>,
  invalidateTokens?: Maybe<Scalars['Boolean']>,
  addCategory?: Maybe<AddCategoryMutationResponse>,
  removeCategory?: Maybe<RemoveCategoryMutationResponse>,
  updateCategory?: Maybe<UpdateCategoryMutationResponse>,
  updateUser?: Maybe<UpdateUserMutationResponse>,
  addPermission?: Maybe<AddPermissionMutationResponse>,
  updatePermission?: Maybe<UpdatePermissionMutationResponse>,
  removePermission?: Maybe<RemovePermissionMutationResponse>,
  addProject?: Maybe<AddProjectMutationResponse>,
  updateProject?: Maybe<UpdateProjectMutationResponse>,
  removeProject?: Maybe<RemoveProjectMutationResponse>,
  addUserPermission?: Maybe<AddUserPermissionMutationResponse>,
  startTimer?: Maybe<StartTimerMutationResponse>,
  stopTimer?: Maybe<StopTimerMutationResponse>,
};


export type MutationRegisterArgs = {
  credentials: CredentialsInput,
  personalInfo: PersonalInfoInput
};


export type MutationLoginArgs = {
  credentials: CredentialsInput
};


export type MutationAddCategoryArgs = {
  category: CategoryInput
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['ID']
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID'],
  category: CategoryInput
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'],
  user: UserInput
};


export type MutationAddPermissionArgs = {
  permission: PermissionInput
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['ID'],
  permission: PermissionInput
};


export type MutationRemovePermissionArgs = {
  id: Scalars['ID']
};


export type MutationAddProjectArgs = {
  project: ProjectInput
};


export type MutationUpdateProjectArgs = {
  id: Scalars['ID'],
  project: ProjectInput
};


export type MutationRemoveProjectArgs = {
  id: Scalars['ID']
};


export type MutationAddUserPermissionArgs = {
  userPermissionInput: UserPermissionInput
};


export type MutationStartTimerArgs = {
  timerInput: StartTimerInput
};

export type MutationResponse = {
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
};

export type Permission = {
  __typename?: 'Permission',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
};

export type PermissionInput = {
  title?: Maybe<Scalars['String']>,
};

export type PersonalInfoInput = {
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
};

export type Project = {
  __typename?: 'Project',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  codename?: Maybe<Scalars['String']>,
};

export type ProjectInput = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  codename?: Maybe<Scalars['String']>,
};

export type Query = {
  __typename?: 'Query',
  root?: Maybe<Scalars['String']>,
  me?: Maybe<User>,
  categories?: Maybe<Array<Maybe<Category>>>,
  category?: Maybe<Category>,
  permissions?: Maybe<Array<Maybe<Permission>>>,
  permission?: Maybe<Permission>,
  projects?: Maybe<Array<Maybe<Project>>>,
  project?: Maybe<Project>,
  timeEntries?: Maybe<Array<Maybe<TimeEntry>>>,
  isTimerRunning?: Maybe<Scalars['Boolean']>,
};


export type QueryCategoryArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryPermissionArgs = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>
};


export type QueryProjectArgs = {
  id?: Maybe<Scalars['ID']>,
  codename?: Maybe<Scalars['String']>
};


export type QueryTimeEntriesArgs = {
  start: Scalars['Date'],
  end: Scalars['Date']
};

export type RegisterMutationResponse = MutationResponse & {
  __typename?: 'RegisterMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
};

export type RemoveCategoryMutationResponse = MutationResponse & {
  __typename?: 'RemoveCategoryMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  category?: Maybe<Category>,
};

export type RemovePermissionMutationResponse = MutationResponse & {
  __typename?: 'RemovePermissionMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  permission?: Maybe<Permission>,
};

export type RemoveProjectMutationResponse = MutationResponse & {
  __typename?: 'RemoveProjectMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  project?: Maybe<Project>,
};

export type StartTimerInput = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  valuable?: Maybe<Scalars['Boolean']>,
  projectId?: Maybe<Scalars['ID']>,
  categoryId?: Maybe<Scalars['ID']>,
};

export type StartTimerMutationResponse = MutationResponse & {
  __typename?: 'StartTimerMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  timeEntry?: Maybe<TimeEntry>,
};

export type StopTimerMutationResponse = MutationResponse & {
  __typename?: 'StopTimerMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  timeEntry?: Maybe<TimeEntry>,
};

export type TimeEntry = {
  __typename?: 'TimeEntry',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['Date']>,
  end?: Maybe<Scalars['Date']>,
  duration?: Maybe<Scalars['Int']>,
  valuable?: Maybe<Scalars['Boolean']>,
  user?: Maybe<User>,
  project?: Maybe<Project>,
  category?: Maybe<Category>,
};

export type UpdateCategoryMutationResponse = MutationResponse & {
  __typename?: 'UpdateCategoryMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  category?: Maybe<Category>,
};

export type UpdatePermissionMutationResponse = MutationResponse & {
  __typename?: 'UpdatePermissionMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  permission?: Maybe<Permission>,
};

export type UpdateProjectMutationResponse = MutationResponse & {
  __typename?: 'UpdateProjectMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  project?: Maybe<Project>,
};

export type UpdateUserMutationResponse = MutationResponse & {
  __typename?: 'UpdateUserMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  user?: Maybe<User>,
};


export type User = {
  __typename?: 'User',
  username?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['Boolean']>,
};

export type UserInput = {
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['Boolean']>,
  role?: Maybe<Scalars['String']>,
};

export type UserPermission = {
  __typename?: 'UserPermission',
  id?: Maybe<Scalars['ID']>,
  user?: Maybe<User>,
  project?: Maybe<Project>,
  permission?: Maybe<Permission>,
};

export type UserPermissionInput = {
  userId?: Maybe<Scalars['ID']>,
  username?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  projectCodename?: Maybe<Scalars['String']>,
  permissionId?: Maybe<Scalars['ID']>,
  permissionTitle?: Maybe<Scalars['String']>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

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
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  User: ResolverTypeWrapper<User>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Category: ResolverTypeWrapper<Category>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Permission: ResolverTypeWrapper<Permission>,
  Project: ResolverTypeWrapper<Project>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  TimeEntry: ResolverTypeWrapper<TimeEntry>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Mutation: ResolverTypeWrapper<{}>,
  CredentialsInput: CredentialsInput,
  PersonalInfoInput: PersonalInfoInput,
  RegisterMutationResponse: ResolverTypeWrapper<RegisterMutationResponse>,
  MutationResponse: ResolverTypeWrapper<MutationResponse>,
  LoginMutationResponse: ResolverTypeWrapper<LoginMutationResponse>,
  CategoryInput: CategoryInput,
  AddCategoryMutationResponse: ResolverTypeWrapper<AddCategoryMutationResponse>,
  RemoveCategoryMutationResponse: ResolverTypeWrapper<RemoveCategoryMutationResponse>,
  UpdateCategoryMutationResponse: ResolverTypeWrapper<UpdateCategoryMutationResponse>,
  UserInput: UserInput,
  UpdateUserMutationResponse: ResolverTypeWrapper<UpdateUserMutationResponse>,
  PermissionInput: PermissionInput,
  AddPermissionMutationResponse: ResolverTypeWrapper<AddPermissionMutationResponse>,
  UpdatePermissionMutationResponse: ResolverTypeWrapper<UpdatePermissionMutationResponse>,
  RemovePermissionMutationResponse: ResolverTypeWrapper<RemovePermissionMutationResponse>,
  ProjectInput: ProjectInput,
  AddProjectMutationResponse: ResolverTypeWrapper<AddProjectMutationResponse>,
  UpdateProjectMutationResponse: ResolverTypeWrapper<UpdateProjectMutationResponse>,
  RemoveProjectMutationResponse: ResolverTypeWrapper<RemoveProjectMutationResponse>,
  UserPermissionInput: UserPermissionInput,
  AddUserPermissionMutationResponse: ResolverTypeWrapper<AddUserPermissionMutationResponse>,
  UserPermission: ResolverTypeWrapper<UserPermission>,
  StartTimerInput: StartTimerInput,
  StartTimerMutationResponse: ResolverTypeWrapper<StartTimerMutationResponse>,
  StopTimerMutationResponse: ResolverTypeWrapper<StopTimerMutationResponse>,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  User: User,
  Boolean: Scalars['Boolean'],
  Category: Category,
  ID: Scalars['ID'],
  Permission: Permission,
  Project: Project,
  Date: Scalars['Date'],
  TimeEntry: TimeEntry,
  Int: Scalars['Int'],
  Mutation: {},
  CredentialsInput: CredentialsInput,
  PersonalInfoInput: PersonalInfoInput,
  RegisterMutationResponse: RegisterMutationResponse,
  MutationResponse: MutationResponse,
  LoginMutationResponse: LoginMutationResponse,
  CategoryInput: CategoryInput,
  AddCategoryMutationResponse: AddCategoryMutationResponse,
  RemoveCategoryMutationResponse: RemoveCategoryMutationResponse,
  UpdateCategoryMutationResponse: UpdateCategoryMutationResponse,
  UserInput: UserInput,
  UpdateUserMutationResponse: UpdateUserMutationResponse,
  PermissionInput: PermissionInput,
  AddPermissionMutationResponse: AddPermissionMutationResponse,
  UpdatePermissionMutationResponse: UpdatePermissionMutationResponse,
  RemovePermissionMutationResponse: RemovePermissionMutationResponse,
  ProjectInput: ProjectInput,
  AddProjectMutationResponse: AddProjectMutationResponse,
  UpdateProjectMutationResponse: UpdateProjectMutationResponse,
  RemoveProjectMutationResponse: RemoveProjectMutationResponse,
  UserPermissionInput: UserPermissionInput,
  AddUserPermissionMutationResponse: AddUserPermissionMutationResponse,
  UserPermission: UserPermission,
  StartTimerInput: StartTimerInput,
  StartTimerMutationResponse: StartTimerMutationResponse,
  StopTimerMutationResponse: StopTimerMutationResponse,
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = {   maxAge?: Maybe<Maybe<Scalars['Int']>>,
  scope?: Maybe<Maybe<CacheControlScope>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddCategoryMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddCategoryMutationResponse'] = ResolversParentTypes['AddCategoryMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>,
};

export type AddPermissionMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddPermissionMutationResponse'] = ResolversParentTypes['AddPermissionMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>,
};

export type AddProjectMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddProjectMutationResponse'] = ResolversParentTypes['AddProjectMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>,
};

export type AddUserPermissionMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddUserPermissionMutationResponse'] = ResolversParentTypes['AddUserPermissionMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  userPermission?: Resolver<Maybe<ResolversTypes['UserPermission']>, ParentType, ContextType>,
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  valuable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type LoginMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginMutationResponse'] = ResolversParentTypes['LoginMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  root?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  register?: Resolver<Maybe<ResolversTypes['RegisterMutationResponse']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'credentials' | 'personalInfo'>>,
  login?: Resolver<Maybe<ResolversTypes['LoginMutationResponse']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'credentials'>>,
  invalidateTokens?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  addCategory?: Resolver<Maybe<ResolversTypes['AddCategoryMutationResponse']>, ParentType, ContextType, RequireFields<MutationAddCategoryArgs, 'category'>>,
  removeCategory?: Resolver<Maybe<ResolversTypes['RemoveCategoryMutationResponse']>, ParentType, ContextType, RequireFields<MutationRemoveCategoryArgs, 'id'>>,
  updateCategory?: Resolver<Maybe<ResolversTypes['UpdateCategoryMutationResponse']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'id' | 'category'>>,
  updateUser?: Resolver<Maybe<ResolversTypes['UpdateUserMutationResponse']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'user'>>,
  addPermission?: Resolver<Maybe<ResolversTypes['AddPermissionMutationResponse']>, ParentType, ContextType, RequireFields<MutationAddPermissionArgs, 'permission'>>,
  updatePermission?: Resolver<Maybe<ResolversTypes['UpdatePermissionMutationResponse']>, ParentType, ContextType, RequireFields<MutationUpdatePermissionArgs, 'id' | 'permission'>>,
  removePermission?: Resolver<Maybe<ResolversTypes['RemovePermissionMutationResponse']>, ParentType, ContextType, RequireFields<MutationRemovePermissionArgs, 'id'>>,
  addProject?: Resolver<Maybe<ResolversTypes['AddProjectMutationResponse']>, ParentType, ContextType, RequireFields<MutationAddProjectArgs, 'project'>>,
  updateProject?: Resolver<Maybe<ResolversTypes['UpdateProjectMutationResponse']>, ParentType, ContextType, RequireFields<MutationUpdateProjectArgs, 'id' | 'project'>>,
  removeProject?: Resolver<Maybe<ResolversTypes['RemoveProjectMutationResponse']>, ParentType, ContextType, RequireFields<MutationRemoveProjectArgs, 'id'>>,
  addUserPermission?: Resolver<Maybe<ResolversTypes['AddUserPermissionMutationResponse']>, ParentType, ContextType, RequireFields<MutationAddUserPermissionArgs, 'userPermissionInput'>>,
  startTimer?: Resolver<Maybe<ResolversTypes['StartTimerMutationResponse']>, ParentType, ContextType, RequireFields<MutationStartTimerArgs, 'timerInput'>>,
  stopTimer?: Resolver<Maybe<ResolversTypes['StopTimerMutationResponse']>, ParentType, ContextType>,
};

export type MutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = {
  __resolveType: TypeResolveFn<'RegisterMutationResponse' | 'LoginMutationResponse' | 'AddCategoryMutationResponse' | 'RemoveCategoryMutationResponse' | 'UpdateCategoryMutationResponse' | 'UpdateUserMutationResponse' | 'AddPermissionMutationResponse' | 'UpdatePermissionMutationResponse' | 'RemovePermissionMutationResponse' | 'AddProjectMutationResponse' | 'UpdateProjectMutationResponse' | 'RemoveProjectMutationResponse' | 'AddUserPermissionMutationResponse' | 'StartTimerMutationResponse' | 'StopTimerMutationResponse', ParentType, ContextType>,
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Permission'] = ResolversParentTypes['Permission']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  codename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  root?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>,
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, QueryCategoryArgs>,
  permissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Permission']>>>, ParentType, ContextType>,
  permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, QueryPermissionArgs>,
  projects?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType>,
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, QueryProjectArgs>,
  timeEntries?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimeEntry']>>>, ParentType, ContextType, RequireFields<QueryTimeEntriesArgs, 'start' | 'end'>>,
  isTimerRunning?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
};

export type RegisterMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterMutationResponse'] = ResolversParentTypes['RegisterMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type RemoveCategoryMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveCategoryMutationResponse'] = ResolversParentTypes['RemoveCategoryMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>,
};

export type RemovePermissionMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemovePermissionMutationResponse'] = ResolversParentTypes['RemovePermissionMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>,
};

export type RemoveProjectMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveProjectMutationResponse'] = ResolversParentTypes['RemoveProjectMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>,
};

export type StartTimerMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['StartTimerMutationResponse'] = ResolversParentTypes['StartTimerMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  timeEntry?: Resolver<Maybe<ResolversTypes['TimeEntry']>, ParentType, ContextType>,
};

export type StopTimerMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['StopTimerMutationResponse'] = ResolversParentTypes['StopTimerMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  timeEntry?: Resolver<Maybe<ResolversTypes['TimeEntry']>, ParentType, ContextType>,
};

export type TimeEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimeEntry'] = ResolversParentTypes['TimeEntry']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  start?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  end?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  valuable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>,
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>,
};

export type UpdateCategoryMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCategoryMutationResponse'] = ResolversParentTypes['UpdateCategoryMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>,
};

export type UpdatePermissionMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatePermissionMutationResponse'] = ResolversParentTypes['UpdatePermissionMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>,
};

export type UpdateProjectMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateProjectMutationResponse'] = ResolversParentTypes['UpdateProjectMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>,
};

export type UpdateUserMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserMutationResponse'] = ResolversParentTypes['UpdateUserMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
};

export type UserPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPermission'] = ResolversParentTypes['UserPermission']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>,
  permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  AddCategoryMutationResponse?: AddCategoryMutationResponseResolvers<ContextType>,
  AddPermissionMutationResponse?: AddPermissionMutationResponseResolvers<ContextType>,
  AddProjectMutationResponse?: AddProjectMutationResponseResolvers<ContextType>,
  AddUserPermissionMutationResponse?: AddUserPermissionMutationResponseResolvers<ContextType>,
  Category?: CategoryResolvers<ContextType>,
  Date?: GraphQLScalarType,
  LoginMutationResponse?: LoginMutationResponseResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  MutationResponse?: MutationResponseResolvers,
  Permission?: PermissionResolvers<ContextType>,
  Project?: ProjectResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  RegisterMutationResponse?: RegisterMutationResponseResolvers<ContextType>,
  RemoveCategoryMutationResponse?: RemoveCategoryMutationResponseResolvers<ContextType>,
  RemovePermissionMutationResponse?: RemovePermissionMutationResponseResolvers<ContextType>,
  RemoveProjectMutationResponse?: RemoveProjectMutationResponseResolvers<ContextType>,
  StartTimerMutationResponse?: StartTimerMutationResponseResolvers<ContextType>,
  StopTimerMutationResponse?: StopTimerMutationResponseResolvers<ContextType>,
  TimeEntry?: TimeEntryResolvers<ContextType>,
  UpdateCategoryMutationResponse?: UpdateCategoryMutationResponseResolvers<ContextType>,
  UpdatePermissionMutationResponse?: UpdatePermissionMutationResponseResolvers<ContextType>,
  UpdateProjectMutationResponse?: UpdateProjectMutationResponseResolvers<ContextType>,
  UpdateUserMutationResponse?: UpdateUserMutationResponseResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
  UserPermission?: UserPermissionResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;