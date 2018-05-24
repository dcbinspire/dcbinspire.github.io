var slideIndex = 0;
function carousel() {
    var i;
    var x = document.getElementsByClassName("challengeSlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 6000); 
}

function mathPastIssues()
{
	showModal()
	emptyModule()
	$('#pastFacts').load("DynamicLoadHTML/Modules/challengeModule.html #PastMathIssues")
}
function sciPastIssues()
{
	showModal()
	emptyModule()
	$('#pastFacts').load("DynamicLoadHTML/Modules/challengeModule.html #PastSciIssues")
}

// When the user clicks the button, open the modal 
function showModal() 
{
	modal.style.display = "block";
}
function getModalVidFact()
{
	showModalVidFact("bioVid1", "bioFact1")
}
function showModalVidFact(vidID, factID)
{
	showModal() 
	emptyModule()
	$('#Modalvideo').load('DynamicLoadHTML/Modules/vidfactModule.html #'+ vidID);
	$('#Modalfacts').load('DynamicLoadHTML/Modules/vidfactModule.html #' +factID);
}
function emptyModule()
{
	$('#Modalvideo').empty()
	$('#Modalfacts').empty()
	$('#pastFacts').empty()
}