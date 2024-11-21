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
    <div className="bylaws-container p-6 max-w-xl mx-auto">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}

export default Bylaws;