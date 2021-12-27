# テスト自動化サンドボックス

## 環境
- [Create React App](https://github.com/facebook/create-react-app)で基盤を作成
- Preview環境と本番環境は、[Netfiry](https://app.netlify.com/sites/test-automation-sandbox/)を利用
  - Preview環境（PRごとに作成）： https://deploy-preview-${PR_NUMBER}--test-automation-sandbox.netlify.app/
    - ハッシュ値形式でも表示可能。例： https://61c9b10cb5f4a217d96c7e56--test-automation-sandbox.netlify.app/
  - 本番環境： https://test-automation-sandbox.netlify.app

## ローカル環境での実行
### `npm start`
アプリを開発モードで実行します。実行後、[http://localhost:3000](http://localhost:3000) からアクセスできます。

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
アプリを `build` フォルダにビルドします。

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
