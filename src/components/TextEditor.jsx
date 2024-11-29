import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Add Quill's CSS for default styling

const TextEditor = ({ sectionKey, placeholder }) => {
  const [editorContent, setEditorContent] = useState('');

  // Load saved content from localStorage on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem(sectionKey);
    if (savedContent) {
      setEditorContent(savedContent);
    }
  }, [sectionKey]);

  // Save content to localStorage
  const saveContent = () => {
    if (!editorContent || editorContent.trim() === '') {
      alert('Error: Please add some content before saving.');
      return;
    }
    localStorage.setItem(sectionKey, editorContent);
    alert('Content saved!');
  };

  // Quill toolbar options for text formatting
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['link', 'image'],
      [{ color: [] }, { background: [] }],
      ['undo', 'redo'],
    ],
  };

  return (
    <div style={editorContainerStyles}>
      <ReactQuill
        value={editorContent}
        onChange={setEditorContent}
        modules={modules}
        theme="snow"
        placeholder={placeholder}
      />
      <button onClick={saveContent} style={buttonStyles}>
        Save
      </button>
    </div>
  );
};

// Styles
const editorContainerStyles = {
  border: '1px dashed #ccc',
  padding: '20px',
  margin: '10px 0',
  backgroundColor: '#f9f9f9',
};

const buttonStyles = {
  marginTop: '10px',
  padding: '10px 20px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default TextEditor;
