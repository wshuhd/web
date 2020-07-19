import React, { useState ,useRef,useEffect} from 'react'
function Index() {
    let [count, setCount] = useState(0)
    let intervalCb = useRef(null)
    let [timer,setTimer] = useState(null)
    useEffect(() => {
        intervalCb.current = () => {
            setCount(count+1)   
        }
    }, [count])

    useEffect(() => {
        function itvFn() {
            intervalCb.current()
        }
        setTimer(setInterval(itvFn, 1000)) 
        // return () =>{
        //     console.log('useeffect unmount')
        //      window.clearInterval(CountTimer)
        //     }
    }, [])

    const handleStop = () => {
        debugger
        clearInterval(timer)
    }
    return (
        <React.Fragment>
            <div >{count}</div>
            <button onClick={() => {handleStop()}}>停止计时</button>
        </React.Fragment>
    )
}

export default Index