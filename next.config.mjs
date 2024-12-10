/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: "",
    env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        PIGGY_INSIGHTS_API: process.env.PIGGY_INSIGHTS_API,
        RECORD_SERVICE: process.env.RECORD_SERVICE,
        REDIS_URL: process.env.REDIS_URL,
    },
    async headers() {
        return [
            {
                source: "/",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "private, no-cache, max-age=0, s-maxage=0"
                    }
                ]
            },
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                  ]
            }
        ]
    },
};

export default nextConfig;