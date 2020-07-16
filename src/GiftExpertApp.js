import React,{useState} from "react";
import AddCategory from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";


const GiftExpertApp = () => {
 

const [categories, setCategories] = useState(["Naruto"])
// const handleAdd = ()=>{
//     setCategories([...categories , "hunter x hunter"])
     
//   console.log("sistes click")
// }

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory llamarCategoria={setCategories} />
      <hr />

      <ol>
{
    categories.map(category=>{
     return(
<GifGrid key={category} 
categoria={category} />
        
     )
    })
}

      </ol>
    </>
  );
};

export default GiftExpertApp;
