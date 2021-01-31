import React, { Component } from 'react';
import uniqid from 'uniqid';
import GeneralInfo from './GeneralInfo';
import EducationInfo from './EducationInfo';
import SkillsInfo from './SkillsInfo';
import ExperienceInfo from './ExperienceInfo';

class Form extends Component {
  constructor() {
    super();
    this.state = {

      generalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      },

      totalEducation: [{

        index: uniqid(),
        schoolName: '',
        schoolDateFrom: '',
        schoolDateTo: '',
        schoolDegree: '',
        schoolMajor: '',
        GPA: '',

      }],

      totalSkills: [{ index: uniqid(), skillText: '' }],

      totalExperience: [{
        index: uniqid(),
        companyName: '',
        positionTitle: '',
        workDateFrom: '',
        workDateTo: '',
        tasks: [{ index: uniqid(), taskText: '' }],
      }],

    };
  }

  handleChange = (event) => {
    const {
      generalInfo, totalEducation, totalExperience, totalSkills,
    } = this.state;
    const index = event.target.getAttribute('data-index');
    switch (event.target.className) {
      case 'general-info-input': {
        generalInfo[event.target.id] = event.target.value;
        this.setState({ generalInfo });
        break;
      }
      case 'education-info-input': {
        const education = totalEducation.find((educationInfo) => educationInfo.index === index);
        education[event.target.id] = event.target.value;
        this.setState({ totalEducation });
        break;
      }

      case 'skills-info-input': {
        const skill = totalSkills.find((skillInfo) => skillInfo.index === index);

        skill.skillText = event.target.value;

        this.setState({ totalSkills });
        break;
      }
      case 'experience-info-input': {
        const experience = totalExperience.find((experienceInfo) => experienceInfo.index === index);
        experience[event.target.id] = event.target.value;
        this.setState({ totalExperience });
        break;
      }

      case 'tasks-info-input': {
        const experience = totalExperience.find((experienceInfo) => experienceInfo.index === index);

        const taskIndex = event.target.getAttribute('data-task-index');
        const task = experience.tasks.find((taskInfo) => taskInfo.index === taskIndex);
        task.taskText = event.target.value;

        this.setState({ totalExperience });
        break;
      }

      default:
        break;
    }
  }

  createAdditionalForm = (event) => {
    const {
      totalEducation, totalExperience, totalSkills,
    } = this.state;

    const id = uniqid();

    switch (event.target.className) {
      case 'add-education-info': {
        const newForm = {

          index: id,
          schoolName: '',
          schoolDateFrom: '',
          schoolDateTo: '',
          schoolDegree: '',
          schoolMajor: '',
          GPA: '',

        };

        this.setState({
          totalEducation: totalEducation.concat(newForm),
        });
        break;
      }

      case 'add-skill': {
        const newSkill = {

          index: id,
          skillText: '',

        };

        this.setState({
          totalSkills: totalSkills.concat(newSkill),
        });
        break;
      }
      case 'add-experience-info': {
        const newForm = {

          index: uniqid(),
          companyName: '',
          positionTitle: '',
          workDateFrom: '',
          workDateTo: '',
          tasks: [{ index: uniqid(), taskText: '' }],

        };

        this.setState({
          totalExperience: totalExperience.concat(newForm),
        });
        break;
      }

      case 'add-task': {
        const newTask = {

          index: id,
          taskText: '',

        };

        const experience = totalExperience.find(
          (experienceInfo) => experienceInfo.index === event.target.getAttribute('data-index'),
        );
        experience.tasks = experience.tasks.concat(newTask);
        this.setState({
          totalExperience,
        });
        break;
      }

      default:
        break;
    }
  }

  deleteForm = (event) => {
    const { totalEducation, totalExperience, totalSkills } = this.state;

    switch (event.target.classList[0]) {
      case 'delete-education-info': {
        this.setState({
          totalEducation: totalEducation.filter((educationInfo) => educationInfo.index !== event.target.getAttribute('data-index')),
        });
        break;
      }

      case 'delete-skills-info': {
        this.setState({
          totalSkills: totalSkills.filter((skillInfo) => skillInfo.index !== event.target.getAttribute('data-index')),
        });
        break;
      }

      case 'delete-experience-info': {
        this.setState({
          totalExperience: totalExperience.filter((experienceInfo) => experienceInfo.index !== event.target.getAttribute('data-index')),
        });
        break;
      }
      case 'delete-tasks-info': {
        const experience = totalExperience.find(
          (experienceInfo) => experienceInfo.index === event.target.getAttribute('data-index'),
        );
        experience.tasks = experience.tasks.filter((task) => task.index !== event.target.getAttribute('data-task-index'));
        this.setState({
          totalExperience,
        });
        break;
      }

      default:
        break;
    }
  }

  printResume = () => {
    window.print();
  }

  enterToSubmit = (event) => {
    if (event.keyCode === 13) {
      event.target.blur();
    }
  }

  render() {
    const {
      generalInfo, totalEducation, totalSkills, totalExperience,
    } = this.state;

    return (
      <div className="main-container">
        <div className="form-header">
          Resume Maker
        </div>
        <div className="sub-container">
          <div className="cv-form-container">
            <div className="form-section-title">
              General Information
            </div>
            <br />
            <form className="general-info-form" onSubmit={this.onSubmitTask}>
              <label htmlFor="firstName">
                First Name
                <input
                  onBlur={this.handleChange}
                  defaultValue={generalInfo.firstName}
                  type="text"
                  id="firstName"
                  className="general-info-input"
                  onKeyDown={this.enterToSubmit}
                />
              </label>
              <label htmlFor="lastName">
                Last Name
                <input
                  onBlur={this.handleChange}
                  defaultValue={generalInfo.lastName}
                  type="text"
                  id="lastName"
                  className="general-info-input"
                  onKeyDown={this.enterToSubmit}
                />
              </label>

              <label htmlFor="email">
                Email Address
                <input
                  onBlur={this.handleChange}
                  defaultValue={generalInfo.email}
                  type="text"
                  id="email"
                  className="general-info-input"
                  onKeyDown={this.enterToSubmit}
                />
              </label>

              <label htmlFor="phoneNumber">
                Phone Number
                <input
                  onBlur={this.handleChange}
                  defaultValue={generalInfo.phoneNumber}
                  type="tel"
                  id="phoneNumber"
                  className="general-info-input"
                  onKeyDown={this.enterToSubmit}
                />
              </label>

            </form>

            <div className="form-section-title">
              Education
            </div>
            <br />

            {totalEducation.map((educationInfo) => (
              <div key={educationInfo.index}>
                <form className="education-info-form" onSubmit={this.onSubmitTask}>
                  <label htmlFor="schoolName">
                    School Name
                    <input
                      onBlur={this.handleChange}
                      defaultValue={educationInfo.schoolName}
                      type="text"
                      id="schoolName"
                      className="education-info-input"
                      data-index={educationInfo.index}
                      onKeyDown={this.enterToSubmit}
                    />
                  </label>

                  <label htmlFor="schoolDateFrom">
                    Starting Date
                    <input
                      onBlur={this.handleChange}
                      defaultValue={educationInfo.schoolDateFrom}
                      type="date"
                      id="schoolDateFrom"
                      className="education-info-input"
                      data-index={educationInfo.index}
                      onKeyDown={this.enterToSubmit}
                    />
                  </label>

                  <label htmlFor="schoolDateTo">
                    Ending Date
                    <input
                      onBlur={this.handleChange}
                      defaultValue={educationInfo.schoolDateTo}
                      type="date"
                      id="schoolDateTo"
                      className="education-info-input"
                      data-index={educationInfo.index}
                    />
                  </label>

                  <label htmlFor="schoolDegree">
                    Degree Achieved
                    <input
                      onBlur={this.handleChange}
                      defaultValue={educationInfo.schoolDegree}
                      type="text"
                      id="schoolDegree"
                      className="education-info-input"
                      data-index={educationInfo.index}
                      onKeyDown={this.enterToSubmit}
                    />
                  </label>

                  <label htmlFor="schoolMajor">
                    Study of Field
                    <input
                      onBlur={this.handleChange}
                      defaultValue={educationInfo.schoolMajor}
                      type="text"
                      id="schoolMajor"
                      className="education-info-input"
                      data-index={educationInfo.index}
                      onKeyDown={this.enterToSubmit}
                    />
                  </label>

                  <label htmlFor="GPA">
                    Grade Point Average
                    <input
                      onBlur={this.handleChange}
                      defaultValue={educationInfo.GPA}
                      type="number"
                      id="GPA"
                      className="education-info-input"
                      data-index={educationInfo.index}
                      onKeyDown={this.enterToSubmit}
                    />
                  </label>

                </form>
                <button type="button" data-index={educationInfo.index} className="delete-education-info" onClick={this.deleteForm}>Delete Education</button>
              </div>
            ))}
            <button type="button" className="add-education-info" onClick={this.createAdditionalForm}>Add New Education</button>

            <div className="form-section-title">
              Skills
            </div>
            <br />
            <form>
              <label htmlFor="skills">
                {totalSkills.map((skill) => (
                  <div key={skill.index}>
                    <input
                      onBlur={this.handleChange}
                      defaultValue={skill.skillText}
                      type="text"
                      id="skills"
                      className="skills-info-input"
                      data-index={skill.index}
                      onKeyDown={this.enterToSubmit}
                    />
                    <button type="button" id="skill" data-index={skill.index} className="delete-skills-info delete-entry" onClick={this.deleteForm}>
                      &mdash;
                    </button>
                  </div>
                ))}
              </label>
            </form>
            <button type="button" className="add-skill" onClick={this.createAdditionalForm}>Add New Skill</button>

            <div className="form-section-title">
              Experience
            </div>
            <br />
            {totalExperience.map((experienceInfo) => (
              <div key={experienceInfo.index}>
                <form className="experience-info-form" onSubmit={this.onSubmitTask}>
                  <label htmlFor="companyName">
                    Company Name
                    <input
                      onBlur={this.handleChange}
                      defaultValue={experienceInfo.companyName}
                      type="text"
                      id="companyName"
                      className="experience-info-input"
                      data-index={experienceInfo.index}
                      onKeyDown={this.enterToSubmit}
                    />
                  </label>

                  <label htmlFor="workDateFrom">
                    Starting Date
                    <input
                      onBlur={this.handleChange}
                      defaultValue={experienceInfo.workDateFrom}
                      type="date"
                      id="workDateFrom"
                      className="experience-info-input"
                      data-index={experienceInfo.index}
                      onKeyDown={this.enterToSubmit}
                    />
                  </label>

                  <label htmlFor="workDateTo">
                    Ending Date
                    <input
                      onBlur={this.handleChange}
                      defaultValue={experienceInfo.workDateTo}
                      type="date"
                      id="workDateTo"
                      className="experience-info-input"
                      data-index={experienceInfo.index}
                      onKeyDown={this.enterToSubmit}
                    />
                  </label>

                  <label htmlFor="positionTitle">
                    Position Title
                    <input
                      onBlur={this.handleChange}
                      defaultValue={experienceInfo.positionTitle}
                      type="text"
                      id="positionTitle"
                      className="experience-info-input"
                      data-index={experienceInfo.index}
                      onKeyDown={this.enterToSubmit}
                    />
                  </label>

                  <div>
                    <label htmlFor="tasks">
                      Tasks
                      {experienceInfo.tasks.map((task) => (
                        <div key={task.index}>
                          <input
                            onBlur={this.handleChange}
                            defaultValue={task.taskText}
                            type="text"
                            id="tasks"
                            className="tasks-info-input"
                            data-index={experienceInfo.index}
                            data-task-index={task.index}
                            onKeyDown={this.enterToSubmit}
                          />
                          <button type="button" id="tasks" data-index={experienceInfo.index} data-task-index={task.index} className="delete-tasks-info delete-entry" onClick={this.deleteForm}>
                            &mdash;
                          </button>
                        </div>

                      ))}
                    </label>
                  </div>

                </form>
                <button type="button" data-index={experienceInfo.index} className="add-task" onClick={this.createAdditionalForm}>Add New Task</button>
                <br />
                <button type="button" data-index={experienceInfo.index} className="delete-experience-info" onClick={this.deleteForm}>Delete Experience</button>
              </div>
            ))}

            <button type="button" className="add-experience-info" onClick={this.createAdditionalForm}>Add New Experience</button>

          </div>
          <div className="resume-container">
            <GeneralInfo generalInfo={generalInfo} />
            <EducationInfo totalEducation={totalEducation} />
            <SkillsInfo totalSkills={totalSkills} />
            <ExperienceInfo totalExperience={totalExperience} />
            <div><button type="button" className="print-button" onClick={this.printResume}>Print</button></div>

          </div>

        </div>
      </div>
    );
  }
}

export default Form;
