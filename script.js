const buttons = document.querySelectorAll(".faq-toggle");
const faqs = document.querySelectorAll(".faq");


buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        button.parentElement.classList.toggle("active");
    })
})