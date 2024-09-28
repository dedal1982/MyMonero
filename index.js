const buttonCreate = document.querySelector(".button-create");
const createPage = document.querySelector(".create-page");
const cancelBtn = document.querySelector(".cancel-btn");
const nextBtn = document.querySelector(".next-btn");
const createGoBtn = document.querySelector(".create-page-go");
const checkedGo = createGoBtn.querySelector(".checked-go");
const createMnemonic = document.querySelector(".mnemonic");
const backButton = document.querySelector(".back-button");
const mnemonicIn = document.querySelector(".mnemonic-in");
const mnemonicInBtn = document.getElementById("mnemonicIn");

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

if (createGoBtn) {
  createGoBtn.addEventListener("click", () => {
    checkedGo.classList.toggle("active");
    nextBtn.classList.toggle("active");
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    createMnemonic.classList.add("active");
  });
}

if (backButton) {
  backButton.addEventListener("click", () => {
    createMnemonic.classList.remove("active");
  });
}

if (mnemonicInBtn) {
  mnemonicInBtn.addEventListener("click", () => {
    mnemonicIn.classList.add("active");
  });
}
