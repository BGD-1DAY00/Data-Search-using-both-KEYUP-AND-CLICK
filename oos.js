import fetch from 'node-fetch'
async function data(){
    const getD = async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const d = await response.json()
        return d
    }
    const a =  await getD()
    console.log(a)
}

data()