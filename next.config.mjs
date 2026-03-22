/** @type {import('next').NextConfig} */
const nextConfig = {
        reactStrictMode: true,

        typescript: {
                ignoreBuildErrors: true,
        },

        images: {
                remotePatterns: [
                        {
                                protocol: "https",
                                hostname: "naturalcannabisoil.shop",
                        },
                        {
                                protocol: "https",
                                hostname: "www.naturalcannabisoil.shop",
                        },
                        {
                                protocol: "https",
                                hostname: "**.blob.vercel-storage.com",
                        },
                ],
                unoptimized: true,
        },

        async headers() {
                return [
                        {
                                source: "/(.*)",
                                headers: [
                                        {
                                                key: "Cache-Control",
                                                value: "public, max-age=3600, must-revalidate",
                                        },
                                        {
                                                key: "X-Content-Type-Options",
                                                value: "nosniff",
                                        },
                                        {
                                                key: "X-Frame-Options",
                                                value: "SAMEORIGIN",
                                        },
                                        {
                                                key: "X-XSS-Protection",
                                                value: "1; mode=block",
                                        },
                                        {
                                                key: "Referrer-Policy",
                                                value: "strict-origin-when-cross-origin",
                                        },
								{
								key: "Content-Security-Policy",
								value:
									"default-src 'self'; " +
									"script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net; " +
									"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
									"font-src 'self' https://fonts.gstatic.com data:; " +
									"img-src 'self' data: https: blob:; " +
									"connect-src 'self'; " +
									"frame-src 'self'; " +
									"object-src 'none'; " +
									"base-uri 'self'; " +
									"form-action 'self'; " +
									"upgrade-insecure-requests; " +
									"media-src 'self';",
								},
                                ],
                        },
                ]
        },

        async redirects() {
                return [
                        // Redirect HTTP to HTTPS
                        {
                                source: "/:path*",
                                has: [
                                        {
                                                type: "header",
                                                key: "x-forwarded-proto",
                                                value: "http",
                                        },
                                ],
                                destination: "https://www.naturalcannabisoil.shop/:path*",
                                permanent: true,
                        },
                        // Redirect non-www to www
                        {
                                source: "/:path*",
                                has: [
                                        {
                                                type: "host",
                                                value: "naturalcannabisoil.shop",
                                        },
                                ],
                                destination: "https://www.naturalcannabisoil.shop/:path*",
                                permanent: true,
                        },
                ]
        },
}

export default nextConfig
