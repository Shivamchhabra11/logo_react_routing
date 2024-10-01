import React, { useState } from 'react'
import { useEffect } from 'react';

const Github = () => {
  const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://api.github.com/users/Shivamchhabra11')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      
    }, [])
    
  return (
    <div className='bg-gray-600 m-4 p-4 text-center text-3xl text-white'>Github Followers : {data.followers} 
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github