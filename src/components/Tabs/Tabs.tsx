import * as React from 'react';
import './Tabs.scss';

export default (props: any) => {
    let tabs = props.settings.tabs.map((tab: any, index: number) => {
        return (
            <label
                className="tab"
                key={ index }
                htmlFor={ props.settings.name + index }
            >
                { tab.label }
            </label>
        );
    });
    let content = props.settings.tabs.map((tab: any, index: number) => {
        return !tab.disable ? (
            <span
                className="tab-content-wrapper"
                key={ index }
            >
                <input
                    type="radio"
                    name={ props.settings.name }
                    id={ props.settings.name + index }
                />
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