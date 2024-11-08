const showMenu=document.querySelector('.show-menu');
const closeMenu=document.querySelector('.close-menu');
const menu=document.querySelector('.menu');
const header=document.querySelector('.header');
const projects=document.querySelector('.projects');
const project=document.querySelectorAll('.project');
const projectLink=document.querySelector('.projects-link');
const aboutLink=document.querySelector('.about-link');
const nameImage=document.querySelector('.about-container');
const otherDetails=document.querySelector('.other-details')

showMenu.addEventListener('click',()=>{
    menu.style.display='grid';
    closeMenu.style.display='grid';
    showMenu.style.display='none';
    header.style.display='block'
})
closeMenu.addEventListener('click',()=>{
    menu.style.display='none';
    closeMenu.style.display='none'
    showMenu.style.display='block'
    header.style.display='flex'
})


projectLink.addEventListener('click',()=>{
    project.forEach((pro)=>{
        pro.style.animation='enter 1.5s ease-in'
    })
})


aboutLink.addEventListener('click',()=>{
    console.log('zdgd')
    nameImage.style.aniamtion='fade 1.5s ease-in';
})