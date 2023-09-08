async function showUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const results = await response.json();
  let str = "";
  results.map((user) => {
    str += `
          <div class="card">
          <div class="info">
              <div class="name">${user.name}</div>
          <div class="nickname">${user.username}</div>
          </div>
          <div class="inf">Wesbsite: <a href="${user.website}">${user.website}</a></div>
          <div class="inf">Adress: <a href="#">${user.address.street}</a></div>
          <div class="inf">Email: <a href="#" type="email">${user.email}</a></div>
          <div class="inf">Phone: <a href='${user.phone}' type="tel">${user.phone}</a></div>
  
          <div class="buttons">
              <button><a href="./pages/posts.html">Posts</a></button>
              <button><a href="#">Todos</a></button>
              <button><a href="#">Album</a></button>
          </div>
      </div>
          `;
  });

  parentCard.innerHTML = str;
}
let parentCard = document.querySelector(".cards");
showUsers();
