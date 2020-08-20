document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('.form');
    getLinks('snippets');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let userInput = document.querySelector('#addSnippet').value;
      let urlInput = document.querySelector('#addUrl').value;
      let snippetsDiv = document.querySelector('.snippets');
      let link = document.createElement('a'); 

      if (userInput !== '' && urlInput !== '') {
      link.href = urlInput;
      link.textContent = userInput;
      snippetsDiv.append(link);
      storeLinks({ 'snippets': link });
      }

      updateLinks();
      document.querySelector('#addSnippet').value = '';
      document.querySelector('#addUrl').value = '';
})

//     // chrome.tabs.query({currentWindow: true, active: true},
//     //   function (tabs) {
//     //     chrome.tabs.sendMessage(tabs[0].id, 'hi')
//     //   })
//   }, false)
});

// document.addEventListener('DOMContentLoaded', () => {
//   let links = document.querySelectorAll('a');
//   let linksArr = [...links];
//   linksArr.forEach((link) => {
//     let href = link.getAttribute('href')
//     link.addEventListener('click', () => {
//       chrome.tabs.create({url: href})
//     })
//   })
// })

function updateLinks() {
  let links = document.querySelectorAll('a');
  let linksArr = [...links];
  linksArr.forEach((link) => {
    let href = link.getAttribute('href')
    link.addEventListener('click', () => {
      chrome.tabs.create({url: href})
    })
  })
}

function storeLinks(obj) {
    chrome.storage.sync.set(obj, function () {
        alert('success')
    });
}

function getLinks(key) {
    chrome.storage.sync.get(key, function (data) {
        alert(data.snippets);
    });
}

