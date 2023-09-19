import { useEffect, useState } from "react";

export default function BtnScrollToUp() {
  const [btnVisible, setBtnVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setBtnVisible(true);
    } else {
      setBtnVisible(false);
    }
  };

  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`-rotate-90 p-2 fixed bottom-24 right-10 border-l-2 border-y-2 border-slate-800 link rounded-full 
    ${btnVisible ? "opacity-100" : "opacity-0"}
    transition-opacity duration-1000`}
      onClick={scrollToUp}
    >
      {">>"}
    </button>
  );
}
