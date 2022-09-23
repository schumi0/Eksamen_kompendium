window.onscroll = function() {hideNav()};

function hideNav() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById('navbar').className = 'navhide';
    } else {
        document.getElementById('navbar').className = 'navbar';
    }
}