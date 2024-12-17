import ReactMarkdown from 'react-markdown';
import BylawsText from './assets/bylaws.json';

function Bylaws() {

  return (
    <div className="flex justify-center mt-6">
      <div className="bg-white/80 rounded-lg p-6 max-w-xl w-full shadow-md h-96 overflow-y-auto">
      <ReactMarkdown>{BylawsText .markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Bylaws;