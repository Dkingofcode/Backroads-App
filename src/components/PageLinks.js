import React from 'react'
import { pageLinks } from '../data' 
import Pagelink from './Pagelink';

const PageLinks = ({ parentClass, itemClass}) => {
  return ( 
    <ul className={parentClass}>
    {pageLinks.map((link) => {
      const {id} = link
      return(
        <Pagelink key={id} link={...link} itemClass={itemClass}/>
      )
    })}
    
  </ul>
  )
}

export default PageLinks;