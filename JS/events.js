const objDom = { 

    // Background
    backgroundFrame: document.querySelector("#frame--background"),

    // Button
    btnShowMessage: document.querySelector("#box__button--1"),
    btnHideOrVisible: document.querySelector("#box__button--2"),

    // Frame
    frame: document.querySelector("#frame"),

    // Paragraph
    pFrame: document.querySelector("#frame__description"),

    // Icon
    iconTimes: document.querySelector(".fa-xmark")
}

// -> Click

objDom.btnShowMessage.addEventListener('click', () => {
    objDom.backgroundFrame.classList.add('visible')
    objDom.frame.classList.add('expand')

    objDom.pFrame.innerHTML = "HELLO WORLD"
})

objDom.iconTimes.addEventListener('click', () => {
    objDom.backgroundFrame.classList.remove('visible')
    objDom.frame.classList.remove('expand')
})

$(objDom.btnHideOrVisible).click(() => {
    $(objDom.btnShowMessage).hide()
})