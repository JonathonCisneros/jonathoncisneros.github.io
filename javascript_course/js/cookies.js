function setCookie(name, value, days) {
 var date = new Date();
 date.setTime(date.getTime() + (days*24*60*60*1000));
 var expires = "expires=" + date.toGMTString();
 cookieString = name + "=" + value + ";" + expires + ";path=/";
 document.cookie = cookieString;
}
function getCookie(name) {
 var nameEquals = name + "=";
 var decodedCookie = decodeURIComponent(document.cookie);
 var crumbs = decodedCookie.split(';');
 for (var i = 0; i < crumbs.length; i++) {
   var crumb = crumbs[i];
   while (crumb.charAt(0) == '') {
        crumb = crumb.substring(1);
    }
   if (crumb.indexOf(nameEquals) == 0){
     return crumb.substring(nameEquals.length, crumb.length);
   }
 }
 return "";
}
