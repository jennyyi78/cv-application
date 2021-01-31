import React from 'react';
import uniqid from 'uniqid';

const EducationInfo = (props) => {
  const { totalEducation } = props;
  if (totalEducation.length === 0) {
    return (<div />);
  }
  return (
    <div className="education-info">
      <div className="section-title">Education</div>
      {totalEducation.map((education) => (
        <div key={uniqid()} className="education-container">
          <div className="title-header">
            <p className="main-title">
              {education.schoolName}
            </p>
            <p className="date-title">date</p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default EducationInfo;
