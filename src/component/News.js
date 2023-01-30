import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types"; //short impt
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => { 
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  
  //Creating a function that will reduce repetetive task;
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&apiKey=${props.newsAPIKey}&page=${page}`;
    setLoading(true);
    props.setProgress(20);
    let data = await fetch(url);
    props.setProgress(40);
    let parseData = await data.json();
    props.setProgress(70);
    // console.log(parseData);
    setArticles(parseData.articles);
    setTotalResult(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  //It will run after the component output has been rendered to the DOM
  useEffect(() => {
    document.title=`${capitalizeFirstLetter(props.category)} -News article` 
    console.log("country: "+props.country);
    updateNews();

    // To disable warning messages for updateNews
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&pageSize=${props.pageSize}&apiKey=${
      props.newsAPIKey
    }&page=${page + 1}`;
    console.log("page: " + page);
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    setTotalResult(parseData.totalResults);
    setLoading(false);
  };
  

  return (
    
    <div className="container my-3">
      <h1 className="text-center text-primary" style={{marginTop :"70px"}}>
        Top Headlines - {capitalizeFirstLetter(props.category)}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<Spinner />}
      >
        <div className="row">
          {articles.map((elem) => {
            return (
              <div className="col-md-4" key={elem.url}>
                <NewsItem
                  title={!elem.title
                    ? elem.title
                    :elem.title.slice(0, 50)}
                  description={
                    !elem.description
                      ? elem.description
                      : elem.description.slice(0, 90)
                  }
                  imageUrl={elem.urlToImage}
                  newsUrl={elem.url}
                  author={!elem.author ? "Unknown" : elem.author}
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
};

export default News;

News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
  newsAPIKey: process.env.REACT_APP_NEWS_API,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  newsAPIKey: PropTypes.string,
};

const capitalizeFirstLetter = (str) => {
  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
};
