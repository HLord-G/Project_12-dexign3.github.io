function sendMail(){
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    const serviceID = "service_bv9m1r4";
    const templateID = "template_a7fwh93";

    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("sent");
    }).catch((err) => console.log(err));
}
