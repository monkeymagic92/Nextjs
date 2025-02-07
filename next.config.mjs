/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/api/v1/:path*', // 클라이언트에서 요청하는 경로
				destination: 'http://localhost:8080/api/v1/:path*', // 백엔드 서버 주소
			},
		];
	},
};

export default nextConfig;