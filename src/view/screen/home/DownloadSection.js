import React, {Component} from 'react';
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Button from 'semantic-ui-react/dist/es/elements/Button'
import Icon from 'semantic-ui-react/dist/es/elements/Icon'
import Visibility from 'semantic-ui-react/dist/es/behaviors/Visibility'

export default class DownloadSection extends Component
{
    constructor(props)
    {
        super(props);
        this.imageElement = null;
    }

    render()
    {
        return (

            <div id="download" style={styles.section} className="section">

                <Container style={styles.content} textAlign={'center'}>

                    <Visibility onOnScreen={() =>
                    {
                        this.imageElement.className = this.imageElement.className + " fadeIn animated";
                    }}>
                        <img alt="Quran" ref={ref => this.imageElement = ref}
                             style={{borderRadius: '5px', animationDelay: '0.5s', opacity: 0}}
                             width={'260px'}
                             height={'360px'} src="/images/quran.png"/>
                    </Visibility>

                    <h1 style={{color: '#FFF' , fontWeight : 'normal'}}>يمكنك الان تحميل او مشاهدة نسخة من القران الكريم</h1>
                    <div>
                        <Button target="_blank" as="a" href="/download/quran" size={'massive'} style={{width : '260px' , marginTop : '5px'}} color={'teal'} icon labelPosition={'left'}>
                            {'تحميل '}
                            <Icon name='download'/>
                        </Button>
                        <Button target="_blank" as="a" href="/view/quran" size={'massive'} style={{width : '260px' , marginTop : '5px'}} color={'orange'} icon labelPosition={'left'}>
                            {'مشاهدة'}
                            <Icon name='file'/>
                        </Button>
                    </div>

                </Container>

                <div style={styles.overlay}/>

            </div>

        )
    }
}


const styles = {

    section: {
        position: 'relative',
        width: '100%',
        backgroundImage: "url('/images/background_2.jpg')",
        backgroundAttachment: 'fixed',
        height: '720px',
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