import styles from './index.less';
import 'antd/dist/antd.css';
import { useEffect } from 'react';
import { connectMaster } from 'umi';
// import { useModel } from 'umi';

function IndexPage(props: any) {
  // const masterProps = useModel('@@qiankunStateFromMaster');
  useEffect(() => {
    setTimeout(() => {
      props.setMasterState({ str: 'bbb' });
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className={styles.title}>子应用app1{props.masterState.str}</h1>
      {/* <h1 className={styles.title}>子应用app1{masterProps.masterState.str}</h1> */}
    </div>
  );
}

export default connectMaster(IndexPage);
