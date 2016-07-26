import React from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Preloader = React.createClass({
    propTypes: {
        className: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.arrayOf(React.PropTypes.string),
            React.PropTypes.objectOf(React.PropTypes.string)
        ]),
        size: React.PropTypes.oneOf(['sm', 'md', 'lg']),
        theme: React.PropTypes.oneOf(['grey', 'white'])
    },
    getDefaultProps() {
        return {
            size: 'md',
            theme: 'grey'
        };
    },
    render() {
        let preloader;
        const preloaderClasses = [
            'q-preloader',
            this.props.className
        ];
        let key = 'hidden';
        if (this.props.loading) {
            key = 'loading';
            preloader= (
                <div className={classnames(preloaderClasses)} key={key}>
                <div className='q-backdrop'>
                    <div className="q-backdrop-container">
                        <span className="q-spin">
                            {this.props.children}
                        </span>
                    </div>
                </div>
                </div>
            );
        } else {
            preloader = null;
        }
        return (
            <ReactCSSTransitionGroup
                    transitionName="q-preloader"
                    transitionEnter={false}
                    transitionLeaveTimeout={500}>
                    {preloader}
            </ReactCSSTransitionGroup>
        );
    }
});

export { Preloader };
