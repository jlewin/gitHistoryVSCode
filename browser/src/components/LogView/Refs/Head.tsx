import { Ref } from '../../../definitions';
import * as React from 'react';
// tslint:disable-next-line:no-require-imports no-var-requires
const octicons = require('octicons');

export default function HeadRef(props: Ref) {
    const svg = { __html: octicons["git-branch"].toSVG({ "viewBox": '0 0 14 16' }) };
    return (<div className='refs commit-head-container'>
                <span dangerouslySetInnerHTML={svg} />
                <span title={props.name}>{props.name}</span>
            </div>);
}
