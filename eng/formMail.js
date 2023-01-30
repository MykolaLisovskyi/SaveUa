$("#sendMail").on("click", function () {
  var firstname = $("#firstname").val().trim();
  var lastname = $("#lastname").val().trim();
  var phone = $("#phone").val().trim();
  var message = $("#message").val().trim();


  if (firstname == "") {
    $("#errorMess").text("Enter Firstname");
    return false;
  } else if (lastname == "") {
    $("#errorMess").text("Enter Lastname");
    return false;
  } else if (phone == "") {
    $("#errorMess").text("Enter Phone");
    return false;
  } else if (message == "") {
    $("#errorMess").text("Enter Message");
    return false;
  } else if (message.length < 10) {
    $("#errorMess").text("Enter more then 10 symbols");
    return false;
  }


  $("#errorMess").text("");

  $.ajax({
    url: 'mail.php',
    type: 'POST',
    cache: false,
    data: {
      'firstname': firstname,
      'lastname': lastname,
      'phone': phone,
      'message': message
    },
    dataType: 'html',
    beforeSend: function () {
      $("#sendMail").prop("disabled", true);
    },
    success: function () {
      let result;
      result =
        '<div class="contact_container">\n' +
        '  <div class="contact_container_icon">\n' +
        '    <img src="../../img/footer_logo.png">\n' +
        '  </div>\n' +
        '  <div class="contact_container_thank">\n' +
        '    <p>  Thank you for your request.</p>\n' +
        '    <p> We will contact you soon!</p>\n' +
        '  </div>\n' +
        '  <div class="contact_container_Slava">\n' +
        '    <p>Glory to Ukraine! Glory to heroes!</p>\n' +
        '  </div>\n' +
        '</div>'
      ;
      $('.note').html(result);
      $("#sendMail").prop("disabled", false);
      $(document).mouseup(function (e) {
        var container = $(".contact_container");
        if (container.has(e.target).length === 0) {
          container.hide();
        }
        location.reload();
      });
    }
  });
});




