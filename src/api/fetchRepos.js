const fetchRepos = async () => {
	const response = await fetch('https://api.github.com/users/devictor8/repos');
	const data = await response.json();

	return data;
};

export default fetchRepos;
