function article() {
    if (document.URL == "http://siegfried.webhosting.rug.nl/~s3746186/assignment_1/index.html") {
        var newArticle = document.createElement("ARTICLE");
        var newHeader = document.createElement("h1");
        var newHeaderContent = document.createTextNode("Header van het tweede artikel")
        var newContent = document.createTextNode("Lorem ipsum tweede lorem ipsum artikel lorem ipsum");
        // make different variables that include the header, the text and the article tag.
        newArticle.appendChild(newHeader);
        newHeader.appendChild(newHeaderContent);
        newArticle.appendChild(newContent);
        //add everything to eachother, and finally to the html file itself
        document.getElementsByClassName("row")[0].childNodes[1].appendChild(newArticle);
    }
}

function titlechange() {
    //check to see on which page you are and change the name accordingly.
    if (document.URL == "http://siegfried.webhosting.rug.nl/~s3746186/assignment_1/index.html") {
        document.head.innerHTML = document.head.innerHTML.replace("Webprogramming Assignment 1", "Webprogramming (LIX019P05) -Index")
    } else {
        document.head.innerHTML = document.head.innerHTML.replace("Webprogramming Assignment 1", "Webprogramming(LIX019P05) -Second")
    }
}

function linkChanger() {
    var footer = document.getElementById("links").getElementsByTagName("li");
    var str = '<a href="https://google.com" target="_blank">Link 2</a>'
    footer[1].innerHTML = str
    //Change the links on the bottom of the page to include a link to google on a seperate tab.
}

function schedule() {
    if (document.URL == "http://siegfried.webhosting.rug.nl/~s3746186/assignment_1/index.html") {
        //only load this function on the first page.
        const Schedule = {
            Week1: 'Assignment 1',
            Week2: 'No lecture',
            Week3: 'Assignment 2',
            Week4: '-',
            Week5: 'Assignment 3',
            Week6: '-',
            Week7: 'Guest Lecture'
        };
        var new_article = document.createElement("ARTICLE");
        var text_element = document.createElement("p");
        var header_element = document.createElement("h1");
        var new_header_content = document.createTextNode("Header van het Schema");
        //create the different text tags.
        header_element.appendChild(new_header_content);
        new_article.appendChild(header_element);
        //add the different texts to the appropriate tags.
        for (var property1 in Schedule) {
            var newSchedule = document.createTextNode("• " + property1 + ": " + Schedule[property1]);
            var br = document.createElement('br');
            text_element.appendChild(br);
            text_element.appendChild(newSchedule);
            //for every object in the schedule, add it to the page.
        }
        new_article.appendChild(text_element);
        document.getElementsByClassName("row")[0].childNodes[1].appendChild(new_article);
    }
}

function reditems() {
    var selectNavitem = document.querySelectorAll('.nav-item');
    for (i = 0; i < selectNavitem.length; i++) {
        var selectChildren = selectNavitem[i].childNodes[1];
        selectChildren.style.color = "red";
    }
    //for every item that has nav-item, it selects the first child and paints it red.
}

function sidebar() {
    if (document.URL == "http://siegfried.webhosting.rug.nl/~s3746186/assignment_1/second.html") {
        var oldParent = document.getElementsByClassName('container')[0];
        var oldChild = document.getElementsByClassName('col-md-12')[0];
        var wrapper = document.createElement('div');
        oldParent.appendChild(wrapper);
        wrapper.className = "row";
        wrapper.appendChild(oldChild);
        //add a new row and column in between the existing container and col-md-12
        oldChild.className = "col-md-8";
        var oldParent2 = document.getElementsByClassName('row')[0];
        var wrapper2 = document.createElement('div');
        wrapper2.className = "col-md-4";
        oldParent2.appendChild(wrapper2);
        //add a new column with the class col-md-4 in the row.
        var SidebarTitle = document.createElement("h1");
        var newSidebarContent = document.createTextNode("Header van de sidebar");
        SidebarTitle.appendChild(newSidebarContent);
        document.getElementsByClassName("col-md-4")[0].appendChild(SidebarTitle);
        var Sidebartext = document.createTextNode("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.\n" + "\n" + "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.");
        document.getElementsByClassName("col-md-4")[0].appendChild(Sidebartext);
        //add a new sidebar, with text and header to the newly made column.
    }
}

function main() {
    titlechange();
    linkChanger();
    schedule();
    article();
    reditems();
    sidebar();
}

window.addEventListener('load', main);
//load the javascript file when the page is finished loading.
