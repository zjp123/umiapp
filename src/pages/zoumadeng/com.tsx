import React from 'react';

const ScreenCon = (props: any) => {
  return (
    <div className="leval-one">
      <h3 style={props.contentStyle}>{props.data}</h3>
    </div>
  );
};

export default ScreenCon;
