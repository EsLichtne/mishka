const basketText=document.querySelector(".navigation__value");let counter=0,text="товар";document.addEventListener("basket",(()=>{switch(counter++,counter){case 1:text="товар";break;case 2:case 3:case 4:text="товара";break;default:text="товаров"}basketText.textContent=`${counter} ${text}`}));