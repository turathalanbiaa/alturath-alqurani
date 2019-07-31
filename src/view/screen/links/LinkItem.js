import React from 'react';
import Grid from 'semantic-ui-react/dist/es/collections/Grid'

export default class LinkItem extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {showOverlay: false};
    }

    render()
    {
        return (
            <Grid.Column className="link-item" textAlign="center">
                <div className="image-wrapper"
                     onMouseEnter={() => this.setState({showOverlay: true})}
                     onMouseLeave={() => this.setState({showOverlay: false})}>
                    <a href={this.props.link} target="_blank" className={"image-overlay " + (this.state.showOverlay ? 'show' : '')}>
                        {this.props.title}
                    </a>
                    <img alt="Placeholder" className="image" src={"/storage/link/image/" + this.props.image}/>
                </div>
                <h5 className="title"><a target="_blank" href={this.props.link}>{this.props.title}</a></h5>
            </Grid.Column>
        )
    }
}