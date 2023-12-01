const init = () => {
  const faqsContent = [
    {
      title: "What is Frontend Mentor, and how will it help me?",
      description:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      title: "Is Frontend Mentor free?",
      description:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      title: "Can I use Frontend Mentor projects in my portfolio?",
      description:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      title: " How can I get help if I'm stuck on a Frontend Mentor challenge?",
      description:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  const faqsListEl = document.getElementsByClassName("list-faqs")[0];

  faqsContent.forEach((e) => {
    const container = document.createElement("div");
    container.classList.add("flex", "flex-col", "gap-2");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("flex", "justify-between", "items-center");

    const title = document.createElement("h5");
    title.classList.add("font-bold");
    title.innerText = e.title;

    const iconPlus = document.createElement("img");
    iconPlus.classList.add("cursor-pointer");
    iconPlus.src = "../faq-accordion-main/assets/images/icon-plus.svg";
    iconPlus.onclick = toggleShow;

    titleContainer.replaceChildren(title, iconPlus);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("hidden");

    const description = document.createElement("p");
    description.classList.add("text-grayishPink");
    description.innerText = e.description;

    descriptionContainer.replaceChildren(description);

    container.replaceChildren(titleContainer, descriptionContainer);

    faqsListEl.appendChild(container);
  });
};

const toggleShow = (e) => {
  const parentNode = e.target.parentNode.parentNode.children[1];
  if ([].slice.call(parentNode?.classList ?? []).includes("hidden")) {
    parentNode.classList.remove("hidden");
    parentNode.parentNode.children[0].lastChild.src =
      "../faq-accordion-main/assets/images/icon-minus.svg";
  } else {
    parentNode.classList.add("hidden");
    parentNode.parentNode.children[0].lastChild.src =
      "../faq-accordion-main/assets/images/icon-plus.svg";
  }
};

init();
