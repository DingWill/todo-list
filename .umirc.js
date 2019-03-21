export default {
  hash: true,
  theme: './src/themes/index.js',
  treeShaking: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          immer: false
        },
        antd: true,
        routes: {
          exclude: [/model\.(j|t)sx?$/, /service\.(j|t)sx?$/, /models\//, /components\//, /services\//, /helpers\//]
        },
        locale: {
          default: 'zh-CN',
          baseNavigator: true,
          antd: true
        },
        library: 'react',
        dynamicImport: {
          webpackChunkName: true,
          level: 2
        },
        title: {
          defaultTitle: 'my-todo-list',
          useLocale: true
        },
        hardSource: false,
        pwa: false,
        hd: false,
        fastClick: false
      }
    ]
  ]
}
