import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='navbar-wrapper'>
            <div>
                <Link className='rightlink' href='/' passHref>
                    WeatherWear
                </Link>
            </div>
            <div className='leftlink-wrapper'>
                <Link className='leftlink' href='/wardrobe' passHref>
                    Wardrobe
                </Link>
                <Link className='leftlink' href='/info' passHref>
                    Info
                </Link>
        </div>
      </div>
    );
};

export default Navbar;