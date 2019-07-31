import React, {Component} from 'react';
import Container from 'semantic-ui-react/dist/es/elements/Container';
import Icon from 'semantic-ui-react/dist/es/elements/Icon';
import Menu from 'semantic-ui-react/dist/es/collections/Menu';

import {Link} from 'react-router-dom';

export default class MenuNav extends Component
{
    state = {};

    render()
    {

        return (
            <div className="menu-nav">
                <Container style={styles.container}>

                    <Menu id="navbar">


                        <Link to="/" className={"item " }>الرئيسية</Link>
                        <Link to="/books-library" className={"item " }>المكتبة الرقمية</Link>
                        <Link to="/audio-library" className={"item " }>المكتبة الصوتية</Link>
                        <Link to="/video-library" className={"item " }>المكتبة المرئية</Link>
                        <Link to="/links" className={"item " }>مؤسسات قرانية</Link>



                        <Menu.Menu position="left">
                            <div>
                                <a rel="noopener noreferrer"  target="_blank" href="https://facebook.com" className="ui circular icon button social-icon">
                                    <i className="facebook f icon"/>
                                </a>

                                <a rel="noopener noreferrer"  target="_blank" href="https://facebook.com" className="ui circular icon button social-icon">
                                    <i className="telegram plane icon"/>
                                </a>

                                <a rel="noopener noreferrer"  target="_blank" href="https://facebook.com" className="ui circular icon button social-icon">
                                    <i className="instagram f icon"/>
                                </a>
                            </div>
                        </Menu.Menu>


                    </Menu>

                    <div id="hamburger">
                        <a style={{color : '#FFFFFF' , cursor : 'pointer'}} onClick={this.props.onClick}>
                            <Icon style={{marginTop : '10px'}} className="hamburger" name="bars"/>
                        </a>
                    </div>


                    <div id="social-icons">
                        <a rel="noopener noreferrer"  target="_blank" href="https://facebook.com" className="ui circular icon button social-icon">
                            <i className="facebook f icon"/>
                        </a>

                        <a rel="noopener noreferrer"  target="_blank" href="https://facebook.com" className="ui circular icon button social-icon">
                            <i className="telegram plane icon"/>
                        </a>

                        <a rel="noopener noreferrer"  target="_blank" href="https://facebook.com" className="ui circular icon button social-icon">
                            <i className="instagram f icon"/>
                        </a>
                    </div>

                </Container>
            </div>
        );
    }
}

const styles = {

    container : {
        display : 'flex',
        justifyContent : 'space-between',
    }

};