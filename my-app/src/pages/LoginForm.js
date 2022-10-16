import $ from "jquery";
import axios from "axios";
import port from "./../data/port.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useCookies } from "react-cookie";


const LoginForm = ({ signInData, onChangeSignInData }) => {
    
    const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");

    const onClickLoginButton = () => {

        if (signInData.email === "") {
            alert("이메일을 입력해주세요.");
            $("#email").focus();
            return;
        }

        if (signInData.password === "") {
            alert("비밀번호를 입력해주세요.");
            $("#password").focus();
            return;
        }

        sendSignInData().then(res => {
            console.log(res);
            setCookie("userData", res.data, { path: "/" });
            alert("로그인이 완료되었습니다.");
            navigate("/review/list");
        }).catch(e => {
            console.log(e);
            setErrorMessage(e.response.data.fail);
        });
    }

    const sendSignInData = async () => {
        return await axios.post(port.url + '/post/upload', signInData);
    }
    return(
       <>
       <div className="blank"></div>
        <form>
            <div className="login">
                <div className='loginCon'>
                    <span>이메일</span>
                    <input className='noInfo' name="email" id="email" type="email" placeholder="" aria-required="false" maxLength="100" aria-invalid="true"></input>
                    
                </div>
                <div className='loginCon'>
                    <span>비밀번호</span>
                    <input name="password" id="password" type="password" placeholder="" aria-required="false" maxLength="100" aria-invalid="true"></input>
                </div>
            </div>
            <div className="login">
            <button type="button" className="btn btn-outline-light" style={{margin:'1%'}}>로그인</button>
            </div>
        </form>
       </>


    )
}

export default LoginForm
