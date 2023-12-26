window.onload = function() {
    const img = document.getElementById('uploadedImage');
    const editButton = document.getElementById('editButton');
    const storedImage = localStorage.getItem('uploadedImage');

    if (storedImage) {
        img.src = storedImage;
        img.style.display = 'block';
    } else {
        editButton.style.display = 'block';
    }
}

function previewImage(event) {
    const file = event.target.files[0];
    const img = document.getElementById('uploadedImage');
    const editButton = document.getElementById('editButton');
    const reader = new FileReader();

    reader.onload = function() {
        img.src = reader.result;
        img.style.display = 'block';
        editButton.style.display = 'none';
        localStorage.setItem('uploadedImage', reader.result);
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}

function editImage() {
    const input = document.getElementById('photo');
    input.click();
}


