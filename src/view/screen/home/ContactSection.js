import React , {Component} from 'react';
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Form from 'semantic-ui-react/dist/es/collections/Form'
import Grid from 'semantic-ui-react/dist/es/collections/Grid'
import GridColumn from 'semantic-ui-react/dist/es/collections/Grid/GridColumn'
import Visibility from 'semantic-ui-react/dist/es/behaviors/Visibility';

export default class ContactSection extends Component
{
    constructor(props){
        super(props);
        this.formRef = null;
    }

    render()
    {
        return (
            <div className="section" style={{padding : '40px 0'}}>
                <Container>

                    <Grid stackable>

                        <GridColumn width={8}>
                            <Visibility onOnScreen={() =>
                            {
                                this.formRef.className += ' animated slideInRight';
                            }}>
                                <div ref={ref => this.formRef = ref}
                                     style={{animationDelay: '0.5s'}}
                                >
                                    <Form id="contact-form">
                                        <Form.Input label="الاسم" placeholder="الاسم الثلاثي" />
                                        <Form.Input label="بريدك الالكتروني او رقم الهاتف" placeholder="بريدك الالكتروني او رقم الهاتف" />
                                        <Form.Input label="الموضوع" placeholder="الموضوع" />
                                        <Form.TextArea rows={10} label="الرسالة" placeholder="الرسالة" />
                                        <Form.Button style={{backgroundColor : '#FFC95D'}} size="large">ارسال</Form.Button>
                                    </Form>
                                </div>
                            </Visibility>
                        </GridColumn>

                        <GridColumn width={8}>

                            <div id="map">
                            </div>

                        </GridColumn>

                    </Grid>

                </Container>
            </div>
        )
    }
}
