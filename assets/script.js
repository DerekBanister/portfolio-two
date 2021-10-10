var jumbo = $(".jumbotron")

$(".meBtn").on("click", function(event){
    event.preventDefault();
    $(".btnHide").hide();
    appendAboutMe();

})

function appendAboutMe(){

    var aboutMe = $("<div>")
    var myText = $("<p>").text("Thanks for visiting my page! I am 26 years old, born and raised in Pleasanton, CA. I am a former law enforcement student and Contra Costa County Police Academy graduate switching careers into the field of web development. I am incredibly excited to begin this new journey in my life and acquire new skills to reach my goals. The technologies I have learned so far include HTML, CSS, Javascript, Jquery, and Bootstrap. I will add many more libraries and frameworks to my arsenal and absolutely love learning new technologies. I enjoy playing sports, watching movies, playing video games, and spending time with my dog Raider and my wife Katrina.")
    var myPic = $("<img>").attr("src", "images/me.jpg")
    myPic.attr("style", "width: 400px")
    aboutMe.append(myText, myPic)
    jumbo.append(aboutMe)
}
//changes header text based on slide showing
$('.carousel').on('slid.bs.carousel', function () {
    $('#text').html($('.active > .carousel-caption').html());

 });
