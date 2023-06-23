import React from 'react'


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


