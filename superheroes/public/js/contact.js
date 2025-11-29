document.querySelector('.contacto-form').addEventListener('submit', function(e) {
        e.preventDefault();
        Swal.fire({
                    icon: 'success',
                    title: '¡Consulta enviada!',
                    text: 'Gracias por tu mensaje. Te contactaremos pronto.',
                    confirmButtonText: 'Aceptar'
                });
        this.reset();
    });