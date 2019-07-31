import React , {Component} from 'react';
import Typed from 'typed.js';

export default class TypedElement extends Component
{
    componentDidMount()
    {
        const {strings} = this.props;

        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50,
            loop : true
        };

        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount()
    {
        this.typed.destroy();
    }

    render()
    {
        return (
            <span style={this.props.style} ref={el => this.el = el}>
            </span>
        );
    }
}
