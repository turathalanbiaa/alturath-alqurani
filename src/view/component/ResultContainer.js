import React, {Component} from 'react';
import Grid from 'semantic-ui-react/dist/es/collections/Grid';
import Loader from 'semantic-ui-react/dist/es/elements/Loader'
import Button from 'semantic-ui-react/dist/es/elements/Button'
import CategoriesColumn from "./CategoriesColumn";

export default class ResultContainer extends Component
{
    render()
    {
        let categories = this.props.categories && this.props.categories.length > 0;
        return (

            <div>
                <Grid stackable className="result-container">

                    {
                        categories ?
                            <CategoriesColumn
                                dispatch={this.props.dispatch}
                                fetchItemsByCategory={this.props.fetchItemsByCategory}
                                loading={this.props.categoryLoading} categories={this.props.categories}/>
                            :
                            null
                    }

                    <Grid.Column width={categories ? 12 : 16}>

                        <Grid stackable container columns={categories ? 3 : 4}
                              style={{padding: this.props.loading || this.props.categoryLoading ? '40px' : '0'}}>

                            <Loader active={this.props.loading} style={{top: '20px'}}/>
                            {
                                this.props.items.length === 0 && !this.props.loading ?
                                    <div style={{textAlign: 'center', width: '100%', padding: '10px 0'}}>
                                        <img alt="cloud" style={{margin: 'auto'}} className="ui small image"
                                             src={'/images/cloud.png'}/>

                                        <div style={{marginTop: 0}} className="ui medium header">
                                            {'لم يتم العثور على نتائج'}
                                        </div>

                                    </div>
                                    :
                                    this.props.items.map(this.props.renderItem)
                            }

                        </Grid>


                    </Grid.Column>


                </Grid>

                <div style={{textAlign : 'left', marginLeft: '14px', marginTop: '16px'}}>
                    {
                        this.props.loadingMore ?
                            <Loader active={true}/>
                            :
                            (
                                this.props.loading ?
                                    null
                                    :
                                    <Button onClick={this.props.loadMoreAction}
                                            style={{
                                                display: this.props.loadMoreButton ? 'inline-block' : 'none'
                                            }}>
                                        {'تحميل المزيد'}
                                    </Button>
                            )
                    }
                </div>

            </div>


        );
    }
}