module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/, // Add any other image file extensions you want to support
        use: [
          {
            loader: 'file-loader', // You can also use 'url-loader' here for base64 encoding small images
            options: {
              name: 'assets/[name].[ext]', // Output path and filename for processed images
            },
          },
        ],
      },
    ],
  },
};
