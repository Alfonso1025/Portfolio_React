import { useState, useEffect } from "react"

const useWindowWidth= ()=>{
    const[smallScreen, setSmallScreen]= useState(false);
    const checkScreenSize=()=>setSmallScreen(window.innerWidth<700);

    useEffect(()=>{
        checkScreenSize();
        window.addEventListener('resize',checkScreenSize);
        return ()=>window.removeEventListener('resize',checkScreenSize);
    },[])

    return smallScreen;
}

export default useWindowWidth;