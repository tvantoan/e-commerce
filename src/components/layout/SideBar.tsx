// SideBar
export default function SideBar() {
  return (
    <aside className="bg-white p-4 shadow-md">
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block rounded px-2 py-1 hover:bg-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block rounded px-2 py-1 hover:bg-gray-200">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="block rounded px-2 py-1 hover:bg-gray-200">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="block rounded px-2 py-1 hover:bg-gray-200">
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="block rounded px-2 py-1 hover:bg-gray-200">
              Customers
            </a>
          </li>
          <li>
            <a href="#" className="block rounded px-2 py-1 hover:bg-gray-200">
              Reports
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
