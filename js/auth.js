document.addEventListener("DOMContentLoaded", () => {
  const regForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");

  // User register
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("reg-name").value.trim();
      const email = document.getElementById("reg-email").value.trim();
      const password = document.getElementById("reg-password").value;

      const user = { name, email, password };
      localStorage.setItem("user", JSON.stringify(user));

      alert("✅ Registration successful!");
      window.location.href = "login.html";
    });
  }

  // User login
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value;
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
        alert(`✅ Welcome, ${storedUser.name}!`);
        window.location.href = "index.html";
      } else {
        alert("❌ Invalid email or password.");
      }
    });
  }

  // Insert username and logout button in the header
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const insertUserHeaderInfo = () => {
    const userInfo = document.getElementById("user-info");
    if (!userInfo || !loggedInUser) return;

    userInfo.innerHTML = `
      <span style="margin-right: 10px;">Hi, ${loggedInUser.name}</span>
      <a href="#" id="logout" title="Logout">🚪 Sair</a>
    `;

    document.getElementById("logout").addEventListener("click", () => {
      localStorage.removeItem("loggedInUser");
      window.location.href = "login.html";
    });
  };

  // Redirect if the user is not logged
  const path = window.location.pathname;
  const isProtectedPage = !path.endsWith("login.html") && !path.endsWith("register.html");
  if (isProtectedPage && !loggedInUser) {
    window.location.href = "login.html";
  }

  // Wait the header load to insert the username
  const waitHeader = setInterval(() => {
    if (document.getElementById("user-info")) {
      insertUserHeaderInfo();
      clearInterval(waitHeader);
    }
  }, 100);
});
