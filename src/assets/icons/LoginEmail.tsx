import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><style>.a,.b{fill:#545454;}.a{opacity:0;}</style></defs><g transform="translate(0 -0.288)"><rect class="a" width="20" height="20" transform="translate(0 0.288)"/><path class="b" d="M16.371,4H4.536A2.536,2.536,0,0,0,2,6.536v8.453a2.536,2.536,0,0,0,2.536,2.536H16.371a2.536,2.536,0,0,0,2.536-2.536V6.536A2.536,2.536,0,0,0,16.371,4ZM15.8,5.691,10.453,9.706,5.1,5.691Zm.566,10.144H4.536a.845.845,0,0,1-.845-.845V6.747l6.255,4.692a.845.845,0,0,0,1.014,0l6.255-4.692v8.242A.845.845,0,0,1,16.371,15.835Z" transform="translate(-0.309 -0.619)"/></g></svg>
`;
export default () => <SvgCss xml={xml} width={'100%'} height={'100%'} />;
