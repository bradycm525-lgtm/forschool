
console.log('Hello World!');


const name = "Brady Monroe"; 
let hasDownloadedResume = false; 


function showGreeting(userName) {
    return "Hello, my name is " + userName + "! Welcome to my Professional Portfolio!";
}


function daysUntilDeadline(targetDate) {
    const today = new Date();
    const deadline = new Date(targetDate);
    
   
    const diffTime = deadline - today;
    
    
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}




const greetingDiv = document.getElementById('greeting-container');
greetingDiv.innerText = showGreeting(name);


const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('click', function(e) {
    e.preventDefault(); 
    
    if (!hasDownloadedResume) {
        alert("Your resume is downloaded successfully!");
        hasDownloadedResume = true; 
    } else {
        console.log("User clicked download again, but alert is suppressed.");
    }
});


const targetDateStr = "2026-12-31";
const remainingDays = daysUntilDeadline(targetDateStr);
const deadlineText = document.getElementById('deadline-info');


deadlineText.innerText += " (" + remainingDays + " days remaining!)";
console.log("Days until deadline: " + remainingDays);