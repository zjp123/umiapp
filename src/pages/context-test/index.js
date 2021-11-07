import React, { useContext } from "react";
import ReactDOM from "react-dom";

const TestContext= React.createContext({});

const Navbar = () => {
  const { username } = useContext(TestContext)

  return (
    <div className="navbar">
      <p>{username}</p>
    </div>
  )
}

const Messages = () => {
  const { username } = useContext(TestContext)

  return (
    <div className="messages">
      <p>1 message for {username}</p>
    </div>
  )
}

export default function App() {
  return (
    <TestContext.Provider value={{username: 'superawesome'}}
    >
        <div className="test">
            <Navbar />
            <Messages />
        </div>
    </TestContext.Provider>
  )
}
