import * as React from 'react';
import './Radio.scss';

export default (props: any) => {
    return (
        <label className={'radio'}>
            <input
                type={'radio'}
                name={props.name}
                value={props.value}
                disabled={props.disabled || false}
            />
            <div className={'mark'}></div>
        </label>
    );
};