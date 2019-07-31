import React from 'react';

import './../../../styles/library.css';

export default class SoundItem extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {showOverlay: false, playing: false};
    }

    render()
    {
        const appUrl = "http://localhost:8000/";

        return (
            <div className="sound-item">

                <div className="title-action">

                    <div className="title-tag">
                        <span className="title">{this.props.name}</span>
                        <div className="tags">
                            <a data-id={this.props.categoryId} className="ui label">{this.props.categoryName}</a>
                        </div>
                    </div>

                    <div className="actions">

                        <button onClick={() => this.setState({playing: !this.state.playing})}
                                className="circular ui blue icon button"><i
                            className={'icon ' + (this.state.playing ? 'stop' : 'play')}/></button>
                        <a href={appUrl + "audio/download/" + this.props.file} target={'_blank'}
                           className="circular ui red icon button"><i className="icon download"/></a>

                    </div>

                </div>

                {
                    this.state.playing &&
                    <audio controls autoPlay>
                        <source src={"/storage/audio/mp3/" + this.props.file} type="audio/mpeg"/>
                    </audio>
                }

            </div>
        )
    }
}