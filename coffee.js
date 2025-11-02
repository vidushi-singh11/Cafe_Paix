document.querySelectorAll(".menu-item button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Added to your order!");
  });
});

document.querySelector(".test-btn").addEventListener("click", () => {
  alert("The quiz will be available soon!");
});
