// import pageRoutes from './router.config';
export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
        antd: true,
        dva: true,
        //Locale enable 为true将运行本地mock模拟数据
        locale: {
          enable: true, // default false
          default: 'zh-CN', // default zh-CN
          baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
        },
      }
    ],
  ],
  theme: {
    "@primary-color": "#30b767",
  },
  
  // routes: pageRoutes,
  routes: [
    {
      path: '/list',
      component: './List',
      routes: [
        { path: '/list/index', component: '/List/index' },
      ]
    },

    {
      path: '/css-modules-with-less',
      component: './css-modules-with-less',
      routes: [
        { path: '/css-modules-with-less/index', component: '/css-modules-with-less/index' },
      ]
    },

    {
      path: '/css-modules-with-antd',
      component: './css-modules-with-antd',
      routes: [
        { path: '/css-modules-with-antd/index', component: '/css-modules-with-antd/index' },
      ]
    },

   

    {
      path: '/',
      component: './Layout',
      routes: [
        {
          path: '/',
          component: 'index',
        },
        {
          path: '/helloworld',
          component: 'Helloworld'
        },
        {
          path: '/demo',
          component: 'demo'
        },
        { path: '/puzzlecards', component: 'PuzzlecardSPage' },
        {
          path: './dashboard',
          routes: [
            { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
            { path: '/dashboard/workplace', component: 'Dashboard/Workplace' },
          ]
        },
      ],
    },

  ],

  /**
   * 如果是以 /dev 开头的，那么就转发到远端
   * /dev 也会保留在转发地址中
   */
  // proxy: {
  //   '/dev': {
  //     target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
  //     changeOrigin: true,
  //   },
  // },
  /**
   * 如果是以 /test 开头的，那么就转发到远端
   * /test 也会保留在转发地址中
   */
  // proxy: {
  //   '/test': {
  //     target: 'http://114.116.89.193:8999',
  //     changeOrigin: true,
  //   },
  // },

}
