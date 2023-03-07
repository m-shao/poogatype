import {useEffect, useState} from 'react'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  Outlet, 
  RouterProvider
} from "react-router-dom";
import { ThemeProvider } from './context/ColourContext.js'

import NavBar from "./components/NavBar.jsx";
import TypingApp from "./pages/TypingApp.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Settings from "./pages/Settings.jsx";
import ProfilePage from './pages/ProfilePage.jsx';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<TypingApp/>}/>
        <Route path="/login" element={<ProfilePage/>}/>
        <Route path="/reset-password" element={<ForgotPassword/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Route>
    )
  )

  return (
    <div className="App">
      <div className='h-screen w-screen bg-neutral-800 text-white text-5xl p-10 box-border overflow-hidden'>
      <ThemeProvider>
        <RouterProvider router={router}/>
      </ThemeProvider>
      </div>
    </div>
  )
}

export default App;

const Root = () => {
  return(
    <>
      <NavBar/>
      <div className="w-full h-full flex justify-between items-center">
        <Outlet />
      </div>
    </>
  )
}
