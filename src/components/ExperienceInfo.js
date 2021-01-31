import React from 'react';
import uniqid from 'uniqid';

const ExperienceInfo = (props) => {
  const { totalExperience } = props;
  if (totalExperience.length === 0) {
    return (<div />);
  }
  return (
    <div className="experience-info">
      <div className="section-title">Experience</div>
      {totalExperience.map((experienceInfo) => (
        <div key={uniqid()} className="experience-container">
          <div className="title-header">
            <p className="main-title">
              {experienceInfo.companyName}
            </p>
            <p className="date-title">date</p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default ExperienceInfo;
