import React from 'react';

const ExperienceInfo = (props) => {
  const { totalExperience } = props;
  if (totalExperience.length === 0) {
    return (<div />);
  }
  return (
    <div className="experience-info">
      <div className="section-title">Experience</div>
      {totalExperience.map((experienceInfo) => (
        <div key={experienceInfo.index} className="experience-container">
          <div className="entry-title-container">
            <p className="title-text">
              {experienceInfo.companyName}
            </p>
            <p className="date-title">
              {experienceInfo.workDateFrom}
              {' '}
              &mdash;
              {' '}
              {experienceInfo.workDateTo}
              {' '}

            </p>
          </div>
          <p>
            {experienceInfo.positionTitle}
          </p>
          <ul>
            {experienceInfo.tasks.map((task) => <li key={task.index}>{task.taskText}</li>)}
          </ul>
        </div>
      ))}

    </div>
  );
};

export default ExperienceInfo;
