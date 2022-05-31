class MobileNavBar {
        
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", () => console.log ('Clicou!'))
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(".mobileMenu", ".navlist", ".navlist li");
mobileNavBar.init();