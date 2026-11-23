// Đánh dấu tab đang hoạt động dựa trên trang hiện tại
document.addEventListener("DOMContentLoaded", function () {
  var current = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".nav-link");

  links.forEach(function (link) {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});
