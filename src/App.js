import TypingApp from "./components/TypingApp.jsx";
import FirebaseSample from "./components/FirebaseSample.jsx";
import { LoginPage } from "./components/firebase/LoginPage.jsx";

import settingsIcon from "./images/settings.svg"
import accountIcon from "./images/user.svg"

function App() {
  return (
    <div className="App">
      <div className='h-screen w-screen bg-neutral-800 text-white text-5xl p-10 box-border overflow-hidden'>
        <div className='flex w-full justify-between'>
          <h1 className='font-black [font-family:"lato"]'>
            Pooga<span className='text-indigo-400'>Type</span>
          </h1>
          <div className='flex gap-6'>
            <button>
              <img src={settingsIcon} alt="settings" />
            </button>
            <button>
              <img src={accountIcon} alt="account" />
            </button>
          </div>
        </div>
        <div className="w-full h-full flex justify-between items-center">
          <LoginPage/>    
          {/* <FirebaseSample/> */}
        </div>
        {/* <TypingApp/> */}
      </div>
    </div>
  );
}

export default App;
