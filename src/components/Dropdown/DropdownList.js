import React from 'react';
import classnames from 'classnames';
import _values from 'lodash/values';

import { ClassNameMixin } from 'qcomponents/lib/components/Mixins';
import { Coords } from '../Utils';

class DropdownList extends React.Component {

    static componentName = 'dropdown-list';

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            open: false
        }
    }

    static directionPositionMap = {
        vertical: {
            'top': ['top', 'bottom'],
            'bottom': ['bottom', 'top'],
        },
        horizontal: {
            'left': ['right', 'right'],
            'right': ['left', 'left']
        }
    };

    static contextTypes = {
        onDropDownListMount: React.PropTypes.func.isRequired
    }

    componentDidMount() {
        this.context.onDropDownListMount(this);
    }

    componentDidUpdate() {
        let btnEl = this.state.btnEl,
            direction = this.state.direction,
            open = this.state.open;

        if (open) {
            let allAligns = [];
            for (let vDir of Object.keys(DropdownList.directionPositionMap.vertical)) {
                for (let hDir of Object.keys(DropdownList.directionPositionMap.horizontal)) {
                    let vPosition = DropdownList.directionPositionMap.vertical[vDir],
                        hPosition = DropdownList.directionPositionMap.horizontal[hDir];
                    if (vDir == direction[0] && hDir == direction[1]) {
                        allAligns.splice(0, 0, [vPosition, hPosition]);
                    } else {
                        allAligns.push([vPosition, hPosition]);
                    }

                }
            }

            let coords = Coords.calcWindowOffsets(
                btnEl,
                this._el,
                _values(DropdownList.directionPositionMap.vertical),
                _values(DropdownList.directionPositionMap.horizontal)
            );
            let pos = Coords.getClientPosition(coords, allAligns);
            let newCoords = [
                coords.vertical[pos.vertical],
                coords.horizontal[pos.horizontal]
            ];

            this._el.style.top = newCoords[0].offset.top + 'px';
            this._el.style.left = newCoords[1].offset.left + 'px';
        }
    }

    render() {
        let classes = classnames([this.getClassNames(), {
            'q-dropdown-list-open': this.state.open
        }]);
        return (
            <ul className={classes} ref={el => this._el = el}>
                {this.props.children}
            </ul>
        )
    }
}

export default ClassNameMixin(DropdownList);
