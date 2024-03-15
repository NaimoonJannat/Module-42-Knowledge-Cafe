import Bookmark from '../header/bookmark/Bookmark';
import PropTypes from 'prop-types'
const Bookmarks = ({bookmarks, readingTime}) => {
    
    return (
        <div className="lg:w-1/3 space-y-3 bg-[#1111110D] rounded-lg p-4">
            <div className='rounded-lg p-2 border-blue-500 bg-blue-200'>
                <h3 className="text-2xl">Reading Time: {readingTime} min</h3>
            </div>
            <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            {
              bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)  
            }
            
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;