$(document).on('ready', function() {
   });

   var aQuote = function(text, author, rating){
      this.text = text;
      this.author = author;
      this.rating = rating;
   };

   var manyQuotes = [];

   var j = 0;
   var k = 0;
   var putInArray = [];
   // SUBMIT BUTTON CLICK ///////////////////////
   $('#quoteSubmit').on('click', function(){
         
         //Get quote and author and put them into an instnace of 'aQuote':
         var currentText = $('#quoteInput').val();
         var currentAuthor = $('#authorInput').val();
         var currentQuote = new aQuote(currentText, currentAuthor);
         console.log('object: ', currentQuote);



         // make sure both fields are filled in:
         if (currentText.length<5 || currentAuthor.length<2){
            $('<div class="popup">Please enter both a valid quote and author</div>').css({
               position: 'fixed',
               height: '50px',
               width: '200px',
               top: '25%',
               left: '50%',
               transform: 'translate(-50%, -50%)',
               borderRadius: '.2em',
               color: '#FFFFFF',
               background: '#396B30',
               padding: '10px',
               opacity: '0.85',
            }).appendTo('body');
         
            $('<button class="closePopup">X</button>').appendTo('.popup')
                  .css({
                     color: '#FFFFFF',
                     position: 'absolute',
                     bottom: '5px',
                     right: '5px',
                  })
                  .on('click', function(){
                     $('.popup').remove();
                  });
         }
         else{
            var starshtml = ' <span class="starRating">' +
                                 '<input type="radio" name="rating'+j+'" value="1"><i></i>'+
                                 '<input type="radio" name="rating'+j+'" value="2"><i></i>'+
                                 '<input type="radio" name="rating'+j+'" value="3"><i></i>'+
                                 '<input type="radio" name="rating'+j+'" value="4"><i></i>'+
                                 '<input type="radio" name="rating'+j+'" value="5"><i></i>'+
                            "</span>"+
                            '<strong class="choice">Choose a rating</strong>';

                            j++;

            $('<div><h4 id="quoteNauth">'+currentText+'</h4><p> by: '+currentAuthor+'</p><div class="stars">'+starshtml+'</div><button class="submitRating">Rate</button></div>').appendTo('.submitdQuotes');
            
            manyQuotes.push(currentQuote);

            $(this).parent().children().val('');

         }
         // END MAKING SURE BOTH FIELDS ARE FULL //////////////////  //////////   ////////////   //////////
   });
   // END SUBMIT BUTTON CLICK //////////////////


   // BEGIN SUBMIT RATING:

      
   $('.submitdQuotes').on('click', '.submitRating', function(){
      var inputValueRating = $(this).parent().children('.stars').children('.choice').text()[0];
      
      // console.log('rated: ', inputValueRating);
      var textOfThisQuote =  $(this).parent().children('h4').html();
      console.log('textOfThisQuote:', textOfThisQuote);


      $(manyQuotes).map(function(item){
         console.log('Quote text from manyQuotes array:', manyQuotes[item].text);
         if(manyQuotes[item].text === textOfThisQuote){
            manyQuotes[item].rating = inputValueRating;
            console.log('found the object: ', manyQuotes[item]);
         }
      });
      // console.log('this submitted a rating', this);
      // console.log('array of objects with a rating: ', aQuote);
   });

      
// This makes the text change next to the radio buttons. Also the rating property on quote objects gets the number from here:::::::::::
   $('.submitdQuotes').on('change', '.starRating input', function(){
      console.log('radio this: ', this);
      $(this).parent().siblings(".choice").text(this.value + ' stars');
         
   });


// BEGIN SORT BY AUTHOR:::::::::::::::

$('#sortByAuthor').on('click', function(){

   // REMOVE ALL QUOTES FROM '.submmitdQuotes'
   $('.submitdQuotes').children().remove();
  // compare and sort:
   var compare = function (a,b){
      if(a.author < b.author){
         return -1;
      }
      if(a.author > b.author){
         return 1;
      }
      else {
         return 0;
      }
   };

   manyQuotes.sort(compare);
// END COMPARE AND SORT::

// BEGIN REMOVE AND APPEND

   $(manyQuotes).map(function(item){

      var starshtml = ' <span class="starRating">' +
                                 '<input type="radio" name="rating'+item+'" value="1"><i></i>'+
                                 '<input type="radio" name="rating'+item+'" value="2"><i></i>'+
                                 '<input type="radio" name="rating'+item+'" value="3"><i></i>'+
                                 '<input type="radio" name="rating'+item+'" value="4"><i></i>'+
                                 '<input type="radio" name="rating'+item+'" value="5"><i></i>'+
                            "</span>"+
                            '<strong class="choice">'+manyQuotes[item].rating+' stars</strong>';


   $('<div><h4 id="quoteNauth">'+manyQuotes[item].text+'</h4><p> by: '+manyQuotes[item].author+'</p><div class="stars">'+starshtml+'</div><button class="submitRating">Rate</button></div>')
      .appendTo('.submitdQuotes');
      
   });

});




// BEGIN SORT BY RATING::::::::::::::::::
$('#sortByRating').on('click', function(){
   // REMOVE ALL QUOTES FROM '.submmitdQuotes'
   $('.submitdQuotes').children().remove();

   var compare = function(a,b){
      if(a.rating < b.rating){
         return 1;
      }
      if(a.rating > b.rating){
         return -1;
      }
      else {
         return 0;
      }
   }
   manyQuotes.sort(compare);
// END COMPARE AND SORT::
// BEGIN REMOVE AND APPEND

   $(manyQuotes).map(function(item){

      var starshtml = ' <span class="starRating">' +
                                 '<input type="radio" name="rating'+item+'" value="1"><i></i>'+
                                 '<input type="radio" name="rating'+item+'" value="2"><i></i>'+
                                 '<input type="radio" name="rating'+item+'" value="3"><i></i>'+
                                 '<input type="radio" name="rating'+item+'" value="4"><i></i>'+
                                 '<input type="radio" name="rating'+item+'" value="5"><i></i>'+
                            "</span>"+
                            '<strong class="choice">'+manyQuotes[item].rating+' stars</strong>';


   $('<div><h4 id="quoteNauth">'+manyQuotes[item].text+'</h4><p> by: '+manyQuotes[item].author+'</p><div class="stars">'+starshtml+'</div><button class="submitRating">Rate</button></div>')
      .appendTo('.submitdQuotes');
      
   });
});
