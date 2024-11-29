// // import React, { useState } from 'react';
// // import Layout1 from './components/Layout1';
// // import Layout2 from './components/Layout2';
// // import Preview from './components/Preview';

// // const App = () => {
// //   const [layout, setLayout] = useState(1);
// //   const [sections, setSections] = useState({
// //     hero: '<h1>Welcome!</h1>',
// //     feature1: '<p>Feature 1 content</p>',
// //     feature2: '<p>Feature 2 content</p>',
// //     about: '<p>About us</p>',
// //     heroWithSide: '<h1>Side Hero Content</h1>',
// //     column1: '<p>Column 1</p>',
// //     column2: '<p>Column 2</p>',
// //     column3: '<p>Column 3</p>',
// //     footer: '<p>Footer content</p>',
// //   });

// //   const updateSection = (key, value) => {
// //     setSections({ ...sections, [key]: value });
// //   };

// //   const saveToLocalStorage = () => {
// //     localStorage.setItem('sections', JSON.stringify(sections));
// //   };

// //   const loadFromLocalStorage = () => {
// //     const saved = JSON.parse(localStorage.getItem('sections'));
// //     if (saved) setSections(saved);
// //   };

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <div style={{ marginBottom: '20px' }}>
// //         <button onClick={() => setLayout(1)} style={{ marginRight: '10px' }}>
// //           Layout 1
// //         </button>
// //         <button onClick={() => setLayout(2)} style={{ marginRight: '10px' }}>
// //           Layout 2
// //         </button>
// //         <button onClick={saveToLocalStorage} style={{ marginRight: '10px' }}>
// //           Save
// //         </button>
// //         <button onClick={loadFromLocalStorage}>Load</button>
// //       </div>
// //       {layout === 1 ? (
// //         <Layout1 sections={sections} updateSection={updateSection} />
// //       ) : (
// //         <Layout2 sections={sections} updateSection={updateSection} />
// //       )}
// //       <Preview sections={sections} />
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useState, useEffect } from 'react';
// import Layout1 from './components/Layout1';
// import Layout2 from './components/Layout2';
// import Preview from './components/Preview';

// const App = () => {
//   const initialSections = {
//     hero: '<h1>Welcome!</h1>',
//     feature1: '<p>Feature 1 content</p>',
//     feature2: '<p>Feature 2 content</p>',
//     about: '<p>About us</p>',
//     heroWithSide: '<h1>Side Hero Content</h1>',
//     column1: '<p>Column 1</p>',
//     column2: '<p>Column 2</p>',
//     column3: '<p>Column 3</p>',
//     footer: '<p>Footer content</p>',
//   };

//   const [layout, setLayout] = useState(1);
//   const [sections, setSections] = useState(initialSections);
//   const [error, setError] = useState('');

//   // Load saved content on initial load
//   useEffect(() => {
//     loadFromLocalStorage();
//   }, []);

//   const updateSection = (key, value) => {
//     setSections({ ...sections, [key]: value });
//     setError(''); // Clear any previous error
//   };

//   const saveToLocalStorage = () => {
//     try {
//       localStorage.setItem('sections', JSON.stringify(sections));
//       setError('Content saved successfully!');
//     } catch (e) {
//       setError('Failed to save content. Please try again.');
//     }
//   };

//   const loadFromLocalStorage = () => {
//     try {
//       const savedContent = localStorage.getItem('sections');
//       if (savedContent) {
//         setSections(JSON.parse(savedContent));
//         setError('Content loaded successfully!');
//       } else {
//         setError('No saved content found.');
//       }
//     } catch (e) {
//       setError('Failed to load content. Data might be corrupted.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       {/* Action buttons */}
//       <div style={{ marginBottom: '20px' }}>
//         <button
//           onClick={() => setLayout(1)}
//           style={{
//             marginRight: '10px',
//             padding: '10px',
//             background: layout === 1 ? '#ddd' : '#f0f0f0',
//             border: '1px solid #ccc',
//             cursor: 'pointer',
//           }}
//         >
//           Layout 1
//         </button>
//         <button
//           onClick={() => setLayout(2)}
//           style={{
//             marginRight: '10px',
//             padding: '10px',
//             background: layout === 2 ? '#ddd' : '#f0f0f0',
//             border: '1px solid #ccc',
//             cursor: 'pointer',
//           }}
//         >
//           Layout 2
//         </button>
//         <button
//           onClick={saveToLocalStorage}
//           style={{
//             marginRight: '10px',
//             padding: '10px',
//             background: '#90ee90',
//             border: '1px solid #ccc',
//             cursor: 'pointer',
//           }}
//         >
//           Save
//         </button>
//         <button
//           onClick={loadFromLocalStorage}
//           style={{
//             padding: '10px',
//             background: '#add8e6',
//             border: '1px solid #ccc',
//             cursor: 'pointer',
//           }}
//         >
//           Load
//         </button>
//       </div>

//       {/* Error/Success Messages */}
//       {error && (
//         <div
//           style={{
//             marginBottom: '20px',
//             padding: '10px',
//             border: '1px solid #f5c6cb',
//             background: error.includes('successfully') ? '#d4edda' : '#f8d7da',
//             color: error.includes('successfully') ? '#155724' : '#721c24',
//             borderRadius: '5px',
//           }}
//         >
//           {error}
//         </div>
//       )}

//       {/* Layout Switching */}
//       {layout === 1 ? (
//         <Layout1 sections={sections} updateSection={updateSection} />
//       ) : (
//         <Layout2 sections={sections} updateSection={updateSection} />
//       )}

//       {/* Preview Mode */}
//       <Preview sections={sections} />
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from 'react';
import Layout1 from './components/Layout1';
import Layout2 from './components/Layout2';
import Preview from './components/Preview';

const App = () => {
  const [currentLayout, setCurrentLayout] = useState('layout1');
  const [isPreview, setIsPreview] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleLayoutChange = (event) => {
    setCurrentLayout(event.target.value);
  };

  const layoutStyles = {
    container: { textAlign: 'center', padding: '20px' },
    button: { margin: '10px', padding: '10px 20px', cursor: 'pointer' },
    select: { margin: '10px', padding: '5px' },
  };

  const loaderStyles = {
    position: 'absolute', // Position loader in the center of the editor
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#007BFF',
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 1 second
    }, 1000); // 1 second delay

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div style={layoutStyles.container}>
      {loading ? (
        <div style={loaderStyles}>Loading...</div> // Display loader while content is loading
      ) : (
        <>
          {' '}
          <h1>Landing Page Builder</h1>
          <button
            style={layoutStyles.button}
            onClick={() => setIsPreview(!isPreview)}
          >
            {isPreview ? 'Edit Mode' : 'Preview Mode'}
          </button>
          <select
            style={layoutStyles.select}
            value={currentLayout}
            onChange={handleLayoutChange}
          >
            <option value="layout1">Layout 1</option>
            <option value="layout2">Layout 2</option>
          </select>
          {isPreview ? (
            <Preview layout={currentLayout} />
          ) : currentLayout === 'layout1' ? (
            <Layout1 />
          ) : (
            <Layout2 />
          )}
        </>
      )}
    </div>
  );
};

export default App;
