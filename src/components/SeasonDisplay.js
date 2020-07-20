import React from 'react';

const getSeason = (lattitude, month) => {
  if (month > 4 && month < 8){
    return lattitude > 0 ? 'summer' : 'winter';
  }
  if (month > 7 && month < 11){
    return lattitude > 0 ? 'autumn' : 'spring';
  }
  if (month > 10 && month < 2){
    return lattitude > 0 ? 'winter' : 'summer';
  } else {
    return lattitude > 0 ? 'spring' : 'autumn';
  }
}

const  SeasonDisplay = (props) => {

  const season = getSeason(props.latitude, new Date().getMonth());

  return(
    <div>
      {season}
    </div>
  );
}

export default SeasonDisplay;