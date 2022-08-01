

const scrollElement = 
document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return(
        elementTop <= (
            window.innerHeight || document.documentElement.clientHeight
        )
    );
};

const elementOutofView = (el) => {
    const elementTop = 
    el.getBoundingClientRect().top;
    return(
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};


const displayScrollElement = (element) => {
    element.classList.add("scrolled");
}

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
}

