import React from 'react'

const Title = ({title, subTitle}) => {
  return (
    <div>
    <h2>{title} <span>{subTitle}</span>
    </h2>
    </div>
  )
}

export default Title;