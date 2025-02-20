import React from 'react';

const RenderContentSections = ({ contentSectionsData = [] }) => {
  return (
    <div>
      {contentSectionsData.map((section, index) => (
        <div key={index} className="section">
          <h2 className="section-title">{section.title}</h2>
          <p className="section-content">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default RenderContentSections;
