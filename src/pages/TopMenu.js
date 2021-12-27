import {
  Link
} from "react-router-dom";

export default function TopMenu() {
  return (
    <div>
      <h1>メニュー</h1>
      <h2>お品書き</h2>
      <div>
        ブラウザE2Eレベルのテスト自動化のポイントをまとめています。
      </div>
      <ul>
        <li>WaitUntil： ページ読み込みタイミングをコントロールする</li>
        <li>Table： たくさんあるものから「ひとつ」を選ぶ</li>
      </ul>
      <div>
        <Link to="/">ログアウト</Link>
      </div>
    </div>
  );
}