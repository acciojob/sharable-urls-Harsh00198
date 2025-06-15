// your code here
  document.getElementById("myForm").addEventListener("submit", function(e) {
      e.preventDefault(); // prevent form from reloading page

      const name = document.getElementById("name").value.trim();
      const year = document.getElementById("year").value.trim();

      let baseURL = "https://localhost:8080/";
      let queryParams = [];

      if (name !== "") {
        queryParams.push(`name=${encodeURIComponent(name)}`);
      }
      if (year !== "") {
        queryParams.push(`year=${encodeURIComponent(year)}`);
      }

      const fullURL = queryParams.length > 0
        ? `${baseURL}?${queryParams.join("&")}`
        : baseURL;

      document.getElementById("url").textContent = fullURL;