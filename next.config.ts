import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:[
      {
      protocol: "https",
      hostname: "i.ibb.co",
    },
    {
      protocol: "http",
      hostname:"image.tmdb.org" 
    },  
  ],
  }
};

export default nextConfig;
