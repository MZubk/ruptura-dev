export default function DefaultButton({ children }) {
  return (
    <button className="text-xl text-slate-50 inline-block py-1 px-4 bg-slate-800 rounded-md inHover_text inHover_border">
      {children}
    </button>
  );
}
