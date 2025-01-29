const draggableImages = document.querySelectorAll('.draggable');

draggableImages.forEach(image => {
    new Draggabilly(image, {
        containment: '.image-container' 
    });
});