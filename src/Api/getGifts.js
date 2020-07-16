

export const getGifts= async(categoria)=>{
    let url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=LA6YKIl5oWyeFMJMSk4c7m2bAq47Pb3W`

    let obtener = await fetch(url)
    let {data} = await obtener.json()

    let api = data.map(objeto =>{
        return{
            id:objeto.id,
            titulo:objeto.title,
            imagen:objeto.images.downsized_medium.url
        }
    })
  
  return api
}

