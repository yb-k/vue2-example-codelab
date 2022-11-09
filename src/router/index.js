import Vue from 'vue';
import Router from 'vue-router';
import routes from 'vue-auto-routing';
import { createRouterLayout } from 'vue-router-layout';

/**
 * Vue-Router NavigationDuplicated error fixed
 * https://github.com/vuejs/vue-router/issues/2881#issuecomment-520554378
 */
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => {
    if (Router.isNavigationFailure(err)) {
      // resolve err
      return err;
    }
    // rethrow error
    return Promise.reject(err);
  });
};

Vue.use(Router);

const RouterLayout = createRouterLayout((layout) => {
  return import('@/layouts/' + layout + '.vue');
});

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes,
    },
  ],
});
