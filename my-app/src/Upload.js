import Canvas from "./pages/post/Canvas"

const Upload = () => {
    return(
        <>

            <div className="container center">

                <div className="row justify-content-center">

                <div className="col-4" >
                {/* <a> */}
                    <h1 className="h1Text center" >업로드
                    </h1>
                {/* </a> */}
                </div>
            </div>
            <div className="blank"></div>
            <form>
                <div className="center">
                    {/* <div className="upload-box">
                        <button className="btn-upload">파일선택</button>
                        <input className="btn-file d-none" type="file"></input>
                    </div> */}

            {/* 
                    <div style={{display:'flex'}}>
                        <input className="form-control form-control-lg" id="fileInput" type="file"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-outline-light">제출</button>
                    </div> */}
                    <Canvas />
                    {/* <div id="jsCanvas" className="canvas">canvas</div> */}
                    {/* <canvas></canvas> */}

                </div>
                <div className="blank"></div>
                <div className="center">
                <h3>정말 업로드 하시겠습니까?
                    <br/>
                    사진은 서버에 영원히 저장됩니다
                </h3>
                <button className="btn btn-outline-info">확인</button>

                </div>
                    </form>
                <div className="blank"/>
            </div>
        </>
    )

}

export default Upload;