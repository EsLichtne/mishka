let navButton=document.querySelector(".navigation__button"),toggle=document.querySelector(".navigation__toggle"),nav=document.querySelector(".navigation"),navClue=document.querySelector(".navigation__clue");navButton.addEventListener("click",(function(){toggle.classList.toggle("navigation__toggle--open"),nav.classList.toggle("navigation--open"),nav.classList.contains("navigation--open")?navClue.textContent="Закрыть меню.":navClue.textContent="Открыть меню."}));