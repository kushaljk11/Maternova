import { NavLink } from 'react-router-dom';

function Sidebar({ items = [] }) {
  return (
    <aside className="w-64 bg-white p-4 shadow-sm">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `block rounded px-3 py-2 text-sm ${isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-700'}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
