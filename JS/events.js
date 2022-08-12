const objDom = { 
    // Background
    backgroundFrame: document.querySelector("#frame--background"),

    // Button
    btnShowMessage: document.querySelector("#box__button--1"),
    btnHideOrVisible: document.querySelector("#box__button--2"),

    // Frame
    frame: document.querySelector("#frame"),

    //Title
    hFrame: document.querySelector("#frame__title"),

    // Paragraph
    pFrame: document.querySelector("#frame__description"),

    // Icon
    iconTimes: document.querySelector(".fa-xmark")
}

// -> JS

objDom.btnShowMessage.addEventListener('click', () => {
    objDom.backgroundFrame.classList.add('visible')
    objDom.frame.classList.add('expand')

    objDom.hFrame.innerHTML = "Message"
    objDom.pFrame.innerHTML = "HELLO WORLD!"
})

objDom.iconTimes.addEventListener('click', () => {
    objDom.backgroundFrame.classList.remove('visible')
    objDom.frame.classList.remove('expand')
})

// -> Jquery

$(objDom.btnHideOrVisible).click(() => {
    objDom.btnShowMessage.classList.toggle('hidden')
    

    if (objDom.btnShowMessage.classList[1] !== "hidden")
        $(objDom.btnShowMessage).show()
    else
        $(objDom.btnShowMessage).hide()
})