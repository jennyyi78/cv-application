import React, { Component } from 'react';

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
    switch (event.target.className) {
      case 'general-info-input': {
        const { generalInfo } = this.state;
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
  }

  render() {
    const {
      generalInfo,
    } = this.state;
    return (
      <div>
        <form className="general-info" onSubmit={this.onSubmitTask}>
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
    );
  }
}

export default Form;
