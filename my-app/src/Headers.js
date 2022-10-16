import './headers.css'
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Headers () {
    
    const navigate = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

    useEffect(() => {
        if (cookies.userData === undefined) {
            navigate("/");
        }
    }, [cookies]);
    
    return(<>

<div style={{display:'flex'}}>
<a href='/'>
    <h3>로그인</h3>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href='/post/upload'>
    <h3>업로드</h3>
</a>

</div>
</>)
}

export default Headers;