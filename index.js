const firstContainer = document.querySelector(".ratings-container");
const rateBtn = document.querySelectorAll(".btn");
const submitButton = document.getElementById("submitt");
const thankYouContainer = document.querySelector(".hide");
const backButton = document.querySelector("#backBtn");
const rating = document.getElementById("rating");

submitButton.addEventListener("click", () => {
    firstContainer.style.display = "none";
    thankYouContainer.style.display = "block";
})
backButton.addEventListener("click", () => {
    firstContainer.style.display = "block";
    thankYouContainer.style.display = "none";
})

rateBtn.forEach((rate) => {
    rate.addEventListener("click",() => {
        rating.innerHTML = rate.innerHTML
    })
})

