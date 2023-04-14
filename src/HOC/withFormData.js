
import React, {useState, useEffect} from 'react';

export const withData = (Component, url) => {
  return props => {
    const [data, setData] = useState(null);
    useEffect(() => {
      (async () => {
        const response = await fetch(`https://www.dnd5eapi.co${url}`).then(response => {
          if(!response.ok){
            throw new Error (`${response.status}: ${response.statusText}`);
          } else {
            return response.json()
          }
        }).then((jsonifiedResponse) => {
          
          setData(jsonifiedResponse);
          
        })
        
        
      })();
    }, [])
    return <Component {...props} data={data} />
  }
}


