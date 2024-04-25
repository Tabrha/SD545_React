import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import MusicList from "./components/MusicList";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/music" element={<MusicList />} />
      </Routes>
    </BrowserRouter>
  );
}
