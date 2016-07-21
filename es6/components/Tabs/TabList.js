import React from 'react';

var TabList = React.createClass({
    displayName: "TabList",
    render: function render() {
        return React.createElement(
            "div",
            { className: "tab-list" },
            this.props.children
        );
    }
});

export default TabList;