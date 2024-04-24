/** @type {import('next').NextConfig} */
const nextConfig = {
  
  output: 'export',  // static export to serve via Flask
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5328/api/:path*'
            : '/api/',
      },
    ]
  },
};

export default nextConfig;
