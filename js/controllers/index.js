import "bootstrap";
import "../../css/landing.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { jData, saveCanvas } from "../services/dataManager.js";
import { TaskModel } from "../models/taskModel.js";
// Selectors
const ctaNewTaskButton = document.querySelector("#cta-new-task-btn");
// CTA add new task & redirect
ctaNewTaskButton.addEventListener("click", () => {
  const ctaNewTaskTitle = document.querySelector("#cta-new-task-input").value;
  if (ctaNewTaskTitle) {
    const firstList = jData.board[0];
    const ctaNewTask = new TaskModel(
      ctaNewTaskTitle,
      "",
      "",
      "",
      "",
      `${firstList.title}`
    );
    firstList.taskCardSet.push(ctaNewTask);
    saveCanvas();
    location.href = "board.html";
  } else {
    location.href = "board.html";
  }
});
// CTA bar observer
const ctaBar = document.querySelector(".ctaBar");
const observer = new IntersectionObserver(
  //Add .isSticky if not 100% visible
  ([e]) => e.target.classList.toggle("isSticky", e.intersectionRatio < 1),
  //Run call back if not 100% visible
  { threshold: [1] }
);
//Observe CTA bar
observer.observe(ctaBar);
