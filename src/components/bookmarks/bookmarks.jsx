import Bookmark from '../header/bookmark/Bookmark';
import PropTypes from 'prop-types'
const Bookmarks = ({bookmarks}) => {
    
    return (
        <div className="lg:w-1/3 bg-[#1111110D] rounded-lg p-4">
            <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            {
              bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)  
            }
            
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;