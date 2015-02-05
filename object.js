$(document).on('ready', function() {
   });

   var aQuote = function(text, author, rating){
      this.text = text;
      this.author = author;
      this.rating = rating;
   };

   var manyQuotes = [];

   var j = 0;
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
               background: '#67EC81',
               color: '#396B30',
               height: '50px',
               width: '200px',
               top: '25%',
               left: '50%',
               transform: 'translate(-50%, -50%)',
               border: '0px',
               borderRadius: '3px',
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
            var starshtml = ' <span class="starRating">' +
                                 '<input type="radio" name="rating'+j+'" value="1"><i></i>'+
                                 '<input type="radio" name="rating'+j+'" value="2"><i></i>'+
                                 '<input type="radio" name="rating'+j+'" value="3"><i></i>'+
                                 '<input type="radio" name="rating'+j+'" value="4"><i></i>'+
                                 '<input type="radio" name="rating'+j+'" value="5"><i></i>'+
                            "</span>"+
                            '<strong class="choice">Choose a rating</strong>';

                            j++;

            $('<div><p id="quoteNauth"> \"'+currentText+'\"<br> by: '+currentAuthor+'</p><div class="stars">'+starshtml+'</div><button class="submitRating">Rate</button></div>').appendTo('.submitdQuotes');
            
            manyQuotes.push(currentQuote);

            $(this).parent().children().val('');

         }
         // END MAKING SURE BOTH FIELDS ARE FULL //////////////////  //////////   ////////////   //////////
   });
   // END SUBMIT BUTTON CLICK //////////////////


   // BEGIN SUBMIT RATING:

      
   $('.submitdQuotes').on('click', '.submitRating', function(){
      var inputValueRating = $(this).parent().children('.stars').children('.choice').text()[0];
      // var rated = $('.starRating').val();
      console.log('rated: ', inputValueRating);
      // $(manyQuotes).map(function(item){
      //    console.log(manyQuotes[item]);
      //    if(manyQuotes[item].text === $(this).parent().children('p')){
      //       manyQuotes[item].rating = rated;
      //       console.log('found the object: ', manyQuotes[item]);
      //    }
      // });
      // console.log('this submitted a rating', this);
      // console.log('array of objects with a rating: ', aQuote);
   });

      

   $('.submitdQuotes').on('change', '.starRating input', function(){
      console.log('radio this: ', this);
      $(this).parent().siblings(".choice").text(this.value + ' stars');
         
   });

