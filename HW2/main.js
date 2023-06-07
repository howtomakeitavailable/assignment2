document.querySelector(".navbar-btn").addEventListener("click", function () {
    // 表達點擊後要做的動作...
    // 選到 class="navbar-list" 並為其切換 active 的 class
    document.querySelector(".navbar-list").classList.toggle("active");
});