const deleteImage = async (token: string,path: string) => {

    console.log(token)    
    console.log(path)    


    const response = await fetch(`https://tarkhine-app.onrender.com/api/v1/admin/products/delete/image`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`,
        },
        method: 'DELETE',
        body: JSON.stringify({
            url: String(path)
        })
    })

    return response.json()
}

const uploadImage = async (token: string,image: any) => {

    let imageFile = new FormData()

    imageFile.append('file',image)

    const response = await fetch(`https://tarkhine-app.onrender.com/api/v1/image`,{
        headers: {
            'Authorization':`Bearer ${token}`,
        },
        method: 'POST'
        ,body: imageFile
    })

    return response.json()
}

const setImage = async (token: string,id: number,Path: string) => {
    const response = await fetch(`https://tarkhine-app.onrender.com/api/v1/admin/products/${id}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`,
        },
        method: 'POST',
        body: JSON.stringify({
            path: Path
        })
    })

    return response.json()
}

export {deleteImage,uploadImage,setImage}

