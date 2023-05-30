function send() {
    let sendParagraph = document.getElementById("send");

    // get the values from the form
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let number = document.getElementById("number").value;

    // check the input
    if (name==="" || message===""){
        alert("Name and message cannot be an empty string");
        return;
    }

    // update output paragraph
    sendParagraph.innerHTML = "Hello 212 Health and Fitness. My name is " + name + ". " + message + " You can contact me at " + number;

}