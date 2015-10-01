window.onload = function () {
  // add an event listener to each li element inside of the nav menu.
  // Make it listen for a Click event
    // this event should log to the console the text inside of the <a> tag
    // the event should only log one word per click.
   var navi = document.getElementsByClassName('navLink');
   //console.log(navi);

   for(var i = 0; i<navi.length; i++){
    //console.log(navi[i]);
    navi[i].addEventListener('click', function(){
      console.log(this);
    })
   }



   /* var navLink = document.getElementsByClassName('navLink');
    //console.log(navLink);

    for(var i =0; i<navLink.length; i++){
      //console.log(navLink[i]);
      navLink[i].addEventListener('click', function(){
        console.log(this);
      });
    }
*/
};