const buttonCreate = document.querySelector(".button-create");
const createPage = document.querySelector(".create-page");

if (buttonCreate) {
  buttonCreate.addEventListener("click", () => {
    createPage.classList.add("active");
  });
}
