import React, { useContext } from 'react';
import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';

const EffectRef = () => {
  const testRef = useRef<any>([]);
  const [fresh, setFresh] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      testRef.current = [1, 2, 3];
      console.log('走了');
    }, 3000);
  }, []);
  useEffect(() => {
    console.log('kakakkak');
  }, [testRef.current]);
  return (
    <div>
      <Button>测试ref</Button>
    </div>
  );
};

export default EffectRef;
