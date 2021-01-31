import React from 'react';

const EducationInfo = (props) => {
  const { totalEducation } = props;
  if (totalEducation.length === 0) {
    return (<div />);
  }
  return (
    <div className="education-info">
      <div className="section-title">Education</div>
      {totalEducation.map((educationInfo) => (
        <div key={educationInfo.index} className="education-container">
          <div className="entry-title-container">
            <p className="title-text">
              {educationInfo.schoolName}
            </p>
            <p className="date-title">
              {educationInfo.schoolDateFrom}
              {' '}
              to
              {' '}
              {educationInfo.schoolDateTo}
              {' '}
            </p>
          </div>
          <p>
            {educationInfo.schoolDegree}
          </p>
          <p>
            Major:
            {' '}
            {educationInfo.schoolMajor}
          </p>
          <p>
            GPA:
            {' '}
            {educationInfo.GPA}
          </p>
        </div>
      ))}

    </div>
  );
};

export default EducationInfo;
