import { useRef, useState, useEffect} from "react";

const Canvas = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [ ctx, setCtx ] = useState();
    // const [canvasTag, setCanvasTag] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 0.5;
        canvas.height = window.innerHeight;
        // canvas.background = 'https://img.hani.co.kr/imgdb/original/2007/1227/68227042_20071227.jpg'
        // canvas.background-image = url('')
        // canvas.

        const context = canvas.getContext('2d');
        // context.fill = 'https://img.hani.co.kr/imgdb/original/2007/1227/68227042_20071227.jpg'
        context.strokeStyle = 'white';
        context.lineWidth = 2.5;
        contextRef.current = context;

        // setCanvasTag(canvas);
        setCtx(context);
    },[]);
    
    let startX = 0;
    let startY = 0;
    
    // const onMouseMoveR = ({ nativeEvent }) => {
    //     const x = nativeEvent.offsetX;
    //     const y = nativeEvent.offsetY;
    //     if(rect === true) {
    //         const x = nativeEvent.offsetX;
    //         const y = nativeEvent.offsetY;
    //         if(!recting) {
    
    //         } else{
    //             const width = x-startX;
    //             const height = y-startY;
    //             ctx.beginPath();
    //             ctx.moveTo(x, y);
    //             ctx.rect(startX, startY, width, height);
    //         }
    //     }
    // }
    const startRecting = ({ nativeEvent }) => {
        startX = nativeEvent.offsetX;
        startY = nativeEvent.offsetY;
        ctx.beginPath();

    }

    const onMouseMoveR = ({ nativeEvent }) => {
        const x = nativeEvent.offsetX;
        const y = nativeEvent.offsetY;

        const width = x-startX;
        const height = y-startY;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.rect(startX, startY, width, height);
    }

    const stopRecting = () => {
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "white";
        ctx.fill();

        // console.log(startX,startY,x,y)
    }



    // const drawing = ({ nativeEvent }) => {
    //     const { offsetX, offsetY } = nativeEvent;

    //     if (ctx) {
    //         const x = nativeEvent.offsetX;
    //         const y = nativeEvent.offsetY;
            
    //         if (!isDrawing) {
    //             const width = x-startX
    //             const height = y-startY
                
    //             ctx.beginPath();
    //             ctx.moveTo(x, y);
    //             ctx.rect(startX,startY,width,height)
    //         } else {
    //             ctx.lineTo(offsetX, offsetY);
    //             ctx.stroke();

    //         }
    //     }
    // }
    

    return(
        <>
        <canvas id="jsCanvas" className="canvas" ref={canvasRef}
        onMouseMove={onMouseMoveR}
        onMouseDown={startRecting}
        onMouseUp={stopRecting}
        ></canvas>
        </>
    )
}

export default Canvas