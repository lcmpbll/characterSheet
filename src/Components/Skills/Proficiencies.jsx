import React from 'react';

export const ProficienciesList = ({profs = {
  Arc: 3,
  His: 3,
  Inv: 1,
  Nat: 4,
}}) => {

  const profieciencies = [
    { 
      name: 'Acrobatics',
      skill: 'DEX',
      ref: 'Acr'
    },   
    { 
      name: 'Animal Handling',
      skill: 'WIS',
      ref: 'Ani'
    },
    { 
      name: 'Arcana',
      skill: 'INT',
      ref: 'Arc'
    },
    { 
      name: 'Athletics',
      skill: 'STR',
      ref: 'Ath'
    },
    { 
      name: 'Deception',
      skill: 'CHA',
      ref: 'Dec'
    },
    { 
      name: 'History',
      skill: 'INT',
      ref: 'His'
    },
    { 
      name: 'Insight',
      skill: 'WIS',
      ref: 'Ins'
    },
    { 
      name: 'Intimidation',
      skill: 'CHA',
      ref: 'Int'
    },
    { 
      name: 'Investigation',
      skill: 'INT',
      ref: 'Inv'
    },
    { 
      name: 'Medicine',
      skill: 'WIS',
      ref: 'Med'
    },
    { 
      name: 'Nature',
      skill: 'INT',
      ref: 'Nat'
    },
    { 
      name: 'Perception',
      skill: 'WIS',
      ref: 'Perc'
    },
    { 
      name: 'Performance',
      skill: 'CHA',
      ref: 'Perf'
    },
    { 
      name: 'Persuasion',
      skill: 'CHA',
      ref: 'Pers'
    },
    { 
      name: 'Religion',
      skill: 'INT',
      ref: 'Rel'
    },
    { 
      name: 'Sleight of Hand',
      skill: 'DEX',
      ref: 'Soh'
    },
    { 
      name: 'Stealth',
      skill: 'DEX',
      ref: 'Ste'
    },
    { 
      name: 'Survival',
      skill: 'WIS',
      ref: 'Sur'
    },
  ]
  
  return (
    <div style={{border: '3px double black', padding: '3px', borderRadius: '3px'}}>
      {profieciencies.map((prof, index) => {
        return(
          <div style={{display: 'flex', flexDirection: 'row', }} key={index}>
            <p style={{marginRight: '3px', borderBottom: '2px solid black', fontSize: '10px', width: '2rem'}}>{profs[prof.ref] ? profs[prof.ref] : null}</p>
            <p style={{fontSize: '8px'}}>{prof.name} ({prof.skill})</p>
          </div>
        )
      })}
    </div>
  )
}


export const SavingThrows = ({saves = {}, pb}) => {
  const throws = [
    {
      name: 'Strength',
      ref: 'STR'
    },
    {
      name: 'Dexterity',
      ref: 'DEX'
    },
    {
      name: 'Constitution',
      ref: 'CON'
    },
    {
      name: 'Intelegence',
      ref: 'INT'
    },
    {
      name: 'Wisdom',
      ref: 'WIS'
    },
    {
      name: 'Charisma',
      ref: 'CHA'
    }
  ]
  return (
    <div style={{border: '1px double black', padding: '3px', borderRadius: '10px'}}>
      {throws.map((save, index) => {
        return (
          <div style={{display: 'flex', flexDirection: 'row', }} key={index}>
            <p style={{marginRight: '3px', borderBottom: '2px solid black', fontSize: '10px', width: '2rem'}}>{saves[save.ref] ? saves[save.ref] + pb : null}</p>
            <p style={{fontSize: '8px'}}>{save.name}</p>
          </div>
      )
      })}
      <p style={{fontSize: '8px'}}>Saving Throws</p>
    </div>
    
  );
}