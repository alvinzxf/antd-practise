// import pageRoutes from './router.config';
export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
        antd: true,
        dva: {
          hmr: true,
        },
      }
    ],
  ],
  // routes: pageRoutes,

}