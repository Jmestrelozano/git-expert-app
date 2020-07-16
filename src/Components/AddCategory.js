import React,{useState} from 'react'
import PropTyope from "prop-types"

export const AddCategory = ({llamarCategoria}) => {


    const [inputValue, setInputValue] = useState("")

const handleText = (e)=>{
    setInputValue(e.target.value)
}

const handleSubmit = (e) =>{
    e.preventDefault()
    if(inputValue.trim().length >2){
        llamarCategoria(cats => [inputValue , ...cats])
    }
  
}
    return (
        <>
        <form onSubmit={handleSubmit}>
           <input type="text" onChange={handleText}  value={inputValue} />

           </form>
        </>
    )
}
AddCategory.propType={
    llamarCategoria:PropTyope.func.isRequired
}
export default AddCategory