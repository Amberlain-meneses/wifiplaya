// Function to start counting when the element is in the viewport
function startCounting(element) {
  const target = parseInt(element.getAttribute("data-count"));
  let current = 0;

  const updateCounter = () => {
      if (current < target) {
          current += 1;
          element.textContent = current;
          requestAnimationFrame(updateCounter);
      }
  };

  updateCounter();
}

// Function to check if the element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to start counting for all elements in the viewport
function startCountingIfInViewport() {
  const counterElements = document.querySelectorAll(".counter-value");
  counterElements.forEach((element) => {
      if (isElementInViewport(element)) {
          startCounting(element);
      }
  });
}

// Add event listeners to check when the elements are in the viewport
window.addEventListener("load", startCountingIfInViewport);
window.addEventListener("scroll", startCountingIfInViewport);
