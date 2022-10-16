import { ReactComponent as FeedIcon } from "./icon/feed.svg"
import { ReactComponent as UploadIcon } from "./icon/upload.svg";
import { ReactComponent as CamarIcon } from "./icon/camar.svg"
import { useState } from 'react';
import Modalcom from "./pages/post/Modalcom";

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(!show)
  };
  const handleShow = () => {
    setShow(!show)
  };

  const [view, setView] = useState(true);

  const loginClick = () => {
    setView(!view)
  };
  const logoutClick = () => {
    setView(!view)
  };

  // useEffect(()=>{
  //   console.log(show)
  // },[show]);
    return (
        <div className="px-3 py-2 text-bg-dark">
          <div className="cont">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <CamarIcon />
                &nbsp;&nbsp;<h2>인생샷 공작소</h2>
              </a>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <button className="nav-link text-white" style={{backgroundColor:'transparent', border:0, outline:0}} onClick={handleShow}>
                 
                  {/* <div style={{color:'black'}}> */}
                   <Modalcom show={show} handleClose={handleClose}/>
                 
                  {/* </div> */}
                  
                  <UploadIcon />
                    Upload
                  </button>
                  {/* <a href="/post/upload" className="nav-link text-white">
                  <UploadIcon />
                    Upload
                  </a> */}
                </li>
                <li>
                  <a href="/post/list" className="nav-link text-white">
                    <FeedIcon width="24" height="24"/>
                    Feed
                  </a>
                </li>

                

                {
                view ? (<li className="center">
                  <button type="button"className="btn btn-outline-info" onClick={loginClick}>
                    <a href='/'>
                    logIn/signUp
                    </a>
                    </button>

                  </li>) : (<li className="center">
                                  <button type="button" className="btn btn-outline-danger" onClick={logoutClick}>logOut</button>
                                </li>)
                }

                
              </ul>
            </div>
          </div>
    </div>
    )
}

export default Header;