var ulElement = document.querySelector('ul');

function renderError() {
  ulElement.innerHTML = '';
  renderListElement('Erro ao carregar lista de repositórios.');
  var errorElement = document.querySelector('li');
  errorElement.style.color = 'red';
}

function renderListElement(text) {
  var liElement = document.createElement('li');
  var textNode = document.createTextNode(text);
  liElement.appendChild(textNode);
  ulElement.appendChild(liElement);
}

function renderRepos(repos) {
  ulElement.innerHTML = '';

  for (repo of repos) {
    renderListElement(repo.name);
  }
}

function renderRepositoriesByUser() {
  var user = document.getElementById('user').value;

  if (!user)
    return;

  var url = 'https://api.github.com/users/' + user + '/repos';

  ulElement.innerHTML = '';
  renderListElement('Carregando...');

  axios.get(url)
    .then(function (response) {
      renderRepos(response.data);      
    })
    .catch(function (error) {
      renderError();
    });
}