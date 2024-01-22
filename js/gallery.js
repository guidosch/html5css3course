
function upDate(previewPic) {
    let elem = document.getElementById('image');
    elem.style.backgroundImage = "url('" + previewPic.src + "')";
    elem.style.backgroundColor = "red";
    elem.innerHTML = previewPic.alt;
}

function unDo() {
    let elem = document.getElementById('image');
    elem.style.backgroundImage = "url('')";
    elem.style.backgroundColor = "#8e68ff";
    elem.innerHTML = "Hover over an image below to display here.";
}
