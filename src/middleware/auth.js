export default function (to, from, userStore) {
	if (!userStore.loggedIn) {
		return '/login';
	}
}