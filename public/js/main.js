// Contact Form Handler
$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(function() {
            $('#formMessage')
                .removeClass('hidden error')
                .addClass('success')
                .text('Message sent! We\'ll get back to you as soon as possible.');
            
            // Reset form
            $('#contactForm')[0].reset();
            
            // Hide message after 5 seconds
            setTimeout(function() {
                $('#formMessage').addClass('hidden');
            }, 5000);
        }, 500);
    });
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 20
            }, 800);
        }
    });
});
