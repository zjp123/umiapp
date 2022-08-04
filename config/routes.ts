export default [
  {
    path: '/',
    component: '@/pages/index',
    exact: true,
    routes: [
      // { path: '/contexttest', component: '@/pages/context-test', exact: true },
      // { path: '/tabel', component: '@/pages/tabelCom', exact: true },
      // { path: '/tabelgroup', component: '@/pages/tabelGroup', exact: true },
      // { path: '/tabelgroup1', component: '@/pages/tabelGroup1', exact: true },
      // { path: '/tabelgroup3', component: '@/pages/tabelGroup3', exact: true },
      // { path: '/tabelgroup4', component: '@/pages/tabelGroup4', exact: true },
      // { path: '/kucun', component: '@/pages/StatisticalReport', exact: true },
      // { path: '/modal', component: '@/pages/modaltest', exact: true },
      // { path: '/derivedState', component: '@/pages/derivedStateFromProp', exact: true },
      // { path: '/hocref', component: '@/pages/hoc-ref/hoc-ref.js', exact: true },
      // { path: '/hocre2', component: '@/pages/hoc-ref2/hoc-ref2.js', exact: true },
      // { path: '/hoc', component: '@/pages/hoc/hoc.js', exact: true },
      // { path: '/filelet', component: '@/pages/file-let/file-let.js', exact: true },
    ],
    // routes: [
    //   {
    //     path: '/tabel',
    //     component: '@/pages/tabelCom'
    //   },
    // ]
  },
  { path: '/contexttest', component: '@/pages/context-test', exact: true },
  { path: '/tabel', component: '@/pages/tabelCom', exact: true },
  { path: '/tabelgroup', component: '@/pages/tabelGroup', exact: true },
  { path: '/tabelgroup1', component: '@/pages/tabelGroup1', exact: true },
  { path: '/tabelgroup3', component: '@/pages/tabelGroup3', exact: true },
  { path: '/tabelgroup4', component: '@/pages/tabelGroup4', exact: true },
  { path: '/kucun', component: '@/pages/StatisticalReport', exact: true },
  { path: '/modal', component: '@/pages/modaltest', exact: true },
  {
    path: '/derivedState',
    component: '@/pages/derivedStateFromProp',
    exact: true,
  },
  { path: '/hocref', component: '@/pages/hoc-ref/hoc-ref.js', exact: true },
  { path: '/hocre2', component: '@/pages/hoc-ref2/hoc-ref2.js', exact: true },
  { path: '/hoc', component: '@/pages/hoc/hoc.js', exact: true },
  { path: '/filelet', component: '@/pages/file-let/file-let.js', exact: true },
  // { path: '/app1', component: '@/micro/app1' },
  // { path: '/app2', component: '@/micro/app2' },
];
