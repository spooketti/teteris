let selectsound = new Audio('assets/sounds/Select.wav')
let clickSound = new Audio('assets/sounds/Click.wav')
let currentTarget = null;
let newTarget = null;

document.addEventListener("mousemove", function(e)
{
    let newTarget = document.elementFromPoint(e.clientX,e.clientY)
    if(newTarget == currentTarget)
    {
        return;
    }
    currentTarget = newTarget;
    if(e.target.classList.contains("soundSelect"))
    {
        selectsound.currentTime = 0;
        selectsound.play()
    }
})

document.addEventListener("click",function(e)
{
    if(e.target.classList.contains("soundSelect"))
    {
        clickSound.currentTime = 0;
        clickSound.play()
    }
})
