
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


export const withDoubleData = (Component, urls) => {
  return props => {
    const [data, setData] = useState({});
    // let dataArray = [];
    useEffect(() => {
      (async () => {
        const response = await fetch(`https://www.dnd5eapi.co${urls[0]}`).then(response => {
          if(!response.ok){
            throw new Error (`${response.status}: ${response.statusText}`);
          } else {
            return response.json()
          }
        }).then((jsonifiedResponse) => {
          let newData = {classes: jsonifiedResponse.results};
          setData(newData);
          
        })
        
        
      })();
      (async () => {
        const response2 = await fetch(`https://www.dnd5eapi.co${urls[1]}`).then(response => {
          if(!response2.ok){
            throw new Error (`${response2.status}: ${response2.statusText}`);
          } else {
            return response2.json()
          }
        }).then((jsonifiedResponse2) => {
          // dataArray.push(jsonifiedResponse.results);
          // let newData = data.push(jsonifiedResponse.results)
          setData({...data, races: jsonifiedResponse2.results});
          console.log(data, 'backend2')
        })
        
        
      })();
    }, [urls])
    return <Component {...props} data={data} />
  }
}


