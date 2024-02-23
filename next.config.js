if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL,
);

/** @type {import('next').NextConfig} */
/* module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: 'uploads/**',
      },
    ],
	domains: [
            "localhost"            
    ],
  },
}; */
module.exports = {
    reactStrictMode: true,
	output: "standalone",
    images: {
        domains: [
            "localhost",
            process.env.WORDPRESS_API_URL.match(/(http(?:s)?:\/\/)(.*)/)[2], // Valid WP Image domain.
            "2.gravatar.com",
            "0.gravatar.com",
            "secure.gravatar.com",
        ],
    },
};

