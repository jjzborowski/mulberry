import * as React from 'react';
import './Switch.scss';

export default (props: any) => {
    let buttons = props.settings.buttons.map((button: any, index: number) => {
        return (
            <label key={index}>
                <input
                    type={'radio'}
                    name={props.settings.name}
                    value={button.value}
                    disabled={props.settings.disabled || false}
                />
                <div className={'mark'}>
                    <img src={`./images/${button.image}`}/>
                    {button.label}
                </div>
            </label>
        );
    });

  return (
    <div className={'switch'}>
        {buttons}
    </div>
  );
};