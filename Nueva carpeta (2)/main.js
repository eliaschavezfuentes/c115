function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var perro = 0;
var gato = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Escucho  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Perro - '+perro+ ' Gato - '+gato;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "pero") {
      img.src = 'https://media4.giphy.com/media/xUNd9DHbXN17q9zbCE/giphy.gif';
      perro = perro + 1;
    } else if (results[0].label == "gato") {
      img.src = 'https://38.media.tumblr.com/457b296c98ddd69f5327b8b5881e4ffe/tumblr_nedxajZ0hW1tw5bhko1_400.gif';
      gato = gato + 1;
    } else{
      img.src = 'https://media.tenor.com/images/b55bc8e23f9878ebd9c75f1709d1bb40/tenor.gif';
    }
  }
}
