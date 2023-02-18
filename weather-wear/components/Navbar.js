import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <div>
                <Link href='/' passHref>
                    Home
                </Link>
            </div>
            <div>
                <Link href='/wardrobe' passHref>
                    Wardrobe
                </Link>
                <Link href='/info' passHref>
                    Info
                </Link>
        </div>
      </>
    );
};

export default Navbar;