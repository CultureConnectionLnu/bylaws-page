import { useRef, useState, useEffect } from 'react';
import SocialIcons from "./Socialmedia.jsx";
import CCLogo from "./assets/CCLogo.png";
import Bylaws from "./Bylaws.jsx";

function Home() {
  const [showBylaws, setShowBylaws] = useState(false);
  const bylawsRef = useRef(null);

  useEffect(() => {
    if (showBylaws && bylawsRef.current) {
      bylawsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showBylaws]);

  const handleReadHereClick = () => {
    setShowBylaws((prevShowBylaws) => !prevShowBylaws);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
          <div className="mx-auto m-6">
              <img
                src={CCLogo}
                className="h-96 w-96 rounded-full"
                alt="Logo"
              />
            <a
              href="https://cultureconnection.se/bylaws/file/Bylaws_of_the_Culture_Connection.pdf"
              target="_blank"
              download
            >
              <button
                className="bg-red-400 w-[100%] mx-auto mt-6 text-center rounded py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:-translate-x-1 hover:translate-y-1 text-2xl font-bold"
              >
                Download PDF
              </button>
            </a>
            <button
              type="button"
              onClick={handleReadHereClick}
              className="bg-blue-400 w-[100%] mx-auto mt-6 text-center rounded py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:-translate-x-1 hover:translate-y-1 text-2xl font-bold"
            >
              {showBylaws ? 'Hide' : 'Read here!'}
            </button>

          </div>
        </div>
        {showBylaws && (
        <div className="sm:w-full mx-auto justify-center items-center w-96" ref={bylawsRef}>
          <Bylaws />
        </div>
      )}
      <SocialIcons />
      </div>
    
  );
}

export default Home;