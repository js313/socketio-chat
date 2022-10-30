const change_theme_btn = document.querySelector("#change_theme");
const header = document.querySelector(".join-header");
const body = document.querySelector(".join-main");
const btn = document.querySelector(".btn");
let clicked = 0;
change_theme_btn.addEventListener("click", () => {
    if (clicked % 2 == 0) {
        header.classList.add("changed_background_a");
        body.classList.add("changed_background_b");
        btn.classList.add("change_btn_background");
    } else {
        header.classList.remove("changed_background_a");
        body.classList.remove("changed_background_b");
        btn.classList.remove("change_btn_background");
    }
    clicked++;
});