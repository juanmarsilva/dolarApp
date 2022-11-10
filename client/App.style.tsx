import { useEffect, useState } from 'react';
import { Appearance } from 'react-native';

const theme = Appearance.getColorScheme();

export function tema (change?:any) {
  let tema = change? change : theme 

  return tema
}

export const colors = {
  // otherBackground: tema() === 'light'? '#e2e2e2' :'#252524',
  background:tema() === 'light'? '#c6c6c6' : '#1b1b1b',
  containersBack:  tema() === 'light'?'#ababab' :'#353535', 
  selected: '#338b85',
  selectedIntense: '#1e5955',
  text: tema() === 'light'?'#000' :'#fff' ,
  contrarianText: tema() === 'light'? '#fff':'#000',
  buttonContainer: '#344e41',
};

