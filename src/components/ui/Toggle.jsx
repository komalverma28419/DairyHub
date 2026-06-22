import React from "react";

const Toggle = ({ isYearly, setIsYearly }) => {
  return (
    <div className="flex items-center justify-center gap-4">

      {/* Monthly */}
      <span
        className={`font-semibold transition ${
          !isYearly ? "text-[#E04943]" : "text-[#04092152]"
        }`}
      >
        Monthly
      </span>

      {/* Toggle Switch */}

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className = "sr-only peer"
          checked={isYearly}
          onChange={() => setIsYearly(!isYearly)}
        />
        <div className="w-11 h-6 bg-[#04092152] rounded-full peer-checked:bg-[#E04943] transition"></div>
        <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-5"></span>
      </label>

      
      <span
        className={`font-semibold transition ${
          isYearly ? "text-[#E04943]" : "text-[#04092152]"
        }`}
      >
        Yearly
      </span>
    </div>
  );
};

export default Toggle;
