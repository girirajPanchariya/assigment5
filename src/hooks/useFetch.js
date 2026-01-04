import React, { useCallback, useEffect, useState } from 'react'

const useFetch =  (url)=> {
const [data,setdata] = useState([])
const [error,seterror] = useState(null)
const [loding,setloding] = useState(true)


    const fetchdata = useCallback(async () =>{
            setloding(true)
            seterror(null)
        
            try {
                const respons = await fetch(url)

                    if(!respons.ok){
                        seterror('The are not fetch any data')
                    }

                    const result = await respons.json()
                    
                    setdata(result)



            } catch (error) {
                    seterror("the user not found")
                    
            }finally{
                setloding(false)
            }
    },[url])

    useEffect(()=>{
        fetchdata()
    },[fetchdata])

    return {error,loding,data}
}

export default useFetch