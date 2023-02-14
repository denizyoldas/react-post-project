import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import User from './pages/user'
import UserDetail from './pages/user-detail'
import NotFound from './pages/not-found'
import Header from './components/header'

function App() {
  return (
    <div className="bg-primary bg-main-pattern">
      <Header />

      <main className="container mx-auto px-4 pb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:userId" element={<UserDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
