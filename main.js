const imageFluid = document.querySelectorAll('.img-fluid');
const imagePopup = document.querySelector('.popup-image');
const Image = document.querySelector('.popup-image img');
const removeImage = document.querySelector('.popup-image span');

imageFluid.forEach((image) =>{
    image.addEventListener('click',()=>{
        imagePopup.style.display = 'block';
        Image.src = image.getAttribute('src');
    });
});

removeImage.addEventListener('click',()=>{
    imagePopup.style.display = 'none';
})