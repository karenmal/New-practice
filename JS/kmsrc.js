  var rockBands = prompt('Do you think rock bands are awesome?').trim();
  if(rockBands === 'N' || rockBands === 'No'){
    alert('Have you ever heard of rock music?');
  } else if (rockBands === 'Y' || rockBands === 'Yes'){
    alert('You are correct, rock bands rule!');
  } else {
    alert('Please, listen to some rock bands!');
  }