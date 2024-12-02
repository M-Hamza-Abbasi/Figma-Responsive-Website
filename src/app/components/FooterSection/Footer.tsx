import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterSectionPage= () => {
  return (
    <footer className="bg-white border-t border-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h3 className="text-lg font-semibold text-[#000000]">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-[#000000] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-6 md:mt-0">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-whi"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gray-50 text-black rounded-r-md hover:bg-white"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-[#000000] mt-2 md:mt-0 md:ml-4">
              By subscribing you agree to our{" "}
              <Link href="#" className="text-black hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/Logo.png"
              alt="Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#000000]">Courses</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  Business
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  Programming
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#000000]">Resources</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  Career
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  Learning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  Interview Preparation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#000000]">About Us</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  Help/Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#000000] hover:text-amber-500">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2023 Ddsgnr. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-[#000000] hover:text-amber-500">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#000000] hover:text-amber-500">
              Terms of Service
            </Link>
            <Link href="#" className="text-[#000000] hover:text-amber-500">
              Cookies Settings
            </Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.facebook.com/">
              <Image
                src="/Facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.instagram.com/">
              <Image
                src="/Instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.twitter.com/login/">
              <Image src="/twitter.png" alt="twitter" width={24} height={24} />
            </Link>
            <Link href="https://www.linkedin.com/">
              <Image
                src="/LinkedIn.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSectionPage;