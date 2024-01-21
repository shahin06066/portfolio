
// Script.js





// //toastfy code here
// var myToastforsuccess = Toastify({
//     text: "Email has sent successfully",
//     duration: 5000,
//      // Show toast close icon
//   close: false,
//   // Toast position - top or bottom
//   gravity: 'bottom',
//   // Toast position - left or right
//   positionLeft: false,
//   position: 'left',
//    })


//    //toastfy code here
// var myToastforerror = Toastify({
//     text: "There was a server side problem",
//     duration: 5000,
//      // Show toast close icon
//   close: false,
//   // Toast position - top or bottom
//   gravity: 'bottom',
//   // Toast position - left or right
//   positionLeft: false,
//   position: 'left',
//    })


function SendMail() {

    var params = {
        from_name : document.getElementById("fullname").value,
        email_id  :document.getElementById("email_id").value,
        message   : document.getElementById("message").value,
        cell     : document.getElementById("cell number").value
    }
    emailjs.send("service_gqxqxnd", "template_1smi9jb", params).then(function(res){
        // alert("Message Sent Successfully." + res.status);



        if(res.status == 200){
            // myToastforsuccess.showToast();
            alert("Message Sent Successfully." + res.status);
        
        }else{
            // myToastforerror.showToast();
            alert("There was a server side problem" + res.status);

        }

        
    })
}

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}





