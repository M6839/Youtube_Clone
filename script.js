let menu=document.querySelector("#menu")
let sidebar=document.querySelector(".sidebar");
let content=document.querySelector(".content");

menu.onclick = () => {
    sidebar.classList.toggle('othersidebar');
    content.classList.toggle('othercontent');
}
