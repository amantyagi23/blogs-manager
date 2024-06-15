import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import DashboardPage from "./pages/DashboardPage"
import RootLayout from "./shared/layouts/RootLayout"

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout><HomePage /></RootLayout>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

      </Routes>
    </BrowserRouter>
  </>
}

export default App
