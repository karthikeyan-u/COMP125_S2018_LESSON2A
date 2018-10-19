/* CUSTOM JS GOES HERE */

//IIFE - Immediatly invoked Functions
(function(){
    var title = document.title;
    function Start(){
        console.log('Title : '+ title);
    }
    window.onload=Start;
})();