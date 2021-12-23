import React, {useState} from 'react'
import {FaTwitter, FaTools } from "react-icons/fa" ;
import useFetch from '../../app/useFetch'

const Card=(props)=>{

//recibe props
const id=props.id
const name=props.name
const description=props.description

// concatenate url with id
//`https://aqueous-bayou-70326.herokuapp.com/tweets/${id}`
const url=`http://localhost:3000/tweets/${id}`

//fetch tweet by user id
const getTweet=useFetch(url,{isloading:true, data:null})
const tweet=getTweet.data
//function that displays either description or tweet on card
const [showTweet, setShowTweet]=useState(false)
const handleShowTweet=()=>setShowTweet(!showTweet)

return(
    <>
    
                          <h3>{name}</h3>

                             <button className="inspirations-button" onClick={handleShowTweet}>{name} last Tweet</button>  
                              {showTweet?<p>{tweet}</p>:<p>{description}</p> }
                            
                            <i className="card-icon"><FaTwitter/></i>
                        
    </>
)


}

export default Card;