import React from 'react';
import Loading from '../loading';


export const RegularList = ({
  items, 
  resourceName, 
  itemComponent: ItemComponent
}) => {
  return(
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{[resourceName]: item}} />
      ))}
    </>
  );
}

export const ApiList = ({
  data,
  resourceName,
  itemComponent: ItemComponent
}) => {
  const {
  results,
  } = data || {};
  return data ? (
    <>
      {results.map((item, index) => (
        <ItemComponent key={index} {...{[resourceName]: item}} />
      ))}
    </>
  ) : <Loading/> ;
}

export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent
}) => {
  return(
    <>
      {items.map((item, index) => (
        <>
          <h3>{index + 1}</h3> <ItemComponent key={index} {...{[resourceName]: item}} />
        </>
      ))}
    </>
  )
}


