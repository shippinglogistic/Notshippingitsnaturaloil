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
                                                        "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.chatway.app https://embed.tawk.to https://www.smartsuppchat.com https://call.chatra.io https://app.chatra.io; " +
                                                        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.chatway.app https://embed.tawk.to; " +
                                                        "font-src 'self' https://fonts.gstatic.com data:; " +
                                                        "img-src 'self' data: https: blob:; " +
                                                        "connect-src 'self' https://cdn.chatway.app https://embed.tawk.to https://www.smartsuppchat.com https://call.chatra.io https://app.chatra.io wss://chatway.app wss://tawk.link wss://chatra.io; " +
                                                        "frame-src 'self' https://cdn.chatway.app https://embed.tawk.to https://www.smartsuppchat.com https://call.chatra.io https://app.chatra.io; " +
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
}

export default nextConfig
