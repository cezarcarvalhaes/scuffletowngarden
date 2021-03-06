import React from 'react';

const FacebookIcon = (props) => (
   // facebook 'f' isn't quite centered, can't use mx-auto
   <svg className={`d-block my-auto ${props.additionalClasses}`} style={{width:'1em'}} role="img" viewBox="0 0 448 512">
      <path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"/>
   </svg>
);

export default FacebookIcon;