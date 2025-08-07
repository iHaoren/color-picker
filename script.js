document.getElementById("colorInput");
    addEventListener("input", function(event){
        //Get the selected color from input
        let selectedColor = event.target.value

        //Update color text
        document.getElementById("colorCode").
        textContent = selectedColor

        //Update the background color of the display box
        this.document.getElementById("colorDisplay").style.
        backgroundColor = selectedColor
    })