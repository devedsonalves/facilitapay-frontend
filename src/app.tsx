import { BrowserRouter, Route, Routes } from 'react-router'
import { ThemeProvider } from '@/contexts/theme-context'
import Home from '@/pages/home'

export default function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}
