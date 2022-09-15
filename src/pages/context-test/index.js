import React, { useContext } from 'react';
import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';

const TestContext = React.createContext({});

const Navbar = () => {
  const { username } = useContext(TestContext);

  return (
    <div className="navbar">
      <p>{username}</p>
    </div>
  );
};

const Messages = () => {
  // const { username, num, refTest = [] } = useContext(TestContext)
  const conObj = useContext(TestContext);
  console.log(conObj, 'refInitrefInit');
  return (
    <div className="messages">
      <p>1 message for {conObj.username}</p>
      <p>这是数字{conObj.num}</p>
      {conObj.allData.map((item) => {
        return <div key={item}>{item}</div>;
      })}
      <Button
        onClick={() => {
          conObj.setAllData([100, 200, 300]);
        }}
      >
        更新主项目数据
      </Button>
    </div>
  );
};

export default function App() {
  const [fooObj, setFooObj] = useState(0);
  const [allData, setAllData] = useState([]);
  // const refInit = useRef()
  useEffect(() => {
    setTimeout(() => {
      // setFooObj(9)
      // refInit.current = [66, 77, 88, 99]
      setAllData([66, 77, 88, 99]);
    }, 2000);
  }, []);
  return (
    <TestContext.Provider
      value={{ username: 'superawesome', num: fooObj, allData, setAllData }}
      // <TestContext.Provider value={refInit.current}
    >
      <div className="test">
        <Navbar />
        <Messages />
      </div>
    </TestContext.Provider>
  );
}

// context 结合 useRef使用时有问题，必须结合 setState 才行
// 因为当refInit.current 这样赋值时   并不会 重新渲染组件
