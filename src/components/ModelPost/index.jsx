export default function ModelPost({ coverPhoto, title, children }) {
  return (
    <article className="relative text-slate-900">
      <div
        className="h-56 w-full bg-cover bg-no-repeat opacity-30 absolute top-0 -z-1"
        style={{ backgroundImage: `url(${coverPhoto})` }}
      ></div>

      <h2 className="title">{title}</h2>

      <div className="px-28 py-10">{children}</div>
    </article>
  );
}
