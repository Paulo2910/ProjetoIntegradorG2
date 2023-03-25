var cardLink = document.querySelector('.tag-card');
var debitLink = document.querySelector('.tag-debit')
var pixLink = document.querySelector('.tag-pix')


var linkLi= document.querySelector('.card-credit li')

var debitCard = document.querySelector('.debit')
var cardCredit = document.querySelector('.credit')
var pix = document.querySelector('.pix')





function styleBtnChekout() {
    debitCard.style.display = 'none'
    pix.style.display = 'none'
    linkLi.style.backgroundColor = '#C3103C' 
    linkLi.style.color = 'white'
    
    
     
}

cardLink.addEventListener('click',  () => {
    styleBtnChekout()
    cardCredit.style.display = 'flex'
    linkLi.style.backgroundColor = '#C3103C' 
    linkLi.style.color = 'white'
    
})

debitLink.addEventListener('click',  () => {
    styleBtnChekout()
    cardCredit.style.display = 'none'
    pix.style.display = 'none'
    debitCard.style.display = 'block'
    
})
pixLink.addEventListener('click',  () => {
    styleBtnChekout()
    cardCredit.style.display = 'none'
    debitCard.style.display = 'none'
    pix.style.display = 'flex'
    
})

styleBtnChekout()



