import { useState, useEffect } from "react"

const useWindowWidth= ()=>{

    const[windowSize, setWindowSize]=useState(window.innerWidth)

    useEffect(()=>{
        const handleResize= ()=>setWindowSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return window.removeEventListener('resize',handleResize)
    })

    return windowSize

    /* const[smallScreen, setSmallScreen]= useState(false);

    const checkScreenSize=()=>{
        setSmallScreen(window.innerWidth<700);
        console.log(smallScreen)
        console.log(window.innerWidth)
    }

    useEffect(()=>{
        checkScreenSize();
        window.addEventListener('resize',checkScreenSize);
        return ()=>window.removeEventListener('resize',checkScreenSize);
    },[])

    return smallScreen; */
}

export default useWindowWidth;