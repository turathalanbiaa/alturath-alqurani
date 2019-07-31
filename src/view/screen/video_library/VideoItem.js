import React from 'react';
import Grid from 'semantic-ui-react/dist/es/collections/Grid'

export default class VideoItem extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {showOverlay: false};
    }

    render()
    {
        return (
            <Grid.Column className="video-item" textAlign="center">
                <div className="image-wrapper"
                     onMouseEnter={() => this.setState({showOverlay: true})}
                     onMouseLeave={() => this.setState({showOverlay: false})}>
                    <a onClick={() => this.props.onOpenVideo(this.props.file , this.props.image)} className={"image-overlay " + (this.state.showOverlay ? 'show' : '')}>
                        <i className="play icon"/>
                    </a>
                    <img alt="Placeholder" className="image" src={"/storage/video/image/" + this.props.image}/>
                </div>
                <h5 className="title">{this.props.name}</h5>
            </Grid.Column>
        )
    }
}