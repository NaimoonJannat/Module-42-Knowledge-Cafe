import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/bookmarks/bookmarks'
import Header from './components/header/header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddBookmark = blog =>{
    const newBookmarks= [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
     <Header></Header>
     <div className='w-4/5 mx-auto my-8 flex flex-col lg:flex-row gap-8'>
     <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>

     </div>
     
      
      
    </>
  )
}

export default App
