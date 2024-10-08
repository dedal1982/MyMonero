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
const backIn = document.getElementById("backIn");
const walletBtn = document.getElementById("walletBtn");
const walletPage = document.querySelector(".wallet-page");
const walletPageBoxBtn = document.querySelector(".wallet-page-box");
const walletTransact = document.querySelector(".wallet-transact");
const backInTwo = document.getElementById("backInTwo");
const LogOut = document.getElementById("LogOut");

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

if (backIn) {
  backIn.addEventListener("click", () => {
    mnemonicIn.classList.remove("active");
  });
}

if (walletBtn) {
  walletBtn.addEventListener("click", () => {
    walletPage.classList.add("active");
  });
}

if (walletPageBoxBtn) {
  walletPageBoxBtn.addEventListener("click", () => {
    walletTransact.classList.add("active");
  });
}

if (backInTwo) {
  backInTwo.addEventListener("click", () => {
    walletTransact.classList.remove("active");
  });
}

if (LogOut) {
  LogOut.addEventListener("click", () => {
    walletTransact.classList.remove("active");
  });
}
//mnemonic-in
// const mnemonicInBtns = document.querySelectorAll(".mnemonic-in-btn");
// const mnemonicInPage = document.querySelector(".mnemonic-inner");

// if (mnemonicInBtns) {
//   mnemonicInBtns.forEach((item) => {
//     item.addEventListener("click", () => {
//       const newElement = document.createElement("div");
//       newElement.className = "mnemonic-in-btn";
//       newElement.textContent = item.textContent;
//       mnemonicInPage.appendChild(newElement);
//     });
//   });
// }
const mnemonicInBtns = document.querySelectorAll(".mnemonic-in-btn");
const mnemonicInPage = document.querySelector(".mnemonic-in-inner");
const innerBtns = mnemonicInPage.querySelectorAll(".mnemonic-in-btn");

if (mnemonicInBtns) {
  mnemonicInBtns.forEach((item) => {
    item.addEventListener("click", () => {
      const newElement = document.createElement("div");
      newElement.className = "mnemonic-in-btn";
      newElement.textContent = item.textContent;
      item.style.display = "none";
      mnemonicInPage.appendChild(newElement);
    });
  });
}

// if (innerBtns) {
//   innerBtns.forEach((item) => {
//     item.addEventListener("click", () => {
//       console.log(item);
//     });
//   });
// }
