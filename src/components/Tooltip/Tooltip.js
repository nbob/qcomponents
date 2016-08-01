import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import _pick from 'lodash/pick';
import _toPairs from 'lodash/toPairs';
import _maxBy from 'lodash/maxBy';
import _values from 'lodash/values';

import { ClassNameMixin } from '../Mixins';
import { Coords } from '../Utils';

class Tooltip extends React.Component {

    static componentName = 'tooltip';

    static propTypes = {
        direction: React.PropTypes.oneOf([
            'auto', 'top', 'right', 'bottom', 'left'
        ]),
        padding: React.PropTypes.number
    }

    static directionPositionMap = {
        'top': [['top', 'bottom'], ['center', 'center']],
        'bottom': [['bottom', 'top'], ['center', 'center']],
        'left': [['middle', 'middle'], ['left', 'right']],
        'right': [['middle', 'middle'], ['right', 'left']],
    };

    static defaultProps = {
        position: 'top',
        padding: 5
    }

    calcPosition(el) {
        if (!el) {
            return;
        }

        let parentRect = this._parent.getBoundingClientRect(),
            elRect = el.getBoundingClientRect(),
            side;

        if (this.props.position == 'auto') {
            let position = _pick(
                parentRect,
                ['top', 'right', 'bottom', 'left']
            );
            position['bottom'] = window.innerHeight - position['bottom'];
            position['right'] = window.innerWidth - position['right'];
            position = _toPairs(position);
            side = _maxBy(position, s => s[1])[0];
        } else {
            side = this.props.position;
        }
        let pos = {};
        if (side == 'top') {
            pos['top'] = -parentRect.height -elRect.height - this.props.padding;
            pos['left'] = (parentRect.width - elRect.width) / 2;
        } else if (side == 'bottom') {
            pos['top'] = this.props.padding;
            pos['left'] = (parentRect.width - elRect.width) / 2;
        } else if (side == 'left') {
            pos['top'] = -parentRect.height - (elRect.height - parentRect.height) / 2;
            pos['left'] = -elRect.width - this.props.padding;
        } else if (side == 'right') {
            pos['top'] = -parentRect.height - (elRect.height - parentRect.height) / 2;
            pos['left'] = parentRect.width + this.props.padding;
        }
        el.style.top = pos.top + 'px';
        el.style.left = pos.left + 'px';
        el.style.bottom = pos.bottom + 'px';
        el.style.right = pos.right + 'px';
    }

    hideTooltip() {
        this._visible = false;
        this.forceUpdate();
    }

    showTooltip(ev) {
        if (ev.target == this._el) {
            return;
        }
        this._visible = true;
        this.forceUpdate();
    }

    componentDidMount() {
        this._visible = false;
        this._parent = ReactDOM.findDOMNode(this).parentNode;
        this._parent.addEventListener('mouseover', this.showTooltip.bind(this));
        this._parent.addEventListener('mouseleave', this.hideTooltip.bind(this));
    }

    componentWillUnmount() {
        this._parent.removeEventListener('mouseenter', this.showTooltip);
        this._parent.removeEventListener('mouseleave', this.hideTooltip);
    }

    render() {
        let tooltip = null;
        if (this._visible) {
            tooltip = (
                <div
                        className="q-tooltip-container"
                        ref={this.calcPosition.bind(this)}>
                    {this.props.children}
                </div>
            );
        }
        return (
            <div className={this.getClassNames()}>
                <ReactCSSTransitionGroup
                        transitionName="q-tooltip"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                            {tooltip}
                </ReactCSSTransitionGroup>
            </div>
        )
    }

}

export default ClassNameMixin(Tooltip);
