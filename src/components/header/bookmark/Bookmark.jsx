import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="p-2 mb-2 bg-white rounded-lg">
            <h3 className="text-lg font-semibold">{title}</h3>
            
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.func
}

export default Bookmark;