import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  Outlet, 
  RouterProvider
} from "react-router-dom";

import {useState} from 'react'

import NavBar from "./components/NavBar.jsx";
import TypingApp from "./pages/TypingApp.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Settings from "./pages/Settings.jsx";
import ProfilePage from './pages/ProfilePage.jsx';
import ColourSelector from "./components/ColourSelector.jsx";

import Slider from "./images/Slider.jsx";

function App() {
  const [colourOpen, setColourOpen] = useState("")

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

  const toggleColour = () => {
    setColourOpen(colourOpen => (!colourOpen))
  }
  
  return (
    <div className="App">
      <div className='h-screen w-screen bg-[color:var(--base-primary)] text-[color:var(--text-primary)] text-5xl p-10 box-border overflow-hidden'>
        <RouterProvider router={router}/>
        {colourOpen && <ColourSelector setColourOpen={setColourOpen}/>}
        <button onClick={toggleColour} className='absolute right-8 bottom-8 w-16 h-16 rounded-[50vh] bg-[color:var(--base-secondary)] flex justify-center items-center'>
            <Slider colour={"var(--text-primary)"}/>
        </button>
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
