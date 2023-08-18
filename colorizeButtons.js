function colorizeButtons(computerInput, playerInput, result) {
buttons.forEach(btn =>{
    btn.classList.remove("lost", "wonf", "draw")
    if (btn.value == computerInput && result == "playerWin") { //Computer choice red when lost
        btn.classList.add("lost")
    }

    if (btn.value == playerInput && result == "playerWin") { //player choice green when won
        btn.classList.add("won")
    }

    if (btn.value == computerInput && result == "pcWin") { //computer choiche green when won
        btn.classList.add("won")
    }

    if (btn.value == playerInput && result == "pcWin") { //player choiche red when lost
        btn.classList.add("lost")
    }

    if ((playerInput && computerInput) == btn.value && result == "draw") { //choiche blue when draw
        btn.classList.add("draw")
    }
})

    
}

