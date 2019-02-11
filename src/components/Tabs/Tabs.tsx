import * as React from 'react';
import { Component } from 'react';
import './Tabs.scss';

class Tabs extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { ...this.props.settings };
    }

    switchTab = (index: number) => {
        this.setState(state => {
            const tabs = [...state.tabs];
            tabs.forEach((tab, tabIndex) => {
                tab.active = tabIndex === index;
            });
            return { tabs: tabs };
        });
    };

    render() {
        let tabs = this.props.settings.tabs.map((tab: any, index: number) => {
            return !tab.disable ? (
                <div
                    className={ `tab ${tab.active ? 'tab-active' : ''}` }
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
        let content = this.props.settings.tabs.map((tab: any, index: number) => {
            return !tab.disable ? (
                <span
                    className={ `tab-content-wrapper ${tab.active ? 'tab-active' : ''}` }
                    key={ index }
                >
                    <div className="tab-content">
                        { tab.content }
                    </div>
                </span>
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