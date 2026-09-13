const menuBtn = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});