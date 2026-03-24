import { useEffect, useState } from "react";
import mainBg from "../assets/main-bg.jpg";

interface AgeVerificationProps {
  onVerified: () => void;
}

export const AgeVerification = ({ onVerified }: AgeVerificationProps) => {
  const [year, setYear] = useState("");
  const [remember, setRemember] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // ✅ Run only once
  useEffect(() => {
    const hasVerified = localStorage.getItem("ageVerified");

    if (hasVerified === "true") {
      onVerified();
    } else {
      setIsVisible(true);
    }
  }, []);

  const handleSubmit = () => {
    const y = parseInt(year);
    const currentYear = new Date().getFullYear();

    if (!isNaN(y) && currentYear - y >= 21) {
      if (remember) {
        localStorage.setItem("ageVerified", "true");
      }
      setIsVisible(false);
      onVerified();
    } else {
      alert("You must be 21 or older to enter this site.");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">

      {/* ✅ Background Image */}
      <img
        src={mainBg}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ✅ Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center font-serif text-white px-4">
        <div className="w-full max-w-3xl text-center">

          <h1 className="text-2xl sm:text-3xl md:text-5xl leading-snug font-medium">
            It's Part Of Our Commitment To{" "}
            <span className="italic font-light">
              Responsible Drinking.
            </span>
          </h1>

          <p className="mt-4 text-xs sm:text-sm tracking-[0.2em] uppercase text-white/80">
            Please enter your year of birth
          </p>

          {/* ✅ Input Section */}
          <div className="mt-6 flex flex-col items-center gap-4">
            <input
              type="text"
              placeholder="YYYY"
              maxLength={4}
              value={year}
              onChange={(e) =>
                setYear(e.target.value.replace(/\D/g, "").slice(0, 4))
              }
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="w-56 sm:w-64 rounded-sm bg-white py-3 text-center text-xl tracking-[0.3em] text-black outline-none"
            />

            <button
              onClick={handleSubmit}
              className="px-8 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-sm text-sm tracking-widest uppercase transition"
            >
              Enter Site
            </button>
          </div>

          {/* ✅ Remember Option */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/80">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="accent-white"
            />
            <p>Remember me for 30 days</p>
          </div>

          {/* Footer */}
          <p className="mt-10 text-xs text-white italic">
            It's part of our commitment to responsible drinking.
          </p>

          <div className="mx-auto my-6 h-px w-full max-w-xl bg-white/50" />

          <p className="text-[11px] text-white leading-relaxed max-w-xl mx-auto">
            By entering this site you agree to our cookie policy, terms and
            conditions and privacy policy.
          </p>

          <p className="mt-4 text-[10px] text-white">
            © {new Date().getFullYear()} All rights reserved.
          </p>

        </div>
      </div>
    </div>
  );
};
