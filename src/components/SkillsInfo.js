import React from 'react';

const SkillsInfo = (props) => {
  const { totalSkills } = props;
  if (totalSkills.length === 0) {
    return (<div />);
  }
  return (
    <div className="skills-info">
      <div className="section-title">Skills</div>
      <ul>
        {totalSkills.map((skill) => (
          <li key={skill.index}>{skill.skillText}</li>
        ))}
      </ul>
    </div>

  );
};

export default SkillsInfo;
