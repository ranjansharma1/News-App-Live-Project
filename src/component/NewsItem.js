import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedDate,source } = this.props;
    return (
      <div className="card my-3" style={{ width: "22rem" }}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left:'90%',zIndex:'1'}}>{source}</span>
        <img
          className="card-img-top"
          style={{height: "230px" }}
          src={
            imageUrl
              ? imageUrl
              : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
          }
          alt="..."
        />
        <div className="card-body ">
            <p className="card-text">
            <small className="text-muted"> By Author: {author} <br/> last updated: {new Date(publishedDate).toGMTString()}</small>
            </p>
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary "
          >
            More Details
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
