function renderRepositoriesByUser() {
  var ulElement = document.querySelector('ul');
  var user = document.getElementById('user').value;

  if (!user)
    return;

  var url = 'https://api.github.com/users/' + user + '/repos';
  ulElement.innerHTML = '';

  axios.get(url)
    .then(function (response) {
      var repos = response.data;
      
      for (repository of repos) {
        var liElement = document.createElement('li');
        var text = document.createTextNode(repository.name);
        liElement.appendChild(text);
        ulElement.appendChild(liElement);
      }      
    })
}