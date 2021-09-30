function OpenContainer(type){
    let containers = document.querySelectorAll(".tabContainer");

    containers.forEach(item => {
        item.classList.add("hidden");
    });

    switch(type){
        case 'in':
            document.querySelector("#SignInPage").classList.remove("hidden");
            break;
        case 'up':
            document.querySelector("#SignUpPage").classList.remove("hidden");
            break;
    }
}

document.querySelector("#SignInBtn").addEventListener('click', () => {
    OpenContainer('in');
});
document.querySelector("#SignUpBtn").addEventListener('click', () => {
    OpenContainer('up');
});