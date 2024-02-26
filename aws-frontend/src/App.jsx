// import React, { useState } from 'react'

// const App = () => {
//   const [files,setfiles]=useState([]);
//   const [imgarr,setimgarr]=useState([])

//   const onImageChange =(e)=>{
//       const selectedfiles = e.target.files;
//       setfiles(selectedfiles);
//   }

//   const handlesubmit=async(e)=>{
//     e.preventDefault();

//     if(files.length ===0){
//       alert("please selectedfiles");
//       return 
//     }

//     if(files.length >2){
//       alert("you can not uploaded more than 2 files");
//       return 
//     }

//     const formData = new FormData();
//     for(const file of files){
//       formData.append("s3Images",file)
//     }

//     const result = await fetch('http://localhost:5000/image/upload',{method:"POST",body:formData});
//     const data = await result.json();
//     console.log(data);
//   }

//   const fetchimages=async()=>{
//     const result = await fetch('http://localhost:5000/image/fetchall',{method:"GET"});
//     const data = await result.json();
//     console.log(data);
//     setimgarr(data.urlarray)
//   }



//   return (
//     <div>
//       <form onSubmit={handlesubmit}>
//           <input type="file" onChange={onImageChange} accept='image/*' name='image' multiple />
//           <button type='submit'>Upload</button>
//           <button type='button' onClick={fetchimages}>fetch</button>
//       </form>

//       {
//         imgarr.map((data,index)=>(
//           <div key={index}>
//           <img src={data} width={"200px"} height={"200px"}/>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// export default App




const App = () => {
  
const api =async()=>{
    const res = await fetch("https://www.youtube.com/watch?v=t8HrZTLRCeU")
  //   const data =await res.text();
  console.log(res)
  //  console.log(await data.json())
}
api();
  return (
    <div>App</div>
  )
}

export default App