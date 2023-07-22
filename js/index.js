let scroller = document.querySelector(".scroll");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.scrollHeight);


window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    scroller.style.width = `${(scrollTop / height) * 100}%`; 
});