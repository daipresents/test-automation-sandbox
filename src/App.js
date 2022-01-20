import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import TopMenu from './pages/TopMenu';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="top-menu" element={<TopMenu />} />
        <Route path="mt-sandbox" element={<mtSandbox />} />
      </Routes>
    </BrowserRouter>
  );
}
