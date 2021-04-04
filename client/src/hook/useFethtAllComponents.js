import { useState, useEffect } from 'react';

const useGetAllStaff = (url,) => {
  const   [state, setState] = useState([]);
    useEffect(() => {
        fetch(url,{
          
        })
            .then(res => res.json())
            .then(result=>setState(result))
            .catch(err=>console.log(err))
    },[url])
    return [
        state,
    ];
}

export default useGetAllStaff;