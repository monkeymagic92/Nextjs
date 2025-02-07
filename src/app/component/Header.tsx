'use client'; // 이 지시어를 추가하여 클라이언트 컴포넌트로 만듭니다.

import React from 'react';
import styles from './Header.module.css';  // CSS 모듈 불러오기
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {

    const router = useRouter();
    // 메인으로 이동
    const fnMoveToMain = () => {
        router.push('/blog');
    };


    return (
        <header className={styles.header}>
            <h1>My Website Header★★★★★</h1>
            <button className='btn btn-primary' onClick={fnMoveToMain}>메인으로 이동</button>
        </header>
    );
};

export default Header;