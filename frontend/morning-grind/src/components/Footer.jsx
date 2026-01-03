export default function Footer() {
  return (
    <footer className="bg-gray-100 px-8 py-16">
      <div className="mb-12 grid grid-cols-4 gap-12">
        <div>
          <h5 className="mb-4 font-bold">Morning Grind</h5>
        </div>
        <div>
          <h6 className="mb-4 font-bold">Follow</h6>
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
          <h6 className="mb-4 font-bold">Support</h6>
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
          <h6 className="mb-4 font-bold">Company</h6>
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
    </footer>
  );
}
