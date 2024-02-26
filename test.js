

const api =async()=>{
    const res = await fetch("https://www.youtube.com/watch?v=t8HrZTLRCeU",{ mode: 'opaque'})
    console.log(res)
    const cog = res.json()
    console.log("cog",cog)
    const data =await res.text();
    console.log(data);
}
api();