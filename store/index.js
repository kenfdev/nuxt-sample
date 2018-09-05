import Vuex from 'vuex';

const types = {
  SET_PAGE_TITLE: 'SET_PAGE_TITLE',
};

const createStore = () => {
  return new Vuex.Store({
    state: {
      pageTitle: '',
    },
    mutations: {
      [types.SET_PAGE_TITLE](state, title) {
        state.pageTitle = title;
      },
    },
    actions: {
      setPageTitle(vuexContext, title) {
        vuexContext.commit(types.SET_PAGE_TITLE, title);
      },
    },
    getters: {
      pageTitle(state) {
        return state.pageTitle;
      },
    },
  });
};

export default createStore;
