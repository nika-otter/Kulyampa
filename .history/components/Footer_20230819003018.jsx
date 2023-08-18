import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              feugiat libero, eu congue orci.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400">1234 Elm Street, City, Country</p>
            <p className="text-gray-400">contact@example.com</p>
            <p className="text-gray-400">123-456-7890</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
