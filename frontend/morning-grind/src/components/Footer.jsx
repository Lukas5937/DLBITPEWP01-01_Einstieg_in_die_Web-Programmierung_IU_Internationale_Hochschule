export default function Footer() {
  return (
    <footer className="font-display bg-indigo-50 px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:mb-12 lg:grid-cols-4">
          <div>
            <h5 className="mb-4 text-lg font-bold">Morning Grind</h5>
            <p className="font-body text-sm text-gray-600">
              Crafted coffee experiences for every moment.
            </p>
          </div>
          <div>
            <h6 className="mb-4 text-sm font-bold tracking-wide text-gray-800 uppercase">
              Follow
            </h6>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-black">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-4 text-sm font-bold tracking-wide text-gray-800 uppercase">
              Support
            </h6>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-black">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Track An Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-4 text-sm font-bold tracking-wide text-gray-800 uppercase">
              Company
            </h6>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-black">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Morning Grind. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
