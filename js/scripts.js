function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(async el => {
        const file = el.getAttribute('data-include');
        const res  = await fetch(file);
        if(res.ok) {
            const content = await res.text();
            el.innerHTML = content;
        }else{
            el.innerHTML = "Content not found!";
        }
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);