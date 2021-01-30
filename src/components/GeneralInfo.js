import React from 'react';

const GeneralInfo = (props) => {
  const { totalGenInfo } = props;
  if (totalGenInfo.length === 0) {
    return (<div />);
  }
  return (
    <div className="general-info">
      <div className="name-header">
        {totalGenInfo[0].firstName}
        {' '}
        {totalGenInfo[0].lastName}
      </div>
    </div>
  );
};

export default GeneralInfo;
