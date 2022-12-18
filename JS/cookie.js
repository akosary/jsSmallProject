function setCookie(cName, cValue) {
       //let date = new Date();
    //date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    //const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue +";";
}
setCookie("counter",0);