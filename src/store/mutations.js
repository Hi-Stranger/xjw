import * as Types from './mutations-type';

const mutations = {
  [Types.TEST](state, data) {
    console.log(state);
    console.log(data);
  },
  [Types.NOTICE](state, obj) {
    state.config = {...state.config, ...obj};
  },
  [Types.SETINFO](state, info) {
    localStorage.userinfo = JSON.stringify(info);
    state.userinfo = info;
  },
  [Types.SETOUT](state, info) {
    localStorage.removeItem('userinfo');
    state.userinfo = {};
  },
  [Types.SETLOAD](state, BOOL) {
    state.config.load = BOOL;
  },
  [Types.SCROLLWIDTH](state, num) {
    state.config.scrollwidth = num;
  }
};
export default mutations;
