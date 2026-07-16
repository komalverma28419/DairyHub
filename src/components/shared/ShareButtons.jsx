import { FaFacebook,FaYoutube,FaInstagram, FaTwitter } from 'react-icons/fa'


const ShareButtons = ({items}) => {
  const socialLinks = [
  { name: "Facebook", icon: FaFacebook, url: "#" },
  { name: "Twitter", icon: FaTwitter, url: "#" },
  { name: "YouTube", icon: FaYoutube, url: "#" },
  { name: "Instagram", icon: FaInstagram, url: "#" }]
    const linksToShow = items
    ? socialLinks.filter((item) => items.includes(item.name))
    : socialLinks;
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
      <div className="flex gap-4 text-lg lg:text-2xl">
          {linksToShow.map((item) => (
            <a key={item.name} href={item.url} className='w-7 h-7 lg:w-9 lg:h-9 rounded-lg bg-[#DFEAFF] flex
             items-center justify-center transition-all duration-200 group hover:bg-[#b4c8ec]'>
              <item.icon className='text-[#2F75FD]'/>
            </a>
          ))}
      </div>
    </div>
  );
};

export default ShareButtons;


