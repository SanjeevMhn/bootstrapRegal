const sideBarMenus = document.querySelectorAll(".nav-items");
const active = document.querySelector(".active");
const drpDwnLst1 = document.querySelector(".drop-down-list-1");
const drpDwnLst2 = document.querySelector(".drop-down-list-2");
const uiChevronRight = document.querySelector(".ui-chevron-right");
const uiChevronDown = document.querySelector(".ui-chevron-down");
const uiChevronRight2 = document.querySelector(".ui-chevron-right-2");
const uiChevronDown2 = document.querySelector(".ui-chevron-down-2");

sideBarMenus.forEach((side,index)=>{
    side.addEventListener("click",function(){
        if(!side.contains(active)){
            side.appendChild(active);
        }
        if(index == 1 && sidebar.classList.contains('col-2')){
            if(drpDwnLst1.classList.contains('d-none')){
                drpDwnLst1.classList.remove('d-none');
                uiChevronRight.classList.add('d-none')    
                uiChevronDown.classList.remove('d-none')    
            }else{
                drpDwnLst1.classList.add('d-none');
                uiChevronRight.classList.remove('d-none')    
                uiChevronDown.classList.add('d-none') 
            }
        }
        if(index == 6 && sidebar.classList.contains('col-2')){
            console.log('Hello');       
            if(drpDwnLst2.classList.contains('d-none')){
                drpDwnLst2.classList.remove('d-none');
                uiChevronRight2.classList.add('d-none')    
                uiChevronDown2.classList.remove('d-none')    
            }else{
                drpDwnLst2.classList.add('d-none');
                uiChevronRight2.classList.remove('d-none')    
                uiChevronDown2.classList.add('d-none') 
            }
        }
    })

    
});

const mainNav = document.querySelector(".main-nav");
const sidebarCollapse = document.querySelector(".sidenav-collapse");
const mainBrand = document.querySelector(".main-brand");
const sidebar = document.querySelector(".side-nav");
const navMiddle = document.querySelector(".nav-middle");
const mainContent = document.querySelector(".main-content")
const logoName = document.querySelector(".logo-name")
const devProfile = document.querySelector(".developer-profile")
const devProfilePic = document.querySelector(".dev-profile-pic")
const devDetails = document.querySelector(".dev-details")
const iconText = document.querySelectorAll(".icon-text");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-items");

sidebarCollapse.addEventListener("click",function(){
    if(sidebar.classList.contains('col-2')){
        sidebar.classList.remove('col-2');
        sidebar.classList.add('col-1');
        mainBrand.classList.remove('col-2');
        mainBrand.classList.add('col-1');
        navMiddle.classList.remove('col-5');
        navMiddle.classList.add('col-6');
        mainContent.classList.remove('col-10');
        mainContent.classList.add('col-11');
        logoName.classList.add('d-none');
        logoName.classList.remove('d-inline');
        devProfile.classList.add('mt-2');
        devProfile.classList.remove('mt-4');
        devProfilePic.style.width = "3rem";
        devProfilePic.style.height = "3rem";
        devDetails.classList.add("d-none");

        iconText.forEach((ic)=>{
            ic.classList.add("d-none");
        })

        uiChevronRight2.classList.add('d-none');    
        uiChevronDown2.classList.add('d-none');  
        uiChevronRight.classList.add('d-none');    
        uiChevronDown.classList.add('d-none');   

        navList.classList.remove('px-2');
        navList.classList.remove('py-3');
        
        navItems.forEach((nv)=>{
            nv.classList.remove('justify-content-start');
            nv.classList.add('justify-content-center');
        })

        drpDwnLst1.classList.add('d-none');
        drpDwnLst2.classList.add('d-none');

        mainNav.style.boxShadow = "135px -20px 35px #000";

    }else{
        sidebar.classList.remove('col-1');
        sidebar.classList.add('col-2')
        mainBrand.classList.remove('col-1');
        mainBrand.classList.add('col-2');
        navMiddle.classList.remove('col-6');
        navMiddle.classList.add('col-5');
        mainContent.classList.add('col-10');
        mainContent.classList.remove('col-11');
        logoName.classList.remove('d-none');
        logoName.classList.add('d-inline');
        devProfile.classList.add('mt-4');
        devProfile.classList.remove('mt-2');
        devProfilePic.style.width = "5rem";
        devProfilePic.style.height = "5rem";
        devDetails.classList.remove("d-none");

        iconText.forEach((ic)=>{
            ic.classList.remove("d-none");
        })

        navList.classList.add('px-2');
        navList.classList.add('py-3');
        
        navItems.forEach((nv)=>{
            nv.classList.add('justify-content-start');
            nv.classList.remove('justify-content-center');
        })

        uiChevronRight2.classList.remove('d-none');    
        uiChevronRight.classList.remove('d-none');    

        mainNav.style.boxShadow = "235px -20px 35px #000";

    }
})

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