var jumbo = $(".jumbotron")

$(".btn").on("click", function(event){
    event.preventDefault();
    $(".btn").hide();
    appendAboutMe();

})

function appendAboutMe(){

    var aboutMe = $("<div>")
    var myName = $("<h2>").text("Derek Banister")
    var myText = $("<p>").text("Thanks for visiting my page! I am 26 years old, born and raised in Pleasanton, CA. I am a former law enforcement student and Contra Costa County Police Academy graduate switching careers into the field of web development. I am incredibly excited to begin this new journey in my life and acquire new skills to reach my goals. I am a motivated problem solver that enjoys spending time with my dog Raider and my wife Katrina.")

    aboutMe.append(myName, myText)
    jumbo.append(aboutMe)
}
