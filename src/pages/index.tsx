import styles from './index.less';
import 'antd/dist/antd.css';
import { useEffect } from 'react';
import { connectMaster, history } from 'umi';
// import { useModel } from 'umi';

// { path: '/tabel', component: '@/pages/tabelCom' },
// { path: '/tabelgroup', component: '@/pages/tabelGroup' },

function IndexPage(props: any) {
  // const masterProps = useModel('@@qiankunStateFromMaster');
  useEffect(() => {
    setTimeout(() => {
      props.setMasterState({ str: 'bbb' });
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className={styles.title}>子应用app1{props?.masterState?.str}</h1>
      <div className={styles.fixedStyle}>
        <button onClick={() => history.push('/tabel')}>go tabel</button>
        <button onClick={() => history.push('/tabelgroup')}>
          go tabelgroup
        </button>
      </div>
      {/* <h1 className={styles.title}>子应用app1{masterProps.masterState.str}</h1> */}
      {props?.children && props?.children}
    </div>
  );
}

export default connectMaster(IndexPage);
