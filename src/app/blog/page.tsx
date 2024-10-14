'use client'; // 이 지시어를 추가하여 클라이언트 컴포넌트로 만듭니다.

import React, { useState } from 'react';

export default function Blog() {

    // 여러 값을 담기 위해 객체로 상태 관리
    const [result, setResult] = useState<{ message?: string; testMessage?: string } | null>(null);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/v1/board/list'); // GET 요청으로 API 호출
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result); // API 응답 콘솔에 출력

            // 여러 값들을 상태에 저장
            setResult({
                message: result.message,
                testMessage: result.testMessage,
            });
        } catch (error) {
            console.error('Error fetching data:', error); // 에러 발생 시 콘솔에 출력
        }
    };

    return (
        <div>
            <h1>Welcome to the Blog</h1>
            <p>This is the content of the blog page.</p>
            <button onClick={fetchData}>Fetch API Data</button>

            {/* 여러 값들을 개별적으로 출력 */}
            <h1>결과:</h1>
            {result && (
                <div>
                    <p>Message: {result.message}</p>
                    <p>Test Message: {result.testMessage}</p>
                </div>
            )}

            <h1></h1>
        </div>
    );
}