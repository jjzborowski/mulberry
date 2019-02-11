import * as React from 'react';
import { Component } from 'react';
import './Tabs.scss';

class Tabs extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { ...this.props.settings };
    }

    switchTab = (index: number): void => {
        this.setState(() => ({ active: index }));
    };

    render(): React.ReactNode {
        let tabs = this.state.tabs.map((tab: any, index: number) => {
            return !tab.disabled ? (
                <div
                    className={ `tab ${ this.state.active === index ? 'tab-active' : '' }` }
                    key={ index }
                    onClick={ this.switchTab.bind(this, index) }
                >
                    { tab.image() }
                    <span className="tab-label">
                        { tab.label }
                    </span>
                </div>
            ) : null;
        });
        let content = this.state.tabs.map((tab: any, index: number) => {
            return !tab.disabled ? (
                <div
                    className={ `tab-content ${ this.state.active === index ? 'tab-active' : '' }` }
                    key={ index }
                >
                    { tab.content }
                </div>
            ) : null;
        });
        return (
            <div className="tabs">
                <div className="tabs-container">
                    { tabs }
                </div>
                { content }
            </div>
        );
    }
}

export default Tabs;