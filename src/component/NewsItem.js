import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="card my-3" style={{ width: "22rem" }}>
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
        <div className="card-body " >
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
