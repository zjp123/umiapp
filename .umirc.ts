import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/contexttest', component: '@/pages/context-test' },
    { path: '/tabel', component: '@/pages/tabelCom' },
    { path: '/tabelgroup', component: '@/pages/tabelGroup' },
    { path: '/tabelgroup1', component: '@/pages/tabelGroup1' },
    { path: '/tabelgroup3', component: '@/pages/tabelGroup3' },
    { path: '/tabelgroup4', component: '@/pages/tabelGroup4' },
    { path: '/kucun', component: '@/pages/StatisticalReport' },
    { path: '/modal', component: '@/pages/modaltest' },
  ],
  fastRefresh: {},
});
