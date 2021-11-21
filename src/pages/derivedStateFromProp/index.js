import React, {Component, useEffect, useState} from "react";

class DerivedStateFromProp extends Component {

    static getDerivedStateFromProps(nextProps, state) {
        const {name, age} = nextProps
        console.log(nextProps, state, 'getDerivedStateFromProps');

        // 只要当前 user 变化，
        // 重置所有跟 user 相关的状态。
        // 这个例子中，只有 email 和 user 相关。

        // if (props.userID !== state.prevPropsUserID) {
        //   return {
        //     prevPropsUserID: props.userID,
        //     email: props.defaultEmail
        //   };
        // }
        // return null;
        // return {name: 'kkkkk'}

        // if (props.name !== state.oldProps.name) {
        //     return {
        //         name: props.name,
        //         age: props.age,
        //         oldProps: {name: props.name}
        //     }
        // }
        // return null

        if (name !== state.props.name) {
            return {
                name,
                age,
                props: nextProps
            };
        }
        // 否则，对于state不进行任何操作
        return null;
      }


    constructor(props) {
        super(props)
        this.state = {
            name: '社会实践',
            age: 18,
            props
        }
    }

    componentDidMount () {

        setTimeout(() => {
            this.setState({
                name: '是劳斯莱斯了',
                age: 29
            })
        })
    }

    render () {
        const { name, age } = this.state
        return <div>
            <p>{name}: 哈哈哈</p>
            <p>{age}: 啦啦啦啦啦</p>
        </div>
    }
}

const BoxCom = () => {
    const [aname, setAname] = useState('zjl')
    useEffect(() => {
        setTimeout(() => {
            setAname('ldh')
        }, 2000)
    }, [])

    return (
        <DerivedStateFromProp name={aname} age="19"></DerivedStateFromProp>
    )
}

export default BoxCom