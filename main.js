class Scroll{
    constructor({ element, top, unit }) {
        if(typeof element == 'string') {
            this.el = document.querySelector(element)
        }else if(element instanceof HTMLElement) {
            this.el = element
        }
        this.range = top
        this.unit = unit
        this.el.style.position = 'fixed'
        this.el.style.top = this.checkUnit() + 'px'
        
        window.addEventListener('scroll', ()  => this.move())
        window.addEventListener('resize', ()  => this.move())
        
    }
    move() {
        // scrollY - отдает расстояние в px проскроленное от верхей части скрола 
        
        this.pxOrPer = this.checkUnit()
        
        if(this.pxOrPer - scrollY > 0 ) {
            this.el.style.top = this.pxOrPer - scrollY + 'px'
        }else {
            this.el.style.top = 0
        }
    }
    
    checkUnit() {
        if(this.unit == 'px') {
            return this.range > 0 ? this.range : 0
        }else if(this.unit == '%' || this.unit == undefined) {
            return window.innerHeight / 100 * this.range - this.el.clientHeight
        }
    }
    
}




let myScroll = new Scroll({
    element: '.header__nav',
    top: 100,
})


class Hover{
    constructor(el) {
       this.block = document.querySelector(el) 
       this.block.addEventListener('mouseover', () => this.move())
    }
    
    move() {
        this.block.style.position = 'absolute'
        this.block.style.left = this.random(0,85) + '%'
        this.block.style.top = this.random(0,85) + '%'
    }
    random(min,max) {
        return Math.floor(Math.random() * (max + 1 - min) + min)
    }    
    left = this.random(0,100)
    
}

let element = new Hover(".header__content")