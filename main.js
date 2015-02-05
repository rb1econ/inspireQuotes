$(document).on('ready', function() {
  
});
var quoteArr = [];
var authorArr=[];
var ratingArr = [];

// SUBMIT BUTTON CLICK ///////////////////////
$('#quoteSubmit').on('click', function(){
      
      //Get quotes&authors and put them into an array:
      var quote = $('#quoteInput').val();
      quoteArr.push(quote);
      var author = $('#authorInput').val();
      authorArr.push(author);
      // console.log('author array:', authorArr, 'quote array: ', quoteArr);
   
      // make quote&author a p element and give it an id with 'j' that corresponds to its index in the array:
      var j = quoteArr.length-1;
      var jQuote = quoteArr[j];
      var jAuthor = authorArr[j];

      // make sure both fields are filled in:
      if (quoteArr[j].length<5 || authorArr[j].length<2){
         $('<div class="popup">Please enter both a valid quote and author</div>').css({
            position: 'fixed',
            background: 'darkblue',
            height: '50px',
            width: '200px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            padding: '10px'
         }).appendTo('body');
      
         $('<button class="closePopup">X</button>').appendTo('.popup')
               .css({
                  color: 'black',
                  position: 'absolute',
                  bottom: '5px',
                  right: '5px',
               })
               .on('click', function(){
                  $('.popup').remove();
               });
      }
      else{
         $('<p id="quoteNauth'+j+'"> \"'+jQuote+'\"<br> by: '+jAuthor+'</p>').appendTo('.submitdQuotes');
            $(this).parent().children().val('');
         $('<div id="rating'+j+'">Rate this quote from one to five:</div>').appendTo("#quoteNauth"+j);
         $('<label for="stars'+j+'">1 3 4 5</label><input id="stars'+j+'" type="range" name="stars" min="1" max="5">').appendTo("#rating"+j);
         $('<button id="submitRating">Rate</button>').appendTo("#rating"+j)
            .on('click', function(){
               var rating = $('#stars'+j);
               ratingArr.push(rating);
               console.log(ratingArr);
            });

      }
      // END MAKING SURE BOTH FIELDS ARE FULL //////////////////  //////////   ////////////   //////////




});
// END SUBMIT BUTTON CLICK //////////////////


