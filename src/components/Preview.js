import React from 'react';

const Preview = ({ layout }) => {
  const previewStyles = { padding: '20px', backgroundColor: '#f0f0f0' };

  const renderContent = (key) => {
    const content = localStorage.getItem(key);
    return content ? content : ''; // Return raw HTML content
  };

  return (
    <div style={previewStyles}>
      <h2>Preview</h2>
      {layout === 'layout1' && (
        <>
          <div dangerouslySetInnerHTML={{ __html: renderContent('hero') }} />
          <div
            dangerouslySetInnerHTML={{ __html: renderContent('features1') }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: renderContent('features2') }}
          />
          <div dangerouslySetInnerHTML={{ __html: renderContent('about') }} />
        </>
      )}
      {layout === 'layout2' && (
        <>
          <div dangerouslySetInnerHTML={{ __html: renderContent('hero1') }} />
          <div
            dangerouslySetInnerHTML={{ __html: renderContent('sideContent') }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: renderContent('feature1') }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: renderContent('feature2') }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: renderContent('feature3') }}
          />
          <div dangerouslySetInnerHTML={{ __html: renderContent('footer') }} />
        </>
      )}
    </div>
  );
};

export default Preview;
