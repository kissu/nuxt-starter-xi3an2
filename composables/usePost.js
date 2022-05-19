export default (id) => {
  const baseURL = 'https://jsonplaceholder.typicode.com/posts';
  const { pending: pendingPosts, data: posts } = useLazyFetch(baseURL);
  const { pending: pendingPost, data: post } = useLazyFetch(`${baseURL}/${id}`);

  return {
    pendingPost,
    pendingPosts,
    post,
    posts,
  };
};
