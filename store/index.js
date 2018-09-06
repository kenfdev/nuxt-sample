import Vuex from 'vuex';

export const mutationTypes = {
  SET_PAGE_TITLE: 'SET_PAGE_TITLE',
};

export const actionTypes = {
  SET_PAGE_TITLE: 'SET_PAGE_TITLE',
};

const createStore = () => {
  return new Vuex.Store({
    state: {
      pageTitle: '',
    },
    mutations: {
      [mutationTypes.SET_PAGE_TITLE](state, title) {
        state.pageTitle = title;
      },
    },
    actions: {
      [actionTypes.SET_PAGE_TITLE](vuexContext, title) {
        vuexContext.commit(mutationTypes.SET_PAGE_TITLE, title);
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
