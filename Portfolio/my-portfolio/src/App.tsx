import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import ScrollToTop from "./components/ScrollToTop"
import { useTheme } from "./hooks/useTheme"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"

function HomePage() {
  return (
    <>
       <Hero/>
       <About/>
       <Skills/>
    </>
  )
}

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div>
      <h1>My Portfolio</h1>
      <ScrollToTop />
      <Header theme={theme} onThemeToggle={toggle} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}
