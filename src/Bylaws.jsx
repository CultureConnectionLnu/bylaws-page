import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function Bylaws() {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch('/bylaws.md')
      .then((res) => res.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <div className="flex justify-center mt-6">
      <div className="bg-white/80 rounded-lg p-6 max-w-xl w-full shadow-md h-96 overflow-y-auto">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Bylaws;