let header = document.querySelector('header');
let body = document.querySelector('body');
let nav = document.querySelector('nav');
let avatar = document.querySelector('.avatar');
let brand = document.querySelector('brand');

let changeFavicon = (url) => {
    var favicon = document.querySelector('link[rel="shortcut icon"]');

    if (!favicon) {
        favicon = document.createElement('link');
        favicon.setAttribute('rel', 'shortcut icon');
        var head = document.querySelector('head');
        head.appendChild(favicon);
    }


    favicon.setAttribute('type', 'image/png');
    favicon.setAttribute('href', url);
}

let createAvatarImage = (url) => {
  let avatarImage = document.createElement('img');
  avatarImage.id = 'avatar-image';
  avatarImage.setAttribute('src', url);

  avatar.appendChild(avatarImage);
}

let setPinnedRepo = (repo) => {
  let pinnedRepo = document.querySelector('.pinned-repo');
  let pinnedRepoBody = document.querySelector('.pinned-repo-body');
  let linkRepoTitle = document.createElement('a');
  let pinnedRepoTitle = document.createElement('h5');
  let pinnedRepoDescription = document.createElement('p');

  pinnedRepoTitle.classList.add('pinned-repo-title');
  pinnedRepoTitle.innerText = repo.name;
  pinnedRepo.setAttribute('href', repo.html_url);
  pinnedRepoBody.appendChild(pinnedRepoTitle);

  pinnedRepoDescription.classList.add('pinned-repo-description');
  pinnedRepoDescription.innerText = repo.description;
  pinnedRepoBody.appendChild(pinnedRepoDescription);

}

let setRepos = (repos) => {
  let reposDiv = document.getElementById('repos');

  repos.forEach(repo => {
    let repoElement = document.createElement('a');
    repoElement.classList.add('repo');
    let repoTitle = document.createElement('h5');
    repoTitle.classList.add('repo-title');
    let repoDescription = document.createElement('p');
    repoDescription.classList.add('repo-description');

    repoTitle.innerText = repo.name;
    repoDescription.innerText = repo.description;
    repoElement.setAttribute('href', repo.html_url);
    repoElement.setAttribute('target', '_blank');

    repoElement.appendChild(repoTitle);
    repoElement.appendChild(repoDescription);

    reposDiv.appendChild(repoElement);
  });
}

let getData = async () => {
  let res = await fetch('https://api.github.com/users/GamesProSeif/repos');
  let json = await res.json();

  createAvatarImage(json[0].owner.avatar_url);
  changeFavicon(json[0].owner.avatar_url);
  setPinnedRepo(json.find(r => r.name === 'jr-gopnik-akairo'));
  setRepos(json);

  console.log(json[0].owner);
}

getData();
