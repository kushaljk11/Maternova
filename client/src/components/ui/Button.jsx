function Button({ children, type = 'button', onClick, className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded bg-sky-600 px-4 py-2 text-white transition hover:bg-sky-700 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
