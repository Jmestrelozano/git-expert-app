import React from 'react'
import { UseFechGifts } from '../Hooks/UseFechGifts'
 import { GifGridItems } from './GifGridItems'


export const GifGrid = ({categoria}) => {

    const  {data,loading} = UseFechGifts(categoria)
 
   // const [images, setImages] = useState([])

    // useEffect(()=>{
    //     getGifts(categoria).then(setImages)
    // },[categoria
    // ])


    return (
        <>
        
            <h2>{categoria}</h2>

             {loading ? "Cargando..." : ""} 
    <ol >{data.map(({imagen,titulo ,id}) =>{
        return(
<li key={id}>
        <GifGridItems key={id}
        titulo={titulo}
        imagen={imagen}
        />
        
        </li>
        )
    })}</ol>
        </>
    )
}
