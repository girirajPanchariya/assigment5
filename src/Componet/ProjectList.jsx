    import React from 'react'
    import useFetch from '../hooks/useFetch';

    const ProjectList = () => {
        const { data,error,loding} = useFetch(
            'https://api.escuelajs.co/api/v1/products'
        );
        if(loding){
            
            return( 
            <div className=' text-3xl min-h-screen  bg-black flex justify-between text-center items-center pl-110'>

                <h2 className='text-3xl text-green-800 '>Loding...</h2>
            </div>
            )
        }
        if(error){
             
             
            return <div className=' text-3xl min-h-screen bg-black flex justify-between text-center items-center pl-110'>

                <h2 className='text-3xl text-red-500'>Error:-{error}</h2>
            </div>
        }
    return (
            
        <div className=' text-3xl min-h-screen bg-gray-400 text-center text-white p-10'>
            
        <h1 className='text-center p-10 text-black font-bold italic text-5xl'>Prodect List</h1>

        <div className='grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   gap-7 border border-black  text-xl text-justify p-10'>
            { data && data.map((item)=>(
            <div className='grid grid-cols-1 hover:cursor-pointer bg-gray-800 rounded-2xl p-4  hover:scale-105 transform transition duration-300" ' key={item.id}>
                <p className=' text-center p-3'>Prodect image</p>
                <img className=' bg-gray-500 rounded-xl w-full h-56 object-cover p-5' src={item.images} alt={item.title}/>
                <p className=' text-2xl font-bold text-blue-300'> <span className='text-3xl up text-white font-serif italic'>Title: </span> {item.title}</p>
                <p className='text-start text-green-200 text-shadow-2xs '><span className='text-white uppercase'>Slug: </span>{item.slug}</p>
                <p className='text-green-500 text-3xl '><span className='text-white text-3xl font-bold italic'>Price ₹: </span>{item.price}₹</p>
                <p className='text-justify text-green-300 text-sm'><span className='text-start text-white text-2xl '>Description of prodect:</span>{item.description}</p>
                <div className='mt-4 bg-gray-700 p-4 rounded-xl'>
                <p>{item.category.name}</p>
                <p>{item.category.slug}</p>
                <img src={item.category.image} className=' w-50 h-28 object-cover rounded-lx mt-2' alt="" />
                </div>
            </div>
            ))
            }
        </div>
    </div>
    )
    }

    export default ProjectList