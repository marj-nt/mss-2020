// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
    // detects new state and compares it with the new one
    if ((document.body.getBoundingClientRect()).top < scrollPos) {
        $('.navbar').fadeOut();
    }
    else {
        $('.navbar').fadeIn();
    }
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;
});
