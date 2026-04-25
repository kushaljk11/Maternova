import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-semibold text-sky-700">
          Maternal Health Risk Dashboard
        </Link>
        <div className="flex items-center gap-4 text-sm">
          {user ? (
            <>
              <span className="text-slate-600">Role: {user.role}</span>
              <button onClick={logout} className="rounded bg-slate-800 px-3 py-1 text-white">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-slate-700">Login</Link>
              <Link to="/register" className="rounded bg-sky-600 px-3 py-1 text-white">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
