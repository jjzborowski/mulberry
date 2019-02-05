import * as React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_LANG } from '../../constants/constants';
import TRANSLATE from '../../constants/dictionary';

export default () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">{ TRANSLATE(DEFAULT_LANG, 'l_home') }</Link>
                </li>
                <li>
                    <Link to="/contact/">{ TRANSLATE(DEFAULT_LANG, 'l_contact') }</Link>
                </li>
            </ul>
        </nav>
    );
}