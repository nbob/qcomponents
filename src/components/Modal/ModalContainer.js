import React from 'react';
import math from 'lodash/math';
import obj from 'lodash/object';
import { ClassNameMixin } from '../Mixins/';

class ModalContainer extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    static componentName = 'modal-container';

    static defaultStyles = {
        maxWidth: 768,
        padding: [30, 15]
    };

    calculateStyles() {
        if (!this._el) {
            return;
        }
        let styles = obj.defaultsDeep(
            this.props.styles || {},
            this.constructor.defaultStyles
        );
        let windowWidth = window.innerWidth,
            windowHeight = window.innerHeight,
            containerWidth = math.min([
                windowWidth - styles.padding[1] * 2,
                styles.maxWidth
            ]);
        let left = (windowWidth - containerWidth) / 2;
        this._el.style.width = `${containerWidth}px`;
        this._el.style['margin-top'] = this._el.style['margin-bottom'] = `${styles.padding[0]}px`;
        this._el.style['left'] = this._el.style['right'] = `${left}px`;
    }

    componentDidMount() {
        this.calculateStyles();
        window.addEventListener('resize', this.calculateStyles.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.calculateStyles);
    }

    render() {
        return (
            <div className={this.getClassNames()} ref={el => this._el = el}>
                {this.props.children}
            </div>
        );
    }

}

export default ClassNameMixin(ModalContainer);
