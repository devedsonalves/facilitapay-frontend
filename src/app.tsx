import { BrowserRouter, Route, Routes } from 'react-router'
import { ThemeProvider } from '@/contexts/theme-context'
import Home from '@/pages/home'
import LoginPage from './pages/login';



export default function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/login' element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}
