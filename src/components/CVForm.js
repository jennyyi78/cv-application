import React, { Component } from 'react';
import uniqid from 'uniqid';
import GeneralInfo from './GeneralInfo';
import EducationInfo from './EducationInfo';
import ExperienceInfo from './ExperienceInfo';
import '../styles/app.css';

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
    const { generalInfo, totalEducation, totalExperience } = this.state;
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
      totalEducation, totalExperience,
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
          task: '',

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
    const { totalEducation, totalExperience } = this.state;

    switch (event.target.className) {
      case 'delete-education-info': {
        this.setState({
          totalEducation: totalEducation.filter((educationInfo) => educationInfo.index !== event.target.getAttribute('data-index')),
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
      generalInfo, totalEducation, totalExperience,
    } = this.state;

    return (
      <div className="main-container">
        <div className="cv-form-container">
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
              Email
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

          {totalEducation.map((educationInfo) => (
            <form key={educationInfo.index} className="education-info-form" onSubmit={this.onSubmitTask}>
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
                Start Date
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
                End Date
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
                GPA
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
              <button type="button" data-index={educationInfo.index} className="delete-education-info" onClick={this.deleteForm}>Delete</button>
            </form>
          ))}
          <button type="button" className="add-education-info" onClick={this.createAdditionalForm}>Add New Education</button>

          {totalExperience.map((experienceInfo) => (
            <form key={experienceInfo.index} className="experience-info-form" onSubmit={this.onSubmitTask}>
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

              <label htmlFor="workDateFrom">
                Start Date
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
                End Date
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
                    <button type="button" id="tasks" data-index={experienceInfo.index} data-task-index={task.index} className="delete-tasks-info" onClick={this.deleteForm}>Delete Task</button>
                  </div>

                ))}
              </label>
              <button type="button" data-index={experienceInfo.index} className="add-task" onClick={this.createAdditionalForm}>Add New Task</button>
              <button type="button" data-index={experienceInfo.index} className="delete-experience-info" onClick={this.deleteForm}>Delete</button>
            </form>
          ))}
          <button type="button" className="add-experience-info" onClick={this.createAdditionalForm}>Add New Experience</button>
        </div>
        <div className="resume-container">
          <GeneralInfo generalInfo={generalInfo} />
          <EducationInfo totalEducation={totalEducation} />
          <ExperienceInfo totalExperience={totalExperience} />
          <button type="button" className="print-button" onClick={this.printResume}>Print</button>
        </div>

      </div>
    );
  }
}

export default Form;
