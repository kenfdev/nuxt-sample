export default function({ store, route }) {
  console.log('[Page Meta Middleware]', route.meta);
  const pageTitle = route.meta.reduce(
    (title, meta) => meta.pageTitle || title,
    ''
  );
  store.dispatch('setPageTitle', pageTitle);
}
