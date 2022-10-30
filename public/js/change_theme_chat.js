const change_theme_btn = document.querySelector("#change_theme");
const header = document.querySelector(".chat-header");
const footer = document.querySelector(".chat-form-container");
const sidebar = document.querySelector(".chat-sidebar");
const btn1 = document.querySelectorAll(".btn")[0];
const btn2 = document.querySelectorAll(".btn")[1];
let clicked = 0;
change_theme_btn.addEventListener("click", () => {
    if (clicked % 2 == 0) {
        header.classList.add("changed_background_a");
        footer.classList.add("changed_background_a");
        sidebar.classList.add("changed_background_b");
        btn1.classList.add("change_btn_background");
        btn2.classList.add("change_btn_background");
    } else {
        header.classList.remove("changed_background_a");
        footer.classList.remove("changed_background_a");
        sidebar.classList.remove("changed_background_b");
        btn1.classList.remove("change_btn_background");
        btn2.classList.remove("change_btn_background");
    }
    clicked++;
});