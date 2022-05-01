import Link from 'next/link';
// import react from 'react';

import styles from './styles.module.scss'

const Header = () => (
    <header className={styles.header}>
        <h1>
            <Link href="/">
                Emma Stone-Johnson
            </Link>
        </h1 >
    </header >
)

export default Header;