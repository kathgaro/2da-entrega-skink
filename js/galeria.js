const secondBoton = document.getElementById('clicme')
secondBoton.addEventListener('click', () =>{
    Swal.fire({
        icon: 'success',
        title: 'CHECK POINT!',
        text: 'Este modal fue creado correctamente!',
        footer: '<a href="">Dejanos tu sugerencia</a>'
      })
})