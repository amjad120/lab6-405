const initialLikes = 100;
const initialDislikes = 20;
let likeCount = initialLikes;
let dislikeCount = initialDislikes;

const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");
const commentBox = document.getElementById("commentBox");
const submit =document.getElementById("submit");
const clear = document.getElementById("clear");
const commentList = document.getElementById("commentList");

likeBtn.innerText = "👍 "+likeCount
likeBtn.addEventListener("click",()=>{
    likeCount++;
    likeBtn.innerText = "👍 "+likeCount
    setCookie();
})

dislikeBtn.innerText = "👎 "+dislikeCount
dislikeBtn.addEventListener("click",()=>{
    dislikeCount++;
    dislikeBtn.innerText = "👎 "+dislikeCount
    setCookie();
    })

    submit.addEventListener("click", ()=>{
        pElem = document.createElement("p");
        pElem.innerText = commentBox.value.trim();
        commentList.appendChild(pElem);
        commentBox="";
        setCookie();
        
    })

    clear.addEventListener("click",()=>{
        commentBox.value="";
        setCookie();
    })

    function setCookie(){
        document.cookie = "voted=true;SameSite=Strict ;expires="+ new Date(Date.now+1*60).toUTCString();
    }

    document.onload = function(){
        if(document.cookie && document.cookie.indexOf("voted")> -1){
            likeBtn.disable = true;
            dislikeBtn.disable = true;
            submit.disable= true;
        }
    }