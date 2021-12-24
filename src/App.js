import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>テスト自動化トレーニングサイトへようこそ！</h1>
        <form class="form">
          <input type="text" placeholder="メールアドレス" />
          <input type="password" placeholder="パスワード" />
          <button type="submit" id="login">ログイン</button>
        </form>
      </header>
    </div>
  );
}

export default App;
