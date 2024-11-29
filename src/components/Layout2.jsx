import React from 'react';
import TextEditor from './TextEditor';

const Layout2 = () => {
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
    sideContentLayout: {
      display: 'flex',
      gap: '20px',
      marginBottom: '30px',
    },
    mainContent: {
      flex: '3',
    },
    sideContent: {
      flex: '1',
    },
    threeColumnLayout: {
      display: 'flex',
      gap: '20px',
      marginBottom: '30px',
    },
    column: {
      flex: '1',
    },
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
    },
    // Media Queries
    '@media (max-width: 768px)': {
      sideContentLayout: {
        flexDirection: 'column', // Stack side content below hero on smaller screens
      },
      threeColumnLayout: {
        flexDirection: 'column', // Stack the features columns vertically on small screens
      },
      column: {
        flex: 'none', // Prevent columns from growing horizontally
      },
    },
  };

  return (
    <div style={layoutStyles.container}>
      {/* Hero with Side Content */}
      <div style={layoutStyles.section}>
        <div style={layoutStyles.sideContentLayout}>
          <div style={layoutStyles.mainContent}>
            <TextEditor sectionKey="hero1" placeholder="Hero Section Content" />
          </div>
          <div style={layoutStyles.sideContent}>
            <TextEditor sectionKey="sideContent" placeholder="Side Content" />
          </div>
        </div>
      </div>

      {/* Three Column Features */}
      <div style={layoutStyles.section}>
        <div style={layoutStyles.threeColumnLayout}>
          <div style={layoutStyles.column}>
            <TextEditor sectionKey="feature1" placeholder="Feature 1" />
          </div>
          <div style={layoutStyles.column}>
            <TextEditor sectionKey="feature2" placeholder="Feature 2" />
          </div>
          <div style={layoutStyles.column}>
            <TextEditor sectionKey="feature3" placeholder="Feature 3" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div style={layoutStyles.footer}>
        <TextEditor sectionKey="footer" placeholder="Footer Content" />
      </div>
    </div>
  );
};

export default Layout2;
