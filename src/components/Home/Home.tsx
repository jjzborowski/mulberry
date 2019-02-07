import * as React from 'react';
import './Home.scss';
import { DEFAULT_LANG } from '../../constants/constants';
import TRANSLATE from '../../utilities/translate';
import Radio from '../Inputs/Radio/Radio';
import Switch from '../Inputs/Switch/Switch';

const switch_setting = {
    name: 'switch',
    disabled: false,
    buttons: [
        {
            value: 'on',
            label: 'BRAND',
            image: 'icon-brand-active.svg',
            checked: ''
        },
        {
            value: 'off',
            label: 'CUSTOMER',
            image: 'icon-user-brand-inactive.svg',
            checked: 'checked'
        }
    ]
};

export default () => {
    return (
        <div className={'home'}>
            <span>{TRANSLATE(DEFAULT_LANG, 'l_home')}</span>
            <div>
                <button className={'button button-primary'}>test primary</button>
            </div>
            <br/>
            <div>
                <button className={'button button-secondary'}>test secondary</button>
            </div>
            <br/>
            <div>
                <form>
                <Radio name={'test'} value={'a'}/>
                <Radio name={'test'} value={'b'}/>
                <Radio name={'test'} value={'c'} disabled={true}/>
                    <hr/>
                    <Switch settings={switch_setting}/>
                </form>
            </div>
        </div>
    );
}
