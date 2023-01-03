import React, {useState} from 'react'
import WorkItem from './WorkItem'
import { projectsData, projectsNav } from './Data'

const Works = () => {
    const [filteredItem, setItem] = useState({name: 'all'})
    const [active, setActive] = useState(0)
  return (
    <div>
        <div className="work__filters">
        {projectsNav.map((item, index) => {
            return(
                <span 
                onClick={() => {setItem(item);setActive(index)}} 
                className={`${item.id === active ? 'active-work' : '' } work__item`} 
                key={index}>{item.name}</span>
            )
        })}
    </div>
    <div className="work__container container grid">
        { filteredItem.name === 'all' ? projectsData.map((item) => { return <WorkItem item={item} key={item.id}/>})
        : projectsData.filter((item) => filteredItem.name === item.category).map((item) => {return <WorkItem item={item} key={item.id}/>})}
    </div>
    </div>
  )
}

export default Works