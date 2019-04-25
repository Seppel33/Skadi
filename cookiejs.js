onload = function() {


    /* document.getElementById("signin").innerHTML = "Dear " + getName(loggedInUser);*/
    if (getUser() != "") {
        document.getElementById("signin").innerHTML = "Dear " + getUser();
    }
}

function getName(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            c = c.substring(name.length, c.length);
            var end = c.indexOf(',');
            return c.substring(14, end - 1);
        }
    }
    return "";
}

function getUser() {

    var name = "=";
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        if (c.includes("true")) {
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }


            var start = c.indexOf('firstName');
            var end = c.indexOf(',');
            return c.substring(start + 12, end - 1);


        }
    }
    return "";
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function logout() {
    var cookieform = {
        firstName: "",
        lastName: "",
        adress: "",
        postcode: "",
        town: "",
        country: "",
        birthday: "",
        phone: "",
        mobilephone: "",
        email: "",
        password: "",
        loggedin: "false"
    }

    var today = new Date();
    var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

    var name = "=";
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');
    if (decodedCookie.includes("true")) {


        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];

            if (c.includes("true")) {

                var b = 3;
                var firstName0 = c.indexOf('firstName') + 12;
                var firstName1 = c.indexOf('lastName') - b;
                var lastName0 = c.indexOf('lastName') + 11;
                var lastName1 = c.indexOf('adress') - b;
                var adress0 = c.indexOf('adress') + 9;
                var adress1 = c.indexOf('postcode') - b;
                var postcode0 = c.indexOf('postcode') + 11;
                var postcode1 = c.indexOf('town') - b;
                var town0 = c.indexOf('town') + 7;
                var town1 = c.indexOf('country') - b;
                var country0 = c.indexOf('country') + 10;
                var country1 = c.indexOf('birthday') - b;
                var birthday0 = c.indexOf('birthday') + 11;
                var birthday1 = c.indexOf('phone') - b;
                var phone0 = c.indexOf('phone') + 8;
                var phone1 = c.indexOf('mobilephone') - b;
                var mobilephone0 = c.indexOf('mobilephone') + 14;
                var mobilephone1 = c.indexOf('email') - b;
                var email0 = c.indexOf('email') + 8;
                var email1 = c.indexOf('password') - b;
                var password0 = c.indexOf('password') + 11;
                var password1 = c.indexOf('loggedin') - b;

                cookieform.firstName = c.substring(firstName0, firstName1);
                cookieform.lastName = c.substring(lastName0, lastName1);
                cookieform.adress = c.substring(adress0, adress1);
                cookieform.postcode = c.substring(postcode0, postcode1);
                cookieform.town = c.substring(town0, town1);
                cookieform.country = c.substring(country0, country1);
                cookieform.birthday = c.substring(birthday0, birthday1);
                cookieform.phone = c.substring(phone0, phone1);
                cookieform.mobilephone = c.substring(mobilephone0, mobilephone1);
                cookieform.email = c.substring(email0, email1);
                cookieform.password = c.substring(password0, password1);
                document.cookie = "Account: " + cookieform.email + "=" + JSON.stringify(cookieform) + "; expires=" + expiry.toGMTString() + "path=/;";
                window.open("index.html", "_self");
            }
        }
    } else {
        window.open("signin.html", "_self");
    }


}

function login(cname) {
    var cookieform = {
        firstName: "",
        lastName: "",
        adress: "",
        postcode: "",
        town: "",
        country: "",
        birthday: "",
        phone: "",
        mobilephone: "",
        email: "",
        password: "",
        loggedin: "true"
    }

    var today = new Date();
    var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days


    var c = getCookie(cname);




    var b = 3;
    var firstName0 = c.indexOf('firstName') + 12;
    var firstName1 = c.indexOf('lastName') - b;
    var lastName0 = c.indexOf('lastName') + 11;
    var lastName1 = c.indexOf('adress') - b;
    var adress0 = c.indexOf('adress') + 9;
    var adress1 = c.indexOf('postcode') - b;
    var postcode0 = c.indexOf('postcode') + 11;
    var postcode1 = c.indexOf('town') - b;
    var town0 = c.indexOf('town') + 7;
    var town1 = c.indexOf('country') - b;
    var country0 = c.indexOf('country') + 10;
    var country1 = c.indexOf('birthday') - b;
    var birthday0 = c.indexOf('birthday') + 11;
    var birthday1 = c.indexOf('phone') - b;
    var phone0 = c.indexOf('phone') + 8;
    var phone1 = c.indexOf('mobilephone') - b;
    var mobilephone0 = c.indexOf('mobilephone') + 14;
    var mobilephone1 = c.indexOf('email') - b;
    var email0 = c.indexOf('email') + 8;
    var email1 = c.indexOf('password') - b;
    var password0 = c.indexOf('password') + 11;
    var password1 = c.indexOf('loggedin') - b;

    cookieform.firstName = c.substring(firstName0, firstName1);
    cookieform.lastName = c.substring(lastName0, lastName1);
    cookieform.adress = c.substring(adress0, adress1);
    cookieform.postcode = c.substring(postcode0, postcode1);
    cookieform.town = c.substring(town0, town1);
    cookieform.country = c.substring(country0, country1);
    cookieform.birthday = c.substring(birthday0, birthday1);
    cookieform.phone = c.substring(phone0, phone1);
    cookieform.mobilephone = c.substring(mobilephone0, mobilephone1);
    cookieform.email = c.substring(email0, email1);
    cookieform.password = c.substring(password0, password1);
    document.cookie = cname + "=" + JSON.stringify(cookieform) + "; expires=" + expiry.toGMTString() + "path=/;";

}