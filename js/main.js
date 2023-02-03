
window.addEventListener('DOMContentLoaded', function (){
    window.addEventListener('scroll' , function(){
        const navbar=this.document.querySelector('.navbar');
        navbar.classList.toggle('sticky', window.scrollY > 0)
    })
    /////////tel-versiyadagi menu lar//////////
    const menuBtn=document.querySelector('.telmenular')
    const menular = document.querySelector('.menular')
    const navigationItem = document.querySelectorAll('.menular a')

    menuBtn.addEventListener('click', ()=>{
        menular.classList.toggle('menu')
    })
    navigationItem.forEach(navItem => {
        navItem.addEventListener('click', () => {
            // menuBtn.classList.remove('active')
            menular.classList.remove('menu')
        })
    })
    //yuqoriga tez chiqaeadigan button///////////////
    const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll', ()=> {
        scrollBtn.classList.toggle('active', window.scrollY > 300)
    })
    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    })
    //qalqib chiqishi//////////////////////
    window.addEventListener('scroll', () => {
        let reveals=document.querySelectorAll('.reveal')
        for(let i=0; i<reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active')
            }
            else{
                reveals[i].classList.remove('active')
            }
        }
    })
    //joylashuv////////////////////////////////////
    const btn2=document.querySelector('.btn2')
    const btn3=document.querySelector('.btn3')
    const fergana=document.querySelector('.fergana')
    const margilon=document.querySelector('.margilon')

    btn2.addEventListener('click' , () => {
        btn2.classList.add('btn2-1')
        btn3.classList.remove('btn2-1')
        fergana.style.display = "block"
        fergana.style.width = "60%"
        margilon.style.display = "none"
    } )
    btn3.addEventListener('click' , () => {
        btn2.classList.remove('btn2-1')
        btn3.classList.add('btn2-1')
        margilon.style.display = "block"
        margilon.style.width = "40%"
        fergana.style.display = "none"
    } )
    ////////////////////-ROYHATDAN O'TISH-////////////////
    const btn5=document.querySelector('.btn5')
    const input=document.querySelector('input')
    const textarea=document.querySelector('textarea')
    btn5.addEventListener('click', ()=>{
        if(input.value=="" || textarea.value==""){
            alert('Malumotlar to`g`ri kiritilganiga ishonch hosil qiling')
            input.style.border="1px solid red"
            textarea.style.border="1px solid red"
        }
        else{
            alert('Tabriklaymiz siz muvofaqiyatli ro`yxatdan o`tdingiz adminlarimiz siz bilan bog`lanishadi')
            input.value=""
            textarea.value=""
        }
    })
        
})





