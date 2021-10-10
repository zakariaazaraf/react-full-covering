import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css';

// Import custom Compent
import UseStateExample1 from './components/UseStateExample1'
import UseStateArrayExample from './components/UseStateArrayExample'
import UseEffectBasics from './components/UseEffectBasics'
import UseEffectFetchUsers from './components/UseEffectFetchUsers'
import ToggleComponent from './components/ToggleComponent'
import FormInputs from './components/FormInputs'
import MultipleInputs from './components/MultipleInputs'
import ReducerHook from './components/ReducerHook'
import PropDrilling from './components/PropDrilling'
import ContextAPI from './components/ContextAPI'
import UseCustomHook from './components/UseCustomHook'
import ProtoTypes from './components/ProtoTypes'
import Error from './components/Error'
import Navbar from './components/Navbar'
import ShowMovie from './components/ShowMovie'


// Set up some variable 
let imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Dostoevskij_1863.jpg/400px-Dostoevskij_1863.jpg'
//let author = 'Zakaria Azaraf'

const BookList = ()=>{
  return <section>
    <Book title='Book 1' author='zakaria1'/>
    <Book title='Book 2' author='zakaria2' />
    <Book title='Book 3' author='zakaria3' />
    <Book title='Book 4' author='zakaria4' >
      Do not store content that should be visible and accessible in data attributes, because assistive technology may not access them. In addition, search crawlers may not index data attributes' values.

The main issues to consider are Internet Explorer support and performance. Internet Explorer 11+ provides support for the standard, but all earlier versions do not support dataset. To support IE 10 and under you need to access data attributes with getAttribute() instead. Also, the performance of reading data-attributes compared to storing this data in a regular JS object is poor.

That said, though, for custom element-associated metadata, they are a great solution.

In Firefox 49.0.2 (and perhaps earlier/later versions), the data attributes that exceed 1022 characters will not be read by Javascript (EcmaScript 4).
    </Book>
    <Book title='Book 5' author='zakaria5' />
    <Book title='Book 6' author='zakaria6' />
  </section>
}

const Book = ({ title, author, children }) =>{
  // Click handler event
  const clickHandller = () =>{
    alert('This is a click handler event')
  }

  const clickHandllerWithParams = (bookTitle) =>{
    alert(`Example demonstrating the click event using params\nThis's the post's title : ${bookTitle}`)
  }

  return <article>
    <Image />
    <Title titleName={title}/>
    <Author authorName={author}/>
    <h5>{children}</h5>
    
    <button className='btn' onClick={clickHandller}>Click Event</button>
    <button className='btn' onClick={() => clickHandllerWithParams(title)}>Click Event, passing Params example</button>
    
  </article>
}

const Image = () => <img src={imgSrc} alt='Title'/>
const Title = ({ titleName }) => <h2 style={{color: 'blue', fontSize: '2rem'}}>{titleName}</h2>
const Author = ({ authorName }) => <h4>{authorName}</h4>

ReactDom.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <h1>Welcome to zak's react learning course</h1>
        </Route>
        <Route exact path='/BookList'>
          <BookList />
        </Route>
        <Route path='/UseStateExample1'>
          <UseStateExample1 />
        </Route>
        <Route path='/UseStateArrayExample'>
          <UseStateArrayExample />
        </Route>
        <Route exact path='/UseEffectBasics'>
          <UseEffectBasics />
        </Route>
        <Route exact path='/UseEffectFetchUsers'>
          <UseEffectFetchUsers />
        </Route>
        <Route exact path='/ToggleComponent'>
          <ToggleComponent />
        </Route>
        <Route exact path='/FormInputs'>
          <FormInputs />
        </Route>
        <Route exact path='/MultipleInputs'>
          <MultipleInputs />
        </Route>
        <Route exact path='/ReducerHook'>
          <ReducerHook />
        </Route>
        <Route path='/PropDrilling'>
          <PropDrilling />
        </Route>
        <Route exact path='/ContextAPI'>
          <ContextAPI />
        </Route>
        <Route exact path='/UseCustomHook'>
          <UseCustomHook />
        </Route>
        <Route exact path='/ProtoTypes'>
          <ProtoTypes />
        </Route>
        {/* Show movie by id */}
        <Route exact path='/movie/:id'>
          <ShowMovie />
        </Route>
        <Route exact path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
