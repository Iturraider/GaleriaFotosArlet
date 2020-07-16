const imagenes = document.querySelectorAll('.img');
const contenedorImagen = document.querySelector('.contenedor-img');
const imgShow = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const cerrar = document.querySelector('.bx.bx-x');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        addImage(imagen.getAttribute('src'),imagen.getAttribute('alt'));
    })
})

const addImage = (srcImage, altImage) =>{
    contenedorImagen.classList.toggle('move');
    imgShow.classList.toggle('show');
    imgShow.src = srcImage;
    copy.innerHTML = altImage
}

cerrar.addEventListener('click', ()=>{
    contenedorImagen.classList.toggle('move');
    imgShow.classList.toggle('show');
})