function validateForm() {
    $("#form-alert").empty();
    $("#form-alert").hide();
    var ErrorMessage = "";
    // Empty the string and make a new string for the new error messages.
    var validation = {
        Name: 0,
        Age: 0,
        City: 0,
        Mail: 0,
        Number: 0,
    };
    var inputName = $("#InputName");
    var letters = /^[A-Za-z]/;
    if (inputName.val().match(letters)) {
        validation["Name"] = 1;
    } else {
        ErrorMessage += "Please fill in a name using only letters \n";
    }
    //check to see if the input has only letters in it. if it does, it gets a pass, if not then there will be an errormessage.
    var inputAge = $("#InputAge");
    var numbers = /^[0-9]+$/;
    if (inputAge.val().match(numbers)) {
        validation["Age"] = 1;
    } else {
        ErrorMessage += "Please fill in an age using only numbers! \n"
    }
    //check to see whether or not the inputage has only numbers.

    var inputCity = $("#InputCity");
    if (inputCity.val().match(letters)) {
        validation["City"] = 1;
    } else {
        ErrorMessage += "\n Please fill in a valid city name using only letters"
    }
    //checks to see if there are only lettters in the city name.
    var inputEmail = $("#InputEmail");
    var emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/;
    //It only allows email friendly characters at first, then an @ sign and then onlu numbers or letters
    // with a domain of only letters which is not smaller than 2 and not longer than 4 characters.
    if (inputEmail.val().match(emailRegex)) {
        validation["Mail"] = 1;
    } else {
        ErrorMessage += "\n Please use a valid email adres"
    }
    //checks to see whether or notthe input of the email looks like an email
    var inputNumber = $("#InputPhoneNumber");
    if (inputNumber.val().match(numbers)) {
        validation["Number"] = 1;
    } else {
        ErrorMessage += "\n Please fill in a phone number using only numbers."
    }
    //Checks to see if the phone number is written as it should be and with only numbers.
    for (property1 in validation) {
        if (validation[property1] == 0) {

            $("#form-alert").append(ErrorMessage).show();
            return false;
        }
    }
    return true
}

function writeFormData() {
    //This function saves the Form data to an array
    var FormData = {
        Name: $("#InputName").val(),
        Age: $("#InputAge").val(),
        City: $("#InputCity").val(),
        Mail: $("#InputEmail").val(),
        Number: $("#InputPhoneNumber").val(),
    }
    return FormData
}

function SubmitButton() {
    //This function adds a submitbutton to the page.
    if (validateForm() === true) {
        var forminput = writeFormData();
        $("#form-content").show();
        var index = 0;
        for (property2 in forminput) {
            $("tr:eq(" + index + ") td").html(forminput[property2]);
            index += 1;
            console.log(forminput[property2]);
        }
    }
};


function EraseButton() {
    $(this).closest('form').find("input[type=text], textarea").val("");
    $("#form-alert").hide();
    $("#form-content").hide();
}

$(function () {
    $("#submitButton").click(
        SubmitButton
    );

    $("#eraseButton").click(
        EraseButton
    );

    $("#contact-tab").click(function () {
            $("a#link-tab").removeClass("active");
            $("a#contact-tab").addClass("active");
            $("div#links").removeClass("active");
            $("div#contact").addClass("active");
        }
    );

    $("#link-tab").click(function () {
            $("a#contact-tab").removeClass("active");
            $("a#link-tab").addClass("active");
            $("div#contact").removeClass("active");
            $("div#links").addClass("active");
        }
    );
});