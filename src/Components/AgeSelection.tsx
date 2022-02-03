import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import {ShowDetails} from './ShowDetails'
import { Shows } from '../interfaces/interfaces'


export const AgeSelection = ()=>{

    const [showsList,setShowsList] = useState<Shows[]>([])
    const [showsFiltered,setShowsFiltered] = useState<Shows[]>([])
    const [selectedAge,setSelectedAge] = useState<number>(0) // Minimun is 1 year but it is initialized with 0 to change automatically to 1 once the list of shows is completed 

    useEffect(()=>{

        const getShows = async ()=>{
            try{
                const {data} = await Axios.get('/api/shows/search/all')
                setShowsList(data.list)
            }catch(err){
                alert(err)
            }
        }   

        getShows()
        .then(()=>{
            setSelectedAge(1) // once the list of shows is completed selectedAge it is changed to 1 in order to trigger a default search 
        })
    },[])

    useEffect(()=>{

        if(selectedAge>0){

            const filtered_titles = showsList.filter(item=>item.age=='all' || (item.age && item.age!='' && Number(item.age.replace('+','').trim())<=selectedAge))
            
            setShowsFiltered(filtered_titles)
        }else{
            setShowsFiltered([])
        }

    },[selectedAge])

    const handleChangeAge = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setSelectedAge(Number(event.target.value))
    }

    return <>
        <label htmlFor='age-input' className='mr-1'>Please enter an age</label>
        <input id='age-input' type="number" value={selectedAge} min={1} max={18} onChange={handleChangeAge} />
        <ShowDetails showsFiltered={showsFiltered} fromAgeSelector={true}/>
    </>
}