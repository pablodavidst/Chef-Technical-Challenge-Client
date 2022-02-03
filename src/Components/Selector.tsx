import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import { AgeSelection } from './AgeSelection'
import { TitleSelection } from './TitleSelection'

enum Selections {
    Age = "Age",
    Title = "Title",
  }

export const Selector = ()=>{

    const [selectionType,setSelectionType]= useState<Selections>(Selections.Title)

    const handleChangeSelector = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setSelectionType(event.target.value as Selections)
    }
    
    return <div className=''>
        <input id={Selections.Title} type="radio" name='selection' checked={selectionType==Selections.Title} value={Selections.Title} onChange={handleChangeSelector}/>
        <label htmlFor={Selections.Title} className='mr-1'>Title Selection</label>
        <input id={Selections.Age} type="radio" name='selection' checked={selectionType==Selections.Age} value={Selections.Age} onChange={handleChangeSelector}/>
        <label htmlFor={Selections.Age}>Age Selection</label>
        <br/><br/>
        {selectionType==Selections.Title && <TitleSelection/>}
        {selectionType==Selections.Age && <AgeSelection/>}
    
    </div>
}
