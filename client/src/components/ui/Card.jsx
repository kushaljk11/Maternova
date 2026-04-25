function Card({ title, children }) {
  return (
    <section className="rounded-lg bg-white p-4 shadow-sm">
      {title ? <h3 className="mb-2 text-lg font-semibold text-slate-800">{title}</h3> : null}
      <div className="text-slate-600">{children}</div>
    </section>
  );
}

export default Card;
