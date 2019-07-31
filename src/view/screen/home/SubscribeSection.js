import React, {Component} from 'react';
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Form from 'semantic-ui-react/dist/es/collections/Form'
import Button from 'semantic-ui-react/dist/es/elements/Button'
import Grid from 'semantic-ui-react/dist/es/collections/Grid'
import GridColumn from 'semantic-ui-react/dist/es/collections/Grid/GridColumn'
import Header from 'semantic-ui-react/dist/es/elements/Header';
import Visibility from 'semantic-ui-react/dist/es/behaviors/Visibility';
import {subscribe} from './../../../data/action/other_actions';
import {connect} from 'react-redux';
import {toast} from 'react-toastify';

class SubscribeSection extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {value: ''};

        this.errorExecuted = false;
        this.successExecuted = false;
    }

    componentWillReceiveProps(nextProps)
    {
        if (nextProps.error && !this.errorExecuted)
        {
            toast.error('حصلت مشكلة خلال تحميل البيانات', {
                position: toast.POSITION.BOTTOM_CENTER
            });
            this.errorExecuted = true;
        }

        if (nextProps.success && !this.successExecuted)
        {
            toast.success('تم اشتراكك معنا', {
                position: toast.POSITION.BOTTOM_CENTER
            });
            this.successExecuted = true;
            this.setState({value : ''});
        }
    }

    render()
    {
        return (
            <div className="section" style={styles.section}>

                <div style={styles.overlay}/>

                <Container style={styles.content}>


                    <Grid stackable textAlign={'center'}>

                        <GridColumn width={12}>
                            <div ref={ref => this.formRef = ref}
                                 style={{animationDelay: '0.5s'}}
                            >

                                <Visibility onOnScreen={() =>
                                {
                                    this.formRef.className += "animated slideInUp";
                                }}>

                                    <Header size={'large'} style={{fontWeight: 'normal'}} inverted>
                                        {'اكتب بريدك الالكتروني ليصلك كل جديد'}
                                    </Header>

                                    <Form id="subscribe-form">

                                        <Form.Input value={this.state.value}
                                                    onChange={this.onChange}
                                                    placeholder="البريد الالكتروني"/>

                                        <Button onClick={() =>
                                        {
                                            this.props.dispatch(subscribe(this.state.value));
                                            this.errorExecuted = false;
                                        }} style={{backgroundColor: '#FFC95D'}} size="large">اشترك</Button>

                                    </Form>
                                </Visibility>

                            </div>
                        </GridColumn>

                    </Grid>

                </Container>
            </div>
        )
    }


    onChange = (e) =>
    {
        let value = e.target.value;
        this.setState({value: value});
    }


}


const styles = {

    section: {
        position: 'relative',
        width: '100%',
        backgroundImage: "url('/images/background_2.jpg')",
        backgroundAttachment: 'fixed',
        height: '320px',
        overflow: 'hidden'
    },

    overlay: {
        background: 'linear-gradient(to bottom,#070C2AAA,#0F0C2ACC)',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    },

    content: {
        zIndex: 99,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        padding: '100px 0'
    }

};

let mapStateToProps = (state) =>
{
    return {
        loading: state.subscribe.loading,
        error: state.subscribe.error,
        success: state.subscribe.success
    }
};

export default connect(mapStateToProps)(SubscribeSection);