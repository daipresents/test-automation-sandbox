import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import TopMenu from './TopMenu';

export default function Home() {
  return (
    <div className="App">
      <div>
        <h1>テスト自動化トレーニングサイトへようこそ！</h1>
        <form className="form">
          <input type="text" placeholder="メールアドレス" /><br />
          <input type="password" placeholder="パスワード" /><br />
          <button type="submit" id="login">ログイン</button>
        </form>
      </div>
      <div>
        <Link to="top-menu">ログインせずに中に入る場合はこちらをクリック</Link>
      </div>
      <Routes>
        <Route path="top-menu" element={<TopMenu />} />
      </Routes>
    </div>
  );
}