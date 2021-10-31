const sideBarMenus = document.querySelectorAll(".nav-items");
const active = document.querySelector(".active");

sideBarMenus.forEach((side)=>{
    side.addEventListener("click",function(){
        if(!side.contains(active)){
            side.appendChild(active);
        }
    })
});

// const sidebarCollapse = document.querySelector(".sidenav-collapse");
// const mainBrand = document.querySelector(".main-brand");
// const sidebar = document.querySelector(".side-nav");
// const navMiddle = document.querySelector(".nav-middle");
// sidebarCollapse.addEventListener("click",function(){
//     console.log("I have been clicked bro");
//     if(sidebar.classList.contains('col-2')){
//         sidebar.classList.remove('col-2');
//         sidebar.classList.add('col-1')
//         mainBrand.classList.remove('col-2');
//         mainBrand.classList.add('col-1');
//         navMiddle.classList.remove('col-5');
//         navMiddle.classList.add('col-6')
        
//     }else{
//         sidebar.classList.remove('col-1');
//         sidebar.classList.add('col-2')
//         mainBrand.classList.remove('col-1');
//         mainBrand.classList.add('col-2');
//         navMiddle.classList.remove('col-6');
//         navMiddle.classList.add('col-5')
//     }
// })

const dropDownOne = document.querySelector(".no-style-btn");
const dropDownItem = document.querySelector(".dropdown-list");

window.addEventListener("click", function(){
    if(dropDownItem.style.display == "flex"){
        dropDownItem.style.display = "none";
    }
})

dropDownOne.addEventListener("click", function(){
    if(dropDownItem.style.display !== "flex"){
        dropDownItem.style.display = "flex";
    }else{
        dropDownItem.style.display = "none";
    }
})