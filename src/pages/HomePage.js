import React from 'react';
import Article from '../components/Article';

const articles = [
 {
  id: 1,
  title: "Czym jest teoria strun?",
  author: "Jan Nowak",
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, corrupti? Quas saepe, fuga consequuntuem sapiente saepe nostrum eaque explicabo sed pariatur fugit delectus."
 },
 {
  id: 2,
  title: "Jaki sen ma życie?",
  author: "Jan Nowak",
  text: " Nam impedit facere ullam vero, quia sapiente quibusdam! Exercitationem sapiente saepe nostrum eaque explicabo sed pariatur fugit delectus."
 },
 {
  id: 3,
  title: "Polegaj na tym, aby mieć....",
  author: "Jan Nowak",
  text: "Id, corrupti? Quas saepe, fuga cogit corrupti cum aliquam. Nam lam vero, quia sapiente quibusdam! Exercitationem sapiente saepe nostrum eaque explicabo sed pariatur fugit delectus."
 }
]

const HomePage = () => {
 const artlist = articles.map(article => (
  <Article key={article.id} {...article}/>
 ))
 return ( 
 <div>
  Witaj na stronie!
  {artlist}
 </div> 
 );
}
 
export default HomePage;

