import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/afzalhamdulay1')
    //     .then(resp => resp.json())
    //     .then(data => setData(data))
    // },[])


  return (
    <div className='tex-center m-4 bg-gray-500 text-white text-3xl p-5'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git profile pic" width="300" height="300"/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/afzalhamdulay1')
    return response.json();
}