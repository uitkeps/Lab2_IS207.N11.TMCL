var aud = document.getElementById('myAudio);
aud.oncanplaythrough = function() {
    alert('Can play through audio without stopping');
};