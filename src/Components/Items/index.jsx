import React, { useState } from 'react'
import vehicleList from '../../data/vehicles.json';
import itemsList from '../../data/items.json';
// import {Box} from '@mui/material';
import { RegularList } from '../Lists';
import SmallDetailItem from '../Lists/SmallDetailItem';
import { SplitScreen } from '../Divisions/SplitScreen';
import LargeDetailItem from './LargeDetailItem';

const allItems = itemsList.concat(vehicleList);



const Items = () => {
  const [selectedItem, setSelectedItem] = useState(allItems[0]);
  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={3}
    >
      <RegularList items={allItems} resourceName={'Item'} itemComponent={SmallDetailItem}/>
      <LargeDetailItem item={selectedItem}/>
    </SplitScreen>
  )
}

export default Items