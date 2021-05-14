import * as React from 'react';
import {SvgCss} from 'react-native-svg';
const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="18.194" height="18.194" viewBox="0 0 18.194 18.194"><defs><style>.a{fill:#8f8a85;fill-rule:evenodd;}</style></defs><path class="a" d="M17.784,13.951a7.7,7.7,0,1,0-1.359,1.359l.041.043,4.084,4.084a.963.963,0,0,0,1.361-1.361l-4.084-4.084Zm-2-8.808a5.776,5.776,0,1,1-8.168,0A5.776,5.776,0,0,1,15.785,5.142Z" transform="translate(-4 -1.525)"/></svg>
`;

export default () => <SvgCss xml={xml} />;
