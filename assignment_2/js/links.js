$(function () {
    var onoffswitch = 0;
    linkgenerator();
    linkadder();
    deletebuttonadder();
    $("#fadeButton").click(function () {
            fadeList(onoffswitch);
            if (onoffswitch == 0) {
                onoffswitch += 1;
            } else {
                onoffswitch -= 1;
            }
        }
    );
    $("#linkadderButton").click(function () {
        linkadding();
    });
    var deletebuttonstance = "off";
    $("#deletebutton").click(function () {
        if (deletebuttonstance === "on") {
            deletebuttonstance = "off"
            $('#deletebutton').text('ACTIVATE DELETE MODE');
        } else {
            deletebuttonstance = "on"
            $('#deletebutton').text('Deactive kill mode.');
            $('a').click(function () {
                if (deletebuttonstance == "on") {
                    event.preventDefault();
                    $(this).parent().remove();
                }
        }
    );
}});
});

function deletebuttonadder() {
    //This function adds a deletebutton
    jQuery('<div/>', {
        class: 'col-md-2',
        id: 'delete-div'
    }).appendTo('#link-div');
    $('#delete-div').append('<button class="btn-danger" id="deletebutton" type="button">ACTIVATE DELETE MODE</button>');
}

function linkadding() {
    //This function adds the links to the ul element.
    var Name = $('#Linkname').val();
    var URL = $('#inputURL').val();
    if (Name !== '' && URL !== '') {
        $('#link-list').append('<li><a target="_blank" href="' + URL + '">' + Name + '</a></li>');
    }

}

function fadeList(switchitem) {
    //This function shows and hides the link list.
    if (switchitem == 0) {
        $('#link-list').hide();
        $('#fadeButton').text("Show list!")
    } else {
        $('#link-list').show();
        $('#fadeButton').text("Hide list!")
    }
}

function linkadder() {
    //This function adds the input fields
    jQuery('<div/>', {
        class: 'col-md-5',
        id: 'linkadder-div'
    }).appendTo('#link-div');
    $('#linkadder-div').append('<label for="Linkname">Linkname</label>' +
        '<input type="text" class="form-control" id="Linkname" placeholder="Enter a name for your link">' +
        '</div>' +
        '<div>' +
        '<label for="inputURL">URL</label>' +
        '<input type="text" class="form-control" id="inputURL" placeholder="Enter the URL">' +
        '</div>' +
        '<br>' +
        '<button class="btn-success" id="linkadderButton" type="button">add to the list!</button>'
    )
}

function linkgenerator() {
    //This function adds a standard link list.
    var site = {
        'Google': 'https://www.google.com',
        'Hyves': 'http://hyves.com/defaultsite',
        'Youtube': 'https://www.youtube.com/',
        'Nestor': 'https://signon.rug.nl/nidp/saml2/sso?id=8&sid=0&option=credential&sid=0'
    };
    jQuery('<div/>', {
        class: 'row',
        id: 'link-div'
    }).appendTo('.container');
    jQuery('<div/>', {
        class: 'col-md-5',
        id: 'link-div-col'
    }).appendTo('#link-div');
    jQuery('<ul/>', {
        id: 'link-list'
    }).appendTo('#link-div-col');
    for (title in site) {
        $('#link-list').append('<li><a target="_blank" href="' + site[title] + '">' + title + '</a></li>');
    }
    $('#link-div-col').append('<button class="btn-primary" id="fadeButton" type="button">Hide the list!</button>');
};