import React, {Component} from 'react';
import Container from 'semantic-ui-react/dist/es/elements/Container';
import HeaderWithImage from "../../component/HeaderWithImage";
import Footer from "../../component/Footer";
import './../../../styles/links.css';
import {toast} from 'react-toastify';
import {connect} from 'react-redux';

import LinkItem from './LinkItem'
import {fetchLinks} from "../../../data/action/links_action";
import ResultContainer from "../../component/ResultContainer";

class LinksPage extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {offset: 0};
        this.linksErrorExecuted = false;
    }

    componentDidMount()
    {
        this.props.dispatch(fetchLinks());
    }

    componentWillReceiveProps(nextProps)
    {
        if (nextProps.error && !this.linksErrorExecuted)
        {
            toast.error('حصلت مشكلة خلال تحميل البيانات', {
                position: toast.POSITION.BOTTOM_CENTER
            });
            this.linksErrorExecuted = true;
        }
    }

    render()
    {
        return (
            <div style={{backgroundColor: '#FFF'}}>

                <HeaderWithImage imageUrl={'/images/library.jpg'} title="الروابط القرانية"/>

                <Container style={{marginTop: '1em'}}>

                    <ResultContainer
                        dispatch={this.props.dispatch}
                        items={this.props.links}
                        loading={this.props.loading}
                        renderItem={(item) => <LinkItem key={item.key} {...item}/>}
                    />

                </Container>

                <Footer style={{marginTop: '1em'}}/>

            </div>
        )
    }
}


let mapStateToProps = (state) =>
{
    return {
        loading: state.links.loading,
        links: state.links.links,
        error: state.links.error,
    }
};

export default connect(mapStateToProps)(LinksPage);
