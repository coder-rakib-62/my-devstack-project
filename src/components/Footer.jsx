const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-200 ">
      <div className=" px-5 pt-12 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-md bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">DS</span>
              </div>
              <h2 className="text-[15px] font-bold text-gray-900">
                Dev <span className="text-pink-600">Stack</span>
              </h2>
            </div>

            <p className="text-[11px] leading-4.5 text-slate-500 max-w-[310px]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex gap-4 mt-4">
              {["GitHub", "Twitter", "LinkedIn"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[11px] font-medium text-slate-700 hover:text-pink-600 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[11px] font-bold text-gray-900 mb-3">
              PRODUCT
            </h3>

            <ul className="space-y-2">
              {["Home", "Technologies", "Projects"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[11px] text-slate-500 hover:text-pink-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-bold text-gray-900 mb-3">
              COMPANY
            </h3>
            <ul className="space-y-2">
              {["About", "Contact", "Careers"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[11px] text-slate-500 hover:text-pink-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-bold text-gray-900 mb-3">LEGAL</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[11px] text-slate-500 hover:text-pink-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="text-[10px] text-slate-400 hover:text-pink-600 transition-colors"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[10px] text-slate-400 hover:text-pink-600 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
