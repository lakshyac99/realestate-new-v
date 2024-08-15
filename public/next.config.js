/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "lakshyac",
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN:
      "pk.eyJ1IjoiaXJmYW5pcnNoYWQiLCJhIjoiY2x6djhpaHBsMDQyMDJpc2R0eTN2ZTJieiJ9.4p7gJP1b3lymNQpM3uyjFA",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
