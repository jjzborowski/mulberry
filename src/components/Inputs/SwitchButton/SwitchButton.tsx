import * as React from 'react';
import { Component } from 'react';
import './SwitchButton.scss';

class SwitchButton extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { ...this.props.settings };
    }

    switch = (index: number): void => {
        this.setState(() => ({ active: index }));
    };

    render(): React.ReactNode {
        let buttons = this.state.buttons.map((button: any, index: number) => {
            return (
                <div
                    className={ `button ${ this.state.active === index ? 'active' : '' }` }
                    onClick={ this.switch.bind(this, index) }
                    key={ index }
                >
                    { button.image() }
                    <span className="label">{ button.label }</span>
                </div>
            );
        });
        return (
            <div className="switch">
                { buttons }
            </div>
        );
    }
}

export default SwitchButton;