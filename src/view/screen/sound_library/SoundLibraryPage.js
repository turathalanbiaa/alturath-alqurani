import React, {Component} from 'react';
import Container from 'semantic-ui-react/dist/es/elements/Container';
import HeaderWithImage from "../../component/HeaderWithImage";
import Footer from "../../component/Footer";
import './../../../styles/sound_library.css';
import SoundItem from "./SoundItem";
import {fetchAudioCategories} from "../../../data/action/category_actions";
import {fetchAudio, fetchAudioByCategory, fetchMoreAudio, searchForAudio} from "../../../data/action/audio_action";
import {toast} from 'react-toastify';
import SearchInput from "../../component/SearchInput";
import {connect} from 'react-redux';
import ResultContainer from "../../component/ResultContainer";

const LIMIT = 25;

class SoundLibraryPage extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {offset: 0 , currentCategoryId: 0 , shouldLoadMore: true};
        this.audioErrorExecuted = false;
        this.categoriesErrorExecuted = false;
    }

    componentDidMount()
    {
        this.props.dispatch(fetchAudio());
        this.props.dispatch(fetchAudioCategories());
    }

    onLoadMore = () =>
    {
        if (this.props.loadingMore || !this.state.shouldLoadMore)
        {
            return;
        }

        this.props.dispatch(fetchMoreAudio(this.props.audio.length, this.state.currentCategoryId));
    };

    componentWillReceiveProps(nextProps)
    {
        if (nextProps.error && !this.audioErrorExecuted)
        {
            toast.error('حصلت مشكلة خلال تحميل البيانات', {
                position: toast.POSITION.BOTTOM_CENTER
            });
            this.audiosErrorExecuted = true;
        }

        if (nextProps.categoryError && !this.categoriesErrorExecuted)
        {
            toast.error('حصلت مشكلة خلال تحميل الاصناف', {
                position: toast.POSITION.BOTTOM_CENTER
            });
            this.categoriesErrorExecuted = true;
        }

        this.setState({shouldLoadMore : true} , () =>
        {
            if (nextProps.loadingMoreError || (nextProps.newCount !== null && nextProps.newCount < LIMIT))
            {
                this.setState({shouldLoadMore : false})
            }
        });

    }


    render()
    {

        return (
            <div style={{backgroundColor: '#FFF'}}>

                <HeaderWithImage imageUrl={'/images/library.jpg'} title="المكتبة الرقمية"/>


                <Container style={{marginTop: '1em'}}>

                    <div style={{padding: '18px 0'}}>
                        <SearchInput
                            loading={this.props.loading}
                            onEnterPressed={(value) =>
                            {
                                this.audioErrorExecuted = true;
                                this.props.dispatch(searchForAudio(value))
                            }}
                        />
                    </div>


                    <ResultContainer
                        loadMoreAction={this.onLoadMore}
                        loadMoreButton={this.state.shouldLoadMore && !this.props.loadingMore}
                        loadingMore={this.props.loadingMore}
                        dispatch={this.props.dispatch}
                        items={this.props.audio}
                        loading={this.props.loading}
                        categories={this.props.categories}
                        categoryLoading={this.props.categoryLoading}
                        fetchItemsByCategory={(id) =>
                        {
                            this.setState({currentCategoryId: id });
                            this.props.dispatch(fetchAudioByCategory(0, id));
                        }}
                        renderItem={(item) => <SoundItem key={item.id} {...item}/>}
                    />

                </Container>

                <Footer style={{marginTop: '1em'}}/>

            </div>
        )
    }
}

let mapStateToProps = (state) =>
{
    return {
        loading: state.audio.loading,
        audio: state.audio.audio,
        error: state.audio.error,
        loadingMore : state.audio.loadingMore ,
        loadingMoreError : state.audio.loadingMoreError,
        newCount : state.audio.newCount,
        categoryLoading: state.audio_category.loading,
        categories: state.audio_category.categories,
        categoryError: state.audio_category.error
    }
};

export default connect(mapStateToProps)(SoundLibraryPage);
