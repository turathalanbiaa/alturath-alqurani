import React, {Component} from 'react';
import Container from 'semantic-ui-react/dist/es/elements/Container';
import HeaderWithImage from "../../component/HeaderWithImage";
import Footer from "../../component/Footer";
import './../../../styles/video_library.css';
import Modal from 'semantic-ui-react/dist/es/modules/Modal';
import Embed from 'semantic-ui-react/dist/es/modules/Embed';
import VideoItem from "./VideoItem";
import {toast} from 'react-toastify';
import SearchInput from "../../component/SearchInput";
import {connect} from 'react-redux';
import {fetchMoreVideo, fetchVideo, fetchVideoByCategory, searchForVideo} from "../../../data/action/video_action";
import {fetchVideoCategories} from "../../../data/action/category_actions";
import ResultContainer from "../../component/ResultContainer";


const LIMIT = 25;

class VideoLibraryPage extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {open: false, offset: 0 , videoId : '' , placeholder : '' , currentCategoryId: 0 , shouldLoadMore: true};
        this.videoErrorExecuted = false;
        this.categoriesErrorExecuted = false;
    }

    componentDidMount()
    {
        this.props.dispatch(fetchVideo());
        this.props.dispatch(fetchVideoCategories());
    }

    onLoadMore = () =>
    {
        if (this.props.loadingMore || !this.state.shouldLoadMore)
        {
            return;
        }

        this.props.dispatch(fetchMoreVideo(this.props.video.length, this.state.currentCategoryId));
    };



    componentWillReceiveProps(nextProps)
    {
        if (nextProps.error && !this.videoErrorExecuted)
        {
            toast.error('حصلت مشكلة خلال تحميل البيانات', {
                position: toast.POSITION.BOTTOM_CENTER
            });
            this.videoErrorExecuted = true;
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
                                this.videoErrorExecuted = true;
                                this.props.dispatch(searchForVideo(value))
                            }}
                        />
                    </div>

                    <ResultContainer
                        loadMoreAction={this.onLoadMore}
                        loadMoreButton={this.state.shouldLoadMore && !this.props.loadingMore}
                        loadingMore={this.props.loadingMore}
                        dispatch={this.props.dispatch}
                        items={this.props.video}
                        loading={this.props.loading}
                        categories={this.props.categories}
                        categoryLoading={this.props.categoryLoading}
                        fetchItemsByCategory={(id) =>
                        {
                            this.setState({currentCategoryId: id});
                            this.props.dispatch(fetchVideoByCategory(0, id));
                        }}
                        renderItem={(item) =>
                            <VideoItem onOpenVideo={(videoId , placeholder) =>
                            {
                                this.setState({open : true , videoId : videoId , placeholder: placeholder});
                            }} key={item.id} {...item}/>
                        }
                    />

                </Container>

                <Footer style={{marginTop: '1em'}}/>

                <Modal open={this.state.open} onClose={() => this.setState({open: false})}>
                    <Embed
                        id={this.state.videoId}
                        placeholder={'/storage/video/image/' + this.state.placeholder}
                        source='youtube'
                    />
                </Modal>


            </div>
        )
    }
}


let mapStateToProps = (state) =>
{
    return {
        loading: state.video.loading,
        video: state.video.video,
        error: state.video.error,
        loadingMore : state.video.loadingMore ,
        loadingMoreError : state.video.loadingMoreError,
        newCount : state.video.newCount,
        categoryLoading: state.video_category.loading,
        categories: state.video_category.categories,
        categoryError: state.video_category.error
    }
};

export default connect(mapStateToProps)(VideoLibraryPage);
