
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AccountType
 * 
 */
export type AccountType = $Result.DefaultSelection<Prisma.$AccountTypePayload>
/**
 * Model CardNetwork
 * 
 */
export type CardNetwork = $Result.DefaultSelection<Prisma.$CardNetworkPayload>
/**
 * Model BankAccount
 * 
 */
export type BankAccount = $Result.DefaultSelection<Prisma.$BankAccountPayload>
/**
 * Model CreditCard
 * 
 */
export type CreditCard = $Result.DefaultSelection<Prisma.$CreditCardPayload>
/**
 * Model DebitCard
 * 
 */
export type DebitCard = $Result.DefaultSelection<Prisma.$DebitCardPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountStatus: {
  ACTIVE: 'ACTIVE',
  CLOSED: 'CLOSED',
  FROZEN: 'FROZEN',
  SUSPENDED: 'SUSPENDED'
};

export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus]


export const CardStatus: {
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
  EXPIRED: 'EXPIRED'
};

export type CardStatus = (typeof CardStatus)[keyof typeof CardStatus]

}

export type AccountStatus = $Enums.AccountStatus

export const AccountStatus: typeof $Enums.AccountStatus

export type CardStatus = $Enums.CardStatus

export const CardStatus: typeof $Enums.CardStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AccountTypes
 * const accountTypes = await prisma.accountType.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AccountTypes
   * const accountTypes = await prisma.accountType.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.accountType`: Exposes CRUD operations for the **AccountType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountTypes
    * const accountTypes = await prisma.accountType.findMany()
    * ```
    */
  get accountType(): Prisma.AccountTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardNetwork`: Exposes CRUD operations for the **CardNetwork** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardNetworks
    * const cardNetworks = await prisma.cardNetwork.findMany()
    * ```
    */
  get cardNetwork(): Prisma.CardNetworkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankAccount`: Exposes CRUD operations for the **BankAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankAccounts
    * const bankAccounts = await prisma.bankAccount.findMany()
    * ```
    */
  get bankAccount(): Prisma.BankAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditCard`: Exposes CRUD operations for the **CreditCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditCards
    * const creditCards = await prisma.creditCard.findMany()
    * ```
    */
  get creditCard(): Prisma.CreditCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.debitCard`: Exposes CRUD operations for the **DebitCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DebitCards
    * const debitCards = await prisma.debitCard.findMany()
    * ```
    */
  get debitCard(): Prisma.DebitCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AccountType: 'AccountType',
    CardNetwork: 'CardNetwork',
    BankAccount: 'BankAccount',
    CreditCard: 'CreditCard',
    DebitCard: 'DebitCard',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "accountType" | "cardNetwork" | "bankAccount" | "creditCard" | "debitCard" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AccountType: {
        payload: Prisma.$AccountTypePayload<ExtArgs>
        fields: Prisma.AccountTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>
          }
          findFirst: {
            args: Prisma.AccountTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>
          }
          findMany: {
            args: Prisma.AccountTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>[]
          }
          create: {
            args: Prisma.AccountTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>
          }
          createMany: {
            args: Prisma.AccountTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>[]
          }
          delete: {
            args: Prisma.AccountTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>
          }
          update: {
            args: Prisma.AccountTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>
          }
          deleteMany: {
            args: Prisma.AccountTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>[]
          }
          upsert: {
            args: Prisma.AccountTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>
          }
          aggregate: {
            args: Prisma.AccountTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountType>
          }
          groupBy: {
            args: Prisma.AccountTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountTypeCountArgs<ExtArgs>
            result: $Utils.Optional<AccountTypeCountAggregateOutputType> | number
          }
        }
      }
      CardNetwork: {
        payload: Prisma.$CardNetworkPayload<ExtArgs>
        fields: Prisma.CardNetworkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardNetworkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardNetworkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardNetworkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardNetworkPayload>
          }
          findFirst: {
            args: Prisma.CardNetworkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardNetworkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardNetworkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardNetworkPayload>
          }
          findMany: {
            args: Prisma.CardNetworkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardNetworkPayload>[]
          }
          create: {
            args: Prisma.CardNetworkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardNetworkPayload>
          }
          createMany: {
            args: Prisma.CardNetworkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardNetworkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardNetworkPayload>[]
          }
          delete: {
            args: Prisma.CardNetworkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardNetworkPayload>
          }
          update: {
            args: Prisma.CardNetworkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardNetworkPayload>
          }
          deleteMany: {
            args: Prisma.CardNetworkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardNetworkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardNetworkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardNetworkPayload>[]
          }
          upsert: {
            args: Prisma.CardNetworkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardNetworkPayload>
          }
          aggregate: {
            args: Prisma.CardNetworkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardNetwork>
          }
          groupBy: {
            args: Prisma.CardNetworkGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardNetworkGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardNetworkCountArgs<ExtArgs>
            result: $Utils.Optional<CardNetworkCountAggregateOutputType> | number
          }
        }
      }
      BankAccount: {
        payload: Prisma.$BankAccountPayload<ExtArgs>
        fields: Prisma.BankAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          findFirst: {
            args: Prisma.BankAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          findMany: {
            args: Prisma.BankAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          create: {
            args: Prisma.BankAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          createMany: {
            args: Prisma.BankAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          delete: {
            args: Prisma.BankAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          update: {
            args: Prisma.BankAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          deleteMany: {
            args: Prisma.BankAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          upsert: {
            args: Prisma.BankAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          aggregate: {
            args: Prisma.BankAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankAccount>
          }
          groupBy: {
            args: Prisma.BankAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankAccountCountArgs<ExtArgs>
            result: $Utils.Optional<BankAccountCountAggregateOutputType> | number
          }
        }
      }
      CreditCard: {
        payload: Prisma.$CreditCardPayload<ExtArgs>
        fields: Prisma.CreditCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          findFirst: {
            args: Prisma.CreditCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          findMany: {
            args: Prisma.CreditCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          create: {
            args: Prisma.CreditCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          createMany: {
            args: Prisma.CreditCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          delete: {
            args: Prisma.CreditCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          update: {
            args: Prisma.CreditCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          deleteMany: {
            args: Prisma.CreditCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          upsert: {
            args: Prisma.CreditCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          aggregate: {
            args: Prisma.CreditCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditCard>
          }
          groupBy: {
            args: Prisma.CreditCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditCardCountArgs<ExtArgs>
            result: $Utils.Optional<CreditCardCountAggregateOutputType> | number
          }
        }
      }
      DebitCard: {
        payload: Prisma.$DebitCardPayload<ExtArgs>
        fields: Prisma.DebitCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DebitCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DebitCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>
          }
          findFirst: {
            args: Prisma.DebitCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DebitCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>
          }
          findMany: {
            args: Prisma.DebitCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>[]
          }
          create: {
            args: Prisma.DebitCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>
          }
          createMany: {
            args: Prisma.DebitCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DebitCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>[]
          }
          delete: {
            args: Prisma.DebitCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>
          }
          update: {
            args: Prisma.DebitCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>
          }
          deleteMany: {
            args: Prisma.DebitCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DebitCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DebitCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>[]
          }
          upsert: {
            args: Prisma.DebitCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>
          }
          aggregate: {
            args: Prisma.DebitCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDebitCard>
          }
          groupBy: {
            args: Prisma.DebitCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<DebitCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.DebitCardCountArgs<ExtArgs>
            result: $Utils.Optional<DebitCardCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    accountType?: AccountTypeOmit
    cardNetwork?: CardNetworkOmit
    bankAccount?: BankAccountOmit
    creditCard?: CreditCardOmit
    debitCard?: DebitCardOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountTypeCountOutputType
   */

  export type AccountTypeCountOutputType = {
    bankAccounts: number
  }

  export type AccountTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccounts?: boolean | AccountTypeCountOutputTypeCountBankAccountsArgs
  }

  // Custom InputTypes
  /**
   * AccountTypeCountOutputType without action
   */
  export type AccountTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTypeCountOutputType
     */
    select?: AccountTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountTypeCountOutputType without action
   */
  export type AccountTypeCountOutputTypeCountBankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
  }


  /**
   * Count Type CardNetworkCountOutputType
   */

  export type CardNetworkCountOutputType = {
    creditCards: number
    debitCards: number
  }

  export type CardNetworkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditCards?: boolean | CardNetworkCountOutputTypeCountCreditCardsArgs
    debitCards?: boolean | CardNetworkCountOutputTypeCountDebitCardsArgs
  }

  // Custom InputTypes
  /**
   * CardNetworkCountOutputType without action
   */
  export type CardNetworkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardNetworkCountOutputType
     */
    select?: CardNetworkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardNetworkCountOutputType without action
   */
  export type CardNetworkCountOutputTypeCountCreditCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditCardWhereInput
  }

  /**
   * CardNetworkCountOutputType without action
   */
  export type CardNetworkCountOutputTypeCountDebitCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebitCardWhereInput
  }


  /**
   * Count Type BankAccountCountOutputType
   */

  export type BankAccountCountOutputType = {
    debitCards: number
  }

  export type BankAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    debitCards?: boolean | BankAccountCountOutputTypeCountDebitCardsArgs
  }

  // Custom InputTypes
  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountCountOutputType
     */
    select?: BankAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeCountDebitCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebitCardWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bankAccounts: number
    creditCards: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccounts?: boolean | UserCountOutputTypeCountBankAccountsArgs
    creditCards?: boolean | UserCountOutputTypeCountCreditCardsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreditCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditCardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AccountType
   */

  export type AggregateAccountType = {
    _count: AccountTypeCountAggregateOutputType | null
    _min: AccountTypeMinAggregateOutputType | null
    _max: AccountTypeMaxAggregateOutputType | null
  }

  export type AccountTypeMinAggregateOutputType = {
    id: string | null
    accountTypeName: string | null
    isDisabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountTypeMaxAggregateOutputType = {
    id: string | null
    accountTypeName: string | null
    isDisabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountTypeCountAggregateOutputType = {
    id: number
    accountTypeName: number
    isDisabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountTypeMinAggregateInputType = {
    id?: true
    accountTypeName?: true
    isDisabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountTypeMaxAggregateInputType = {
    id?: true
    accountTypeName?: true
    isDisabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountTypeCountAggregateInputType = {
    id?: true
    accountTypeName?: true
    isDisabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountType to aggregate.
     */
    where?: AccountTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTypes to fetch.
     */
    orderBy?: AccountTypeOrderByWithRelationInput | AccountTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountTypes
    **/
    _count?: true | AccountTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountTypeMaxAggregateInputType
  }

  export type GetAccountTypeAggregateType<T extends AccountTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountType[P]>
      : GetScalarType<T[P], AggregateAccountType[P]>
  }




  export type AccountTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountTypeWhereInput
    orderBy?: AccountTypeOrderByWithAggregationInput | AccountTypeOrderByWithAggregationInput[]
    by: AccountTypeScalarFieldEnum[] | AccountTypeScalarFieldEnum
    having?: AccountTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountTypeCountAggregateInputType | true
    _min?: AccountTypeMinAggregateInputType
    _max?: AccountTypeMaxAggregateInputType
  }

  export type AccountTypeGroupByOutputType = {
    id: string
    accountTypeName: string
    isDisabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: AccountTypeCountAggregateOutputType | null
    _min: AccountTypeMinAggregateOutputType | null
    _max: AccountTypeMaxAggregateOutputType | null
  }

  type GetAccountTypeGroupByPayload<T extends AccountTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountTypeGroupByOutputType[P]>
            : GetScalarType<T[P], AccountTypeGroupByOutputType[P]>
        }
      >
    >


  export type AccountTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountTypeName?: boolean
    isDisabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccounts?: boolean | AccountType$bankAccountsArgs<ExtArgs>
    _count?: boolean | AccountTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountType"]>

  export type AccountTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountTypeName?: boolean
    isDisabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountType"]>

  export type AccountTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountTypeName?: boolean
    isDisabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountType"]>

  export type AccountTypeSelectScalar = {
    id?: boolean
    accountTypeName?: boolean
    isDisabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountTypeName" | "isDisabled" | "createdAt" | "updatedAt", ExtArgs["result"]["accountType"]>
  export type AccountTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccounts?: boolean | AccountType$bankAccountsArgs<ExtArgs>
    _count?: boolean | AccountTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountType"
    objects: {
      bankAccounts: Prisma.$BankAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountTypeName: string
      isDisabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountType"]>
    composites: {}
  }

  type AccountTypeGetPayload<S extends boolean | null | undefined | AccountTypeDefaultArgs> = $Result.GetResult<Prisma.$AccountTypePayload, S>

  type AccountTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountTypeCountAggregateInputType | true
    }

  export interface AccountTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountType'], meta: { name: 'AccountType' } }
    /**
     * Find zero or one AccountType that matches the filter.
     * @param {AccountTypeFindUniqueArgs} args - Arguments to find a AccountType
     * @example
     * // Get one AccountType
     * const accountType = await prisma.accountType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountTypeFindUniqueArgs>(args: SelectSubset<T, AccountTypeFindUniqueArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountTypeFindUniqueOrThrowArgs} args - Arguments to find a AccountType
     * @example
     * // Get one AccountType
     * const accountType = await prisma.accountType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTypeFindFirstArgs} args - Arguments to find a AccountType
     * @example
     * // Get one AccountType
     * const accountType = await prisma.accountType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountTypeFindFirstArgs>(args?: SelectSubset<T, AccountTypeFindFirstArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTypeFindFirstOrThrowArgs} args - Arguments to find a AccountType
     * @example
     * // Get one AccountType
     * const accountType = await prisma.accountType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountTypes
     * const accountTypes = await prisma.accountType.findMany()
     * 
     * // Get first 10 AccountTypes
     * const accountTypes = await prisma.accountType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountTypeWithIdOnly = await prisma.accountType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountTypeFindManyArgs>(args?: SelectSubset<T, AccountTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountType.
     * @param {AccountTypeCreateArgs} args - Arguments to create a AccountType.
     * @example
     * // Create one AccountType
     * const AccountType = await prisma.accountType.create({
     *   data: {
     *     // ... data to create a AccountType
     *   }
     * })
     * 
     */
    create<T extends AccountTypeCreateArgs>(args: SelectSubset<T, AccountTypeCreateArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountTypes.
     * @param {AccountTypeCreateManyArgs} args - Arguments to create many AccountTypes.
     * @example
     * // Create many AccountTypes
     * const accountType = await prisma.accountType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountTypeCreateManyArgs>(args?: SelectSubset<T, AccountTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountTypes and returns the data saved in the database.
     * @param {AccountTypeCreateManyAndReturnArgs} args - Arguments to create many AccountTypes.
     * @example
     * // Create many AccountTypes
     * const accountType = await prisma.accountType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountTypes and only return the `id`
     * const accountTypeWithIdOnly = await prisma.accountType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountType.
     * @param {AccountTypeDeleteArgs} args - Arguments to delete one AccountType.
     * @example
     * // Delete one AccountType
     * const AccountType = await prisma.accountType.delete({
     *   where: {
     *     // ... filter to delete one AccountType
     *   }
     * })
     * 
     */
    delete<T extends AccountTypeDeleteArgs>(args: SelectSubset<T, AccountTypeDeleteArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountType.
     * @param {AccountTypeUpdateArgs} args - Arguments to update one AccountType.
     * @example
     * // Update one AccountType
     * const accountType = await prisma.accountType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountTypeUpdateArgs>(args: SelectSubset<T, AccountTypeUpdateArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountTypes.
     * @param {AccountTypeDeleteManyArgs} args - Arguments to filter AccountTypes to delete.
     * @example
     * // Delete a few AccountTypes
     * const { count } = await prisma.accountType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountTypeDeleteManyArgs>(args?: SelectSubset<T, AccountTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountTypes
     * const accountType = await prisma.accountType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountTypeUpdateManyArgs>(args: SelectSubset<T, AccountTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountTypes and returns the data updated in the database.
     * @param {AccountTypeUpdateManyAndReturnArgs} args - Arguments to update many AccountTypes.
     * @example
     * // Update many AccountTypes
     * const accountType = await prisma.accountType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountTypes and only return the `id`
     * const accountTypeWithIdOnly = await prisma.accountType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountType.
     * @param {AccountTypeUpsertArgs} args - Arguments to update or create a AccountType.
     * @example
     * // Update or create a AccountType
     * const accountType = await prisma.accountType.upsert({
     *   create: {
     *     // ... data to create a AccountType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountType we want to update
     *   }
     * })
     */
    upsert<T extends AccountTypeUpsertArgs>(args: SelectSubset<T, AccountTypeUpsertArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTypeCountArgs} args - Arguments to filter AccountTypes to count.
     * @example
     * // Count the number of AccountTypes
     * const count = await prisma.accountType.count({
     *   where: {
     *     // ... the filter for the AccountTypes we want to count
     *   }
     * })
    **/
    count<T extends AccountTypeCountArgs>(
      args?: Subset<T, AccountTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountTypeAggregateArgs>(args: Subset<T, AccountTypeAggregateArgs>): Prisma.PrismaPromise<GetAccountTypeAggregateType<T>>

    /**
     * Group by AccountType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountTypeGroupByArgs['orderBy'] }
        : { orderBy?: AccountTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountType model
   */
  readonly fields: AccountTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bankAccounts<T extends AccountType$bankAccountsArgs<ExtArgs> = {}>(args?: Subset<T, AccountType$bankAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountType model
   */
  interface AccountTypeFieldRefs {
    readonly id: FieldRef<"AccountType", 'String'>
    readonly accountTypeName: FieldRef<"AccountType", 'String'>
    readonly isDisabled: FieldRef<"AccountType", 'Boolean'>
    readonly createdAt: FieldRef<"AccountType", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountType findUnique
   */
  export type AccountTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTypeInclude<ExtArgs> | null
    /**
     * Filter, which AccountType to fetch.
     */
    where: AccountTypeWhereUniqueInput
  }

  /**
   * AccountType findUniqueOrThrow
   */
  export type AccountTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTypeInclude<ExtArgs> | null
    /**
     * Filter, which AccountType to fetch.
     */
    where: AccountTypeWhereUniqueInput
  }

  /**
   * AccountType findFirst
   */
  export type AccountTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTypeInclude<ExtArgs> | null
    /**
     * Filter, which AccountType to fetch.
     */
    where?: AccountTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTypes to fetch.
     */
    orderBy?: AccountTypeOrderByWithRelationInput | AccountTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountTypes.
     */
    cursor?: AccountTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountTypes.
     */
    distinct?: AccountTypeScalarFieldEnum | AccountTypeScalarFieldEnum[]
  }

  /**
   * AccountType findFirstOrThrow
   */
  export type AccountTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTypeInclude<ExtArgs> | null
    /**
     * Filter, which AccountType to fetch.
     */
    where?: AccountTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTypes to fetch.
     */
    orderBy?: AccountTypeOrderByWithRelationInput | AccountTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountTypes.
     */
    cursor?: AccountTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountTypes.
     */
    distinct?: AccountTypeScalarFieldEnum | AccountTypeScalarFieldEnum[]
  }

  /**
   * AccountType findMany
   */
  export type AccountTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTypeInclude<ExtArgs> | null
    /**
     * Filter, which AccountTypes to fetch.
     */
    where?: AccountTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTypes to fetch.
     */
    orderBy?: AccountTypeOrderByWithRelationInput | AccountTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountTypes.
     */
    cursor?: AccountTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTypes.
     */
    skip?: number
    distinct?: AccountTypeScalarFieldEnum | AccountTypeScalarFieldEnum[]
  }

  /**
   * AccountType create
   */
  export type AccountTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountType.
     */
    data: XOR<AccountTypeCreateInput, AccountTypeUncheckedCreateInput>
  }

  /**
   * AccountType createMany
   */
  export type AccountTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountTypes.
     */
    data: AccountTypeCreateManyInput | AccountTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountType createManyAndReturn
   */
  export type AccountTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * The data used to create many AccountTypes.
     */
    data: AccountTypeCreateManyInput | AccountTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountType update
   */
  export type AccountTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountType.
     */
    data: XOR<AccountTypeUpdateInput, AccountTypeUncheckedUpdateInput>
    /**
     * Choose, which AccountType to update.
     */
    where: AccountTypeWhereUniqueInput
  }

  /**
   * AccountType updateMany
   */
  export type AccountTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountTypes.
     */
    data: XOR<AccountTypeUpdateManyMutationInput, AccountTypeUncheckedUpdateManyInput>
    /**
     * Filter which AccountTypes to update
     */
    where?: AccountTypeWhereInput
    /**
     * Limit how many AccountTypes to update.
     */
    limit?: number
  }

  /**
   * AccountType updateManyAndReturn
   */
  export type AccountTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * The data used to update AccountTypes.
     */
    data: XOR<AccountTypeUpdateManyMutationInput, AccountTypeUncheckedUpdateManyInput>
    /**
     * Filter which AccountTypes to update
     */
    where?: AccountTypeWhereInput
    /**
     * Limit how many AccountTypes to update.
     */
    limit?: number
  }

  /**
   * AccountType upsert
   */
  export type AccountTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountType to update in case it exists.
     */
    where: AccountTypeWhereUniqueInput
    /**
     * In case the AccountType found by the `where` argument doesn't exist, create a new AccountType with this data.
     */
    create: XOR<AccountTypeCreateInput, AccountTypeUncheckedCreateInput>
    /**
     * In case the AccountType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountTypeUpdateInput, AccountTypeUncheckedUpdateInput>
  }

  /**
   * AccountType delete
   */
  export type AccountTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTypeInclude<ExtArgs> | null
    /**
     * Filter which AccountType to delete.
     */
    where: AccountTypeWhereUniqueInput
  }

  /**
   * AccountType deleteMany
   */
  export type AccountTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountTypes to delete
     */
    where?: AccountTypeWhereInput
    /**
     * Limit how many AccountTypes to delete.
     */
    limit?: number
  }

  /**
   * AccountType.bankAccounts
   */
  export type AccountType$bankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    cursor?: BankAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * AccountType without action
   */
  export type AccountTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTypeInclude<ExtArgs> | null
  }


  /**
   * Model CardNetwork
   */

  export type AggregateCardNetwork = {
    _count: CardNetworkCountAggregateOutputType | null
    _min: CardNetworkMinAggregateOutputType | null
    _max: CardNetworkMaxAggregateOutputType | null
  }

  export type CardNetworkMinAggregateOutputType = {
    id: string | null
    networkName: string | null
    isDisabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardNetworkMaxAggregateOutputType = {
    id: string | null
    networkName: string | null
    isDisabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardNetworkCountAggregateOutputType = {
    id: number
    networkName: number
    isDisabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CardNetworkMinAggregateInputType = {
    id?: true
    networkName?: true
    isDisabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardNetworkMaxAggregateInputType = {
    id?: true
    networkName?: true
    isDisabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardNetworkCountAggregateInputType = {
    id?: true
    networkName?: true
    isDisabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CardNetworkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardNetwork to aggregate.
     */
    where?: CardNetworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardNetworks to fetch.
     */
    orderBy?: CardNetworkOrderByWithRelationInput | CardNetworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardNetworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardNetworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardNetworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardNetworks
    **/
    _count?: true | CardNetworkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardNetworkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardNetworkMaxAggregateInputType
  }

  export type GetCardNetworkAggregateType<T extends CardNetworkAggregateArgs> = {
        [P in keyof T & keyof AggregateCardNetwork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardNetwork[P]>
      : GetScalarType<T[P], AggregateCardNetwork[P]>
  }




  export type CardNetworkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardNetworkWhereInput
    orderBy?: CardNetworkOrderByWithAggregationInput | CardNetworkOrderByWithAggregationInput[]
    by: CardNetworkScalarFieldEnum[] | CardNetworkScalarFieldEnum
    having?: CardNetworkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardNetworkCountAggregateInputType | true
    _min?: CardNetworkMinAggregateInputType
    _max?: CardNetworkMaxAggregateInputType
  }

  export type CardNetworkGroupByOutputType = {
    id: string
    networkName: string
    isDisabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: CardNetworkCountAggregateOutputType | null
    _min: CardNetworkMinAggregateOutputType | null
    _max: CardNetworkMaxAggregateOutputType | null
  }

  type GetCardNetworkGroupByPayload<T extends CardNetworkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardNetworkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardNetworkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardNetworkGroupByOutputType[P]>
            : GetScalarType<T[P], CardNetworkGroupByOutputType[P]>
        }
      >
    >


  export type CardNetworkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    networkName?: boolean
    isDisabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creditCards?: boolean | CardNetwork$creditCardsArgs<ExtArgs>
    debitCards?: boolean | CardNetwork$debitCardsArgs<ExtArgs>
    _count?: boolean | CardNetworkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardNetwork"]>

  export type CardNetworkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    networkName?: boolean
    isDisabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cardNetwork"]>

  export type CardNetworkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    networkName?: boolean
    isDisabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cardNetwork"]>

  export type CardNetworkSelectScalar = {
    id?: boolean
    networkName?: boolean
    isDisabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CardNetworkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "networkName" | "isDisabled" | "createdAt" | "updatedAt", ExtArgs["result"]["cardNetwork"]>
  export type CardNetworkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditCards?: boolean | CardNetwork$creditCardsArgs<ExtArgs>
    debitCards?: boolean | CardNetwork$debitCardsArgs<ExtArgs>
    _count?: boolean | CardNetworkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardNetworkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CardNetworkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CardNetworkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardNetwork"
    objects: {
      creditCards: Prisma.$CreditCardPayload<ExtArgs>[]
      debitCards: Prisma.$DebitCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      networkName: string
      isDisabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cardNetwork"]>
    composites: {}
  }

  type CardNetworkGetPayload<S extends boolean | null | undefined | CardNetworkDefaultArgs> = $Result.GetResult<Prisma.$CardNetworkPayload, S>

  type CardNetworkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardNetworkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardNetworkCountAggregateInputType | true
    }

  export interface CardNetworkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardNetwork'], meta: { name: 'CardNetwork' } }
    /**
     * Find zero or one CardNetwork that matches the filter.
     * @param {CardNetworkFindUniqueArgs} args - Arguments to find a CardNetwork
     * @example
     * // Get one CardNetwork
     * const cardNetwork = await prisma.cardNetwork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardNetworkFindUniqueArgs>(args: SelectSubset<T, CardNetworkFindUniqueArgs<ExtArgs>>): Prisma__CardNetworkClient<$Result.GetResult<Prisma.$CardNetworkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardNetwork that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardNetworkFindUniqueOrThrowArgs} args - Arguments to find a CardNetwork
     * @example
     * // Get one CardNetwork
     * const cardNetwork = await prisma.cardNetwork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardNetworkFindUniqueOrThrowArgs>(args: SelectSubset<T, CardNetworkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardNetworkClient<$Result.GetResult<Prisma.$CardNetworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardNetwork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardNetworkFindFirstArgs} args - Arguments to find a CardNetwork
     * @example
     * // Get one CardNetwork
     * const cardNetwork = await prisma.cardNetwork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardNetworkFindFirstArgs>(args?: SelectSubset<T, CardNetworkFindFirstArgs<ExtArgs>>): Prisma__CardNetworkClient<$Result.GetResult<Prisma.$CardNetworkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardNetwork that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardNetworkFindFirstOrThrowArgs} args - Arguments to find a CardNetwork
     * @example
     * // Get one CardNetwork
     * const cardNetwork = await prisma.cardNetwork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardNetworkFindFirstOrThrowArgs>(args?: SelectSubset<T, CardNetworkFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardNetworkClient<$Result.GetResult<Prisma.$CardNetworkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardNetworks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardNetworkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardNetworks
     * const cardNetworks = await prisma.cardNetwork.findMany()
     * 
     * // Get first 10 CardNetworks
     * const cardNetworks = await prisma.cardNetwork.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardNetworkWithIdOnly = await prisma.cardNetwork.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardNetworkFindManyArgs>(args?: SelectSubset<T, CardNetworkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardNetworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardNetwork.
     * @param {CardNetworkCreateArgs} args - Arguments to create a CardNetwork.
     * @example
     * // Create one CardNetwork
     * const CardNetwork = await prisma.cardNetwork.create({
     *   data: {
     *     // ... data to create a CardNetwork
     *   }
     * })
     * 
     */
    create<T extends CardNetworkCreateArgs>(args: SelectSubset<T, CardNetworkCreateArgs<ExtArgs>>): Prisma__CardNetworkClient<$Result.GetResult<Prisma.$CardNetworkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardNetworks.
     * @param {CardNetworkCreateManyArgs} args - Arguments to create many CardNetworks.
     * @example
     * // Create many CardNetworks
     * const cardNetwork = await prisma.cardNetwork.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardNetworkCreateManyArgs>(args?: SelectSubset<T, CardNetworkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardNetworks and returns the data saved in the database.
     * @param {CardNetworkCreateManyAndReturnArgs} args - Arguments to create many CardNetworks.
     * @example
     * // Create many CardNetworks
     * const cardNetwork = await prisma.cardNetwork.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardNetworks and only return the `id`
     * const cardNetworkWithIdOnly = await prisma.cardNetwork.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardNetworkCreateManyAndReturnArgs>(args?: SelectSubset<T, CardNetworkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardNetworkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardNetwork.
     * @param {CardNetworkDeleteArgs} args - Arguments to delete one CardNetwork.
     * @example
     * // Delete one CardNetwork
     * const CardNetwork = await prisma.cardNetwork.delete({
     *   where: {
     *     // ... filter to delete one CardNetwork
     *   }
     * })
     * 
     */
    delete<T extends CardNetworkDeleteArgs>(args: SelectSubset<T, CardNetworkDeleteArgs<ExtArgs>>): Prisma__CardNetworkClient<$Result.GetResult<Prisma.$CardNetworkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardNetwork.
     * @param {CardNetworkUpdateArgs} args - Arguments to update one CardNetwork.
     * @example
     * // Update one CardNetwork
     * const cardNetwork = await prisma.cardNetwork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardNetworkUpdateArgs>(args: SelectSubset<T, CardNetworkUpdateArgs<ExtArgs>>): Prisma__CardNetworkClient<$Result.GetResult<Prisma.$CardNetworkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardNetworks.
     * @param {CardNetworkDeleteManyArgs} args - Arguments to filter CardNetworks to delete.
     * @example
     * // Delete a few CardNetworks
     * const { count } = await prisma.cardNetwork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardNetworkDeleteManyArgs>(args?: SelectSubset<T, CardNetworkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardNetworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardNetworkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardNetworks
     * const cardNetwork = await prisma.cardNetwork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardNetworkUpdateManyArgs>(args: SelectSubset<T, CardNetworkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardNetworks and returns the data updated in the database.
     * @param {CardNetworkUpdateManyAndReturnArgs} args - Arguments to update many CardNetworks.
     * @example
     * // Update many CardNetworks
     * const cardNetwork = await prisma.cardNetwork.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardNetworks and only return the `id`
     * const cardNetworkWithIdOnly = await prisma.cardNetwork.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CardNetworkUpdateManyAndReturnArgs>(args: SelectSubset<T, CardNetworkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardNetworkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardNetwork.
     * @param {CardNetworkUpsertArgs} args - Arguments to update or create a CardNetwork.
     * @example
     * // Update or create a CardNetwork
     * const cardNetwork = await prisma.cardNetwork.upsert({
     *   create: {
     *     // ... data to create a CardNetwork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardNetwork we want to update
     *   }
     * })
     */
    upsert<T extends CardNetworkUpsertArgs>(args: SelectSubset<T, CardNetworkUpsertArgs<ExtArgs>>): Prisma__CardNetworkClient<$Result.GetResult<Prisma.$CardNetworkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardNetworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardNetworkCountArgs} args - Arguments to filter CardNetworks to count.
     * @example
     * // Count the number of CardNetworks
     * const count = await prisma.cardNetwork.count({
     *   where: {
     *     // ... the filter for the CardNetworks we want to count
     *   }
     * })
    **/
    count<T extends CardNetworkCountArgs>(
      args?: Subset<T, CardNetworkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardNetworkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardNetwork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardNetworkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardNetworkAggregateArgs>(args: Subset<T, CardNetworkAggregateArgs>): Prisma.PrismaPromise<GetCardNetworkAggregateType<T>>

    /**
     * Group by CardNetwork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardNetworkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardNetworkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardNetworkGroupByArgs['orderBy'] }
        : { orderBy?: CardNetworkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardNetworkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardNetworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardNetwork model
   */
  readonly fields: CardNetworkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardNetwork.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardNetworkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creditCards<T extends CardNetwork$creditCardsArgs<ExtArgs> = {}>(args?: Subset<T, CardNetwork$creditCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    debitCards<T extends CardNetwork$debitCardsArgs<ExtArgs> = {}>(args?: Subset<T, CardNetwork$debitCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CardNetwork model
   */
  interface CardNetworkFieldRefs {
    readonly id: FieldRef<"CardNetwork", 'String'>
    readonly networkName: FieldRef<"CardNetwork", 'String'>
    readonly isDisabled: FieldRef<"CardNetwork", 'Boolean'>
    readonly createdAt: FieldRef<"CardNetwork", 'DateTime'>
    readonly updatedAt: FieldRef<"CardNetwork", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CardNetwork findUnique
   */
  export type CardNetworkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardNetwork
     */
    select?: CardNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardNetwork
     */
    omit?: CardNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardNetworkInclude<ExtArgs> | null
    /**
     * Filter, which CardNetwork to fetch.
     */
    where: CardNetworkWhereUniqueInput
  }

  /**
   * CardNetwork findUniqueOrThrow
   */
  export type CardNetworkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardNetwork
     */
    select?: CardNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardNetwork
     */
    omit?: CardNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardNetworkInclude<ExtArgs> | null
    /**
     * Filter, which CardNetwork to fetch.
     */
    where: CardNetworkWhereUniqueInput
  }

  /**
   * CardNetwork findFirst
   */
  export type CardNetworkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardNetwork
     */
    select?: CardNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardNetwork
     */
    omit?: CardNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardNetworkInclude<ExtArgs> | null
    /**
     * Filter, which CardNetwork to fetch.
     */
    where?: CardNetworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardNetworks to fetch.
     */
    orderBy?: CardNetworkOrderByWithRelationInput | CardNetworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardNetworks.
     */
    cursor?: CardNetworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardNetworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardNetworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardNetworks.
     */
    distinct?: CardNetworkScalarFieldEnum | CardNetworkScalarFieldEnum[]
  }

  /**
   * CardNetwork findFirstOrThrow
   */
  export type CardNetworkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardNetwork
     */
    select?: CardNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardNetwork
     */
    omit?: CardNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardNetworkInclude<ExtArgs> | null
    /**
     * Filter, which CardNetwork to fetch.
     */
    where?: CardNetworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardNetworks to fetch.
     */
    orderBy?: CardNetworkOrderByWithRelationInput | CardNetworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardNetworks.
     */
    cursor?: CardNetworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardNetworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardNetworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardNetworks.
     */
    distinct?: CardNetworkScalarFieldEnum | CardNetworkScalarFieldEnum[]
  }

  /**
   * CardNetwork findMany
   */
  export type CardNetworkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardNetwork
     */
    select?: CardNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardNetwork
     */
    omit?: CardNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardNetworkInclude<ExtArgs> | null
    /**
     * Filter, which CardNetworks to fetch.
     */
    where?: CardNetworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardNetworks to fetch.
     */
    orderBy?: CardNetworkOrderByWithRelationInput | CardNetworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardNetworks.
     */
    cursor?: CardNetworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardNetworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardNetworks.
     */
    skip?: number
    distinct?: CardNetworkScalarFieldEnum | CardNetworkScalarFieldEnum[]
  }

  /**
   * CardNetwork create
   */
  export type CardNetworkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardNetwork
     */
    select?: CardNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardNetwork
     */
    omit?: CardNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardNetworkInclude<ExtArgs> | null
    /**
     * The data needed to create a CardNetwork.
     */
    data: XOR<CardNetworkCreateInput, CardNetworkUncheckedCreateInput>
  }

  /**
   * CardNetwork createMany
   */
  export type CardNetworkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardNetworks.
     */
    data: CardNetworkCreateManyInput | CardNetworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardNetwork createManyAndReturn
   */
  export type CardNetworkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardNetwork
     */
    select?: CardNetworkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardNetwork
     */
    omit?: CardNetworkOmit<ExtArgs> | null
    /**
     * The data used to create many CardNetworks.
     */
    data: CardNetworkCreateManyInput | CardNetworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardNetwork update
   */
  export type CardNetworkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardNetwork
     */
    select?: CardNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardNetwork
     */
    omit?: CardNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardNetworkInclude<ExtArgs> | null
    /**
     * The data needed to update a CardNetwork.
     */
    data: XOR<CardNetworkUpdateInput, CardNetworkUncheckedUpdateInput>
    /**
     * Choose, which CardNetwork to update.
     */
    where: CardNetworkWhereUniqueInput
  }

  /**
   * CardNetwork updateMany
   */
  export type CardNetworkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardNetworks.
     */
    data: XOR<CardNetworkUpdateManyMutationInput, CardNetworkUncheckedUpdateManyInput>
    /**
     * Filter which CardNetworks to update
     */
    where?: CardNetworkWhereInput
    /**
     * Limit how many CardNetworks to update.
     */
    limit?: number
  }

  /**
   * CardNetwork updateManyAndReturn
   */
  export type CardNetworkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardNetwork
     */
    select?: CardNetworkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardNetwork
     */
    omit?: CardNetworkOmit<ExtArgs> | null
    /**
     * The data used to update CardNetworks.
     */
    data: XOR<CardNetworkUpdateManyMutationInput, CardNetworkUncheckedUpdateManyInput>
    /**
     * Filter which CardNetworks to update
     */
    where?: CardNetworkWhereInput
    /**
     * Limit how many CardNetworks to update.
     */
    limit?: number
  }

  /**
   * CardNetwork upsert
   */
  export type CardNetworkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardNetwork
     */
    select?: CardNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardNetwork
     */
    omit?: CardNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardNetworkInclude<ExtArgs> | null
    /**
     * The filter to search for the CardNetwork to update in case it exists.
     */
    where: CardNetworkWhereUniqueInput
    /**
     * In case the CardNetwork found by the `where` argument doesn't exist, create a new CardNetwork with this data.
     */
    create: XOR<CardNetworkCreateInput, CardNetworkUncheckedCreateInput>
    /**
     * In case the CardNetwork was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardNetworkUpdateInput, CardNetworkUncheckedUpdateInput>
  }

  /**
   * CardNetwork delete
   */
  export type CardNetworkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardNetwork
     */
    select?: CardNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardNetwork
     */
    omit?: CardNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardNetworkInclude<ExtArgs> | null
    /**
     * Filter which CardNetwork to delete.
     */
    where: CardNetworkWhereUniqueInput
  }

  /**
   * CardNetwork deleteMany
   */
  export type CardNetworkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardNetworks to delete
     */
    where?: CardNetworkWhereInput
    /**
     * Limit how many CardNetworks to delete.
     */
    limit?: number
  }

  /**
   * CardNetwork.creditCards
   */
  export type CardNetwork$creditCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    where?: CreditCardWhereInput
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    cursor?: CreditCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CardNetwork.debitCards
   */
  export type CardNetwork$debitCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebitCard
     */
    omit?: DebitCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    where?: DebitCardWhereInput
    orderBy?: DebitCardOrderByWithRelationInput | DebitCardOrderByWithRelationInput[]
    cursor?: DebitCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DebitCardScalarFieldEnum | DebitCardScalarFieldEnum[]
  }

  /**
   * CardNetwork without action
   */
  export type CardNetworkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardNetwork
     */
    select?: CardNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardNetwork
     */
    omit?: CardNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardNetworkInclude<ExtArgs> | null
  }


  /**
   * Model BankAccount
   */

  export type AggregateBankAccount = {
    _count: BankAccountCountAggregateOutputType | null
    _avg: BankAccountAvgAggregateOutputType | null
    _sum: BankAccountSumAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  export type BankAccountAvgAggregateOutputType = {
    balance: Decimal | null
  }

  export type BankAccountSumAggregateOutputType = {
    balance: Decimal | null
  }

  export type BankAccountMinAggregateOutputType = {
    id: string | null
    accountNumber: string | null
    accountTypeId: string | null
    bankName: string | null
    balance: Decimal | null
    userId: string | null
    status: $Enums.AccountStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankAccountMaxAggregateOutputType = {
    id: string | null
    accountNumber: string | null
    accountTypeId: string | null
    bankName: string | null
    balance: Decimal | null
    userId: string | null
    status: $Enums.AccountStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankAccountCountAggregateOutputType = {
    id: number
    accountNumber: number
    accountTypeId: number
    bankName: number
    balance: number
    userId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BankAccountAvgAggregateInputType = {
    balance?: true
  }

  export type BankAccountSumAggregateInputType = {
    balance?: true
  }

  export type BankAccountMinAggregateInputType = {
    id?: true
    accountNumber?: true
    accountTypeId?: true
    bankName?: true
    balance?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankAccountMaxAggregateInputType = {
    id?: true
    accountNumber?: true
    accountTypeId?: true
    bankName?: true
    balance?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankAccountCountAggregateInputType = {
    id?: true
    accountNumber?: true
    accountTypeId?: true
    bankName?: true
    balance?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BankAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccount to aggregate.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankAccounts
    **/
    _count?: true | BankAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankAccountMaxAggregateInputType
  }

  export type GetBankAccountAggregateType<T extends BankAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateBankAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankAccount[P]>
      : GetScalarType<T[P], AggregateBankAccount[P]>
  }




  export type BankAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithAggregationInput | BankAccountOrderByWithAggregationInput[]
    by: BankAccountScalarFieldEnum[] | BankAccountScalarFieldEnum
    having?: BankAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankAccountCountAggregateInputType | true
    _avg?: BankAccountAvgAggregateInputType
    _sum?: BankAccountSumAggregateInputType
    _min?: BankAccountMinAggregateInputType
    _max?: BankAccountMaxAggregateInputType
  }

  export type BankAccountGroupByOutputType = {
    id: string
    accountNumber: string
    accountTypeId: string
    bankName: string
    balance: Decimal
    userId: string
    status: $Enums.AccountStatus
    createdAt: Date
    updatedAt: Date
    _count: BankAccountCountAggregateOutputType | null
    _avg: BankAccountAvgAggregateOutputType | null
    _sum: BankAccountSumAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  type GetBankAccountGroupByPayload<T extends BankAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
            : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
        }
      >
    >


  export type BankAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountNumber?: boolean
    accountTypeId?: boolean
    bankName?: boolean
    balance?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountType?: boolean | AccountTypeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    debitCards?: boolean | BankAccount$debitCardsArgs<ExtArgs>
    _count?: boolean | BankAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountNumber?: boolean
    accountTypeId?: boolean
    bankName?: boolean
    balance?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountType?: boolean | AccountTypeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountNumber?: boolean
    accountTypeId?: boolean
    bankName?: boolean
    balance?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountType?: boolean | AccountTypeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectScalar = {
    id?: boolean
    accountNumber?: boolean
    accountTypeId?: boolean
    bankName?: boolean
    balance?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BankAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountNumber" | "accountTypeId" | "bankName" | "balance" | "userId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["bankAccount"]>
  export type BankAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountType?: boolean | AccountTypeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    debitCards?: boolean | BankAccount$debitCardsArgs<ExtArgs>
    _count?: boolean | BankAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BankAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountType?: boolean | AccountTypeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BankAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountType?: boolean | AccountTypeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BankAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankAccount"
    objects: {
      accountType: Prisma.$AccountTypePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      debitCards: Prisma.$DebitCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountNumber: string
      accountTypeId: string
      bankName: string
      balance: Prisma.Decimal
      userId: string
      status: $Enums.AccountStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bankAccount"]>
    composites: {}
  }

  type BankAccountGetPayload<S extends boolean | null | undefined | BankAccountDefaultArgs> = $Result.GetResult<Prisma.$BankAccountPayload, S>

  type BankAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankAccountCountAggregateInputType | true
    }

  export interface BankAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankAccount'], meta: { name: 'BankAccount' } }
    /**
     * Find zero or one BankAccount that matches the filter.
     * @param {BankAccountFindUniqueArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankAccountFindUniqueArgs>(args: SelectSubset<T, BankAccountFindUniqueArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankAccountFindUniqueOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, BankAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankAccountFindFirstArgs>(args?: SelectSubset<T, BankAccountFindFirstArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, BankAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany()
     * 
     * // Get first 10 BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankAccountFindManyArgs>(args?: SelectSubset<T, BankAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankAccount.
     * @param {BankAccountCreateArgs} args - Arguments to create a BankAccount.
     * @example
     * // Create one BankAccount
     * const BankAccount = await prisma.bankAccount.create({
     *   data: {
     *     // ... data to create a BankAccount
     *   }
     * })
     * 
     */
    create<T extends BankAccountCreateArgs>(args: SelectSubset<T, BankAccountCreateArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankAccounts.
     * @param {BankAccountCreateManyArgs} args - Arguments to create many BankAccounts.
     * @example
     * // Create many BankAccounts
     * const bankAccount = await prisma.bankAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankAccountCreateManyArgs>(args?: SelectSubset<T, BankAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankAccounts and returns the data saved in the database.
     * @param {BankAccountCreateManyAndReturnArgs} args - Arguments to create many BankAccounts.
     * @example
     * // Create many BankAccounts
     * const bankAccount = await prisma.bankAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankAccounts and only return the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, BankAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BankAccount.
     * @param {BankAccountDeleteArgs} args - Arguments to delete one BankAccount.
     * @example
     * // Delete one BankAccount
     * const BankAccount = await prisma.bankAccount.delete({
     *   where: {
     *     // ... filter to delete one BankAccount
     *   }
     * })
     * 
     */
    delete<T extends BankAccountDeleteArgs>(args: SelectSubset<T, BankAccountDeleteArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankAccount.
     * @param {BankAccountUpdateArgs} args - Arguments to update one BankAccount.
     * @example
     * // Update one BankAccount
     * const bankAccount = await prisma.bankAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankAccountUpdateArgs>(args: SelectSubset<T, BankAccountUpdateArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankAccounts.
     * @param {BankAccountDeleteManyArgs} args - Arguments to filter BankAccounts to delete.
     * @example
     * // Delete a few BankAccounts
     * const { count } = await prisma.bankAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankAccountDeleteManyArgs>(args?: SelectSubset<T, BankAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankAccountUpdateManyArgs>(args: SelectSubset<T, BankAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts and returns the data updated in the database.
     * @param {BankAccountUpdateManyAndReturnArgs} args - Arguments to update many BankAccounts.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BankAccounts and only return the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BankAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, BankAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BankAccount.
     * @param {BankAccountUpsertArgs} args - Arguments to update or create a BankAccount.
     * @example
     * // Update or create a BankAccount
     * const bankAccount = await prisma.bankAccount.upsert({
     *   create: {
     *     // ... data to create a BankAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankAccount we want to update
     *   }
     * })
     */
    upsert<T extends BankAccountUpsertArgs>(args: SelectSubset<T, BankAccountUpsertArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountCountArgs} args - Arguments to filter BankAccounts to count.
     * @example
     * // Count the number of BankAccounts
     * const count = await prisma.bankAccount.count({
     *   where: {
     *     // ... the filter for the BankAccounts we want to count
     *   }
     * })
    **/
    count<T extends BankAccountCountArgs>(
      args?: Subset<T, BankAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankAccountAggregateArgs>(args: Subset<T, BankAccountAggregateArgs>): Prisma.PrismaPromise<GetBankAccountAggregateType<T>>

    /**
     * Group by BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankAccountGroupByArgs['orderBy'] }
        : { orderBy?: BankAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankAccount model
   */
  readonly fields: BankAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accountType<T extends AccountTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountTypeDefaultArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    debitCards<T extends BankAccount$debitCardsArgs<ExtArgs> = {}>(args?: Subset<T, BankAccount$debitCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BankAccount model
   */
  interface BankAccountFieldRefs {
    readonly id: FieldRef<"BankAccount", 'String'>
    readonly accountNumber: FieldRef<"BankAccount", 'String'>
    readonly accountTypeId: FieldRef<"BankAccount", 'String'>
    readonly bankName: FieldRef<"BankAccount", 'String'>
    readonly balance: FieldRef<"BankAccount", 'Decimal'>
    readonly userId: FieldRef<"BankAccount", 'String'>
    readonly status: FieldRef<"BankAccount", 'AccountStatus'>
    readonly createdAt: FieldRef<"BankAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"BankAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BankAccount findUnique
   */
  export type BankAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount findUniqueOrThrow
   */
  export type BankAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount findFirst
   */
  export type BankAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount findFirstOrThrow
   */
  export type BankAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount findMany
   */
  export type BankAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccounts to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount create
   */
  export type BankAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a BankAccount.
     */
    data: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
  }

  /**
   * BankAccount createMany
   */
  export type BankAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankAccounts.
     */
    data: BankAccountCreateManyInput | BankAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankAccount createManyAndReturn
   */
  export type BankAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * The data used to create many BankAccounts.
     */
    data: BankAccountCreateManyInput | BankAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankAccount update
   */
  export type BankAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a BankAccount.
     */
    data: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
    /**
     * Choose, which BankAccount to update.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount updateMany
   */
  export type BankAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankAccounts.
     */
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to update.
     */
    limit?: number
  }

  /**
   * BankAccount updateManyAndReturn
   */
  export type BankAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * The data used to update BankAccounts.
     */
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankAccount upsert
   */
  export type BankAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the BankAccount to update in case it exists.
     */
    where: BankAccountWhereUniqueInput
    /**
     * In case the BankAccount found by the `where` argument doesn't exist, create a new BankAccount with this data.
     */
    create: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
    /**
     * In case the BankAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
  }

  /**
   * BankAccount delete
   */
  export type BankAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter which BankAccount to delete.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount deleteMany
   */
  export type BankAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccounts to delete
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to delete.
     */
    limit?: number
  }

  /**
   * BankAccount.debitCards
   */
  export type BankAccount$debitCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebitCard
     */
    omit?: DebitCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    where?: DebitCardWhereInput
    orderBy?: DebitCardOrderByWithRelationInput | DebitCardOrderByWithRelationInput[]
    cursor?: DebitCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DebitCardScalarFieldEnum | DebitCardScalarFieldEnum[]
  }

  /**
   * BankAccount without action
   */
  export type BankAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
  }


  /**
   * Model CreditCard
   */

  export type AggregateCreditCard = {
    _count: CreditCardCountAggregateOutputType | null
    _avg: CreditCardAvgAggregateOutputType | null
    _sum: CreditCardSumAggregateOutputType | null
    _min: CreditCardMinAggregateOutputType | null
    _max: CreditCardMaxAggregateOutputType | null
  }

  export type CreditCardAvgAggregateOutputType = {
    limit: Decimal | null
    balance: Decimal | null
  }

  export type CreditCardSumAggregateOutputType = {
    limit: Decimal | null
    balance: Decimal | null
  }

  export type CreditCardMinAggregateOutputType = {
    id: string | null
    cardNumber: string | null
    networkId: string | null
    issuer: string | null
    limit: Decimal | null
    balance: Decimal | null
    expiresAt: Date | null
    userId: string | null
    status: $Enums.CardStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditCardMaxAggregateOutputType = {
    id: string | null
    cardNumber: string | null
    networkId: string | null
    issuer: string | null
    limit: Decimal | null
    balance: Decimal | null
    expiresAt: Date | null
    userId: string | null
    status: $Enums.CardStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditCardCountAggregateOutputType = {
    id: number
    cardNumber: number
    networkId: number
    issuer: number
    limit: number
    balance: number
    expiresAt: number
    userId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreditCardAvgAggregateInputType = {
    limit?: true
    balance?: true
  }

  export type CreditCardSumAggregateInputType = {
    limit?: true
    balance?: true
  }

  export type CreditCardMinAggregateInputType = {
    id?: true
    cardNumber?: true
    networkId?: true
    issuer?: true
    limit?: true
    balance?: true
    expiresAt?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditCardMaxAggregateInputType = {
    id?: true
    cardNumber?: true
    networkId?: true
    issuer?: true
    limit?: true
    balance?: true
    expiresAt?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditCardCountAggregateInputType = {
    id?: true
    cardNumber?: true
    networkId?: true
    issuer?: true
    limit?: true
    balance?: true
    expiresAt?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreditCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditCard to aggregate.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditCards
    **/
    _count?: true | CreditCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditCardMaxAggregateInputType
  }

  export type GetCreditCardAggregateType<T extends CreditCardAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditCard[P]>
      : GetScalarType<T[P], AggregateCreditCard[P]>
  }




  export type CreditCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditCardWhereInput
    orderBy?: CreditCardOrderByWithAggregationInput | CreditCardOrderByWithAggregationInput[]
    by: CreditCardScalarFieldEnum[] | CreditCardScalarFieldEnum
    having?: CreditCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditCardCountAggregateInputType | true
    _avg?: CreditCardAvgAggregateInputType
    _sum?: CreditCardSumAggregateInputType
    _min?: CreditCardMinAggregateInputType
    _max?: CreditCardMaxAggregateInputType
  }

  export type CreditCardGroupByOutputType = {
    id: string
    cardNumber: string
    networkId: string
    issuer: string
    limit: Decimal
    balance: Decimal
    expiresAt: Date
    userId: string
    status: $Enums.CardStatus
    createdAt: Date
    updatedAt: Date
    _count: CreditCardCountAggregateOutputType | null
    _avg: CreditCardAvgAggregateOutputType | null
    _sum: CreditCardSumAggregateOutputType | null
    _min: CreditCardMinAggregateOutputType | null
    _max: CreditCardMaxAggregateOutputType | null
  }

  type GetCreditCardGroupByPayload<T extends CreditCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditCardGroupByOutputType[P]>
            : GetScalarType<T[P], CreditCardGroupByOutputType[P]>
        }
      >
    >


  export type CreditCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardNumber?: boolean
    networkId?: boolean
    issuer?: boolean
    limit?: boolean
    balance?: boolean
    expiresAt?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    network?: boolean | CardNetworkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardNumber?: boolean
    networkId?: boolean
    issuer?: boolean
    limit?: boolean
    balance?: boolean
    expiresAt?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    network?: boolean | CardNetworkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardNumber?: boolean
    networkId?: boolean
    issuer?: boolean
    limit?: boolean
    balance?: boolean
    expiresAt?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    network?: boolean | CardNetworkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectScalar = {
    id?: boolean
    cardNumber?: boolean
    networkId?: boolean
    issuer?: boolean
    limit?: boolean
    balance?: boolean
    expiresAt?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CreditCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardNumber" | "networkId" | "issuer" | "limit" | "balance" | "expiresAt" | "userId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["creditCard"]>
  export type CreditCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | CardNetworkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | CardNetworkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | CardNetworkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CreditCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditCard"
    objects: {
      network: Prisma.$CardNetworkPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardNumber: string
      networkId: string
      issuer: string
      limit: Prisma.Decimal
      balance: Prisma.Decimal
      expiresAt: Date
      userId: string
      status: $Enums.CardStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["creditCard"]>
    composites: {}
  }

  type CreditCardGetPayload<S extends boolean | null | undefined | CreditCardDefaultArgs> = $Result.GetResult<Prisma.$CreditCardPayload, S>

  type CreditCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditCardCountAggregateInputType | true
    }

  export interface CreditCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditCard'], meta: { name: 'CreditCard' } }
    /**
     * Find zero or one CreditCard that matches the filter.
     * @param {CreditCardFindUniqueArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditCardFindUniqueArgs>(args: SelectSubset<T, CreditCardFindUniqueArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditCardFindUniqueOrThrowArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditCardFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindFirstArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditCardFindFirstArgs>(args?: SelectSubset<T, CreditCardFindFirstArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindFirstOrThrowArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditCardFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditCards
     * const creditCards = await prisma.creditCard.findMany()
     * 
     * // Get first 10 CreditCards
     * const creditCards = await prisma.creditCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditCardFindManyArgs>(args?: SelectSubset<T, CreditCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditCard.
     * @param {CreditCardCreateArgs} args - Arguments to create a CreditCard.
     * @example
     * // Create one CreditCard
     * const CreditCard = await prisma.creditCard.create({
     *   data: {
     *     // ... data to create a CreditCard
     *   }
     * })
     * 
     */
    create<T extends CreditCardCreateArgs>(args: SelectSubset<T, CreditCardCreateArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditCards.
     * @param {CreditCardCreateManyArgs} args - Arguments to create many CreditCards.
     * @example
     * // Create many CreditCards
     * const creditCard = await prisma.creditCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditCardCreateManyArgs>(args?: SelectSubset<T, CreditCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditCards and returns the data saved in the database.
     * @param {CreditCardCreateManyAndReturnArgs} args - Arguments to create many CreditCards.
     * @example
     * // Create many CreditCards
     * const creditCard = await prisma.creditCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditCards and only return the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditCardCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditCard.
     * @param {CreditCardDeleteArgs} args - Arguments to delete one CreditCard.
     * @example
     * // Delete one CreditCard
     * const CreditCard = await prisma.creditCard.delete({
     *   where: {
     *     // ... filter to delete one CreditCard
     *   }
     * })
     * 
     */
    delete<T extends CreditCardDeleteArgs>(args: SelectSubset<T, CreditCardDeleteArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditCard.
     * @param {CreditCardUpdateArgs} args - Arguments to update one CreditCard.
     * @example
     * // Update one CreditCard
     * const creditCard = await prisma.creditCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditCardUpdateArgs>(args: SelectSubset<T, CreditCardUpdateArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditCards.
     * @param {CreditCardDeleteManyArgs} args - Arguments to filter CreditCards to delete.
     * @example
     * // Delete a few CreditCards
     * const { count } = await prisma.creditCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditCardDeleteManyArgs>(args?: SelectSubset<T, CreditCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditCards
     * const creditCard = await prisma.creditCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditCardUpdateManyArgs>(args: SelectSubset<T, CreditCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditCards and returns the data updated in the database.
     * @param {CreditCardUpdateManyAndReturnArgs} args - Arguments to update many CreditCards.
     * @example
     * // Update many CreditCards
     * const creditCard = await prisma.creditCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditCards and only return the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreditCardUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditCard.
     * @param {CreditCardUpsertArgs} args - Arguments to update or create a CreditCard.
     * @example
     * // Update or create a CreditCard
     * const creditCard = await prisma.creditCard.upsert({
     *   create: {
     *     // ... data to create a CreditCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditCard we want to update
     *   }
     * })
     */
    upsert<T extends CreditCardUpsertArgs>(args: SelectSubset<T, CreditCardUpsertArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardCountArgs} args - Arguments to filter CreditCards to count.
     * @example
     * // Count the number of CreditCards
     * const count = await prisma.creditCard.count({
     *   where: {
     *     // ... the filter for the CreditCards we want to count
     *   }
     * })
    **/
    count<T extends CreditCardCountArgs>(
      args?: Subset<T, CreditCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditCardAggregateArgs>(args: Subset<T, CreditCardAggregateArgs>): Prisma.PrismaPromise<GetCreditCardAggregateType<T>>

    /**
     * Group by CreditCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditCardGroupByArgs['orderBy'] }
        : { orderBy?: CreditCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditCard model
   */
  readonly fields: CreditCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    network<T extends CardNetworkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardNetworkDefaultArgs<ExtArgs>>): Prisma__CardNetworkClient<$Result.GetResult<Prisma.$CardNetworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditCard model
   */
  interface CreditCardFieldRefs {
    readonly id: FieldRef<"CreditCard", 'String'>
    readonly cardNumber: FieldRef<"CreditCard", 'String'>
    readonly networkId: FieldRef<"CreditCard", 'String'>
    readonly issuer: FieldRef<"CreditCard", 'String'>
    readonly limit: FieldRef<"CreditCard", 'Decimal'>
    readonly balance: FieldRef<"CreditCard", 'Decimal'>
    readonly expiresAt: FieldRef<"CreditCard", 'DateTime'>
    readonly userId: FieldRef<"CreditCard", 'String'>
    readonly status: FieldRef<"CreditCard", 'CardStatus'>
    readonly createdAt: FieldRef<"CreditCard", 'DateTime'>
    readonly updatedAt: FieldRef<"CreditCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditCard findUnique
   */
  export type CreditCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard findUniqueOrThrow
   */
  export type CreditCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard findFirst
   */
  export type CreditCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditCards.
     */
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard findFirstOrThrow
   */
  export type CreditCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditCards.
     */
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard findMany
   */
  export type CreditCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCards to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard create
   */
  export type CreditCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditCard.
     */
    data: XOR<CreditCardCreateInput, CreditCardUncheckedCreateInput>
  }

  /**
   * CreditCard createMany
   */
  export type CreditCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditCards.
     */
    data: CreditCardCreateManyInput | CreditCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditCard createManyAndReturn
   */
  export type CreditCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * The data used to create many CreditCards.
     */
    data: CreditCardCreateManyInput | CreditCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditCard update
   */
  export type CreditCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditCard.
     */
    data: XOR<CreditCardUpdateInput, CreditCardUncheckedUpdateInput>
    /**
     * Choose, which CreditCard to update.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard updateMany
   */
  export type CreditCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditCards.
     */
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyInput>
    /**
     * Filter which CreditCards to update
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to update.
     */
    limit?: number
  }

  /**
   * CreditCard updateManyAndReturn
   */
  export type CreditCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * The data used to update CreditCards.
     */
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyInput>
    /**
     * Filter which CreditCards to update
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditCard upsert
   */
  export type CreditCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditCard to update in case it exists.
     */
    where: CreditCardWhereUniqueInput
    /**
     * In case the CreditCard found by the `where` argument doesn't exist, create a new CreditCard with this data.
     */
    create: XOR<CreditCardCreateInput, CreditCardUncheckedCreateInput>
    /**
     * In case the CreditCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditCardUpdateInput, CreditCardUncheckedUpdateInput>
  }

  /**
   * CreditCard delete
   */
  export type CreditCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter which CreditCard to delete.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard deleteMany
   */
  export type CreditCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditCards to delete
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to delete.
     */
    limit?: number
  }

  /**
   * CreditCard without action
   */
  export type CreditCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
  }


  /**
   * Model DebitCard
   */

  export type AggregateDebitCard = {
    _count: DebitCardCountAggregateOutputType | null
    _min: DebitCardMinAggregateOutputType | null
    _max: DebitCardMaxAggregateOutputType | null
  }

  export type DebitCardMinAggregateOutputType = {
    id: string | null
    cardNumber: string | null
    networkId: string | null
    bankAccountId: string | null
    expiresAt: Date | null
    status: $Enums.CardStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebitCardMaxAggregateOutputType = {
    id: string | null
    cardNumber: string | null
    networkId: string | null
    bankAccountId: string | null
    expiresAt: Date | null
    status: $Enums.CardStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebitCardCountAggregateOutputType = {
    id: number
    cardNumber: number
    networkId: number
    bankAccountId: number
    expiresAt: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DebitCardMinAggregateInputType = {
    id?: true
    cardNumber?: true
    networkId?: true
    bankAccountId?: true
    expiresAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebitCardMaxAggregateInputType = {
    id?: true
    cardNumber?: true
    networkId?: true
    bankAccountId?: true
    expiresAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebitCardCountAggregateInputType = {
    id?: true
    cardNumber?: true
    networkId?: true
    bankAccountId?: true
    expiresAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DebitCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebitCard to aggregate.
     */
    where?: DebitCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebitCards to fetch.
     */
    orderBy?: DebitCardOrderByWithRelationInput | DebitCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DebitCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebitCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebitCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DebitCards
    **/
    _count?: true | DebitCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DebitCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DebitCardMaxAggregateInputType
  }

  export type GetDebitCardAggregateType<T extends DebitCardAggregateArgs> = {
        [P in keyof T & keyof AggregateDebitCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDebitCard[P]>
      : GetScalarType<T[P], AggregateDebitCard[P]>
  }




  export type DebitCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebitCardWhereInput
    orderBy?: DebitCardOrderByWithAggregationInput | DebitCardOrderByWithAggregationInput[]
    by: DebitCardScalarFieldEnum[] | DebitCardScalarFieldEnum
    having?: DebitCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DebitCardCountAggregateInputType | true
    _min?: DebitCardMinAggregateInputType
    _max?: DebitCardMaxAggregateInputType
  }

  export type DebitCardGroupByOutputType = {
    id: string
    cardNumber: string
    networkId: string
    bankAccountId: string
    expiresAt: Date
    status: $Enums.CardStatus
    createdAt: Date
    updatedAt: Date
    _count: DebitCardCountAggregateOutputType | null
    _min: DebitCardMinAggregateOutputType | null
    _max: DebitCardMaxAggregateOutputType | null
  }

  type GetDebitCardGroupByPayload<T extends DebitCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DebitCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DebitCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DebitCardGroupByOutputType[P]>
            : GetScalarType<T[P], DebitCardGroupByOutputType[P]>
        }
      >
    >


  export type DebitCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardNumber?: boolean
    networkId?: boolean
    bankAccountId?: boolean
    expiresAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    network?: boolean | CardNetworkDefaultArgs<ExtArgs>
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debitCard"]>

  export type DebitCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardNumber?: boolean
    networkId?: boolean
    bankAccountId?: boolean
    expiresAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    network?: boolean | CardNetworkDefaultArgs<ExtArgs>
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debitCard"]>

  export type DebitCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardNumber?: boolean
    networkId?: boolean
    bankAccountId?: boolean
    expiresAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    network?: boolean | CardNetworkDefaultArgs<ExtArgs>
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debitCard"]>

  export type DebitCardSelectScalar = {
    id?: boolean
    cardNumber?: boolean
    networkId?: boolean
    bankAccountId?: boolean
    expiresAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DebitCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardNumber" | "networkId" | "bankAccountId" | "expiresAt" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["debitCard"]>
  export type DebitCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | CardNetworkDefaultArgs<ExtArgs>
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }
  export type DebitCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | CardNetworkDefaultArgs<ExtArgs>
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }
  export type DebitCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | CardNetworkDefaultArgs<ExtArgs>
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }

  export type $DebitCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DebitCard"
    objects: {
      network: Prisma.$CardNetworkPayload<ExtArgs>
      bankAccount: Prisma.$BankAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardNumber: string
      networkId: string
      bankAccountId: string
      expiresAt: Date
      status: $Enums.CardStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["debitCard"]>
    composites: {}
  }

  type DebitCardGetPayload<S extends boolean | null | undefined | DebitCardDefaultArgs> = $Result.GetResult<Prisma.$DebitCardPayload, S>

  type DebitCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DebitCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DebitCardCountAggregateInputType | true
    }

  export interface DebitCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DebitCard'], meta: { name: 'DebitCard' } }
    /**
     * Find zero or one DebitCard that matches the filter.
     * @param {DebitCardFindUniqueArgs} args - Arguments to find a DebitCard
     * @example
     * // Get one DebitCard
     * const debitCard = await prisma.debitCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DebitCardFindUniqueArgs>(args: SelectSubset<T, DebitCardFindUniqueArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DebitCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DebitCardFindUniqueOrThrowArgs} args - Arguments to find a DebitCard
     * @example
     * // Get one DebitCard
     * const debitCard = await prisma.debitCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DebitCardFindUniqueOrThrowArgs>(args: SelectSubset<T, DebitCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DebitCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitCardFindFirstArgs} args - Arguments to find a DebitCard
     * @example
     * // Get one DebitCard
     * const debitCard = await prisma.debitCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DebitCardFindFirstArgs>(args?: SelectSubset<T, DebitCardFindFirstArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DebitCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitCardFindFirstOrThrowArgs} args - Arguments to find a DebitCard
     * @example
     * // Get one DebitCard
     * const debitCard = await prisma.debitCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DebitCardFindFirstOrThrowArgs>(args?: SelectSubset<T, DebitCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DebitCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DebitCards
     * const debitCards = await prisma.debitCard.findMany()
     * 
     * // Get first 10 DebitCards
     * const debitCards = await prisma.debitCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const debitCardWithIdOnly = await prisma.debitCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DebitCardFindManyArgs>(args?: SelectSubset<T, DebitCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DebitCard.
     * @param {DebitCardCreateArgs} args - Arguments to create a DebitCard.
     * @example
     * // Create one DebitCard
     * const DebitCard = await prisma.debitCard.create({
     *   data: {
     *     // ... data to create a DebitCard
     *   }
     * })
     * 
     */
    create<T extends DebitCardCreateArgs>(args: SelectSubset<T, DebitCardCreateArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DebitCards.
     * @param {DebitCardCreateManyArgs} args - Arguments to create many DebitCards.
     * @example
     * // Create many DebitCards
     * const debitCard = await prisma.debitCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DebitCardCreateManyArgs>(args?: SelectSubset<T, DebitCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DebitCards and returns the data saved in the database.
     * @param {DebitCardCreateManyAndReturnArgs} args - Arguments to create many DebitCards.
     * @example
     * // Create many DebitCards
     * const debitCard = await prisma.debitCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DebitCards and only return the `id`
     * const debitCardWithIdOnly = await prisma.debitCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DebitCardCreateManyAndReturnArgs>(args?: SelectSubset<T, DebitCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DebitCard.
     * @param {DebitCardDeleteArgs} args - Arguments to delete one DebitCard.
     * @example
     * // Delete one DebitCard
     * const DebitCard = await prisma.debitCard.delete({
     *   where: {
     *     // ... filter to delete one DebitCard
     *   }
     * })
     * 
     */
    delete<T extends DebitCardDeleteArgs>(args: SelectSubset<T, DebitCardDeleteArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DebitCard.
     * @param {DebitCardUpdateArgs} args - Arguments to update one DebitCard.
     * @example
     * // Update one DebitCard
     * const debitCard = await prisma.debitCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DebitCardUpdateArgs>(args: SelectSubset<T, DebitCardUpdateArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DebitCards.
     * @param {DebitCardDeleteManyArgs} args - Arguments to filter DebitCards to delete.
     * @example
     * // Delete a few DebitCards
     * const { count } = await prisma.debitCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DebitCardDeleteManyArgs>(args?: SelectSubset<T, DebitCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DebitCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DebitCards
     * const debitCard = await prisma.debitCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DebitCardUpdateManyArgs>(args: SelectSubset<T, DebitCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DebitCards and returns the data updated in the database.
     * @param {DebitCardUpdateManyAndReturnArgs} args - Arguments to update many DebitCards.
     * @example
     * // Update many DebitCards
     * const debitCard = await prisma.debitCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DebitCards and only return the `id`
     * const debitCardWithIdOnly = await prisma.debitCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DebitCardUpdateManyAndReturnArgs>(args: SelectSubset<T, DebitCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DebitCard.
     * @param {DebitCardUpsertArgs} args - Arguments to update or create a DebitCard.
     * @example
     * // Update or create a DebitCard
     * const debitCard = await prisma.debitCard.upsert({
     *   create: {
     *     // ... data to create a DebitCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DebitCard we want to update
     *   }
     * })
     */
    upsert<T extends DebitCardUpsertArgs>(args: SelectSubset<T, DebitCardUpsertArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DebitCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitCardCountArgs} args - Arguments to filter DebitCards to count.
     * @example
     * // Count the number of DebitCards
     * const count = await prisma.debitCard.count({
     *   where: {
     *     // ... the filter for the DebitCards we want to count
     *   }
     * })
    **/
    count<T extends DebitCardCountArgs>(
      args?: Subset<T, DebitCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DebitCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DebitCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DebitCardAggregateArgs>(args: Subset<T, DebitCardAggregateArgs>): Prisma.PrismaPromise<GetDebitCardAggregateType<T>>

    /**
     * Group by DebitCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DebitCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DebitCardGroupByArgs['orderBy'] }
        : { orderBy?: DebitCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DebitCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDebitCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DebitCard model
   */
  readonly fields: DebitCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DebitCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DebitCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    network<T extends CardNetworkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardNetworkDefaultArgs<ExtArgs>>): Prisma__CardNetworkClient<$Result.GetResult<Prisma.$CardNetworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bankAccount<T extends BankAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BankAccountDefaultArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DebitCard model
   */
  interface DebitCardFieldRefs {
    readonly id: FieldRef<"DebitCard", 'String'>
    readonly cardNumber: FieldRef<"DebitCard", 'String'>
    readonly networkId: FieldRef<"DebitCard", 'String'>
    readonly bankAccountId: FieldRef<"DebitCard", 'String'>
    readonly expiresAt: FieldRef<"DebitCard", 'DateTime'>
    readonly status: FieldRef<"DebitCard", 'CardStatus'>
    readonly createdAt: FieldRef<"DebitCard", 'DateTime'>
    readonly updatedAt: FieldRef<"DebitCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DebitCard findUnique
   */
  export type DebitCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebitCard
     */
    omit?: DebitCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * Filter, which DebitCard to fetch.
     */
    where: DebitCardWhereUniqueInput
  }

  /**
   * DebitCard findUniqueOrThrow
   */
  export type DebitCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebitCard
     */
    omit?: DebitCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * Filter, which DebitCard to fetch.
     */
    where: DebitCardWhereUniqueInput
  }

  /**
   * DebitCard findFirst
   */
  export type DebitCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebitCard
     */
    omit?: DebitCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * Filter, which DebitCard to fetch.
     */
    where?: DebitCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebitCards to fetch.
     */
    orderBy?: DebitCardOrderByWithRelationInput | DebitCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebitCards.
     */
    cursor?: DebitCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebitCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebitCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebitCards.
     */
    distinct?: DebitCardScalarFieldEnum | DebitCardScalarFieldEnum[]
  }

  /**
   * DebitCard findFirstOrThrow
   */
  export type DebitCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebitCard
     */
    omit?: DebitCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * Filter, which DebitCard to fetch.
     */
    where?: DebitCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebitCards to fetch.
     */
    orderBy?: DebitCardOrderByWithRelationInput | DebitCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebitCards.
     */
    cursor?: DebitCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebitCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebitCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebitCards.
     */
    distinct?: DebitCardScalarFieldEnum | DebitCardScalarFieldEnum[]
  }

  /**
   * DebitCard findMany
   */
  export type DebitCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebitCard
     */
    omit?: DebitCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * Filter, which DebitCards to fetch.
     */
    where?: DebitCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebitCards to fetch.
     */
    orderBy?: DebitCardOrderByWithRelationInput | DebitCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DebitCards.
     */
    cursor?: DebitCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebitCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebitCards.
     */
    skip?: number
    distinct?: DebitCardScalarFieldEnum | DebitCardScalarFieldEnum[]
  }

  /**
   * DebitCard create
   */
  export type DebitCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebitCard
     */
    omit?: DebitCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * The data needed to create a DebitCard.
     */
    data: XOR<DebitCardCreateInput, DebitCardUncheckedCreateInput>
  }

  /**
   * DebitCard createMany
   */
  export type DebitCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DebitCards.
     */
    data: DebitCardCreateManyInput | DebitCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DebitCard createManyAndReturn
   */
  export type DebitCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DebitCard
     */
    omit?: DebitCardOmit<ExtArgs> | null
    /**
     * The data used to create many DebitCards.
     */
    data: DebitCardCreateManyInput | DebitCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DebitCard update
   */
  export type DebitCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebitCard
     */
    omit?: DebitCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * The data needed to update a DebitCard.
     */
    data: XOR<DebitCardUpdateInput, DebitCardUncheckedUpdateInput>
    /**
     * Choose, which DebitCard to update.
     */
    where: DebitCardWhereUniqueInput
  }

  /**
   * DebitCard updateMany
   */
  export type DebitCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DebitCards.
     */
    data: XOR<DebitCardUpdateManyMutationInput, DebitCardUncheckedUpdateManyInput>
    /**
     * Filter which DebitCards to update
     */
    where?: DebitCardWhereInput
    /**
     * Limit how many DebitCards to update.
     */
    limit?: number
  }

  /**
   * DebitCard updateManyAndReturn
   */
  export type DebitCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DebitCard
     */
    omit?: DebitCardOmit<ExtArgs> | null
    /**
     * The data used to update DebitCards.
     */
    data: XOR<DebitCardUpdateManyMutationInput, DebitCardUncheckedUpdateManyInput>
    /**
     * Filter which DebitCards to update
     */
    where?: DebitCardWhereInput
    /**
     * Limit how many DebitCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DebitCard upsert
   */
  export type DebitCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebitCard
     */
    omit?: DebitCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * The filter to search for the DebitCard to update in case it exists.
     */
    where: DebitCardWhereUniqueInput
    /**
     * In case the DebitCard found by the `where` argument doesn't exist, create a new DebitCard with this data.
     */
    create: XOR<DebitCardCreateInput, DebitCardUncheckedCreateInput>
    /**
     * In case the DebitCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DebitCardUpdateInput, DebitCardUncheckedUpdateInput>
  }

  /**
   * DebitCard delete
   */
  export type DebitCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebitCard
     */
    omit?: DebitCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * Filter which DebitCard to delete.
     */
    where: DebitCardWhereUniqueInput
  }

  /**
   * DebitCard deleteMany
   */
  export type DebitCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebitCards to delete
     */
    where?: DebitCardWhereInput
    /**
     * Limit how many DebitCards to delete.
     */
    limit?: number
  }

  /**
   * DebitCard without action
   */
  export type DebitCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebitCard
     */
    omit?: DebitCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    password: string | null
    isDisabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    password: string | null
    isDisabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    email: number
    password: number
    isDisabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    isDisabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    isDisabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    isDisabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userName: string
    email: string
    password: string
    isDisabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    isDisabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccounts?: boolean | User$bankAccountsArgs<ExtArgs>
    creditCards?: boolean | User$creditCardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    isDisabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    isDisabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    isDisabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "email" | "password" | "isDisabled" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccounts?: boolean | User$bankAccountsArgs<ExtArgs>
    creditCards?: boolean | User$creditCardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bankAccounts: Prisma.$BankAccountPayload<ExtArgs>[]
      creditCards: Prisma.$CreditCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      email: string
      password: string
      isDisabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bankAccounts<T extends User$bankAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$bankAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creditCards<T extends User$creditCardsArgs<ExtArgs> = {}>(args?: Subset<T, User$creditCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isDisabled: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bankAccounts
   */
  export type User$bankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    cursor?: BankAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * User.creditCards
   */
  export type User$creditCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    where?: CreditCardWhereInput
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    cursor?: CreditCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountTypeScalarFieldEnum: {
    id: 'id',
    accountTypeName: 'accountTypeName',
    isDisabled: 'isDisabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountTypeScalarFieldEnum = (typeof AccountTypeScalarFieldEnum)[keyof typeof AccountTypeScalarFieldEnum]


  export const CardNetworkScalarFieldEnum: {
    id: 'id',
    networkName: 'networkName',
    isDisabled: 'isDisabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CardNetworkScalarFieldEnum = (typeof CardNetworkScalarFieldEnum)[keyof typeof CardNetworkScalarFieldEnum]


  export const BankAccountScalarFieldEnum: {
    id: 'id',
    accountNumber: 'accountNumber',
    accountTypeId: 'accountTypeId',
    bankName: 'bankName',
    balance: 'balance',
    userId: 'userId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BankAccountScalarFieldEnum = (typeof BankAccountScalarFieldEnum)[keyof typeof BankAccountScalarFieldEnum]


  export const CreditCardScalarFieldEnum: {
    id: 'id',
    cardNumber: 'cardNumber',
    networkId: 'networkId',
    issuer: 'issuer',
    limit: 'limit',
    balance: 'balance',
    expiresAt: 'expiresAt',
    userId: 'userId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreditCardScalarFieldEnum = (typeof CreditCardScalarFieldEnum)[keyof typeof CreditCardScalarFieldEnum]


  export const DebitCardScalarFieldEnum: {
    id: 'id',
    cardNumber: 'cardNumber',
    networkId: 'networkId',
    bankAccountId: 'bankAccountId',
    expiresAt: 'expiresAt',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DebitCardScalarFieldEnum = (typeof DebitCardScalarFieldEnum)[keyof typeof DebitCardScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    email: 'email',
    password: 'password',
    isDisabled: 'isDisabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'AccountStatus'
   */
  export type EnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus'>
    


  /**
   * Reference to a field of type 'AccountStatus[]'
   */
  export type ListEnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus[]'>
    


  /**
   * Reference to a field of type 'CardStatus'
   */
  export type EnumCardStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CardStatus'>
    


  /**
   * Reference to a field of type 'CardStatus[]'
   */
  export type ListEnumCardStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CardStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountTypeWhereInput = {
    AND?: AccountTypeWhereInput | AccountTypeWhereInput[]
    OR?: AccountTypeWhereInput[]
    NOT?: AccountTypeWhereInput | AccountTypeWhereInput[]
    id?: StringFilter<"AccountType"> | string
    accountTypeName?: StringFilter<"AccountType"> | string
    isDisabled?: BoolFilter<"AccountType"> | boolean
    createdAt?: DateTimeFilter<"AccountType"> | Date | string
    updatedAt?: DateTimeFilter<"AccountType"> | Date | string
    bankAccounts?: BankAccountListRelationFilter
  }

  export type AccountTypeOrderByWithRelationInput = {
    id?: SortOrder
    accountTypeName?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bankAccounts?: BankAccountOrderByRelationAggregateInput
  }

  export type AccountTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountTypeName?: string
    AND?: AccountTypeWhereInput | AccountTypeWhereInput[]
    OR?: AccountTypeWhereInput[]
    NOT?: AccountTypeWhereInput | AccountTypeWhereInput[]
    isDisabled?: BoolFilter<"AccountType"> | boolean
    createdAt?: DateTimeFilter<"AccountType"> | Date | string
    updatedAt?: DateTimeFilter<"AccountType"> | Date | string
    bankAccounts?: BankAccountListRelationFilter
  }, "id" | "accountTypeName">

  export type AccountTypeOrderByWithAggregationInput = {
    id?: SortOrder
    accountTypeName?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountTypeCountOrderByAggregateInput
    _max?: AccountTypeMaxOrderByAggregateInput
    _min?: AccountTypeMinOrderByAggregateInput
  }

  export type AccountTypeScalarWhereWithAggregatesInput = {
    AND?: AccountTypeScalarWhereWithAggregatesInput | AccountTypeScalarWhereWithAggregatesInput[]
    OR?: AccountTypeScalarWhereWithAggregatesInput[]
    NOT?: AccountTypeScalarWhereWithAggregatesInput | AccountTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountType"> | string
    accountTypeName?: StringWithAggregatesFilter<"AccountType"> | string
    isDisabled?: BoolWithAggregatesFilter<"AccountType"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AccountType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountType"> | Date | string
  }

  export type CardNetworkWhereInput = {
    AND?: CardNetworkWhereInput | CardNetworkWhereInput[]
    OR?: CardNetworkWhereInput[]
    NOT?: CardNetworkWhereInput | CardNetworkWhereInput[]
    id?: StringFilter<"CardNetwork"> | string
    networkName?: StringFilter<"CardNetwork"> | string
    isDisabled?: BoolFilter<"CardNetwork"> | boolean
    createdAt?: DateTimeFilter<"CardNetwork"> | Date | string
    updatedAt?: DateTimeFilter<"CardNetwork"> | Date | string
    creditCards?: CreditCardListRelationFilter
    debitCards?: DebitCardListRelationFilter
  }

  export type CardNetworkOrderByWithRelationInput = {
    id?: SortOrder
    networkName?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creditCards?: CreditCardOrderByRelationAggregateInput
    debitCards?: DebitCardOrderByRelationAggregateInput
  }

  export type CardNetworkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    networkName?: string
    AND?: CardNetworkWhereInput | CardNetworkWhereInput[]
    OR?: CardNetworkWhereInput[]
    NOT?: CardNetworkWhereInput | CardNetworkWhereInput[]
    isDisabled?: BoolFilter<"CardNetwork"> | boolean
    createdAt?: DateTimeFilter<"CardNetwork"> | Date | string
    updatedAt?: DateTimeFilter<"CardNetwork"> | Date | string
    creditCards?: CreditCardListRelationFilter
    debitCards?: DebitCardListRelationFilter
  }, "id" | "networkName">

  export type CardNetworkOrderByWithAggregationInput = {
    id?: SortOrder
    networkName?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CardNetworkCountOrderByAggregateInput
    _max?: CardNetworkMaxOrderByAggregateInput
    _min?: CardNetworkMinOrderByAggregateInput
  }

  export type CardNetworkScalarWhereWithAggregatesInput = {
    AND?: CardNetworkScalarWhereWithAggregatesInput | CardNetworkScalarWhereWithAggregatesInput[]
    OR?: CardNetworkScalarWhereWithAggregatesInput[]
    NOT?: CardNetworkScalarWhereWithAggregatesInput | CardNetworkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CardNetwork"> | string
    networkName?: StringWithAggregatesFilter<"CardNetwork"> | string
    isDisabled?: BoolWithAggregatesFilter<"CardNetwork"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CardNetwork"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CardNetwork"> | Date | string
  }

  export type BankAccountWhereInput = {
    AND?: BankAccountWhereInput | BankAccountWhereInput[]
    OR?: BankAccountWhereInput[]
    NOT?: BankAccountWhereInput | BankAccountWhereInput[]
    id?: StringFilter<"BankAccount"> | string
    accountNumber?: StringFilter<"BankAccount"> | string
    accountTypeId?: StringFilter<"BankAccount"> | string
    bankName?: StringFilter<"BankAccount"> | string
    balance?: DecimalFilter<"BankAccount"> | Decimal | DecimalJsLike | number | string
    userId?: StringFilter<"BankAccount"> | string
    status?: EnumAccountStatusFilter<"BankAccount"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccount"> | Date | string
    accountType?: XOR<AccountTypeScalarRelationFilter, AccountTypeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    debitCards?: DebitCardListRelationFilter
  }

  export type BankAccountOrderByWithRelationInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    accountTypeId?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountType?: AccountTypeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    debitCards?: DebitCardOrderByRelationAggregateInput
  }

  export type BankAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountNumber?: string
    accountNumber_bankName?: BankAccountAccountNumberBankNameCompoundUniqueInput
    AND?: BankAccountWhereInput | BankAccountWhereInput[]
    OR?: BankAccountWhereInput[]
    NOT?: BankAccountWhereInput | BankAccountWhereInput[]
    accountTypeId?: StringFilter<"BankAccount"> | string
    bankName?: StringFilter<"BankAccount"> | string
    balance?: DecimalFilter<"BankAccount"> | Decimal | DecimalJsLike | number | string
    userId?: StringFilter<"BankAccount"> | string
    status?: EnumAccountStatusFilter<"BankAccount"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccount"> | Date | string
    accountType?: XOR<AccountTypeScalarRelationFilter, AccountTypeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    debitCards?: DebitCardListRelationFilter
  }, "id" | "accountNumber" | "accountNumber_bankName">

  export type BankAccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    accountTypeId?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BankAccountCountOrderByAggregateInput
    _avg?: BankAccountAvgOrderByAggregateInput
    _max?: BankAccountMaxOrderByAggregateInput
    _min?: BankAccountMinOrderByAggregateInput
    _sum?: BankAccountSumOrderByAggregateInput
  }

  export type BankAccountScalarWhereWithAggregatesInput = {
    AND?: BankAccountScalarWhereWithAggregatesInput | BankAccountScalarWhereWithAggregatesInput[]
    OR?: BankAccountScalarWhereWithAggregatesInput[]
    NOT?: BankAccountScalarWhereWithAggregatesInput | BankAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BankAccount"> | string
    accountNumber?: StringWithAggregatesFilter<"BankAccount"> | string
    accountTypeId?: StringWithAggregatesFilter<"BankAccount"> | string
    bankName?: StringWithAggregatesFilter<"BankAccount"> | string
    balance?: DecimalWithAggregatesFilter<"BankAccount"> | Decimal | DecimalJsLike | number | string
    userId?: StringWithAggregatesFilter<"BankAccount"> | string
    status?: EnumAccountStatusWithAggregatesFilter<"BankAccount"> | $Enums.AccountStatus
    createdAt?: DateTimeWithAggregatesFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BankAccount"> | Date | string
  }

  export type CreditCardWhereInput = {
    AND?: CreditCardWhereInput | CreditCardWhereInput[]
    OR?: CreditCardWhereInput[]
    NOT?: CreditCardWhereInput | CreditCardWhereInput[]
    id?: StringFilter<"CreditCard"> | string
    cardNumber?: StringFilter<"CreditCard"> | string
    networkId?: StringFilter<"CreditCard"> | string
    issuer?: StringFilter<"CreditCard"> | string
    limit?: DecimalFilter<"CreditCard"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"CreditCard"> | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFilter<"CreditCard"> | Date | string
    userId?: StringFilter<"CreditCard"> | string
    status?: EnumCardStatusFilter<"CreditCard"> | $Enums.CardStatus
    createdAt?: DateTimeFilter<"CreditCard"> | Date | string
    updatedAt?: DateTimeFilter<"CreditCard"> | Date | string
    network?: XOR<CardNetworkScalarRelationFilter, CardNetworkWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CreditCardOrderByWithRelationInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    networkId?: SortOrder
    issuer?: SortOrder
    limit?: SortOrder
    balance?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    network?: CardNetworkOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CreditCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cardNumber?: string
    AND?: CreditCardWhereInput | CreditCardWhereInput[]
    OR?: CreditCardWhereInput[]
    NOT?: CreditCardWhereInput | CreditCardWhereInput[]
    networkId?: StringFilter<"CreditCard"> | string
    issuer?: StringFilter<"CreditCard"> | string
    limit?: DecimalFilter<"CreditCard"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"CreditCard"> | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFilter<"CreditCard"> | Date | string
    userId?: StringFilter<"CreditCard"> | string
    status?: EnumCardStatusFilter<"CreditCard"> | $Enums.CardStatus
    createdAt?: DateTimeFilter<"CreditCard"> | Date | string
    updatedAt?: DateTimeFilter<"CreditCard"> | Date | string
    network?: XOR<CardNetworkScalarRelationFilter, CardNetworkWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "cardNumber">

  export type CreditCardOrderByWithAggregationInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    networkId?: SortOrder
    issuer?: SortOrder
    limit?: SortOrder
    balance?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreditCardCountOrderByAggregateInput
    _avg?: CreditCardAvgOrderByAggregateInput
    _max?: CreditCardMaxOrderByAggregateInput
    _min?: CreditCardMinOrderByAggregateInput
    _sum?: CreditCardSumOrderByAggregateInput
  }

  export type CreditCardScalarWhereWithAggregatesInput = {
    AND?: CreditCardScalarWhereWithAggregatesInput | CreditCardScalarWhereWithAggregatesInput[]
    OR?: CreditCardScalarWhereWithAggregatesInput[]
    NOT?: CreditCardScalarWhereWithAggregatesInput | CreditCardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditCard"> | string
    cardNumber?: StringWithAggregatesFilter<"CreditCard"> | string
    networkId?: StringWithAggregatesFilter<"CreditCard"> | string
    issuer?: StringWithAggregatesFilter<"CreditCard"> | string
    limit?: DecimalWithAggregatesFilter<"CreditCard"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalWithAggregatesFilter<"CreditCard"> | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeWithAggregatesFilter<"CreditCard"> | Date | string
    userId?: StringWithAggregatesFilter<"CreditCard"> | string
    status?: EnumCardStatusWithAggregatesFilter<"CreditCard"> | $Enums.CardStatus
    createdAt?: DateTimeWithAggregatesFilter<"CreditCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreditCard"> | Date | string
  }

  export type DebitCardWhereInput = {
    AND?: DebitCardWhereInput | DebitCardWhereInput[]
    OR?: DebitCardWhereInput[]
    NOT?: DebitCardWhereInput | DebitCardWhereInput[]
    id?: StringFilter<"DebitCard"> | string
    cardNumber?: StringFilter<"DebitCard"> | string
    networkId?: StringFilter<"DebitCard"> | string
    bankAccountId?: StringFilter<"DebitCard"> | string
    expiresAt?: DateTimeFilter<"DebitCard"> | Date | string
    status?: EnumCardStatusFilter<"DebitCard"> | $Enums.CardStatus
    createdAt?: DateTimeFilter<"DebitCard"> | Date | string
    updatedAt?: DateTimeFilter<"DebitCard"> | Date | string
    network?: XOR<CardNetworkScalarRelationFilter, CardNetworkWhereInput>
    bankAccount?: XOR<BankAccountScalarRelationFilter, BankAccountWhereInput>
  }

  export type DebitCardOrderByWithRelationInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    networkId?: SortOrder
    bankAccountId?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    network?: CardNetworkOrderByWithRelationInput
    bankAccount?: BankAccountOrderByWithRelationInput
  }

  export type DebitCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cardNumber?: string
    AND?: DebitCardWhereInput | DebitCardWhereInput[]
    OR?: DebitCardWhereInput[]
    NOT?: DebitCardWhereInput | DebitCardWhereInput[]
    networkId?: StringFilter<"DebitCard"> | string
    bankAccountId?: StringFilter<"DebitCard"> | string
    expiresAt?: DateTimeFilter<"DebitCard"> | Date | string
    status?: EnumCardStatusFilter<"DebitCard"> | $Enums.CardStatus
    createdAt?: DateTimeFilter<"DebitCard"> | Date | string
    updatedAt?: DateTimeFilter<"DebitCard"> | Date | string
    network?: XOR<CardNetworkScalarRelationFilter, CardNetworkWhereInput>
    bankAccount?: XOR<BankAccountScalarRelationFilter, BankAccountWhereInput>
  }, "id" | "cardNumber">

  export type DebitCardOrderByWithAggregationInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    networkId?: SortOrder
    bankAccountId?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DebitCardCountOrderByAggregateInput
    _max?: DebitCardMaxOrderByAggregateInput
    _min?: DebitCardMinOrderByAggregateInput
  }

  export type DebitCardScalarWhereWithAggregatesInput = {
    AND?: DebitCardScalarWhereWithAggregatesInput | DebitCardScalarWhereWithAggregatesInput[]
    OR?: DebitCardScalarWhereWithAggregatesInput[]
    NOT?: DebitCardScalarWhereWithAggregatesInput | DebitCardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DebitCard"> | string
    cardNumber?: StringWithAggregatesFilter<"DebitCard"> | string
    networkId?: StringWithAggregatesFilter<"DebitCard"> | string
    bankAccountId?: StringWithAggregatesFilter<"DebitCard"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"DebitCard"> | Date | string
    status?: EnumCardStatusWithAggregatesFilter<"DebitCard"> | $Enums.CardStatus
    createdAt?: DateTimeWithAggregatesFilter<"DebitCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DebitCard"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isDisabled?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bankAccounts?: BankAccountListRelationFilter
    creditCards?: CreditCardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bankAccounts?: BankAccountOrderByRelationAggregateInput
    creditCards?: CreditCardOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userName?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    isDisabled?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bankAccounts?: BankAccountListRelationFilter
    creditCards?: CreditCardListRelationFilter
  }, "id" | "userName" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isDisabled?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountTypeCreateInput = {
    id?: string
    accountTypeName: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccounts?: BankAccountCreateNestedManyWithoutAccountTypeInput
  }

  export type AccountTypeUncheckedCreateInput = {
    id?: string
    accountTypeName: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccounts?: BankAccountUncheckedCreateNestedManyWithoutAccountTypeInput
  }

  export type AccountTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountTypeName?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: BankAccountUpdateManyWithoutAccountTypeNestedInput
  }

  export type AccountTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountTypeName?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: BankAccountUncheckedUpdateManyWithoutAccountTypeNestedInput
  }

  export type AccountTypeCreateManyInput = {
    id?: string
    accountTypeName: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountTypeName?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountTypeName?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardNetworkCreateInput = {
    id?: string
    networkName: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCards?: CreditCardCreateNestedManyWithoutNetworkInput
    debitCards?: DebitCardCreateNestedManyWithoutNetworkInput
  }

  export type CardNetworkUncheckedCreateInput = {
    id?: string
    networkName: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCards?: CreditCardUncheckedCreateNestedManyWithoutNetworkInput
    debitCards?: DebitCardUncheckedCreateNestedManyWithoutNetworkInput
  }

  export type CardNetworkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCards?: CreditCardUpdateManyWithoutNetworkNestedInput
    debitCards?: DebitCardUpdateManyWithoutNetworkNestedInput
  }

  export type CardNetworkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCards?: CreditCardUncheckedUpdateManyWithoutNetworkNestedInput
    debitCards?: DebitCardUncheckedUpdateManyWithoutNetworkNestedInput
  }

  export type CardNetworkCreateManyInput = {
    id?: string
    networkName: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardNetworkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardNetworkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountCreateInput = {
    id?: string
    accountNumber: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accountType: AccountTypeCreateNestedOneWithoutBankAccountsInput
    user: UserCreateNestedOneWithoutBankAccountsInput
    debitCards?: DebitCardCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUncheckedCreateInput = {
    id?: string
    accountNumber: string
    accountTypeId: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    userId: string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    debitCards?: DebitCardUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountType?: AccountTypeUpdateOneRequiredWithoutBankAccountsNestedInput
    user?: UserUpdateOneRequiredWithoutBankAccountsNestedInput
    debitCards?: DebitCardUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountTypeId?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debitCards?: DebitCardUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountCreateManyInput = {
    id?: string
    accountNumber: string
    accountTypeId: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    userId: string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountTypeId?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardCreateInput = {
    id?: string
    cardNumber: string
    issuer: string
    limit: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    network: CardNetworkCreateNestedOneWithoutCreditCardsInput
    user: UserCreateNestedOneWithoutCreditCardsInput
  }

  export type CreditCardUncheckedCreateInput = {
    id?: string
    cardNumber: string
    networkId: string
    issuer: string
    limit: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    userId: string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: CardNetworkUpdateOneRequiredWithoutCreditCardsNestedInput
    user?: UserUpdateOneRequiredWithoutCreditCardsNestedInput
  }

  export type CreditCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    networkId?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardCreateManyInput = {
    id?: string
    cardNumber: string
    networkId: string
    issuer: string
    limit: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    userId: string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    networkId?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitCardCreateInput = {
    id?: string
    cardNumber: string
    expiresAt: Date | string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    network: CardNetworkCreateNestedOneWithoutDebitCardsInput
    bankAccount: BankAccountCreateNestedOneWithoutDebitCardsInput
  }

  export type DebitCardUncheckedCreateInput = {
    id?: string
    cardNumber: string
    networkId: string
    bankAccountId: string
    expiresAt: Date | string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebitCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: CardNetworkUpdateOneRequiredWithoutDebitCardsNestedInput
    bankAccount?: BankAccountUpdateOneRequiredWithoutDebitCardsNestedInput
  }

  export type DebitCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    networkId?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitCardCreateManyInput = {
    id?: string
    cardNumber: string
    networkId: string
    bankAccountId: string
    expiresAt: Date | string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebitCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    networkId?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    userName: string
    email: string
    password: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccounts?: BankAccountCreateNestedManyWithoutUserInput
    creditCards?: CreditCardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userName: string
    email: string
    password: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccounts?: BankAccountUncheckedCreateNestedManyWithoutUserInput
    creditCards?: CreditCardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: BankAccountUpdateManyWithoutUserNestedInput
    creditCards?: CreditCardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: BankAccountUncheckedUpdateManyWithoutUserNestedInput
    creditCards?: CreditCardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userName: string
    email: string
    password: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BankAccountListRelationFilter = {
    every?: BankAccountWhereInput
    some?: BankAccountWhereInput
    none?: BankAccountWhereInput
  }

  export type BankAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountTypeCountOrderByAggregateInput = {
    id?: SortOrder
    accountTypeName?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    accountTypeName?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountTypeMinOrderByAggregateInput = {
    id?: SortOrder
    accountTypeName?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CreditCardListRelationFilter = {
    every?: CreditCardWhereInput
    some?: CreditCardWhereInput
    none?: CreditCardWhereInput
  }

  export type DebitCardListRelationFilter = {
    every?: DebitCardWhereInput
    some?: DebitCardWhereInput
    none?: DebitCardWhereInput
  }

  export type CreditCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DebitCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardNetworkCountOrderByAggregateInput = {
    id?: SortOrder
    networkName?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardNetworkMaxOrderByAggregateInput = {
    id?: SortOrder
    networkName?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardNetworkMinOrderByAggregateInput = {
    id?: SortOrder
    networkName?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type AccountTypeScalarRelationFilter = {
    is?: AccountTypeWhereInput
    isNot?: AccountTypeWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BankAccountAccountNumberBankNameCompoundUniqueInput = {
    accountNumber: string
    bankName: string
  }

  export type BankAccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    accountTypeId?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAccountAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type BankAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    accountTypeId?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    accountTypeId?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAccountSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type EnumCardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CardStatus | EnumCardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CardStatus[] | ListEnumCardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardStatus[] | ListEnumCardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCardStatusFilter<$PrismaModel> | $Enums.CardStatus
  }

  export type CardNetworkScalarRelationFilter = {
    is?: CardNetworkWhereInput
    isNot?: CardNetworkWhereInput
  }

  export type CreditCardCountOrderByAggregateInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    networkId?: SortOrder
    issuer?: SortOrder
    limit?: SortOrder
    balance?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardAvgOrderByAggregateInput = {
    limit?: SortOrder
    balance?: SortOrder
  }

  export type CreditCardMaxOrderByAggregateInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    networkId?: SortOrder
    issuer?: SortOrder
    limit?: SortOrder
    balance?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardMinOrderByAggregateInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    networkId?: SortOrder
    issuer?: SortOrder
    limit?: SortOrder
    balance?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardSumOrderByAggregateInput = {
    limit?: SortOrder
    balance?: SortOrder
  }

  export type EnumCardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardStatus | EnumCardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CardStatus[] | ListEnumCardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardStatus[] | ListEnumCardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCardStatusWithAggregatesFilter<$PrismaModel> | $Enums.CardStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCardStatusFilter<$PrismaModel>
    _max?: NestedEnumCardStatusFilter<$PrismaModel>
  }

  export type BankAccountScalarRelationFilter = {
    is?: BankAccountWhereInput
    isNot?: BankAccountWhereInput
  }

  export type DebitCardCountOrderByAggregateInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    networkId?: SortOrder
    bankAccountId?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebitCardMaxOrderByAggregateInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    networkId?: SortOrder
    bankAccountId?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebitCardMinOrderByAggregateInput = {
    id?: SortOrder
    cardNumber?: SortOrder
    networkId?: SortOrder
    bankAccountId?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAccountCreateNestedManyWithoutAccountTypeInput = {
    create?: XOR<BankAccountCreateWithoutAccountTypeInput, BankAccountUncheckedCreateWithoutAccountTypeInput> | BankAccountCreateWithoutAccountTypeInput[] | BankAccountUncheckedCreateWithoutAccountTypeInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutAccountTypeInput | BankAccountCreateOrConnectWithoutAccountTypeInput[]
    createMany?: BankAccountCreateManyAccountTypeInputEnvelope
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type BankAccountUncheckedCreateNestedManyWithoutAccountTypeInput = {
    create?: XOR<BankAccountCreateWithoutAccountTypeInput, BankAccountUncheckedCreateWithoutAccountTypeInput> | BankAccountCreateWithoutAccountTypeInput[] | BankAccountUncheckedCreateWithoutAccountTypeInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutAccountTypeInput | BankAccountCreateOrConnectWithoutAccountTypeInput[]
    createMany?: BankAccountCreateManyAccountTypeInputEnvelope
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BankAccountUpdateManyWithoutAccountTypeNestedInput = {
    create?: XOR<BankAccountCreateWithoutAccountTypeInput, BankAccountUncheckedCreateWithoutAccountTypeInput> | BankAccountCreateWithoutAccountTypeInput[] | BankAccountUncheckedCreateWithoutAccountTypeInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutAccountTypeInput | BankAccountCreateOrConnectWithoutAccountTypeInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutAccountTypeInput | BankAccountUpsertWithWhereUniqueWithoutAccountTypeInput[]
    createMany?: BankAccountCreateManyAccountTypeInputEnvelope
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutAccountTypeInput | BankAccountUpdateWithWhereUniqueWithoutAccountTypeInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutAccountTypeInput | BankAccountUpdateManyWithWhereWithoutAccountTypeInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type BankAccountUncheckedUpdateManyWithoutAccountTypeNestedInput = {
    create?: XOR<BankAccountCreateWithoutAccountTypeInput, BankAccountUncheckedCreateWithoutAccountTypeInput> | BankAccountCreateWithoutAccountTypeInput[] | BankAccountUncheckedCreateWithoutAccountTypeInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutAccountTypeInput | BankAccountCreateOrConnectWithoutAccountTypeInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutAccountTypeInput | BankAccountUpsertWithWhereUniqueWithoutAccountTypeInput[]
    createMany?: BankAccountCreateManyAccountTypeInputEnvelope
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutAccountTypeInput | BankAccountUpdateWithWhereUniqueWithoutAccountTypeInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutAccountTypeInput | BankAccountUpdateManyWithWhereWithoutAccountTypeInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type CreditCardCreateNestedManyWithoutNetworkInput = {
    create?: XOR<CreditCardCreateWithoutNetworkInput, CreditCardUncheckedCreateWithoutNetworkInput> | CreditCardCreateWithoutNetworkInput[] | CreditCardUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutNetworkInput | CreditCardCreateOrConnectWithoutNetworkInput[]
    createMany?: CreditCardCreateManyNetworkInputEnvelope
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
  }

  export type DebitCardCreateNestedManyWithoutNetworkInput = {
    create?: XOR<DebitCardCreateWithoutNetworkInput, DebitCardUncheckedCreateWithoutNetworkInput> | DebitCardCreateWithoutNetworkInput[] | DebitCardUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: DebitCardCreateOrConnectWithoutNetworkInput | DebitCardCreateOrConnectWithoutNetworkInput[]
    createMany?: DebitCardCreateManyNetworkInputEnvelope
    connect?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
  }

  export type CreditCardUncheckedCreateNestedManyWithoutNetworkInput = {
    create?: XOR<CreditCardCreateWithoutNetworkInput, CreditCardUncheckedCreateWithoutNetworkInput> | CreditCardCreateWithoutNetworkInput[] | CreditCardUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutNetworkInput | CreditCardCreateOrConnectWithoutNetworkInput[]
    createMany?: CreditCardCreateManyNetworkInputEnvelope
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
  }

  export type DebitCardUncheckedCreateNestedManyWithoutNetworkInput = {
    create?: XOR<DebitCardCreateWithoutNetworkInput, DebitCardUncheckedCreateWithoutNetworkInput> | DebitCardCreateWithoutNetworkInput[] | DebitCardUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: DebitCardCreateOrConnectWithoutNetworkInput | DebitCardCreateOrConnectWithoutNetworkInput[]
    createMany?: DebitCardCreateManyNetworkInputEnvelope
    connect?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
  }

  export type CreditCardUpdateManyWithoutNetworkNestedInput = {
    create?: XOR<CreditCardCreateWithoutNetworkInput, CreditCardUncheckedCreateWithoutNetworkInput> | CreditCardCreateWithoutNetworkInput[] | CreditCardUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutNetworkInput | CreditCardCreateOrConnectWithoutNetworkInput[]
    upsert?: CreditCardUpsertWithWhereUniqueWithoutNetworkInput | CreditCardUpsertWithWhereUniqueWithoutNetworkInput[]
    createMany?: CreditCardCreateManyNetworkInputEnvelope
    set?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    disconnect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    delete?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    update?: CreditCardUpdateWithWhereUniqueWithoutNetworkInput | CreditCardUpdateWithWhereUniqueWithoutNetworkInput[]
    updateMany?: CreditCardUpdateManyWithWhereWithoutNetworkInput | CreditCardUpdateManyWithWhereWithoutNetworkInput[]
    deleteMany?: CreditCardScalarWhereInput | CreditCardScalarWhereInput[]
  }

  export type DebitCardUpdateManyWithoutNetworkNestedInput = {
    create?: XOR<DebitCardCreateWithoutNetworkInput, DebitCardUncheckedCreateWithoutNetworkInput> | DebitCardCreateWithoutNetworkInput[] | DebitCardUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: DebitCardCreateOrConnectWithoutNetworkInput | DebitCardCreateOrConnectWithoutNetworkInput[]
    upsert?: DebitCardUpsertWithWhereUniqueWithoutNetworkInput | DebitCardUpsertWithWhereUniqueWithoutNetworkInput[]
    createMany?: DebitCardCreateManyNetworkInputEnvelope
    set?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    disconnect?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    delete?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    connect?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    update?: DebitCardUpdateWithWhereUniqueWithoutNetworkInput | DebitCardUpdateWithWhereUniqueWithoutNetworkInput[]
    updateMany?: DebitCardUpdateManyWithWhereWithoutNetworkInput | DebitCardUpdateManyWithWhereWithoutNetworkInput[]
    deleteMany?: DebitCardScalarWhereInput | DebitCardScalarWhereInput[]
  }

  export type CreditCardUncheckedUpdateManyWithoutNetworkNestedInput = {
    create?: XOR<CreditCardCreateWithoutNetworkInput, CreditCardUncheckedCreateWithoutNetworkInput> | CreditCardCreateWithoutNetworkInput[] | CreditCardUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutNetworkInput | CreditCardCreateOrConnectWithoutNetworkInput[]
    upsert?: CreditCardUpsertWithWhereUniqueWithoutNetworkInput | CreditCardUpsertWithWhereUniqueWithoutNetworkInput[]
    createMany?: CreditCardCreateManyNetworkInputEnvelope
    set?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    disconnect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    delete?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    update?: CreditCardUpdateWithWhereUniqueWithoutNetworkInput | CreditCardUpdateWithWhereUniqueWithoutNetworkInput[]
    updateMany?: CreditCardUpdateManyWithWhereWithoutNetworkInput | CreditCardUpdateManyWithWhereWithoutNetworkInput[]
    deleteMany?: CreditCardScalarWhereInput | CreditCardScalarWhereInput[]
  }

  export type DebitCardUncheckedUpdateManyWithoutNetworkNestedInput = {
    create?: XOR<DebitCardCreateWithoutNetworkInput, DebitCardUncheckedCreateWithoutNetworkInput> | DebitCardCreateWithoutNetworkInput[] | DebitCardUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: DebitCardCreateOrConnectWithoutNetworkInput | DebitCardCreateOrConnectWithoutNetworkInput[]
    upsert?: DebitCardUpsertWithWhereUniqueWithoutNetworkInput | DebitCardUpsertWithWhereUniqueWithoutNetworkInput[]
    createMany?: DebitCardCreateManyNetworkInputEnvelope
    set?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    disconnect?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    delete?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    connect?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    update?: DebitCardUpdateWithWhereUniqueWithoutNetworkInput | DebitCardUpdateWithWhereUniqueWithoutNetworkInput[]
    updateMany?: DebitCardUpdateManyWithWhereWithoutNetworkInput | DebitCardUpdateManyWithWhereWithoutNetworkInput[]
    deleteMany?: DebitCardScalarWhereInput | DebitCardScalarWhereInput[]
  }

  export type AccountTypeCreateNestedOneWithoutBankAccountsInput = {
    create?: XOR<AccountTypeCreateWithoutBankAccountsInput, AccountTypeUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: AccountTypeCreateOrConnectWithoutBankAccountsInput
    connect?: AccountTypeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBankAccountsInput = {
    create?: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type DebitCardCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<DebitCardCreateWithoutBankAccountInput, DebitCardUncheckedCreateWithoutBankAccountInput> | DebitCardCreateWithoutBankAccountInput[] | DebitCardUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: DebitCardCreateOrConnectWithoutBankAccountInput | DebitCardCreateOrConnectWithoutBankAccountInput[]
    createMany?: DebitCardCreateManyBankAccountInputEnvelope
    connect?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
  }

  export type DebitCardUncheckedCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<DebitCardCreateWithoutBankAccountInput, DebitCardUncheckedCreateWithoutBankAccountInput> | DebitCardCreateWithoutBankAccountInput[] | DebitCardUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: DebitCardCreateOrConnectWithoutBankAccountInput | DebitCardCreateOrConnectWithoutBankAccountInput[]
    createMany?: DebitCardCreateManyBankAccountInputEnvelope
    connect?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccountStatus
  }

  export type AccountTypeUpdateOneRequiredWithoutBankAccountsNestedInput = {
    create?: XOR<AccountTypeCreateWithoutBankAccountsInput, AccountTypeUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: AccountTypeCreateOrConnectWithoutBankAccountsInput
    upsert?: AccountTypeUpsertWithoutBankAccountsInput
    connect?: AccountTypeWhereUniqueInput
    update?: XOR<XOR<AccountTypeUpdateToOneWithWhereWithoutBankAccountsInput, AccountTypeUpdateWithoutBankAccountsInput>, AccountTypeUncheckedUpdateWithoutBankAccountsInput>
  }

  export type UserUpdateOneRequiredWithoutBankAccountsNestedInput = {
    create?: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankAccountsInput
    upsert?: UserUpsertWithoutBankAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBankAccountsInput, UserUpdateWithoutBankAccountsInput>, UserUncheckedUpdateWithoutBankAccountsInput>
  }

  export type DebitCardUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<DebitCardCreateWithoutBankAccountInput, DebitCardUncheckedCreateWithoutBankAccountInput> | DebitCardCreateWithoutBankAccountInput[] | DebitCardUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: DebitCardCreateOrConnectWithoutBankAccountInput | DebitCardCreateOrConnectWithoutBankAccountInput[]
    upsert?: DebitCardUpsertWithWhereUniqueWithoutBankAccountInput | DebitCardUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: DebitCardCreateManyBankAccountInputEnvelope
    set?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    disconnect?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    delete?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    connect?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    update?: DebitCardUpdateWithWhereUniqueWithoutBankAccountInput | DebitCardUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: DebitCardUpdateManyWithWhereWithoutBankAccountInput | DebitCardUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: DebitCardScalarWhereInput | DebitCardScalarWhereInput[]
  }

  export type DebitCardUncheckedUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<DebitCardCreateWithoutBankAccountInput, DebitCardUncheckedCreateWithoutBankAccountInput> | DebitCardCreateWithoutBankAccountInput[] | DebitCardUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: DebitCardCreateOrConnectWithoutBankAccountInput | DebitCardCreateOrConnectWithoutBankAccountInput[]
    upsert?: DebitCardUpsertWithWhereUniqueWithoutBankAccountInput | DebitCardUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: DebitCardCreateManyBankAccountInputEnvelope
    set?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    disconnect?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    delete?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    connect?: DebitCardWhereUniqueInput | DebitCardWhereUniqueInput[]
    update?: DebitCardUpdateWithWhereUniqueWithoutBankAccountInput | DebitCardUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: DebitCardUpdateManyWithWhereWithoutBankAccountInput | DebitCardUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: DebitCardScalarWhereInput | DebitCardScalarWhereInput[]
  }

  export type CardNetworkCreateNestedOneWithoutCreditCardsInput = {
    create?: XOR<CardNetworkCreateWithoutCreditCardsInput, CardNetworkUncheckedCreateWithoutCreditCardsInput>
    connectOrCreate?: CardNetworkCreateOrConnectWithoutCreditCardsInput
    connect?: CardNetworkWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreditCardsInput = {
    create?: XOR<UserCreateWithoutCreditCardsInput, UserUncheckedCreateWithoutCreditCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditCardsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCardStatusFieldUpdateOperationsInput = {
    set?: $Enums.CardStatus
  }

  export type CardNetworkUpdateOneRequiredWithoutCreditCardsNestedInput = {
    create?: XOR<CardNetworkCreateWithoutCreditCardsInput, CardNetworkUncheckedCreateWithoutCreditCardsInput>
    connectOrCreate?: CardNetworkCreateOrConnectWithoutCreditCardsInput
    upsert?: CardNetworkUpsertWithoutCreditCardsInput
    connect?: CardNetworkWhereUniqueInput
    update?: XOR<XOR<CardNetworkUpdateToOneWithWhereWithoutCreditCardsInput, CardNetworkUpdateWithoutCreditCardsInput>, CardNetworkUncheckedUpdateWithoutCreditCardsInput>
  }

  export type UserUpdateOneRequiredWithoutCreditCardsNestedInput = {
    create?: XOR<UserCreateWithoutCreditCardsInput, UserUncheckedCreateWithoutCreditCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditCardsInput
    upsert?: UserUpsertWithoutCreditCardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditCardsInput, UserUpdateWithoutCreditCardsInput>, UserUncheckedUpdateWithoutCreditCardsInput>
  }

  export type CardNetworkCreateNestedOneWithoutDebitCardsInput = {
    create?: XOR<CardNetworkCreateWithoutDebitCardsInput, CardNetworkUncheckedCreateWithoutDebitCardsInput>
    connectOrCreate?: CardNetworkCreateOrConnectWithoutDebitCardsInput
    connect?: CardNetworkWhereUniqueInput
  }

  export type BankAccountCreateNestedOneWithoutDebitCardsInput = {
    create?: XOR<BankAccountCreateWithoutDebitCardsInput, BankAccountUncheckedCreateWithoutDebitCardsInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutDebitCardsInput
    connect?: BankAccountWhereUniqueInput
  }

  export type CardNetworkUpdateOneRequiredWithoutDebitCardsNestedInput = {
    create?: XOR<CardNetworkCreateWithoutDebitCardsInput, CardNetworkUncheckedCreateWithoutDebitCardsInput>
    connectOrCreate?: CardNetworkCreateOrConnectWithoutDebitCardsInput
    upsert?: CardNetworkUpsertWithoutDebitCardsInput
    connect?: CardNetworkWhereUniqueInput
    update?: XOR<XOR<CardNetworkUpdateToOneWithWhereWithoutDebitCardsInput, CardNetworkUpdateWithoutDebitCardsInput>, CardNetworkUncheckedUpdateWithoutDebitCardsInput>
  }

  export type BankAccountUpdateOneRequiredWithoutDebitCardsNestedInput = {
    create?: XOR<BankAccountCreateWithoutDebitCardsInput, BankAccountUncheckedCreateWithoutDebitCardsInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutDebitCardsInput
    upsert?: BankAccountUpsertWithoutDebitCardsInput
    connect?: BankAccountWhereUniqueInput
    update?: XOR<XOR<BankAccountUpdateToOneWithWhereWithoutDebitCardsInput, BankAccountUpdateWithoutDebitCardsInput>, BankAccountUncheckedUpdateWithoutDebitCardsInput>
  }

  export type BankAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput> | BankAccountCreateWithoutUserInput[] | BankAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutUserInput | BankAccountCreateOrConnectWithoutUserInput[]
    createMany?: BankAccountCreateManyUserInputEnvelope
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type CreditCardCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput> | CreditCardCreateWithoutUserInput[] | CreditCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutUserInput | CreditCardCreateOrConnectWithoutUserInput[]
    createMany?: CreditCardCreateManyUserInputEnvelope
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
  }

  export type BankAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput> | BankAccountCreateWithoutUserInput[] | BankAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutUserInput | BankAccountCreateOrConnectWithoutUserInput[]
    createMany?: BankAccountCreateManyUserInputEnvelope
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type CreditCardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput> | CreditCardCreateWithoutUserInput[] | CreditCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutUserInput | CreditCardCreateOrConnectWithoutUserInput[]
    createMany?: CreditCardCreateManyUserInputEnvelope
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
  }

  export type BankAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput> | BankAccountCreateWithoutUserInput[] | BankAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutUserInput | BankAccountCreateOrConnectWithoutUserInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutUserInput | BankAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankAccountCreateManyUserInputEnvelope
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutUserInput | BankAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutUserInput | BankAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type CreditCardUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput> | CreditCardCreateWithoutUserInput[] | CreditCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutUserInput | CreditCardCreateOrConnectWithoutUserInput[]
    upsert?: CreditCardUpsertWithWhereUniqueWithoutUserInput | CreditCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditCardCreateManyUserInputEnvelope
    set?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    disconnect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    delete?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    update?: CreditCardUpdateWithWhereUniqueWithoutUserInput | CreditCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditCardUpdateManyWithWhereWithoutUserInput | CreditCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditCardScalarWhereInput | CreditCardScalarWhereInput[]
  }

  export type BankAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput> | BankAccountCreateWithoutUserInput[] | BankAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutUserInput | BankAccountCreateOrConnectWithoutUserInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutUserInput | BankAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankAccountCreateManyUserInputEnvelope
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutUserInput | BankAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutUserInput | BankAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type CreditCardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput> | CreditCardCreateWithoutUserInput[] | CreditCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutUserInput | CreditCardCreateOrConnectWithoutUserInput[]
    upsert?: CreditCardUpsertWithWhereUniqueWithoutUserInput | CreditCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditCardCreateManyUserInputEnvelope
    set?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    disconnect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    delete?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    update?: CreditCardUpdateWithWhereUniqueWithoutUserInput | CreditCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditCardUpdateManyWithWhereWithoutUserInput | CreditCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditCardScalarWhereInput | CreditCardScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type NestedEnumCardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CardStatus | EnumCardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CardStatus[] | ListEnumCardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardStatus[] | ListEnumCardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCardStatusFilter<$PrismaModel> | $Enums.CardStatus
  }

  export type NestedEnumCardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardStatus | EnumCardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CardStatus[] | ListEnumCardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardStatus[] | ListEnumCardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCardStatusWithAggregatesFilter<$PrismaModel> | $Enums.CardStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCardStatusFilter<$PrismaModel>
    _max?: NestedEnumCardStatusFilter<$PrismaModel>
  }

  export type BankAccountCreateWithoutAccountTypeInput = {
    id?: string
    accountNumber: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBankAccountsInput
    debitCards?: DebitCardCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUncheckedCreateWithoutAccountTypeInput = {
    id?: string
    accountNumber: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    userId: string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    debitCards?: DebitCardUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountCreateOrConnectWithoutAccountTypeInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutAccountTypeInput, BankAccountUncheckedCreateWithoutAccountTypeInput>
  }

  export type BankAccountCreateManyAccountTypeInputEnvelope = {
    data: BankAccountCreateManyAccountTypeInput | BankAccountCreateManyAccountTypeInput[]
    skipDuplicates?: boolean
  }

  export type BankAccountUpsertWithWhereUniqueWithoutAccountTypeInput = {
    where: BankAccountWhereUniqueInput
    update: XOR<BankAccountUpdateWithoutAccountTypeInput, BankAccountUncheckedUpdateWithoutAccountTypeInput>
    create: XOR<BankAccountCreateWithoutAccountTypeInput, BankAccountUncheckedCreateWithoutAccountTypeInput>
  }

  export type BankAccountUpdateWithWhereUniqueWithoutAccountTypeInput = {
    where: BankAccountWhereUniqueInput
    data: XOR<BankAccountUpdateWithoutAccountTypeInput, BankAccountUncheckedUpdateWithoutAccountTypeInput>
  }

  export type BankAccountUpdateManyWithWhereWithoutAccountTypeInput = {
    where: BankAccountScalarWhereInput
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyWithoutAccountTypeInput>
  }

  export type BankAccountScalarWhereInput = {
    AND?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
    OR?: BankAccountScalarWhereInput[]
    NOT?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
    id?: StringFilter<"BankAccount"> | string
    accountNumber?: StringFilter<"BankAccount"> | string
    accountTypeId?: StringFilter<"BankAccount"> | string
    bankName?: StringFilter<"BankAccount"> | string
    balance?: DecimalFilter<"BankAccount"> | Decimal | DecimalJsLike | number | string
    userId?: StringFilter<"BankAccount"> | string
    status?: EnumAccountStatusFilter<"BankAccount"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccount"> | Date | string
  }

  export type CreditCardCreateWithoutNetworkInput = {
    id?: string
    cardNumber: string
    issuer: string
    limit: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreditCardsInput
  }

  export type CreditCardUncheckedCreateWithoutNetworkInput = {
    id?: string
    cardNumber: string
    issuer: string
    limit: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    userId: string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCardCreateOrConnectWithoutNetworkInput = {
    where: CreditCardWhereUniqueInput
    create: XOR<CreditCardCreateWithoutNetworkInput, CreditCardUncheckedCreateWithoutNetworkInput>
  }

  export type CreditCardCreateManyNetworkInputEnvelope = {
    data: CreditCardCreateManyNetworkInput | CreditCardCreateManyNetworkInput[]
    skipDuplicates?: boolean
  }

  export type DebitCardCreateWithoutNetworkInput = {
    id?: string
    cardNumber: string
    expiresAt: Date | string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount: BankAccountCreateNestedOneWithoutDebitCardsInput
  }

  export type DebitCardUncheckedCreateWithoutNetworkInput = {
    id?: string
    cardNumber: string
    bankAccountId: string
    expiresAt: Date | string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebitCardCreateOrConnectWithoutNetworkInput = {
    where: DebitCardWhereUniqueInput
    create: XOR<DebitCardCreateWithoutNetworkInput, DebitCardUncheckedCreateWithoutNetworkInput>
  }

  export type DebitCardCreateManyNetworkInputEnvelope = {
    data: DebitCardCreateManyNetworkInput | DebitCardCreateManyNetworkInput[]
    skipDuplicates?: boolean
  }

  export type CreditCardUpsertWithWhereUniqueWithoutNetworkInput = {
    where: CreditCardWhereUniqueInput
    update: XOR<CreditCardUpdateWithoutNetworkInput, CreditCardUncheckedUpdateWithoutNetworkInput>
    create: XOR<CreditCardCreateWithoutNetworkInput, CreditCardUncheckedCreateWithoutNetworkInput>
  }

  export type CreditCardUpdateWithWhereUniqueWithoutNetworkInput = {
    where: CreditCardWhereUniqueInput
    data: XOR<CreditCardUpdateWithoutNetworkInput, CreditCardUncheckedUpdateWithoutNetworkInput>
  }

  export type CreditCardUpdateManyWithWhereWithoutNetworkInput = {
    where: CreditCardScalarWhereInput
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyWithoutNetworkInput>
  }

  export type CreditCardScalarWhereInput = {
    AND?: CreditCardScalarWhereInput | CreditCardScalarWhereInput[]
    OR?: CreditCardScalarWhereInput[]
    NOT?: CreditCardScalarWhereInput | CreditCardScalarWhereInput[]
    id?: StringFilter<"CreditCard"> | string
    cardNumber?: StringFilter<"CreditCard"> | string
    networkId?: StringFilter<"CreditCard"> | string
    issuer?: StringFilter<"CreditCard"> | string
    limit?: DecimalFilter<"CreditCard"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"CreditCard"> | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFilter<"CreditCard"> | Date | string
    userId?: StringFilter<"CreditCard"> | string
    status?: EnumCardStatusFilter<"CreditCard"> | $Enums.CardStatus
    createdAt?: DateTimeFilter<"CreditCard"> | Date | string
    updatedAt?: DateTimeFilter<"CreditCard"> | Date | string
  }

  export type DebitCardUpsertWithWhereUniqueWithoutNetworkInput = {
    where: DebitCardWhereUniqueInput
    update: XOR<DebitCardUpdateWithoutNetworkInput, DebitCardUncheckedUpdateWithoutNetworkInput>
    create: XOR<DebitCardCreateWithoutNetworkInput, DebitCardUncheckedCreateWithoutNetworkInput>
  }

  export type DebitCardUpdateWithWhereUniqueWithoutNetworkInput = {
    where: DebitCardWhereUniqueInput
    data: XOR<DebitCardUpdateWithoutNetworkInput, DebitCardUncheckedUpdateWithoutNetworkInput>
  }

  export type DebitCardUpdateManyWithWhereWithoutNetworkInput = {
    where: DebitCardScalarWhereInput
    data: XOR<DebitCardUpdateManyMutationInput, DebitCardUncheckedUpdateManyWithoutNetworkInput>
  }

  export type DebitCardScalarWhereInput = {
    AND?: DebitCardScalarWhereInput | DebitCardScalarWhereInput[]
    OR?: DebitCardScalarWhereInput[]
    NOT?: DebitCardScalarWhereInput | DebitCardScalarWhereInput[]
    id?: StringFilter<"DebitCard"> | string
    cardNumber?: StringFilter<"DebitCard"> | string
    networkId?: StringFilter<"DebitCard"> | string
    bankAccountId?: StringFilter<"DebitCard"> | string
    expiresAt?: DateTimeFilter<"DebitCard"> | Date | string
    status?: EnumCardStatusFilter<"DebitCard"> | $Enums.CardStatus
    createdAt?: DateTimeFilter<"DebitCard"> | Date | string
    updatedAt?: DateTimeFilter<"DebitCard"> | Date | string
  }

  export type AccountTypeCreateWithoutBankAccountsInput = {
    id?: string
    accountTypeName: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTypeUncheckedCreateWithoutBankAccountsInput = {
    id?: string
    accountTypeName: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTypeCreateOrConnectWithoutBankAccountsInput = {
    where: AccountTypeWhereUniqueInput
    create: XOR<AccountTypeCreateWithoutBankAccountsInput, AccountTypeUncheckedCreateWithoutBankAccountsInput>
  }

  export type UserCreateWithoutBankAccountsInput = {
    id?: string
    userName: string
    email: string
    password: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCards?: CreditCardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBankAccountsInput = {
    id?: string
    userName: string
    email: string
    password: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCards?: CreditCardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBankAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
  }

  export type DebitCardCreateWithoutBankAccountInput = {
    id?: string
    cardNumber: string
    expiresAt: Date | string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    network: CardNetworkCreateNestedOneWithoutDebitCardsInput
  }

  export type DebitCardUncheckedCreateWithoutBankAccountInput = {
    id?: string
    cardNumber: string
    networkId: string
    expiresAt: Date | string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebitCardCreateOrConnectWithoutBankAccountInput = {
    where: DebitCardWhereUniqueInput
    create: XOR<DebitCardCreateWithoutBankAccountInput, DebitCardUncheckedCreateWithoutBankAccountInput>
  }

  export type DebitCardCreateManyBankAccountInputEnvelope = {
    data: DebitCardCreateManyBankAccountInput | DebitCardCreateManyBankAccountInput[]
    skipDuplicates?: boolean
  }

  export type AccountTypeUpsertWithoutBankAccountsInput = {
    update: XOR<AccountTypeUpdateWithoutBankAccountsInput, AccountTypeUncheckedUpdateWithoutBankAccountsInput>
    create: XOR<AccountTypeCreateWithoutBankAccountsInput, AccountTypeUncheckedCreateWithoutBankAccountsInput>
    where?: AccountTypeWhereInput
  }

  export type AccountTypeUpdateToOneWithWhereWithoutBankAccountsInput = {
    where?: AccountTypeWhereInput
    data: XOR<AccountTypeUpdateWithoutBankAccountsInput, AccountTypeUncheckedUpdateWithoutBankAccountsInput>
  }

  export type AccountTypeUpdateWithoutBankAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountTypeName?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTypeUncheckedUpdateWithoutBankAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountTypeName?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutBankAccountsInput = {
    update: XOR<UserUpdateWithoutBankAccountsInput, UserUncheckedUpdateWithoutBankAccountsInput>
    create: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBankAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBankAccountsInput, UserUncheckedUpdateWithoutBankAccountsInput>
  }

  export type UserUpdateWithoutBankAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCards?: CreditCardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBankAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCards?: CreditCardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DebitCardUpsertWithWhereUniqueWithoutBankAccountInput = {
    where: DebitCardWhereUniqueInput
    update: XOR<DebitCardUpdateWithoutBankAccountInput, DebitCardUncheckedUpdateWithoutBankAccountInput>
    create: XOR<DebitCardCreateWithoutBankAccountInput, DebitCardUncheckedCreateWithoutBankAccountInput>
  }

  export type DebitCardUpdateWithWhereUniqueWithoutBankAccountInput = {
    where: DebitCardWhereUniqueInput
    data: XOR<DebitCardUpdateWithoutBankAccountInput, DebitCardUncheckedUpdateWithoutBankAccountInput>
  }

  export type DebitCardUpdateManyWithWhereWithoutBankAccountInput = {
    where: DebitCardScalarWhereInput
    data: XOR<DebitCardUpdateManyMutationInput, DebitCardUncheckedUpdateManyWithoutBankAccountInput>
  }

  export type CardNetworkCreateWithoutCreditCardsInput = {
    id?: string
    networkName: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    debitCards?: DebitCardCreateNestedManyWithoutNetworkInput
  }

  export type CardNetworkUncheckedCreateWithoutCreditCardsInput = {
    id?: string
    networkName: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    debitCards?: DebitCardUncheckedCreateNestedManyWithoutNetworkInput
  }

  export type CardNetworkCreateOrConnectWithoutCreditCardsInput = {
    where: CardNetworkWhereUniqueInput
    create: XOR<CardNetworkCreateWithoutCreditCardsInput, CardNetworkUncheckedCreateWithoutCreditCardsInput>
  }

  export type UserCreateWithoutCreditCardsInput = {
    id?: string
    userName: string
    email: string
    password: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccounts?: BankAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreditCardsInput = {
    id?: string
    userName: string
    email: string
    password: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccounts?: BankAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreditCardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditCardsInput, UserUncheckedCreateWithoutCreditCardsInput>
  }

  export type CardNetworkUpsertWithoutCreditCardsInput = {
    update: XOR<CardNetworkUpdateWithoutCreditCardsInput, CardNetworkUncheckedUpdateWithoutCreditCardsInput>
    create: XOR<CardNetworkCreateWithoutCreditCardsInput, CardNetworkUncheckedCreateWithoutCreditCardsInput>
    where?: CardNetworkWhereInput
  }

  export type CardNetworkUpdateToOneWithWhereWithoutCreditCardsInput = {
    where?: CardNetworkWhereInput
    data: XOR<CardNetworkUpdateWithoutCreditCardsInput, CardNetworkUncheckedUpdateWithoutCreditCardsInput>
  }

  export type CardNetworkUpdateWithoutCreditCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debitCards?: DebitCardUpdateManyWithoutNetworkNestedInput
  }

  export type CardNetworkUncheckedUpdateWithoutCreditCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debitCards?: DebitCardUncheckedUpdateManyWithoutNetworkNestedInput
  }

  export type UserUpsertWithoutCreditCardsInput = {
    update: XOR<UserUpdateWithoutCreditCardsInput, UserUncheckedUpdateWithoutCreditCardsInput>
    create: XOR<UserCreateWithoutCreditCardsInput, UserUncheckedCreateWithoutCreditCardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditCardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditCardsInput, UserUncheckedUpdateWithoutCreditCardsInput>
  }

  export type UserUpdateWithoutCreditCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: BankAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: BankAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CardNetworkCreateWithoutDebitCardsInput = {
    id?: string
    networkName: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCards?: CreditCardCreateNestedManyWithoutNetworkInput
  }

  export type CardNetworkUncheckedCreateWithoutDebitCardsInput = {
    id?: string
    networkName: string
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCards?: CreditCardUncheckedCreateNestedManyWithoutNetworkInput
  }

  export type CardNetworkCreateOrConnectWithoutDebitCardsInput = {
    where: CardNetworkWhereUniqueInput
    create: XOR<CardNetworkCreateWithoutDebitCardsInput, CardNetworkUncheckedCreateWithoutDebitCardsInput>
  }

  export type BankAccountCreateWithoutDebitCardsInput = {
    id?: string
    accountNumber: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accountType: AccountTypeCreateNestedOneWithoutBankAccountsInput
    user: UserCreateNestedOneWithoutBankAccountsInput
  }

  export type BankAccountUncheckedCreateWithoutDebitCardsInput = {
    id?: string
    accountNumber: string
    accountTypeId: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    userId: string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountCreateOrConnectWithoutDebitCardsInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutDebitCardsInput, BankAccountUncheckedCreateWithoutDebitCardsInput>
  }

  export type CardNetworkUpsertWithoutDebitCardsInput = {
    update: XOR<CardNetworkUpdateWithoutDebitCardsInput, CardNetworkUncheckedUpdateWithoutDebitCardsInput>
    create: XOR<CardNetworkCreateWithoutDebitCardsInput, CardNetworkUncheckedCreateWithoutDebitCardsInput>
    where?: CardNetworkWhereInput
  }

  export type CardNetworkUpdateToOneWithWhereWithoutDebitCardsInput = {
    where?: CardNetworkWhereInput
    data: XOR<CardNetworkUpdateWithoutDebitCardsInput, CardNetworkUncheckedUpdateWithoutDebitCardsInput>
  }

  export type CardNetworkUpdateWithoutDebitCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCards?: CreditCardUpdateManyWithoutNetworkNestedInput
  }

  export type CardNetworkUncheckedUpdateWithoutDebitCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCards?: CreditCardUncheckedUpdateManyWithoutNetworkNestedInput
  }

  export type BankAccountUpsertWithoutDebitCardsInput = {
    update: XOR<BankAccountUpdateWithoutDebitCardsInput, BankAccountUncheckedUpdateWithoutDebitCardsInput>
    create: XOR<BankAccountCreateWithoutDebitCardsInput, BankAccountUncheckedCreateWithoutDebitCardsInput>
    where?: BankAccountWhereInput
  }

  export type BankAccountUpdateToOneWithWhereWithoutDebitCardsInput = {
    where?: BankAccountWhereInput
    data: XOR<BankAccountUpdateWithoutDebitCardsInput, BankAccountUncheckedUpdateWithoutDebitCardsInput>
  }

  export type BankAccountUpdateWithoutDebitCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountType?: AccountTypeUpdateOneRequiredWithoutBankAccountsNestedInput
    user?: UserUpdateOneRequiredWithoutBankAccountsNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutDebitCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountTypeId?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountCreateWithoutUserInput = {
    id?: string
    accountNumber: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accountType: AccountTypeCreateNestedOneWithoutBankAccountsInput
    debitCards?: DebitCardCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUncheckedCreateWithoutUserInput = {
    id?: string
    accountNumber: string
    accountTypeId: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    debitCards?: DebitCardUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountCreateOrConnectWithoutUserInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput>
  }

  export type BankAccountCreateManyUserInputEnvelope = {
    data: BankAccountCreateManyUserInput | BankAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CreditCardCreateWithoutUserInput = {
    id?: string
    cardNumber: string
    issuer: string
    limit: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    network: CardNetworkCreateNestedOneWithoutCreditCardsInput
  }

  export type CreditCardUncheckedCreateWithoutUserInput = {
    id?: string
    cardNumber: string
    networkId: string
    issuer: string
    limit: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCardCreateOrConnectWithoutUserInput = {
    where: CreditCardWhereUniqueInput
    create: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput>
  }

  export type CreditCardCreateManyUserInputEnvelope = {
    data: CreditCardCreateManyUserInput | CreditCardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BankAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: BankAccountWhereUniqueInput
    update: XOR<BankAccountUpdateWithoutUserInput, BankAccountUncheckedUpdateWithoutUserInput>
    create: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput>
  }

  export type BankAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: BankAccountWhereUniqueInput
    data: XOR<BankAccountUpdateWithoutUserInput, BankAccountUncheckedUpdateWithoutUserInput>
  }

  export type BankAccountUpdateManyWithWhereWithoutUserInput = {
    where: BankAccountScalarWhereInput
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type CreditCardUpsertWithWhereUniqueWithoutUserInput = {
    where: CreditCardWhereUniqueInput
    update: XOR<CreditCardUpdateWithoutUserInput, CreditCardUncheckedUpdateWithoutUserInput>
    create: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput>
  }

  export type CreditCardUpdateWithWhereUniqueWithoutUserInput = {
    where: CreditCardWhereUniqueInput
    data: XOR<CreditCardUpdateWithoutUserInput, CreditCardUncheckedUpdateWithoutUserInput>
  }

  export type CreditCardUpdateManyWithWhereWithoutUserInput = {
    where: CreditCardScalarWhereInput
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyWithoutUserInput>
  }

  export type BankAccountCreateManyAccountTypeInput = {
    id?: string
    accountNumber: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    userId: string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountUpdateWithoutAccountTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBankAccountsNestedInput
    debitCards?: DebitCardUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutAccountTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debitCards?: DebitCardUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateManyWithoutAccountTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardCreateManyNetworkInput = {
    id?: string
    cardNumber: string
    issuer: string
    limit: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    userId: string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebitCardCreateManyNetworkInput = {
    id?: string
    cardNumber: string
    bankAccountId: string
    expiresAt: Date | string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCardUpdateWithoutNetworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditCardsNestedInput
  }

  export type CreditCardUncheckedUpdateWithoutNetworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardUncheckedUpdateManyWithoutNetworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitCardUpdateWithoutNetworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUpdateOneRequiredWithoutDebitCardsNestedInput
  }

  export type DebitCardUncheckedUpdateWithoutNetworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitCardUncheckedUpdateManyWithoutNetworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitCardCreateManyBankAccountInput = {
    id?: string
    cardNumber: string
    networkId: string
    expiresAt: Date | string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebitCardUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: CardNetworkUpdateOneRequiredWithoutDebitCardsNestedInput
  }

  export type DebitCardUncheckedUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    networkId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitCardUncheckedUpdateManyWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    networkId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountCreateManyUserInput = {
    id?: string
    accountNumber: string
    accountTypeId: string
    bankName: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCardCreateManyUserInput = {
    id?: string
    cardNumber: string
    networkId: string
    issuer: string
    limit: Decimal | DecimalJsLike | number | string
    balance?: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    status?: $Enums.CardStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountType?: AccountTypeUpdateOneRequiredWithoutBankAccountsNestedInput
    debitCards?: DebitCardUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountTypeId?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debitCards?: DebitCardUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountTypeId?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: CardNetworkUpdateOneRequiredWithoutCreditCardsNestedInput
  }

  export type CreditCardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    networkId?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    networkId?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCardStatusFieldUpdateOperationsInput | $Enums.CardStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}