const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');
const comments = document.querySelectorAll('.post-comments');
const replies = document.querySelectorAll('.reply');
const commentBtn = document.getElementById('comment-btn');
const commentText = document.querySelectorAll('.comment-text');
const commentInput = document.querySelectorAll('.input');
const replyNum = document.querySelectorAll('.reply-number');

let commentArr = '0';
var i = 0;
const text = 'Hire Me?'
const speed = 200;
let replyArr = Array.prototype.slice.call(replies);
let commentArray = Array.prototype.slice.call(comments);

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.style.width = '80%';
    searchInput.style.marginLeft = '7rem';
    searchInput.style.paddingRight = '4rem';
    searchInput.style.cursor = 'text';
    searchInput.focus();

    searchInput.setAttribute('placeholder', '')

    typeWriter();
});

commentInput.forEach((cur, index) => {
    cur.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            var div = document.createElement('div');
            var large = `<img src="img/georgeprofile.jpg" alt=""><p><span class="black " style="font-size: 2rem;">George</span></p><p>${cur.value}</p>`
            div.setAttribute('class', 'post-comment-content');
            div.innerHTML = large;
            commentText[index].appendChild(div);
            div.style.marginTop = '2rem';
            div.style.marginBottom = '5rem';
            div.style.opacity = '1'
            div.style.visibility = 'visible';
            commentArr++
            replyNum[index].innerHTML = commentArr;
            commentInput[index].value = '';
        }
    })
})


for (let i = 0; i < replyArr.length; i++) {
    replyArr[i].addEventListener('click', () => {
        commentArray[i].classList.toggle('show')
    })

}




function typeWriter() {
    if (i < text.length) {
        msg = searchInput.getAttribute('placeholder') + text.charAt(i);
        searchInput.setAttribute('placeholder', msg)
        i++
        setTimeout(typeWriter, speed);
    }
}