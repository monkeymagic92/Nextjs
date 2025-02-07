'use client'; // 이 지시어를 추가하여 클라이언트 컴포넌트로 만듭니다.

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Blog() {

    const router = useRouter();

    // 여러 값을 담기 위해 객체로 상태 관리
    const [result, setResult] = useState<{ message?: string; testMessage?: string } | null>(null);

    // SML 서버에서 api 호출
    const fetchData = async () => {
        try {
            const response = await fetch('/api/v1/board/list');  // rewrites를 활용해 프록시 처리
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result);  // JSON 응답 출력

            setResult({
                message: result.message,
                testMessage: result.testMessage,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // 메인으로 이동
    const fnMoveToMain = () => {
        router.push('/');
    };

    return (
        <div>
            <h1>Welcome to the Blog</h1>
            <p>This is the content of the blog page.</p>
            <button className='btn btn-primary' onClick={fetchData}>BackEnd api 호출</button>

            {/* 여러 값들을 개별적으로 출력 */}
            <h1>결과:</h1>
            {result && (
                <div>
                    <p>Message: {result.message}</p>
                    <p>Test Message: {result.testMessage}</p>
                </div>
            )}

            <h1></h1>

            <button className='btn btn-primary' onClick={fnMoveToMain}>메인으로 이동</button>
        </div>
    );
}