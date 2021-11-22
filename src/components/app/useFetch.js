import  {useState, useEffect} from 'react'


const useFetch= (url, defaultResponse)=>{
const[data, setData]=useState(defaultResponse)

    async function getData(url){
        try{
            const res= await fetch(url);
            const data= await res.json()
            setData({
                isLoading:false,
                data
            })

        }
        catch(e){
            console.log(e)
        }

        
    }
    
    useEffect(()=>{
        getData(url)
    },[url])
    
            
            
            
        
     return data   

}
export default useFetch
