import { actionTypes } from '@/store';

export default function({ store, route }) {
  console.log('[Page Meta Middleware]', route.meta);
  const pageTitle = route.meta.reduce(
    (title, meta) => meta.pageTitle || title,
    ''
  );
  store.dispatch(actionTypes.SET_PAGE_TITLE, pageTitle);
}
