import SocialIcons from "./Socialmedia.jsx";
import CCLogo from "./assets/CCLogo.png";

function Home() {

  
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-xl mx-auto p-6">
        <div className="h-70 w-70 mx-auto sm:w-96 sm:h-96">
          <div className="aspect-square">
            <img
              src={CCLogo}
              className="rounded-full object-cover object-center cursor-pointer"
              alt="Logo"
            />
          </div>
          <a 
          href="https://cultureconnection.se/bylaws/file/Bylaws_of_the_Culture_Connection.pdf" target="_blank">
          <button
            type="download"
            className="bg-red-400 sm:w-96 mx-auto mt-6 text-center p-4 rounded py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 translate-y-1 text-2xl font-bold"
          >
            Download PDF
          </button>
          </a>
          <button
            type="submit"
            className="bg-blue-400 sm:w-96 mx-auto mt-6 text-center p-4 rounded py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 translate-y-1 text-2xl font-bold"
          >
            Read here!
          </button>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

export default Home;
