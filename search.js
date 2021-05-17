var index = document.location.href.indexOf("q=");
var lastindex = document.location.href.lastIndexOf("&");

if(index == -1) {

} else if(lastindex == -1) {
    document.getElementsByName("q").valueOf()[0].value = document.location.href.substr(index + 2);
} else {
    console.log("test")
    console.log(index);
    console.log(lastindex - index);
    document.getElementsByName("q").valueOf()[0].value = document.location.href.substr(index + 2,lastindex-index-2);
}

document.getElementsByName("q").valueOf()[0].addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        document.location.href = 'search.html' + "?q=" + document.getElementsByName("q").valueOf()[0].value
    }
});

document.getElementsByName("btnG")[0].onclick = function() {
    document.location.href = 'search.html' + "?q=" + document.getElementsByName("q").valueOf()[0].value
}