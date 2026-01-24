// TopBar
export default function TopBar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold">E-Commerce</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-500">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
