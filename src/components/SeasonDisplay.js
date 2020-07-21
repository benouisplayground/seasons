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
};

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "wb_sunny"},
  winter : {
    text: "Burr, It's chill",
    iconName: "ac_unit"},
  spring :{
    text: "Spring is in the air",
    iconName: "local_florist"},
  autumn : {
    text: "Never fear, autumn is here",
    iconName: "nature"}
};

const  SeasonDisplay = (props) => {

  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return(
    <div className={`season-display ${season}`}>
      <i className="material-icons md-48 icon-left" >{iconName}</i>
      <h1 >{text}</h1>
      <i className="material-icons md-48 icon-right" >{iconName}</i>
    </div>
  );
}

export default SeasonDisplay;