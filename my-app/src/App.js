import { Route, Routes } from "react-router-dom";

import Headers from './Headers';
// import Footer from './Footer';
import Login from './Login'
import Upload from './Upload.js'
// import './../public/stylecss.css'

//Redux
import Store from "./app/Store";
import { Provider } from "react-redux";

import './stylecss.css'

function App() {
  return (
   <>
   <Provider store={Store}>
     <Headers />
     <Routes>
      <Route path='/' element={<Login />} />

     
     <Route path='post'>
        <Route path='upload' element={<Upload />} />
     </Route>



    {/* <Footer /> */}
    </Routes>
   </Provider>
   </>
  );
}

export default App;
