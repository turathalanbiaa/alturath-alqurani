import React , {Component} from 'react';
import Loader from 'semantic-ui-react/dist/es/elements/Loader'
import Grid from 'semantic-ui-react/dist/es/collections/Grid';

export default class CategoriesColumn extends Component
{
    render()
    {
        return (
            <Grid.Column style={{position: 'relative'}} width={4}>
                <div className="category list fixed">

                    <Loader active={this.props.loading} style={{top: '20px'}}/>

                    {
                        this.props.categories.map(item => <a
                            onClick={() => this.props.fetchItemsByCategory(item.id)}
                            key={item.id}
                            className="item">{item.name}</a>)
                    }

                </div>
            </Grid.Column>
        );
    }
}