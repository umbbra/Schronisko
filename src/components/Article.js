import React from 'react';

const Article = props => {
 return ( 
  <div>
  <h1>{props.title}</h1>
  <span>{props.author}</span>
  <p>{props.text}</p>
  </div>
  );
}
 
export default Article;