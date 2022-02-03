import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import { Shows } from '../interfaces/interfaces'


interface Props {
    showsFiltered : Shows[],
    fromAgeSelector?:boolean
}

export const ShowDetails = ({showsFiltered,fromAgeSelector}:Props)=>{

    return <>
            <p>Items found: {showsFiltered.length}</p>
            <div className='show-container'>

            {showsFiltered.map(item=><div className='show-card' key={item.id}>
                <h4 className='w-100'>{item.title}</h4>
                
                {fromAgeSelector && <div>
                    <p>Age: {item.age}</p>    
                </div>}
                
                {!fromAgeSelector && <div>
                    <p>IMDB Rating: {item.imdb}</p>
                    <p>You can see it on:</p>
                    {item.netflix=='1' && <p className='channel'>Netflix</p>}
                    {item.primevideo=='1' && <p className='channel'>Prime Video</p>}
                    {item.hulu=='1' && <p className='channel'>Hulu</p>}
                    {item.disney=='1' && <p className='channel'>Disney +</p>}
                </div>}
            
            </div>)}
        </div>
    </>
}
