import{renderMessage}from"./message.js";const modalOpenButtons=document.querySelectorAll(".button--modal"),modalCloseButton=document.querySelector(".modal__button"),modal=document.querySelector(".modal"),radioButtons=document.querySelectorAll(".basket-adder__radio"),clearField=()=>{radioButtons[0].checked=!0};for(let e of modalOpenButtons)e.addEventListener("click",(function(){modal.showModal()}));function closeOnBackDropClick({currentTarget:e,target:o}){o===e&&e.close()}modalCloseButton.addEventListener("click",(function(e){e.preventDefault(),modal.close(),radioButtons[0].checked=!0,renderMessage(),document.dispatchEvent(new Event("basket"))})),modal.addEventListener("click",closeOnBackDropClick);