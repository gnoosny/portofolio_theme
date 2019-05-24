window.addEventListener('scroll', function () {
    //console.log("Zdarzenie na scroll")
    let navigation = document.getElementsByTagName('nav')[0];
    //console.log(navigation)
    //console.log(window.pageYOffset)
    //console.log(navigation);
    if (window.pageYOffset > 100) {
        navigation.classList.add('white')
    }
    else {
        navigation.classList.remove('white')
    }
    if (window.pageYOffset > 0) {
        document.body.classList.add('move')
    }
    else {
        document.body.classList.remove('move')
    }
})

let intFrameWidth = window.innerWidth;
console.log(intFrameWidth);


function toggle_visibility(menu) {
    var e = document.getElementById(menu);
    if(e.style.display == 'block' && intFrameWidth < 905)
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }