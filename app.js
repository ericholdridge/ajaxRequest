let xhr = new XMLHttpRequest();
const designLink = document.getElementById('design');
const mobileLink = document.getElementById('mobile');
const socialLink = document.getElementById('social');


// Click function to change text without reloading the page
designLink.addEventListener('click', () => {
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 200)  {
                document.getElementById('text').innerHTML = xhr.responseText;
            }
        }
    };
    
    xhr.open('GET', 'design.html');
    xhr.send();
});

mobileLink.addEventListener('click', () => {
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 200)  {
                document.getElementById('text').innerHTML = xhr.responseText;
            }
        }
    };
    
    xhr.open('GET', 'mobile.html');
    xhr.send();
});

socialLink.addEventListener('click', () => {
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 200)  {
                document.getElementById('text').innerHTML = xhr.responseText;
            }
        }
    };
    
    xhr.open('GET', 'social.html');
    xhr.send();
});