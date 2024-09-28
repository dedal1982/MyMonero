const buttonCreate = document.querySelector(".button-create");
const createPage = document.querySelector(".create-page");
const cancelBtn = document.querySelector(".cancel-btn");

if (buttonCreate) {
  buttonCreate.addEventListener("click", () => {
    createPage.classList.add("active");
  });
}

if (cancelBtn) {
  cancelBtn.addEventListener("click", () => {
    createPage.classList.remove("active");
  });
}
