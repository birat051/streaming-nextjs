export const getAllUsers=async ()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    await wait(5000)
    if(res.status===200)
    {
        const data=await res.json()
        return {data,error: null}
    }
    else
    return {error: 'Unable to return data'}
}

export const wait=(delay:number)=>{
    return new Promise(resolve => setTimeout(resolve,delay))
}