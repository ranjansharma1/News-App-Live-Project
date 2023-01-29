import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'  //short impt
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 5,
        category:"general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }


    capitalizeFirstLetter(str) {
        // converting first letter to uppercase
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }

  constructor(props) {
    super(props);
    // console.log("constructor called");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)} -News article`;
  }

  //Creating a function that will reduce repetetive task;
  async updateNews(){
    const url =
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&apiKey=5a5ab15878d846b58350687ed70f1841&page=${this.state.page}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
        articles: parseData.articles,
        totalResults: parseData.totalResults,
        loading:false
    });
  }

  //It will run after the component output has been rendered to the DOM
  async componentDidMount() {
    // console.log("componentDidMount called");
    this.updateNews();
}


  fetchMoreData = async() => {
    this.setState({page:this.state.page + 1});
   const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&apiKey=5a5ab15878d846b58350687ed70f1841&page=${this.state.page+1}`;
   console.log("page: "+ this.state.page)
    this.setState({loading:true})
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
        articles: this.state.articles.concat(parseData.articles),
        totalResults: parseData.totalResults,
        loading:false
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center text-primary"> Top Headlines - {this.capitalizeFirstLetter(this.props.category)}</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="row">
        {this.state.articles.map((elem) => {
            return (
              <div className="col-md-4" key={elem.url}>
                <NewsItem
                  title={elem.title.slice(0, 50)}
                  description={!elem.description  ? elem.description  : elem.description.slice(0, 90)}
                  imageUrl={elem.urlToImage}
                  newsUrl={elem.url}
                  author={!elem.author?"Unknown":elem.author}
                  publishedDate={elem.publishedAt}
                  source={elem.source.name}
                />
              </div>
            );
          })}
        </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
