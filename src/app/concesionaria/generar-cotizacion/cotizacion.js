function sendMail(params) {
    var tempParams ={
        from_name: document.getElementById("user_name").value,
        to_name: document.getElementById("user_email").value,
        message: document.getElementById("message").value
    };

    emailjs.send('service_0aupzyk', 'template_ks9yyge', tempParams )
    .then(function(res){
        console.log("success", res.status);
    })
}