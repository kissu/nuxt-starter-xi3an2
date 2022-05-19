export default async (id) => {
  const baseURL = 'https://jsonplaceholder.typicode.com';
  const { pending: pendingUsers, data: users } = await useLazyFetch(
    `${baseURL}/users`
  );
  const { pending: pendingUser, data: user } = await useLazyFetch(
    `${baseURL}/users/${id}`
  );

  return {
    pendingUsers,
    users,
    pendingUser,
    user,
  };
};
