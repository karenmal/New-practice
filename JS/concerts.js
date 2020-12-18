function  concerts(quantity){
    var concerts = prompt(message);
    var greeting;
          if(concerts > 10 && concerts < 20){
                greeting = 'Rock star ' + target;
            } else if(hourNow >0 && hourNow < 10) {
                greeting = 'Need to get to more concerts ' + target;
            } else {
                greeting = 'What are you waiting for?.';
            }
              console.log('our response: ', greeting);
              document.write(greeting);
    }//function closes
    concerts('Rock Bands Rule!','everyone!');
    