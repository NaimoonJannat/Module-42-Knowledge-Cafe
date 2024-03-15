import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/bookmarks/bookmarks'
import Header from './components/header/header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, SetReadingTime] = useState(0);
  const handleAddBookmark = blog =>{
    const newBookmarks= [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkRead = (id, time) =>{
    const newReadingTime =readingTime + time;
   SetReadingTime(newReadingTime);
    // remove the read blog from bookmark 
    const remaining= bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remaining);

  }

  return (
    <>
     <Header></Header>
     <div className='w-4/5 mx-auto my-8 flex flex-col lg:flex-row gap-8'>
     <Blogs handleAddBookmark={handleAddBookmark} handleMarkRead={handleMarkRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>

     </div>
     
      
      
    </>
  )
}

export default App
