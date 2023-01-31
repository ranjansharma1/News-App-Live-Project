import React from "react";

const NewsItem=(props)=> {

    return (
      <div className={`card my-3 text-${ props.mode === "light" ?  "dark" :"white" } bg-${ props.mode === "light" ?  "white" :"dark" }`} >
        <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>        
          <span className=" badge rounded-pill bg-danger">{props.source}</span>
        </div>
        <img
          className="card-img-top"
          style={{height: "230px" }}
          src={
            props.imageUrl
              ? props.imageUrl
              : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
          }
          alt="..."
        />
        <div className="card-body ">
            <p className="card-text">
            <small className="text-muted"> By Author: {props.author} <br/> last updated: {new Date(props.publishedDate).toGMTString()}</small>
            </p>
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <a
            href={props.newsUrl}
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

export default NewsItem;
