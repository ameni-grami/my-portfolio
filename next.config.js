module.exports = {
  output: "export",
  experimental: {
    esmExternals: "loose",
  },
  images: {
    unoptimized: true,
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "imgur.com",
      "rentcar.softylines.com",
      "imtiyazacademy.com",
      "messaggera.com",
      "ostedhy.com",
    ],
  },

  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /pdf\.worker\.js$/,
      use: { loader: "file-loader" },
    });

    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    });

    return config;
  },
};
