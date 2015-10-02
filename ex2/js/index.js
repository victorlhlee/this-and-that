window.onload = function () {
  // add an event listener to the `child` class.
  // inspect the .css file
    // when a `child` class is clicked you code will add CSS styles which will show the
    // secret toy element. Click on an element will only show that element's toy, no one elses.
   
    //get all the divs with the child class
    var childElements = document.getElementsByClassName('child');
    //console.log(childElements);
    
    //iterate through the collection of child divs and attach an event listener to each child div
    for(var i=0; i<childElements.length; i++){
      childElements[i].addEventListener('click', showSecretToy);
    }
    //event handler for the event listener above, when an event triggers, an 'event' object is given to you
    //inside of the event handler function, you can use 'this' keyword, which refers to the specific div that triggered the event
    function showSecretToy(event){
      //console.log(this);
      //querySelectorAll() method returns all elements in the document that matches a specified CSS selector as a static NodeList object
      //the nodelist object represents a collection of nodes, the nodes can be accessed b index numbers, index starts at 0.
      var secretToy = this.querySelectorAll('.secret-toy')[0];
      //check if the secretToy has a class 'show'
      //classList property returns the class name of an element, useful to add, remove and toggle CSS classes on an element
      if(secretToy.classList.contains('show')=== false){
        //doesn't exist, add the class 'show'
        secretToy.classList.add('show');
      }else{
        //if it has the class 'show' then remove it
        secretToy.classList.remove('show');
      }
    }
};