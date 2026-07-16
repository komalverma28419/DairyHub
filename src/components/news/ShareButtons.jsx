import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";

const ShareButtons = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
      <h3 className="text-xl font-semibold">
        Share this article
      </h3>

      <div className="flex items-center gap-3">
        {/* Facebook */}
        <button className="w-11 h-11 rounded-full border hover:bg-[#00B207] hover:text-white transition flex items-center justify-center">
          <FaFacebookF size={18} />
        </button>

        {/* X (Twitter) */}
        <button className="w-11 h-11 rounded-full border hover:bg-[#00B207] hover:text-white transition flex items-center justify-center">
          <FaXTwitter size={18} />
        </button>

        {/* LinkedIn */}
        <button className="w-11 h-11 rounded-full border hover:bg-[#00B207] hover:text-white transition flex items-center justify-center">
          <FaLinkedinIn size={18} />
        </button>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          className="w-11 h-11 rounded-full border hover:bg-[#00B207] hover:text-white transition flex items-center justify-center"
        >
          <FiLink size={18} />
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;