import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <div>
                <Link className='rightlink' href='/' passHref>
                    WeatherWear
                </Link>
            </div>
            <div>
                <Link className='leftlink' href='/wardrobe' passHref>
                    Wardrobe
                </Link>
                <Link className='leftlink' href='/info' passHref>
                    Info
                </Link>
        </div>
      </>
    );
};

export default Navbar;