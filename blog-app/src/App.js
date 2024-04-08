import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import BlogPosts from './components/BlogPosts';
import BlogPostDetails from './components/BlogPostDetails';
import blogs from './blogs.json';

function App() {
  const data = blogs.blogs;

  return (
    <Router>
      <Routes>
        <Route path='' element={<><Header /><Home /><Footer /></>} />
        <Route path='/posts' element={<><Header /><BlogPosts /><Footer /></>} />
        <Route path='/contact' element={<><Header /><Contact /><Footer /></>} />
        {/* <Route path='/posts/1' element={<><Header /><BlogPostDetails title={data[0].title} date={data[0].date} content={data[0].content} id={data[0].id} image={data[0].image}/><Footer /></>} />
        <Route path='/posts/2' element={<><Header /><BlogPostDetails title={data[1].title} date={data[1].date} content={data[1].content} id={data[1].id} image={data[1].image}/><Footer /></>} />
        <Route path='/posts/3' element={<><Header /><BlogPostDetails title={data[2].title} date={data[2].date} content={data[2].content} id={data[2].id} image={data[2].image}/><Footer /></>} /> */}

        <Route path='/posts/:id' element={<><Header /><BlogPostDetails data={data}/><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
