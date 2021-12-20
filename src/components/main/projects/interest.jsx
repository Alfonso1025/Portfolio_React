import React from 'react'

import useFetch from '../../app/useFetch';
import useWindowWidth from '../../app/useWindowWidth';


const key = "ceac3276-b187-4407-86f7-b10e62b7f3d0";

const url= "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",

        qString="?CMC_PRO_API_KEY=" + key + "&start=1&limit=5&convert=USD ";

const fetchParams =url+qString



const Interests= ()=>{

const screenSize= useWindowWidth();

const fetchedData= useFetch(fetchParams, {isLoading:true, data:null})
    if(!fetchedData.data || fetchedData.isLoading){
        return 'LOADING...'
    }

const arrayData= fetchedData.data.data;


if(screenSize>900){ 
    return(
        <React.Fragment>
        <div className="crypto-header">
            <h1 className="header-projects">Crypto-Dashboard</h1>
            <p className="p-projects">This app takes advantage of the fetch method in order to connect to the Coin Market Cap API, and retrieve 5 live-time meaninfull facts about the 5 most important cryptocurrencies at the moment</p>
        </div>
        <table>
                       <thead>
                           <tr>
                               <th>Name</th>
                               <th>Price</th>
                               <th>Market Cap</th>
                               <th>Circulating Supply</th>
                           </tr>
                       </thead>
                       <tbody id="tbody">
                       { arrayData.map(element=>(
                            <tr>
                                <td>{element.name}</td>
                                <td>{element.quote.USD.price}</td>
                                <td>{element.quote.USD.market_cap}</td>
                                <td>{element.circulating_supply}</td>
                            
                            </tr>

                        )
                            
                        )}   
                           
                       </tbody>
                   </table>
                   </React.Fragment>
    )}
    
    else{
        return(
            <React.Fragment>
                <div className="crypto-header">
            <h1 className="header-projects">Crypto-Dashboard</h1>
            <p className="p-projects">This app takes advantage of the fetch method in order to connect to the Coin Market Cap API, and retrieve 5 live-time meaninfull facts about the 5 most important cryptocurrencies at the moment</p>
        </div>
            <table>
                       <thead>
                           <tr>
                               <th>Name</th>
                               <th>Price</th>
                               
                           </tr>
                       </thead>
                       <tbody id="tbody">
                       { arrayData.map(element=>(
                            <tr>
                                <td>{element.name}</td>
                                <td>{element.quote.USD.price}</td>
                                
                            
                            </tr>

                        )
                            
                        )}   
                           
                       </tbody>
                   </table>
                   </React.Fragment>
        )
    }
}
export default Interests