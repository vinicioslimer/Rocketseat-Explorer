export class GithubUser {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`;

        return fetch(endpoint).then(response => response.json()).then(data => ({
                name: data.name,
                login: data.login,
                public_repos: data.public_repos,
                followers: data.followers,
                avatar_url: data.avatar_url
        }));
    }
        
}