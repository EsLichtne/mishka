const links=document.querySelectorAll(".current-page");links.forEach((e=>{e.setAttribute("title","Вы уже здесь"),e.addEventListener("click",(e=>{e.preventDefault()}))}));