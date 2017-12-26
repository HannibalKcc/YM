// vue部分
import Transition from '../../components/vueSelf/transition/transition.vue';
import PropSlot from '../../components/vueSelf/slot/slot.vue';
import Resource from '../../components/vueSelf/resource.vue';
import Tree from '../../components/vueSelf/tree/tree.vue';
import VueRouter from '../../components/vueSelf/vue-router/vue-router.vue';
import SecondRouterA from '../../components/vueSelf/vue-router/src/a.vue';
import SecondRouterB from '../../components/vueSelf/vue-router/src/b.vue';
import SecondRouterC from '../../components/vueSelf/vue-router/src/c.vue';
const SecondRouterD = () => import('../../components/vueSelf/vue-router/src/d.vue');  // 异步组件
import Key from '../../components/vueSelf/key.vue';
import VModel from '../../components/vueSelf/v-model/v-model.vue';
import Sync from '../../components/vueSelf/sync/sync.vue';
import Global from '../../components/vueSelf/global/global.vue';
// import Hello from '../../components/Hello.vue';
import KeepAlive from '../../components/vueSelf/keep-alive/keep-alive.vue';
import VueFile from '../../components/vueSelf/vueFile/vueFile.vue';
import Directives from '../../components/vueSelf/directives.vue';

export default {
  farName: 'vuePart',
  classChild: [
    {
      path: '/transition',
      component: Transition,
      info: 'transition组件'
    },
    {
      path: '/propSlot',
      component: PropSlot,
      info: 'solt槽'
    },
    {
      path: '/resource',
      component: Resource,
      info: 'vue-resource'
    },
    {
      path: '/tree',
      component: Tree,
      info: '递归组件'
    },
    {
      path: '/vueRouter',
      component: VueRouter,
      info: 'vue-router',
      // 二级路由，配置children
      children: [
        {
          path: 'a',  // 不要写/a因为那代表了根目录下的a标签
          component: SecondRouterA
        },
        {
          path: 'b',
          component: SecondRouterB,
          meta: {needStorage: true}
        },
        {
          path: 'c',
          component: SecondRouterC,
          // 制定路由的导航钩子
          beforeEnter: (to, from, next) => {
            console.log('这是二级理由独享的导航钩子');
            next(); // 不能不写
          }
        },
        {
          path: 'd',
          component: SecondRouterD  //  异步组件引入
        }
      ]
    },
    {
      path: '/key',
      component: Key,
      info: '属性key'
    },
    {
      path: '/vModel',
      component: VModel,
      info: '属性vmodel'
    },
    {
      path: '/sync',
      component: Sync,
      info: '修饰符sync'
    },
    {
      path: '/global',
      component: Global,
      info: '全局变量、函数'
    },
    // {
    //   path: '/hello',
    //   component: Hello
    // },
    {
      path: '/keepAlive',
      component: KeepAlive,
      info: '组件keep-alive'
    },
    {
      path: '/vueFile',
      component: VueFile,
      info: '.vue文件研究'
    },
    {
      path: '/directives',
      component: Directives,
      info: 'vue自定义指令'
    }
  ]
};
