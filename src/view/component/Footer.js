import React , {Component} from 'react';
import Container from 'semantic-ui-react/dist/es/elements/Container'
import List from 'semantic-ui-react/dist/es/elements/List'
import Grid from 'semantic-ui-react/dist/es/collections/Grid'
import GridColumn from 'semantic-ui-react/dist/es/collections/Grid/GridColumn'


export default class Footer extends Component
{

    render()
    {
        return (
            <div id="footer" style={this.props.style} className="section">
                <Container>

                    <Grid stackable columns={4}>

                        <GridColumn style={{textAlign : 'center'}} >

                            <img alt="LOGO" width={'76px'} height={'76px'} src="/images/logo.png" style={{borderRadius : '100%'}} />

                        </GridColumn>

                        <GridColumn >

                            <List bulleted>

                                <List.Item>
                                    <List.Content>
                                        <a href="/library">المكتبة الرقمية</a>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <a href="/audio-library">المكتبة الصوتية</a>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <a href="/video-library">المكتبة المرئية</a>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <a href="/links">مؤسسات قرانية</a>
                                    </List.Content>
                                </List.Item>

                            </List>

                        </GridColumn>



                        <GridColumn >

                            <List id="social" bulleted>

                                <List.Item>
                                    <List.Icon name="telegram" />
                                    <List.Content>
                                        <a href="/library">Telegram</a>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name="facebook" />
                                    <List.Content>
                                        <a href="/audio-library">Facebook</a>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name="instagram" />
                                    <List.Content>
                                        <a href="/video-library">Instagram</a>
                                    </List.Content>
                                </List.Item>

                            </List>

                        </GridColumn>


                        <GridColumn >

                            <List bulleted>

                                <List.Item>
                                    <List.Content>
                                        {'النجف - المدينة القديمة - الحويش'}
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content style={{direction : 'ltr' , textAlign : 'right'}}>
                                        {'+9647731881800'}
                                    </List.Content>
                                </List.Item>

                                <List.Item>
                                    <List.Content>
                                        {'info@website.com'}
                                    </List.Content>
                                </List.Item>

                            </List>

                        </GridColumn>


                    </Grid>

                </Container>
            </div>
        )
    }
    
}
