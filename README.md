# Raicho

## プロジェクト構成

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: React app
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### ビルド

To build all apps and packages, run the following command:

```
npm run build
```

### 開発環境の起動

To develop all apps and packages, run the following command:

```
npm run dev
```

### DB の起動

- PostgreSQL の Docker コンテナを起動する必要があります

```
# ビルド
# イメージの構築が必要な場合 (初期環境構築時・イメージの設定変更時)
docker compose build

# コンテナ立ち上げ
docker compose up -d

# コンテナの確認
docker compose ps

# コンテナの再起動
docker compose restart
```

### Migration

- Prisma の CLI は api ディレクトリで実行するため移動

```sh
cd apps/api
```

- マイグレーションファイルの生成(実行無し)

```sh
npx prisma migrate dev --name <migration_name> --create-only
```

- マイグレーションの実行

```sh
npx prisma migrate deploy
```

- リセット
  - テーブルを一度全て DROP してマイグレーションを最初から行う
  - 今あるデータは全て削除される

```sh
npx prisma migrate reset
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
