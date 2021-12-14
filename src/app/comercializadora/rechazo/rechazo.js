function sendMail(params) {
    var tempParams ={
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value
    };

    emailjs.send('service_sd6en4k', 'template_1nc74yn', tempParams )
    .then(function(res){
        console.log("success", res.status);
    })
}
