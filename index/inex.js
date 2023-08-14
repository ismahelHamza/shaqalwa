const bars = document.querySelector('.fa-bars-staggered')
const closes = document.querySelector('.fa-xmark')
const list = document.querySelector('.lists')

bars.addEventListener('click' , function(){
list.style.height = `100%`
})

closes.addEventListener('click' , function(){
    list.style.height = `0%`
})

const skill = document.querySelectorAll('.skill')
const contentLine = document.querySelector('.content-line')

var arr = [
" type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea" , 
"web sites still in their infancy. Various versions have evolved over the years, sometimes b" ,
"discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 an"
]


skill.forEach(item =>{
    item.addEventListener('click' , function(){
      const dataId =  item.getAttribute('data-sma')
     contentLine.style.transform = `translate(${140 * dataId - 10}px)`
     document.querySelector('.skillP').innerHTML = arr[dataId - 1]

})
})
const nav  =  document.querySelector('nav')
console.log(nav)

window.addEventListener('scroll' , function(){
    if(this.window.pageYOffset > 20){
     nav.classList.add("scroll-nav")
    }else{
        nav.classList.remove("scroll-nav")
    }
})

const section = document.querySelector('.slide-two-info')
const personImages = document.querySelector('.person-images')
const text = document.querySelector('.content-p')

window.addEventListener('scroll' , function(){
    if(this.window.pageYOffset > 370){
        personImages.classList.add("animate")
        text.classList.add("animates")
    }
})







