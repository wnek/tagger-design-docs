// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  compiler:{
  "compilerOptions": {
    "baseUrl": "."
  }
  }
};
