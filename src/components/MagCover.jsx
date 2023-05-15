import React from 'react'
import { useEffect } from 'react'

function MagCover({ item }) {

    useEffect(() => {
        console.log(item)
    }, [item])

    return (

        <div className='flex flex-row  h-screen items-center'>

            <div className='flex flex-col h-full'>
                <div className='ml-5 mr-5 mt-auto mb-auto w-10'>
                        {item.text}
                </div>
            </div>



            <div className='ml-auto md:mr-auto flex flex-col h-screen p-auto'>
                <div className=' mt-auto mb-auto'>
                    <img src={item.img} alt="" className='max-w-[60vw] max-h-[80vh]' />
                </div>
            </div>

        </div>

    )
}

export default MagCover