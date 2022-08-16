import Canvas from "./pages/post/Canvas"

const Upload = () => {
    return(
        <>

<div className="container">
    <div className="row justify-content-center">

<div className="col-4" >
<a>
    <h1 className="h1Text" >업로드
    </h1>
</a>
</div>
</div>
<div className="blank"></div>
<form>
    <div className="center">
        {/* <div className="upload-box">
            <button className="btn-upload">파일선택</button>
            <input className="btn-file d-none" type="file"></input>
        </div> */}


        <div style={{display:'flex'}}>
            <input className="form-control form-control-lg" id="fileInput" type="file"></input>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-outline-light">제출</button>
        </div>
        <Canvas />
        {/* <div id="jsCanvas" className="canvas">canvas</div> */}
        {/* <canvas></canvas> */}

    </div>
    <div className="blank"></div>

    
            {/* <div className="login">
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
            </div> */}
        </form>


</div>
        </>
    )

}

export default Upload