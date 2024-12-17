import ReactMarkdown from 'react-markdown';
import BylawsText from './assets/bylaws.json';

function Bylaws() {
  console.log(BylawsText.markdown);

  return (
    <div className="flex justify-center w-full">
      <div className="bg-white/80 rounded-lg p-6 max-w-6xl mx-6 w-full shadow-md overflow-y-auto">
        <ReactMarkdown
          components={{
            // Headers
            h1: ({ ...props }) => (
              <h1 className="text-3xl font-bold mb-4 border-b pb-2" {...props} />
            ),
            h2: ({ ...props }) => (
              <h2 className="text-2xl font-semibold mb-3 border-b pb-1" {...props} />
            ),
            h3: ({ ...props }) => (
              <h3 className="text-lg font-semibold mb-2" {...props} />
            ),

            // Paragraph
            p: ({ ...props }) => (
              <p className="text-gray-700 mb-4 leading-relaxed" {...props} />
            ),

            // Links
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {children}
              </a>
            ),

            // Lists
            ul: ({ ...props }) => (
              <ul className="list-disc list-inside mb-4" {...props} />
            ),
            ol: ({ ...props }) => (
              <ol className="list-decimal list-inside mb-4" {...props} />
            ),
            li: ({ ...props }) => (
              <li className="mb-2" {...props} />
            ),

            // Blockquotes
            blockquote: ({ ...props }) => (
              <blockquote
                className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4"
                {...props}
              />
            ),

            // Code
            code: ({ inline, ...props }) =>
              inline ? (
                <code
                  className="bg-gray-200 rounded px-1 py-0.5 text-sm text-gray-800"
                  {...props}
                />
              ) : (
                <pre
                  className="bg-gray-100 rounded p-4 overflow-x-auto mb-4 text-sm"
                  {...props}
                />
              ),

            // Horizontal Rule
            hr: () => <hr className="my-6 border-t border-gray-300" />,

            // Images
            img: ({ src, alt }) => (
              <img
                src={src}
                alt={alt}
                className="my-4 rounded-lg shadow-md max-w-full"
              />
            ),

            // Tables
            table: ({ ...props }) => (
              <table className="w-full border-collapse border border-gray-300 mb-4" {...props} />
            ),
            thead: ({ ...props }) => (
              <thead className="bg-gray-200" {...props} />
            ),
            tr: ({ ...props }) => (
              <tr className="border-b border-gray-300" {...props} />
            ),
            th: ({ ...props }) => (
              <th className="border border-gray-300 p-2 font-semibold text-left" {...props} />
            ),
            td: ({ ...props }) => (
              <td className="border border-gray-300 p-2 text-gray-700" {...props} />
            ),

            // Bold
            strong: ({ ...props }) => (
              <strong className="font-bold text-gray-800" {...props} />
            ),

            // Italic
            em: ({ ...props }) => (
              <em className="italic text-gray-600" {...props} />
            ),

            // Strikethrough
            del: ({ ...props }) => (
              <del className="line-through text-red-500" {...props} />
            ),

            // Line Breaks
            br: () => <br />,
          }}
        >
          {BylawsText.markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Bylaws;