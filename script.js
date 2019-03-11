//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  donationPrompt = window.prompt('How much would you like to donate?');

  if (donationPrompt < 100) {
    var myNewHead = document.createElement ('h3');
    var myHeadlineText = document.createTextNode
      ('Thank you for your donation of ' + donationPrompt +' ');
  } else{
    var myNewHead = document.createElement ('h3');
    var myHeadlineText = document.createTextNode
      ('Thank you for your very generous donation!');
      myNewHead.style.color = "red";

      document.getElementsByTagName ("article")[0]
      .setAttribute("class", "generous-donation");

  }
  myNewHead.appendChild(myHeadlineText);

  ConsoleDisplay.appendChild(myNewHead);

});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  var myNewHead = document.createElement ('p');
  var myHeadlineText = document.createTextNode
  ('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  myNewHead.appendChild(myHeadlineText);
  ConsoleDisplay.appendChild(myNewHead);

  //console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    var myNewHead = document.createElement ('p');
    var myHeadlineText = document.createTextNode
        ('This speech took place before the common era.');
  }else{
    var myNewHead = document.createElement ('p');
    var myHeadlineText = document.createTextNode
        ('This speech took place during the common era.');
  }
  myNewHead.appendChild(myHeadlineText);
  ConsoleDisplay.appendChild(myNewHead);

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    var myNewHead = document.createElement ('p');
    var myHeadlineText = document.createTextNode
    ('This is the oldest speech on the page.');
  }
  if(speechesArray[0].year === newest){
    var myNewHead = document.createElement ('p');
    var myHeadlineText = document.createTextNode
    ('This is the most recent speech on the page.');
  }
  myNewHead.appendChild(myHeadlineText);
  ConsoleDisplay.appendChild(myNewHead);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  var myNewHead = document.createElement ('p');
  var myHeadlineText = document.createTextNode
  ('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  myNewHead.appendChild(myHeadlineText);
  ConsoleDisplay.appendChild(myNewHead);

  if(speechesArray[1].yearIsBCE === true){
    var myHeadlineText = document.createTextNode
    var myNewHead = document.createElement ('p');
      ('This speech took place before the common era.');
  }else{
    var myNewHead = document.createElement ('p');
    var myHeadlineText = document.createTextNode
    ('This speech took place during the common era.');

  }
  myNewHead.appendChild(myHeadlineText);
  ConsoleDisplay.appendChild(myNewHead);

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    var myNewHead = document.createElement ('p');
    var myHeadlineText = document.createTextNode
    ('This is the oldest speech on the page.');
  }
  if(speechesArray[1].year === newest){
    var myNewHead = document.createElement ('p');
    var myHeadlineText = document.createTextNode
    ('This is the most recent speech on the page.');

  }
  myNewHead.appendChild(myHeadlineText);
  ConsoleDisplay.appendChild(myNewHead);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  var myNewHead = document.createElement ('p');
  var myHeadlineText = document.createTextNode
  ('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  myNewHead.appendChild(myHeadlineText);
  ConsoleDisplay.appendChild(myNewHead);

  if(speechesArray[2].yearIsBCE === true){
    var myNewHead = document.createElement ('p');
    var myHeadlineText = document.createTextNode
      ('This speech took place before the common era.');
  }else{
    var myHeadlineText = document.createTextNode
      ('This speech took place during the common era.');

  }
  myNewHead.appendChild(myHeadlineText);
  ConsoleDisplay.appendChild(myNewHead);

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    var myNewHead = document.createElement ('p');
    var myHeadlineText = document.createTextNode
      ('This is the oldest speech on the page.');
  }
  if(speechesArray[2].year === newest){
    var myHeadlineText = document.createTextNode
      ('This is the most recent speech on the page.');

  }
  myNewHead.appendChild(myHeadlineText);
  ConsoleDisplay.appendChild(myNewHead);

});
