'use client'; // 이 지시어를 추가하여 클라이언트 컴포넌트로 만듭니다.

import React from 'react';
import styles from './Header.module.css';  // CSS 모듈 불러오기

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1>My Website Header★★★★★</h1>
        </header>
    );
};

export default Header;