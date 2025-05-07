
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 px-6 bg-gray-50 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {currentYear} Simple App. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
