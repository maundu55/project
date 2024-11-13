import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {

    const [data, setData] = useState([]);

    
    useEffect(()=>{
        async function getData(){
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
     
            const data = await res.json();
            if(data && data.length) setData(data);
         }
         getData();
    })
  return (
    <div>
        <ul>
            {data.map((value)=>(
                <li key={value.id}>{value.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default FetchDataEffect