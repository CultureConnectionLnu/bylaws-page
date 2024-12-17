import ReactMarkdown from 'react-markdown';
import BylawsText from './assets/bylaws.json';

function Bylaws() {
  console.log(BylawsText.markdown);

  return (
    <div className="flex justify-center w-full">
      <div className="bg-white/80 rounded-lg p-6 max-w-6xl mx-6 w-full shadow-md overflow-y-auto">
      <ReactMarkdown 
        components={{
          h1: ({...props}) => <h1 className="text-3xl font-bold mb-4" {...props} />,
          h2: ({...props}) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
          h3: ({...props}) => <h3 className="text-lg font-semibold mb-2" {...props} />
        }}
      >
        {BylawsText.markdown}
      </ReactMarkdown>
      </div>
    </div>
  );
}

export default Bylaws;