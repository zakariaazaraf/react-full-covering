import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// Set up some variable 
let imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Dostoevskij_1863.jpg/400px-Dostoevskij_1863.jpg'
let author = 'Zakaria Azaraf'

const BookList = ()=>{
  return <section>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
}

const Book = () =>{
  return <article>
    <Image />
    <Title />
    <Author />
  </article>
}

const Image = () => <img src={imgSrc} alt='Title'/>
const Title = () => <h2 style={{color: 'blue', fontSize: '2rem'}}>The book title</h2>
const Author = () => <h4>{author}</h4>

ReactDom.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>,
  document.getElementById("root")
)
