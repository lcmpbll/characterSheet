import React, { useMemo, memo, useState, useEffect, createContext, useContext } from 'react';
import { Box } from '@mui/material';
import { SmallClickableDetailItem } from '../Lists/SmallDetailItem';
import { withData } from '../../HOC/withFormData';
import { SplitScreen } from '../Divisions/SplitScreen';
import { ApiList } from '../Lists';

export const SpellContext = createContext();
const Spells = () => {
  const [url, setUrl] = useState('/api/spells');
  const [detailUrl, setDetailUrl] = useState('');
  const SpellListWithData = useMemo(() => withData(ApiList, url));
  const MemorizedSpellList = useMemo(
    () => memo(() => 

      <SpellListWithData resourceName={'Item'} itemComponent={SmallClickableDetailItem} />

    ),
    []
  )
  return (
    
    <div>
      
        <MemorizedSpellList />
    </div>
  )
}

export default Spells;

