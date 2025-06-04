import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="container mx-auto bg-gray-900 text-gray-300 px-8 pt-10 pb-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo & Short Description */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">RoomMateFinder</h1>
          <p>
            The easiest way to connect with like-minded roommates. Built for trust, comfort, and convenience.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/browselisting" className="hover:underline">Browse Listings</Link></li>
            <li><Link to="/findroommates" className="hover:underline">Add Listing</Link></li>
            <li><Link to="/mylisting" className="hover:underline">My Listings</Link></li>
          </ul>
        </div>

        {/* Terms & Policies */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Legal</h2>
          <ul className="space-y-2">
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Contact Us</h2>
          <p>Email: support@roommatefinder.com</p>
          <p>Phone: +880 1234 567 890</p>
          <p>Address: Dhaka, Bangladesh</p>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-indigo-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-indigo-400"><FaTwitter /></a>
            <a href="#" className="hover:text-indigo-400"><FaInstagram /></a>
            <a href="#" className="hover:text-indigo-400"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        &copy; RoomMateFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
