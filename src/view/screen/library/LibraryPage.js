import React, {Component} from 'react';
import Container from 'semantic-ui-react/dist/es/elements/Container';
import HeaderWithImage from "../../component/HeaderWithImage";
import BookListItem from "./BookListItem";
import Footer from "../../component/Footer";
import {connect} from 'react-redux';
import SearchInput from "../../component/SearchInput";
import {fetchBooks, fetchBooksByCategory, fetchMoreBooks, searchForBook} from "../../../data/action/book_action";
import {fetchBooksLibraryCategories} from "../../../data/action/category_actions";
import {toast} from 'react-toastify';
import './../../../styles/video_library.css';
import ResultContainer from "../../component/ResultContainer";

const LIMIT = 25;

class LibraryPage extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {offset: 0, currentCategoryId: 0 , shouldLoadMore: true};
        this.booksErrorExecuted = false;
        this.categoriesErrorExecuted = false;
    }

    componentDidMount()
    {
        this.props.dispatch(fetchBooks());
        this.props.dispatch(fetchBooksLibraryCategories());
    }

    onLoadMore = () =>
    {
        if (this.props.loadingMore || !this.state.shouldLoadMore)
        {
            return;
        }

        this.props.dispatch(fetchMoreBooks(this.props.books.length, this.state.currentCategoryId));
    };

    componentWillReceiveProps(nextProps)
    {
        if (nextProps.error && !this.booksErrorExecuted)
        {
            toast.error('حصلت مشكلة خلال تحميل البيانات', {
                position: toast.POSITION.BOTTOM_CENTER
            });
            this.booksErrorExecuted = true;
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
                                this.booksErrorExecuted = true;
                                this.props.dispatch(searchForBook(value))
                            }}
                        />
                    </div>

                    <ResultContainer
                        loadMoreAction={this.onLoadMore}
                        loadMoreButton={this.state.shouldLoadMore && !this.props.loadingMore}
                        loadingMore={this.props.loadingMore}
                        dispatch={this.props.dispatch}
                        items={this.props.books}
                        loading={this.props.loading}
                        categories={this.props.categories}
                        categoryLoading={this.props.categoryLoading}
                        fetchItemsByCategory={(id) =>
                        {
                            this.setState({currentCategoryId: id});
                            this.props.dispatch(fetchBooksByCategory(0, id));
                        }}
                        renderItem={(item) => <BookListItem key={item.id} title={item.name}
                                                            file={item.file}
                                                            category={item.categoryName}
                                                            image={"/storage/book/image/" + item.image}/>}
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
        loading: state.books.loading,
        books: state.books.books,
        error: state.books.error,
        loadingMore : state.books.loadingMore ,
        loadingMoreError : state.books.loadingMoreError,
        newCount : state.books.newCount,
        categoryLoading: state.book_category.loading,
        categories: state.book_category.categories,
        categoryError: state.book_category.error
    }
};

export default connect(mapStateToProps)(LibraryPage);
