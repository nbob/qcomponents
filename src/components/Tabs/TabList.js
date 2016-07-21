import React from 'react';

const TabList = React.createClass({
    render() {
        return (
            <div className="tab-list">
                {this.props.children}
            </div>
        );
    }
});

export default TabList;
