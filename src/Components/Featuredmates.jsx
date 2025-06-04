import React, { useEffect, useState } from 'react';
import Featurecard from './Featurecard';


const Featuredmates = () => {
   let [mate,setMate] = useState([]);
    useEffect(()=>{
        fetch('https://roommate-finder-server-flax.vercel.app/roommates')
        .then(res=>res.json())
        .then(data=>setMate(data))
    },[mate])
    return (
       <div>
        <h2 className='text-center text-blue-800 text-3xl poppins font-extrabold p-1'>Looking Your Roommates</h2>
         <p className='text-center text-gray-500 p-1'>Through this list you can find your mates according to your needs</p>
         <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
           
           {
            mate.map(singlemate=> <Featurecard key={singlemate._id} singlemate={singlemate}></Featurecard>)
           }
        </div>
       </div>
    );
};

export default Featuredmates;