const objDom = { 
    // Background
    backgroundFrame: document.querySelector("#frame--background"),

    // Button
    btnShowMessage: document.querySelector("#box__button--1"),
    btnHideOrVisible: document.querySelector("#box__button--2"),
    btnHelp: document.querySelector("#box__help"),

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

objDom.btnShowMessage.addEventListener('click', e => showFrameMessage('Mensagem', 'HELLO WORLD!', e))

objDom.iconTimes.addEventListener('click', () => {
    objDom.backgroundFrame.classList.remove('visible')
    objDom.frame.classList.remove('expand')
    objDom.pFrame.classList.remove('help')
})

objDom.btnHelp.addEventListener('click', e => showFrameMessage('Tela de Ajuda', 
'Aperte o "Button1" para exibir um tela com uma mensagem. <br /> <br /> Aperte o "Button2" para ocultar/exibir o "Button1."', e))

document.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    const keyPressed = event.key

    if (keyPressed === 'Escape') {
        showFrameMessage('Tela de Ajuda', 
            'Aperte o "Button1" para exibir um tela com uma mensagem. <br /> <br /> Aperte o "Button2" para ocultar/exibir o "Button1."', event
        )
    }
}

function showFrameMessage(title, message, element) {
    const elementID = element.path[1].id
    
    if (elementID === objDom.btnHelp.id || element.key === 'Escape')
        objDom.pFrame.classList.add('help')
    
    objDom.backgroundFrame.classList.add('visible')
    objDom.frame.classList.add('expand')

    objDom.hFrame.innerHTML = title
    objDom.pFrame.innerHTML = message
}

// -> Jquery

$(objDom.btnHideOrVisible).click(() => {
    objDom.btnShowMessage.classList.toggle('hidden')
    

    if (objDom.btnShowMessage.classList[1] !== "hidden")
        $(objDom.btnShowMessage).show()
    else
        $(objDom.btnShowMessage).hide()
})