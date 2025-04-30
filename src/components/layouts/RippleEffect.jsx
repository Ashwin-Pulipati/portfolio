// At top of file
import "../../index.css"; // ensure this is imported

// Inside the component, before return:
export const createRipple = (e) => {
  const container = e.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(container.clientWidth, container.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${
    e.clientX - container.getBoundingClientRect().left - radius
  }px`;
  circle.style.top = `${
    e.clientY - container.getBoundingClientRect().top - radius
  }px`;
  circle.classList.add("ripple");
  // remove old ripples
  const old = container.getElementsByClassName("ripple")[0];
  if (old) old.remove();
  container.appendChild(circle);
};
