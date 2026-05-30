import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { useTheme } from "./hooks/useTheme";

function HomePage() {
  return (
    <>
    </>
  );
}

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <ScrollToTop />
      <Header theme={theme} onThemeToggle={toggle} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}