# nextjs-vitest-app

[フロントエンド開発のためのテスト入門 今からでも知っておきたい自動テスト戦略の必須知識](https://amzn.asia/d/h3lBOcQ)を参考にフロントエンドのテストを学習したリポジトリです。
主に`__test__`下に Mock などのテストコードを書いています。

## Technology Stack

- 言語：Typescript
- フレームワーク：Next.js
- テストライブラリー：vitest
- ランタイム：bun

## How to use

1. bun のインストール
   FYI: https://bun.sh/docs/installation

```bash
curl https://bun.sh/install | bash
```

2.  `__test__`下のテストを実行

```bash
bun run test ./__test__/
```
