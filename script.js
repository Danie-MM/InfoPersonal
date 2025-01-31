console.log("EmailJS script cargado:", emailjs);


emailjs.init('RcDPW-uCNwZraTeYq');  


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;


    emailjs.send('service_9ghq4bl', 'template_v20t8o8', {
    from_name: nombre,
    from_email: email,
    message: mensaje
})
        
    .then(function(response) {
        console.log('Success!', response);
        alert('Tu mensaje ha sido enviado con éxito!');
        
        document.getElementById('contact-form').reset();
    }, function(error) {
        console.log('Failed...', error);
        alert('Algo salió mal, intenta nuevamente.');
    });
});
