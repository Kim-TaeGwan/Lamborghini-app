import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><style>.a,.b{fill:#545454;}.a{opacity:0;}</style></defs><rect class="a" width="20" height="20"/><path class="b" d="M14.833,7.018H14V5.443a3.333,3.333,0,1,0-6.667,0V7.018H6.5A2.5,2.5,0,0,0,4,9.518v6.667a2.5,2.5,0,0,0,2.5,2.5h8.333a2.5,2.5,0,0,0,2.5-2.5V9.518A2.5,2.5,0,0,0,14.833,7.018ZM9,5.443a1.669,1.669,0,1,1,3.333,0V7.018H9Zm6.667,10.742a.833.833,0,0,1-.833.833H6.5a.833.833,0,0,1-.833-.833V9.518A.833.833,0,0,1,6.5,8.685h8.333a.833.833,0,0,1,.833.833Z" transform="translate(-0.667 -0.352)"/><path class="b" d="M11.5,12A2.5,2.5,0,1,0,14,14.5,2.5,2.5,0,0,0,11.5,12Zm0,3.333a.833.833,0,1,1,.833-.833A.833.833,0,0,1,11.5,15.333Z" transform="translate(-1.5 -2)"/></svg>
  `;
export default () => <SvgCss xml={xml} width={'100%'} height={'100%'} />;
