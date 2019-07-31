import React, {Component} from 'react';
import Menu from 'semantic-ui-react/dist/es/collections/Menu';
import Icon from 'semantic-ui-react/dist/es/elements/Icon';
import Container from 'semantic-ui-react/dist/es/elements/Container';
import Header from 'semantic-ui-react/dist/es/elements/Header';
import {Link} from 'react-router-dom';
import MobileMenu from './../screen/home/Menu'

export default class HeaderWithImage extends Component
{
    state = {showMenu : false};

    render()
    {
        const {activeItem} = this.state;

        return (
            <Container fluid style={{...styles.wrapper , backgroundImage : `url('${this.props.imageUrl}')`}}>

                <MobileMenu show={this.state.showMenu} close={() => this.setState({showMenu: false})}/>

                <div style={styles.menuWrapper}>
                    <Container>
                        <Menu style={{padding : '8px'}} id="navbar" className={'page-navbar'}>

                            <Link to="/" className={"item " + (activeItem === 'home')}>الرئيسية</Link>
                            <Link to="/books-library" className={"item " + (activeItem === 'library')}>المكتبة الرقمية</Link>
                            <Link to="/audio-library" className={"item " + (activeItem === 'audio')}>المكتبة الصوتية</Link>
                            <Link to="/video-library" className={"item " + (activeItem === 'video')}>المكتبة المرئية</Link>
                            <Link to="/links" className={"item " + (activeItem === 'links')}>مؤسسات قرانية</Link>



                            <Menu.Menu position="left">
                                <div>
                                    <a rel="noopener noreferrer"  style={{marginTop : '5px'}} target="_blank" href="https://facebook.com" className="ui circular icon button social-icon">
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
                            <a style={{color : 'rgb(255, 201, 93)' , cursor : 'pointer' , fontSize : '30px'}} onClick={() => this.setState({showMenu: true})}>
                                <Icon style={{marginTop : '10px'}} className="hamburger" name="bars"/>
                            </a>
                        </div>

                        <Header size={'large'} inverted style={{fontWeight : 'normal' , color : '#FFC95D'}}>

                            {this.props.title}
                        </Header>

                    </Container>
                </div>

                <div style={styles.overlay}/>

            </Container>
        )
    }

}


const styles = {

    wrapper : {
        position : 'relative',
        height : '180px',
        backgroundAttachment : 'fixed',
        backgroundPosition : 'top left',
        backgroundSize : '100% auto',
        overflow : 'hidden',
        padding : '20px'
    },

    menuWrapper : {
        position : 'absolute',
        width : '100%',
        paddingTop : '10px',
        zIndex : 1
    },

    overlay : {
        position : 'absolute',
        backgroundColor : '#2B2B2BCC',
        top : 0,
        left : 0,
        bottom : 0,
        right : 0
    }

};