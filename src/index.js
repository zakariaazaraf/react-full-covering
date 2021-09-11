import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// Set up some variable 
let imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Dostoevskij_1863.jpg/400px-Dostoevskij_1863.jpg'
//let author = 'Zakaria Azaraf'

const BookList = ()=>{
  return <section>
    <Book title='Book 1' author='zakaria1'/>
    <Book title='Book 2' author='zakaria2' />
    <Book title='Book 3' author='zakaria3' />
    <Book title='Book 4' author='zakaria4' />
    <Book title='Book 5' author='zakaria5' />
    <Book title='Book 6' author='zakaria6' />
  </section>
}

const Book = ({ title, author }) =>{
  return <article>
    <Image />
    <Title titleName={title}/>
    <Author authorName={author}/>
  </article>
}

const Image = () => <img src={imgSrc} alt='Title'/>
const Title = ({ titleName }) => <h2 style={{color: 'blue', fontSize: '2rem'}}>{titleName}</h2>
const Author = ({ authorName }) => <h4>{authorName}</h4>

ReactDom.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>,
  document.getElementById("root")
)
