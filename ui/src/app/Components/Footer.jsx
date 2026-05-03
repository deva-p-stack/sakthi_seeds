import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";


export default function Footer(){




return(


<>

<footer className="max-w-[1440px] w-full mx-auto bg-[#F5F5F4] py-10 px-6">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* First Section */}
    <div className="space-y-4 max-w-xs">
      <h3 className="text-2xl font-semibold">Sakthi Agri Seeds</h3>

      <p className="text-sm text-gray-600">
        Your trusted source for premium agricultural seeds. Quality & reliability.
      </p>

      {/* Icons */}
      <div className="flex space-x-4">
        <FaFacebook  size={30} />
        <FaInstagram size={30} />
        <FaTwitter size={30}  />
        <FaLinkedin size={30}  />
        <FaEnvelope size={30}  />
      </div>
    </div>

    {/* Second Section */}
    <div className="space-y-4">
      <h3 className="font-semibold">Quick Links</h3>
      <ul className="space-y-2 text-gray-600">
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">Browse Seeds</li>
        <li className="hover:text-black cursor-pointer">Categories</li>
        <li className="hover:text-black cursor-pointer">About Us</li>
      </ul>
    </div>

    {/* Third Section */}
    <div className="space-y-6">
      <h3 className="font-semibold">Contact</h3>
      <p className="text-sm text-gray-600">Email: devap677@email.com</p>
      <p className="text-sm text-gray-600">Phone: +91 8610297625</p>
    </div>

    {/* Fourth Section */}
    <div>
      <h3 className="font-semibold">Address</h3>
      <p className="text-sm text-gray-600">
        
              </p>
    </div>

  </div>
</footer>

</>


);



}