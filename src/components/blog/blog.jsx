import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog ,handleAddBookmark }) => {
    const {title,cover_img,author,reading_time,published_date,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img src={cover_img} />
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <div className='flex justify-between'>
                <div>
                    <p>{author}</p><br />
                    <p>Posted: <span>{published_date}</span></p>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button className='text-red-500 text-xl btn' onClick={()=>handleAddBookmark(blog)}><FaRegBookmark></FaRegBookmark></button>
                    
                </div>
            </div>
            <div className='space-x-2'>
                <p>
                    {
                        hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                    }
                </p>
            </div>
            
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func
}

export default Blog;