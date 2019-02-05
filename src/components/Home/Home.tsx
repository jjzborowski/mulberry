import * as React from 'react';
import { DEFAULT_LANG } from '../../constants/constants';
import TRANSLATE from '../../constants/dictionary';

export default () => {
    return (
        <div>{ TRANSLATE(DEFAULT_LANG, 'l_home') }</div>
    );
}
