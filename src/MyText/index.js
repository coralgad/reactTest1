import React, { useState } from 'react';

function MyText() {
 const [activeText, setActiveText] = useState('MOUSEOVER MY DIV');
 
 function mouseoverHandler(e) {
 setActiveText('text on mouseover');
 }
 function mouseoutHandler(e) {
 setActiveText('');
 }
 return (
 <div
 onMouseOver={mouseoverHandler}
 onMouseOut={mouseoutHandler}
 >
 MOUSEOVER MY DIV
 <div>
 {activeText}
 </div>
 </div>
 );
}
export default MyText;

