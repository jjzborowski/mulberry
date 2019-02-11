import * as React from 'react';
import './Home.scss';
import { DEFAULT_LANG } from '../../constants/constants';
import TRANSLATE from '../../utilities/translate';
import Radio from '../Inputs/Radio/Radio';
import SwitchButton from '../Inputs/SwitchButton/SwitchButton';
import Tabs from '../Tabs/Tabs';
import image1 from '../../images/icon-brand-inactive.svg';
import image2 from '../../images/icon-user-inactive.svg';

const switch_setting = {
    name: 'switch',
    disabled: false,
    buttons: [
        {
            value: 'on',
            label: 'BRAND',
            image: image1,
            checked: ''
        },
        {
            value: 'off',
            label: 'CUSTOMER',
            image: image2,
            checked: 'checked'
        }
    ]
};

const tabs_setting = {
    name: 'tabs',
    tabs: [
        {
            label: 'Unlock Revenue',
            image: image1,
            content: 'tab 1',
            active: true
        },
        {
            label: 'Boost Customer Loyalty',
            image: image1,
            content: 'tab 2',
            active: false
        },
        {
            label: 'Holistic Customer Experience',
            image: image1,
            content: 'tab 3',
            active: false
        }
    ]
};

export default () => {
    return (
        <div className="home">
            <span>{ TRANSLATE(DEFAULT_LANG, 'l_home') }</span>
            <div>
                <button className="button button-primary">test primary</button>
            </div>
            <br/>
            <div>
                <button className="button button-secondary">test secondary</button>
            </div>
            <br/>
            <div>
                <form>
                    <Radio
                        name={ 'test' }
                        value={ 'a' }
                    />
                    <Radio
                        name={ 'test' }
                        value={ 'b' }
                    />
                    <Radio
                        name={ 'test' }
                        value={ 'c' }
                        disabled={ true }
                    />
                    <hr/>
                    <SwitchButton settings={ switch_setting }/>
                </form>
            </div>
            <hr/>
            <Tabs settings={ tabs_setting }/>
        </div>
    );
}
