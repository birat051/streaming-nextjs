import { wait } from "./getUsers"

export async function getPosts()
{
    await wait(2000)
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    if(res.status===200)
    {
        const data=await res.json()
        return {data}
    }
    else
    return {error: 'Unable to fetch posts'}
}

export async function getComments(postId:number)
{
    await wait(3000)
    const res=await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    if(res.status===200)
    {
        const data=await res.json()
        return {data}
    }
    else
    return {error: 'Unable to fetch comments'}
}