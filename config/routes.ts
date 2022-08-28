// export default [
//   { path: '/', component: '@/pages/index' },
//   { path: '/contexttest', component: '@/pages/context-test' },
//   { path: '/tabel', component: '@/pages/tabelCom' },
//   { path: '/tabelgroup', component: '@/pages/tabelGroup' },
//   { path: '/tabelgroup1', component: '@/pages/tabelGroup1' },
//   { path: '/tabelgroup3', component: '@/pages/tabelGroup3' },
//   { path: '/tabelgroup4', component: '@/pages/tabelGroup4' },
//   { path: '/kucun', component: '@/pages/StatisticalReport' },
//   { path: '/modal', component: '@/pages/modaltest' },
//   { path: '/derivedState', component: '@/pages/derivedStateFromProp' },
//   { path: '/hocref', component: '@/pages/hoc-ref/hoc-ref.js' },
//   { path: '/hocre2', component: '@/pages/hoc-ref2/hoc-ref2.js' },
//   { path: '/hoc', component: '@/pages/hoc/hoc.js' },
//   { path: '/filelet', component: '@/pages/file-let/file-let.js' },
//   // { path: '/app1', component: '@/micro/app1' },
//   // { path: '/app2', component: '@/micro/app2' },
// ];

export default [
  {
    path: '/',
    component: '@/pages/index',
    routes: [
      { path: '/contexttest', component: '@/pages/context-test' },
      { path: '/tabel', component: '@/pages/tabelCom' },
      { path: '/tabelgroup', component: '@/pages/tabelGroup' },
      { path: '/tabelgroup1', component: '@/pages/tabelGroup1' },
      { path: '/tabelgroup3', component: '@/pages/tabelGroup3' },
      { path: '/tabelgroup4', component: '@/pages/tabelGroup4' },
      { path: '/kucun', component: '@/pages/StatisticalReport' },
      { path: '/modal', component: '@/pages/modaltest' },
      { path: '/derivedState', component: '@/pages/derivedStateFromProp' },
      { path: '/hocref', component: '@/pages/hoc-ref/hoc-ref.js' },
      { path: '/hocre2', component: '@/pages/hoc-ref2/hoc-ref2.js' },
      { path: '/hoc', component: '@/pages/hoc/hoc.js' },
      { path: '/filelet', component: '@/pages/file-let/file-let.js' },
    ],
  },

  // { path: '/app1', component: '@/micro/app1' },
  // { path: '/app2', component: '@/micro/app2' },
];
