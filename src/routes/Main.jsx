import React from 'react'
import { useEffect, useState } from 'react'
import MagCover from '../components/MagCover'

import magdata from "../public/magazines.json"

function Main() {
    const [data, setData] = useState(null);


    // Fetch data
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('magazines.json');
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    useEffect(()=>{
        null
    }, [data])


    if (!data) return (
        <div>
            <h1>Loading . . . </h1>
        </div>
    )

    return (
        <div className='h-full w-full flex flex-col'>
            {data.items.map((item) => (
                <MagCover item={item} />
            ))}

        </div>
    )
}

export default Main