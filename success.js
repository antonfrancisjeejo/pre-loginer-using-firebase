const init = function(){
    let name = document.querySelector("#displayName");
    let tempName = localStorage.getItem("firstname");
    name.innerHTML=tempName;
    let image = document.querySelector("#profileImage");
    let tempImage = localStorage.getItem("profileImage");
    if(tempImage){
        image.src=tempImage;
    }
    let email = document.querySelector('#email');
    let tempEmail = localStorage.getItem("email");
    email.innerHTML = tempEmail;
    let userId = document.querySelector("#uid");
    let tempuid = localStorage.getItem("userId");
    uid.innerHTML = tempuid;
}

document.addEventListener("DOMContentLoaded",function(){
    init();
});