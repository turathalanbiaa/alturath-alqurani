import React from 'react';
import Grid from 'semantic-ui-react/dist/es/collections/Grid';
import Button from 'semantic-ui-react/dist/es/elements/Button';
import './../../../styles/library.css';

export default class BookListItem extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {showOverlay: false};
    }

    render()
    {
        const appUrl = "http://quran.turathalanbiaa.com";
        let height = this.state.showOverlay ? '100%' : '0';
        let opacity = this.state.showOverlay ? '0' : '1';

        return (
            <Grid.Column>

                <div className="bookitem wrapper"
                     onMouseEnter={() => this.setState({showOverlay: true})}
                     onMouseLeave={() => this.setState({showOverlay: false})}>

                    <div className="image" style={{backgroundImage: `url('${appUrl}${this.props.image}')`}}/>

                    <div className="overlay" style={{height: height}}>
                        <Button as={'a'} href={appUrl + "books/download/" + this.props.file} target="_blank" className="button">تحميل</Button>
                        <Button as={'a'} href={appUrl + "books/view/" + this.props.file} target="_blank" className="light-grey button">مشاهدة</Button>
                    </div>

                    <div className="info" style={{opacity: opacity}}>
                        <span className="title">{this.props.title}</span>
                        <span className="category">{this.props.category}</span>
                    </div>

                </div>

            </Grid.Column>
        )
    }
}