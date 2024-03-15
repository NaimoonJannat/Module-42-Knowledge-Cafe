import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='w-4/5 mx-auto my-8 flex justify-between items-center'>
            <h1 className='text-6xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;