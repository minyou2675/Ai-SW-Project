import { ReactComponent as FeedIcon } from "./icon/feed.svg"
import { ReactComponent as UploadIcon } from "./icon/upload.svg";
import { ReactComponent as CamarIcon } from "./icon/camar.svg"
const Header = () => {
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
                  <a href="/post/upload" className="nav-link text-white">
                  <UploadIcon />
                    Upload
                  </a>
                </li>
                <li>
                  <a href="/post/list" className="nav-link text-white">
                    <FeedIcon width="24" height="24"/>
                    Feed
                  </a>
                </li>
                <li>
                <button type="button" className="btn btn-outline-info">logIn</button>
                </li>
                &nbsp;&nbsp;
                <li>
                  <button type="button" className="btn btn-outline-warning">signUp</button>
                  &nbsp;&nbsp;
                  <button type="button" class="btn btn-outline-danger">logOut</button>
                </li>
              </ul>
            </div>
          </div>
    </div>
    )
}

export default Header;