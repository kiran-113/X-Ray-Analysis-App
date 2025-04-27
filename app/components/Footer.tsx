import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 text-center text-white">
      <p>&copy; Free X-ray-analysis.</p>
      <p>X-ray-analysis app can make mistakes. Check important info.</p>
      <Link href="/donate" className="mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
        Donate
      </Link>
    </footer>
  );
};

export default Footer;