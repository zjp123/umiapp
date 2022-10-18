import React, { forwardRef } from 'react';
import { Button } from 'antd';

const MyInput = forwardRef((params, inputRef: any) => {
  const onSearch = () => {
    const { current } = inputRef;
    current?.focus();
  };
  return (
    <div>
      2022-05-29
      <input type="text" placeholder="请输入内容" ref={inputRef} />
      <Button type="primary" onClick={onSearch}>
        搜索
      </Button>
    </div>
  );
});
export default MyInput;
