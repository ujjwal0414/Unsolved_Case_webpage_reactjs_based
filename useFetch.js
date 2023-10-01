import { useEffect,useState } from "react";
let useFetch=(url)=>{
    const [data,setNew]=useState(null);
  const [isLoading,setLoading]=useState(true);
 
useEffect(()=>{
  fetch(url)
  .then(res=>{
    if(!res.ok){
      throw Error('Could not load data');

    }
    return res.json();
  })
  .then(datax=>{
    
    setNew(datax);
    setLoading(false);
  })
  .catch(err=>{
    console.log(err.message);
  })
},[url]);
return {data,isLoading};
}
export {useFetch};