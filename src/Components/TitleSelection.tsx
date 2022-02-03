import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import {ShowDetails} from './ShowDetails'
import { Shows } from '../interfaces/interfaces'


export const TitleSelection = ()=>{

    const [showsList,setShowsList] = useState<Shows[]>([])
    const [showsFiltered,setShowsFiltered] = useState<Shows[]>([])
    const [selectedTitle,setSelectedTitle] = useState('')

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
        setFocus('title-input')

    },[])

    useEffect(()=>{

        if(selectedTitle!=''){
            const selectedTitleLowerCase = selectedTitle.toLocaleLowerCase()

            const filtered_titles = showsList.filter(item=>item.title && item.title.toLocaleLowerCase().includes(selectedTitleLowerCase))
            
            setShowsFiltered(filtered_titles)
        }else{
            setShowsFiltered([])
        }

    },[selectedTitle])

    const handleChangeTitle = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setSelectedTitle(event.target.value)
    }

    const clearSelectedTittle = ()=>{
        setSelectedTitle('')
        setFocus('title-input')
    }

    return <>
        <label htmlFor='age-input' className='mr-1'>Please type a title</label>
        <input type="text" value={selectedTitle} onChange={handleChangeTitle} placeholder='Tttle' id='title-input' />
        {selectedTitle!='' && <button onClick={clearSelectedTittle}>Clear</button>}
        <ShowDetails showsFiltered={showsFiltered}/>
    </>
}

const setFocus = (id:string)=>{
    const element = document.getElementById(id);
    element?.focus()
}