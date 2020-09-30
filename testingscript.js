

var num;
var door;


var headings = document.evaluate(".//h2", document, null, XPathResult.ANY_TYPE, null);
/* Search the document for all h2 elements.
 * The result will likely be an unordered node iterator. */
var thisHeading = headings.iterateNext();
var alertText = "";
while (thisHeading) {
    alertText += thisHeading.textContent;
    thisHeading = headings.iterateNext();
}



document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;

    //    alert(text);

    var ding = localStorage.getItem("newuser23");
    //  alert(ding);

    var x = localStorage.getItem("newuser");








    if (sessionStorage.clickCount == undefined) {
        // alert("session in not defined yet");
        if (x == undefined) {
            var ref = firebase.database().ref('node/variable2');
            ref.transaction(function (currentClicks) {
                // If node/clicks has never been set, currentRank will be `null`.alert
                return (currentClicks || 0) + 1;
                num = currentClicks.val();
                //  alert(num);
            });

            firebase.database().ref('node/variable2').on('value', function (snapshot) {

                ding = snapshot.val();
                num = snapshot.val();

                if (num != 1) {

                    var currentNode,
                        ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

                    var sample = "Current elements are: ";

                    while (currentNode = ni.nextNode()) {
                        sample += currentNode.nodeName + " , ";
                        //  alert(currentNode.nodeName);
                    }

                    //  alert(sample);

                    var root = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
                    var mxy = [event.clientX + root.scrollLeft, event.clientY + root.scrollTop];
                    // ref:https://stackoverflow.com/questions/2631820/how-do-i-ensure-saved-click-coordinates-can-be-reloaed-to-the-same-place-even-i/2631931#2631931
                    var path = getPathTo(target);
                    var txy = getPageXY(target);
                    //alert('Clicked element ' + path + ' offset ' + (mxy[0] - txy[0]) + ', ' + (mxy[1] - txy[1]));







                    localStorage.setItem("newuser23", num);
                    var y = localStorage.getItem("newuser");
                    var door = num;
                    var today = new Date();
                    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();


                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();



                    e.target.oninput = function () { myFunction() };
                    function myFunction() {
                        var x = e.target.value;
                        // alert(x);
                        //document.getElementById("demo").innerHTML = "You wrote: " + x;
                        firebase.database().ref('User-' + door).child('Session-' + y).child(sessionStorage.clickCount).set(
                            { Typed: x, Clicked: text, URL: window.location.href, Date: date, Time: time, Heading: alertText, ElementType: e.target.nodeName, Path: path });
                    }

                    if ((e.target.nodeName === "H2") || (e.target.nodeName === "A") || (e.target.id !== '') || (e.target.nodeName === "LABEL") || (e.target.nodeName === "BUTTON") || (e.target.nodeName === "B") || (e.target.nodeName === "INPUT") || (e.target.nodeName === "H1")) {
                        firebase.database().ref('User-' + door).child('Session-' + y).child(sessionStorage.clickCount).set(
                            { Clicked: text, URL: window.location.href, Date: date, Time: time, Heading: alertText, ElementType: e.target.nodeName, TagsInThisPage: sample, Path: path });

                        if (e.target == target.href) {
                            //  alert("Naavigating to next page");
                            firebase.database().ref('User-' + door).child('Session-' + y).child(++sessionStorage.clickCount).set(
                                { Clicked: target.href, Date: date, Time: time, Heading: alertText, ElementType: e.target.nodeName, TagsInThisPage: sample, Path: path });
                        }
                    }
                }
            });

        }


        x++;
        localStorage.setItem("newuser", x);
        //  alert(x);




        // database1.ref('variable').set(door);


    }
    // alert(sessionStorage.clickCount);
    if (sessionStorage.clickCount) {
        //increment counter
        sessionStorage.clickCount = Number(sessionStorage.clickCount) + 1;
        //  alert(sessionStorage.clickCount)
    } else {
        //initialise counter
        sessionStorage.clickCount = 1;
        //alert("home");
    }



    if (num != 1) {

        var currentNode,
            ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

        var sample = "Current elements are: ";

        while (currentNode = ni.nextNode()) {
            sample += currentNode.nodeName + " , ";
            //  alert(currentNode.nodeName);
        }

        //alert(sample);

        var root = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
        var mxy = [event.clientX + root.scrollLeft, event.clientY + root.scrollTop];
        // ref:https://stackoverflow.com/questions/2631820/how-do-i-ensure-saved-click-coordinates-can-be-reloaed-to-the-same-place-even-i/2631931#2631931
        var path = getPathTo(target);
        var txy = getPageXY(target);
        // alert('Clicked element ' + path + ' offset ' + (mxy[0] - txy[0]) + ', ' + (mxy[1] - txy[1]));





        var y = localStorage.getItem("newuser");
        var door = localStorage.getItem("newuser23");
        var today = new Date();
        var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        e.target.oninput = function () { myFunction() };
        function myFunction() {
            var x = e.target.value;
            // alert(x);
            //document.getElementById("demo").innerHTML = "You wrote: " + x;
            firebase.database().ref('User-' + door).child('Session-' + y).child(sessionStorage.clickCount).set(
                { Typed: x, Clicked: text, URL: window.location.href, Date: date, Time: time, Heading: alertText, ElementType: e.target.nodeName, Path: path });
        }

        if ((e.target.nodeName === "H2") || (e.target.nodeName === "A") || (e.target.id !== '') || (e.target.nodeName === "LABEL") || (e.target.nodeName === "BUTTON") || (e.target.nodeName === "B") || (e.target.nodeName === "INPUT") || (e.target.nodeName === "H1")) {
            firebase.database().ref('User-' + door).child('Session-' + y).child(sessionStorage.clickCount).set(
                { Clicked: text, URL: window.location.href, Date: date, Time: time, Heading: alertText, ElementType: e.target.nodeName, TagsInThisPage: sample, Path: path });

            if (e.target == target.href) {
                //  alert("Naavigating to next page");
                firebase.database().ref('User-' + door).child('Session-' + y).child(++sessionStorage.clickCount).set(
                    { Clicked: target.href, Date: date, Time: time, Heading: alertText, ElementType: e.target.nodeName, TagsInThisPage: sample, Path: path });
            }
        }
    }



    global++;

}, false);


let expiration = new Date();
//expiration.setMonth(expiration.getMonth() + 1);
expiration.setSeconds(expiration.getSeconds() + 100);
//  expiration.setDate(expiration.getDate() + 1);
document.cookie =
    "username=jaguth; expires=" + expiration.toUTCString() + "";


//  alert("The full URL of this page is" + window.location.href);


var global = 1;
var local = 2;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCyIeE2xsnECcdGuhzzwzK1eO_rGJX5eDE",
    authDomain: "kraanti-5e486.firebaseapp.com",
    databaseURL: "https://kraanti-5e486.firebaseio.com",
    projectId: "kraanti-5e486",
    storageBucket: "kraanti-5e486.appspot.com",
    messagingSenderId: "991634200139",
    appId: "1:991634200139:web:06aa67f73696518f3f9fce",
    measurementId: "G-ZXD4MLH1T0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();




//<![CDATA[
function getPathTo(element) {
    if (element.id !== '')
        return 'id("' + element.id + '")';
    if (element === document.body)
        return element.tagName;

    var ix = 0;
    var siblings = element.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
        var sibling = siblings[i];
        if (sibling === element)
            return getPathTo(element.parentNode) + '/' + element.tagName + '[' + (ix + 1) + ']';
        if (sibling.nodeType === 1 && sibling.tagName === element.tagName) //&amp;&amp;
            ix++;
    }
}

function getPageXY(element) {
    var x = 0, y = 0;
    while (element) {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    }
    return [x, y];
}

  //]]>