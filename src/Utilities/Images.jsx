import React from 'react'

const Images = ({source, alt, styleIng, onClick}) => {
  return (
    <img src={source} alt={alt} className={styleIng} onClick={onClick} />
  )
}

export default Images