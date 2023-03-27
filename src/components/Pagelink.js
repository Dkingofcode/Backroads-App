import React from 'react'


const Pagelink = ({ href, itemClass, text}) => {
  return (
        <li>
          <a href={href} className={itemClass}>{text}</a>
       </li> 
  )
}

export default Pagelink;