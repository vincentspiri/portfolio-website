document.querySelector(".lmaos").onmousemove = e => {
    for(const card of document.querySelectorAll(".lmao")) {
        const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;

        card.style.setProperty("--test-x", `${x}px`);
        card.style.setProperty("--test-y", `${y}px`);
    }
}

const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if(e.isIntersecting) {
            e.target.classList.add("show");
            observer.unobserve(e);
        }
    });
}, {threshold: 1});
hiddenElements.forEach(e => observer.observe(e));