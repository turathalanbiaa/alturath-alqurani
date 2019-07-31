import React , {Component} from 'react';
import Container from 'semantic-ui-react/dist/es/elements/Container';
import TypedElement from "./TypedElement";
import animateScrollTo from 'animated-scroll-to';

export default class HomeMainSection extends Component
{

    render()
    {
        return (
            <div style={styles.main}>

                <div style={styles.overlay}/>

                <div style={styles.containerWrapper}>
                    <Container style={styles.container}>

                        <div style={styles.brandInfo}>

                            <div style={styles.brandTitle}>
                                <h1 style={{fontSize : '42px',fontWeight : 'normal'}}>التراث القرآني</h1>
                                <TypedElement style={{fontSize : '28px',fontWeight : 'normal'}} strings={[
                                    'مكتبة رقمية',
                                    'مكتبة صوتية',
                                    'مكتبة مرئية',
                                    'مؤسسات قرانية',
                                ]}/>
                            </div>

                            <img alt="figure" className="spin-animation" style={styles.brandImage} src="images/figure_1.png" />

                        </div>

                        <div style={{textAlign : 'center'}}>
                            <a style={{cursor:'pointer'}} onClick={() => animateScrollTo(document.querySelector("#download"))}>
                                <img alt="down arrow" className="bounce-animation" width={'96px'} src="/images/down-arrow.png" />
                            </a>
                        </div>


                    </Container>
                </div>

            </div>
        )
    }
}


const styles = {

    main : {
        width : '100%',
        height : '100vh',
        position : 'relative' ,
        backgroundImage : "url('images/background.jpg')",
        backgroundPosition : 'bottom right' ,
        backgroundRepeat : 'no-repeat'
    },

    overlay : {
        position : 'absolute',
        background : '#070C2ABB',
        top : 0,
        left : 0,
        width : '100%',
        height : '100%'
    },

    containerWrapper : {
        position : 'absolute',
        width : '100%',
        zIndex : '1',
        height : '100%'
    },


    container : {
        display : 'flex',
        flexDirection : 'column' ,
        height : '100%',
        justifyContent: 'flex-end'
    },


    brandInfo : {
        alignSelf : 'flex-end',
        display: 'flex',
        flexDirection : 'row',
        width : '100%',
        minHeight : '160px',
        borderRight : '3px #FFC95D solid',
        paddingRight : '18px',
        justifyContent : 'space-between',
        marginBottom : '20%'
    },


    brandTitle : {
        color : '#FFC95D'
    },

    brandImage : {
        opacity : 0.3
    }

};