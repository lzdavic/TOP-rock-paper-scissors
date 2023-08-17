function colorizeButtons(computerInput, playerInput, result) {
buttons.forEach(btn =>{
    btn.classList.remove("lost", "won", "draw")
    if (btn.value == computerInput && result == "playerWin") {
        btn.classList.add("lost")
    }

    if (btn.value == playerInput && result == "playerWin") {
        btn.classList.add("won")
    }

    if (btn.value == computerInput && result == "pcWin") {
        btn.classList.add("won")
    }

    if (btn.value == playerInput && result == "pcWin") {
        btn.classList.add("lost")
    }

    if ((playerInput && computerInput) == btn.value && result == "draw") {
        btn.classList.add("draw")
    }
})

    
}

