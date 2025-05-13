import "../../index.css";

export const createRipple = (e) => {
  const { currentTarget: container, clientX, clientY } = e;
  const { left, top, width, height } = container.getBoundingClientRect();
  const diameter = Math.max(width, height);
  const radius = diameter / 2;
  const circle = document.createElement("span");
  circle.style.cssText = `
    position: absolute;
    left: ${clientX - left - radius}px;
    top: ${clientY - top - radius}px;
    width: ${diameter}px;
    height: ${diameter}px;
  `;
  circle.classList.add("ripple");
  const old = container.querySelector(".ripple");
  if (old) old.remove();
  container.appendChild(circle);
};
