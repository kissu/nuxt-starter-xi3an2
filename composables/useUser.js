export default (id) => {
  const baseURL = 'https://jsonplaceholder.typicode.com';
  const { pending: pendingUsers, data: users } = useLazyFetch(
    `${baseURL}/users`
  );
  const { pending: pendingUser, data: user } = useLazyFetch(
    `${baseURL}/users/${id}`
  );

  return {
    pendingUsers,
    users,
    pendingUser,
    user,
  };
};
