export default function DefaultButton({ children }) {
  return (
    <button className="text-xl text-slate-50 inline-block py-1 px-4 bg-gradient-to-b from-slate-700 from-30% to-slate-900 rounded-md inHover_text inHover_border">
      {children}
    </button>
  );
}
