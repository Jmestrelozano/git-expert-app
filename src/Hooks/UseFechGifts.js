import {useState,useEffect} from 'react'
import { getGifts } from '../Api/getGifts'

export const UseFechGifts = (categoria) => {
  const [state, setstate] = useState({
data:[],
loading:true

  })

  useEffect(() => {
    getGifts(categoria).then(datos => {
        
        setTimeout(() => {
            console.log(datos)
            setstate({
                data:datos,
                loading:false
            })
        }, 3000);

       })
  }, [categoria])
//   setTimeout(() => {
//    setstate ({
//         data:[1,2,4,5],
//         loading:false
        
//           })
//   }, 3000);
return state

}
