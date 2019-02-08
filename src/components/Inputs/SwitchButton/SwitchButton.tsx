import * as React from 'react';
import './SwitchButton.scss';

export default (props: any) => {
    let buttons = props.settings.buttons.map((button: any, index: number) => {
        return (
            <label key={ index }>
                <input
                    type="radio"
                    name={ props.settings.name }
                    value={ button.value }
                    disabled={ props.settings.disabled || false }
                />
                <div className="mark">
                    { button.image() }
                    <span className="label">{ button.label }</span>
                </div>
            </label>
        );
    });
    return (
        <div className="switch">
            { buttons }
        </div>
    );
};