if (localStorage.getItem('badge') == 'Admin' ||'Owner') {
    alert('Hello Admin\nHow you doing?')
    document.getElementById('body').style.visibility = 'visible';
}
else {
    document.getElementById('body').style.visibility = 'hidden';
}
document.getElementById('aname').innerHTML = localStorage.getItem('name')
document.getElementById('abadge').innerHTML = 'Badge:  '+localStorage.getItem('badge')
function blog() {
    window.location.replace('post.html')
}

document.getElementById('invo').innerHTML = `
Hey ${localStorage.getItem('name')}!\n
<br>
<div class='box'>
The environment is safe.\n
Don't worry, our high-tech bots are 24/7 managing this website from cyber/DDOS hackers.
</div>
`