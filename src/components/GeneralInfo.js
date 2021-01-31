import React from 'react';

const GeneralInfo = (props) => {
  const { generalInfo } = props;
  return (
    <div className="general-info">
      <div className="name-header">
        {generalInfo.firstName}
        {' '}
        {generalInfo.lastName}
      </div>

      <div className="info-header">
        {generalInfo.email}
        {' \u2022 '}
        {generalInfo.phoneNumber}
      </div>
    </div>
  );
};

export default GeneralInfo;
