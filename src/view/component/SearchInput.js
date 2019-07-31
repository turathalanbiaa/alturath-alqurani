import React, {Component} from 'react';
import Grid from 'semantic-ui-react/dist/es/collections/Grid';

export default class SearchInput extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return (
            <Grid stackable>
                <Grid.Column width={4}>
                    <div className="search input">
                        <input disabled={this.props.loading} onChange={e => this.setState({value : e.target.value})}
                               style={{backgroundColor : this.props.loading ? '#EEE' :'#FFF'}}
                               type="text" placeholder="بحث..." onKeyPress={this.onKeyPressed}/>
                        <i className="search icon"/>
                    </div>
                </Grid.Column>
                <Grid.Column width={12}/>
            </Grid>
        )
    }

    onKeyPressed = (e) =>
    {
        if (e.key === "Enter")
        {
            this.props.onEnterPressed(this.state.value);
        }
    }
}