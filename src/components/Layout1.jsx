import React, { useEffect } from 'react';
import TextEditor from './TextEditor';

const Layout1 = () => {
  const layoutStyles = {
    container: {
      maxWidth: '1200px',
      margin: 'auto',
      padding: '20px',
      textAlign: 'left',
    },
    section: {
      marginBottom: '30px',
    },
    twoColumnLayout: {
      display: 'flex',
      gap: '20px',
    },
    column: {
      flex: '1',
    },
  };

  useEffect(() => {
    // Save mock content into localStorage (This can be done in the browser console or in your app)
    localStorage.setItem(
      'features1',
      '<h2>Feature 1</h2><p>This is a pre-loaded feature 1 content. It can be edited inline.</p>'
    );
    localStorage.setItem(
      'features2',
      '<h2>Feature 2</h2><p>This is a pre-loaded feature 2 content. Modify as required.</p>'
    );
  });

  return (
    <div style={layoutStyles.container}>
      {/* Hero Section */}
      <div style={layoutStyles.section}>
        <TextEditor sectionKey="hero" placeholder="Hero Section Content" />
      </div>

      {/* Features Section - 2 Columns */}
      <div style={{ ...layoutStyles.section, ...layoutStyles.twoColumnLayout }}>
        <div style={layoutStyles.column}>
          <TextEditor sectionKey="features1" placeholder="Feature 1" />
        </div>
        <div style={layoutStyles.column}>
          <TextEditor sectionKey="features2" placeholder="Feature 2" />
        </div>
      </div>

      {/* About Section */}
      <div style={layoutStyles.section}>
        <TextEditor sectionKey="about" placeholder="About Section Content" />
      </div>
    </div>
  );
};

export default Layout1;
