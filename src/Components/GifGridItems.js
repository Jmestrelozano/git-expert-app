import React from 'react'

export const GifGridItems = ({ imagen, titulo }) => {
    return (
       <>
  
            <p>{titulo}</p>
            <img src={imagen} alt=""/>
            
        </>
    )
}
