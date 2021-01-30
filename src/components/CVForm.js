import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import '../styles/app.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      totalGenInfo: [],

      generalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      },
      //   totalEducation: [],

      //   educationInfo: {
      //     schoolName: '',
      //     schoolDateFrom: '',
      //     schoolDateTo: '',
      //     schoolDegree: '',
      //     schoolMajor: '',
      //   },
      //   totalExperience: [],

      //   experienceInfo: {
      //     companyName: '',
      //     positionTitle: '',
      //     workDateFrom: '',
      //     workDateTo: '',
      //     mainTasks: [],
      //     task: '',

    //   },
    };
  }

  handleChange = (event) => {
    const { generalInfo } = this.state;
    switch (event.target.className) {
      case 'general-info-input': {
        generalInfo[event.target.id] = event.target.value;
        this.setState({ generalInfo });
        break;
      }
      default:
        break;
    }
  }

  onSubmitTask = (event) => {
    event.preventDefault();
    const { totalGenInfo, generalInfo } = this.state;
    this.setState({
      totalGenInfo: totalGenInfo.concat(generalInfo),
    });
  }

  printResume = () => {
    window.print();
  }

  render() {
    const {
      totalGenInfo, generalInfo,
    } = this.state;
    return (
      <div>
        <div className="cv-form-container">
          <form className="general-info-form" onSubmit={this.onSubmitTask}>
            <label htmlFor="firstName">
              First Name
              <input
                onChange={this.handleChange}
                value={generalInfo.firstName}
                type="text"
                id="firstName"
                className="general-info-input"
              />
            </label>

            <label htmlFor="lastName">
              Last Name
              <input
                onChange={this.handleChange}
                value={generalInfo.lastName}
                type="text"
                id="lastName"
                className="general-info-input"
              />
            </label>

            <label htmlFor="email">
              Email
              <input
                onChange={this.handleChange}
                value={generalInfo.email}
                type="text"
                id="email"
                className="general-info-input"
              />
            </label>

            <label htmlFor="phoneNumber">
              Phone Number
              <input
                onChange={this.handleChange}
                value={generalInfo.phoneNumber}
                type="text"
                id="phoneNumber"
                className="general-info-input"
              />
            </label>

            <button type="submit">
              Add General Info
            </button>
          </form>
        </div>
        <div className="resume-container">
          <GeneralInfo totalGenInfo={totalGenInfo} />
        </div>
        <button type="button" className="print-button" onClick={this.printResume}>Print</button>

      </div>
    );
  }
}

export default Form;
