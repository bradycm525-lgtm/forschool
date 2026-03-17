const name = "Brady Monroe";
const greetingDiv = document.getElementById('greeting-container');
if (greetingDiv) {
    greetingDiv.innerText = `Hello, my name is ${name}! Welcome to my Professional Portfolio!`;
}


let downloadCount = 0;
const downloadBtn = document.getElementById('downloadBtn');
const downloadDisplay = document.getElementById('downloadCount');

if (downloadBtn && downloadDisplay) {
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        downloadCount++;
        downloadDisplay.innerText = downloadCount;
        console.log(`Resume downloaded ${downloadCount} times.`);
    });
}


const skillInput = document.getElementById('skillInput');
const addSkillBtn = document.getElementById('addSkillBtn');
const skillsList = document.getElementById('skills-list');

if (addSkillBtn && skillInput && skillsList) {
    addSkillBtn.addEventListener('click', () => {
        const newSkill = skillInput.value.trim();
        if (newSkill !== "") {
            const col = document.createElement('div');
            col.className = 'col-md-3';
            col.innerHTML = `
                <div class="card shadow-sm text-center p-2">
                    <span class="fw-bold">${newSkill}</span>
                </div>`;
            skillsList.appendChild(col);
            skillInput.value = "";
        }
    });
}


const projectTitles = ["Python Lab 1", "Python Lab 2", "Breaching Pentagon Firewall"];
const projectDescriptions = ["Foundational coding", "Data structures", "Classified Reasoning"];
const projectDeadlines = ["2023-10-15", "2024-02-20", "2026-07-08"]; 

const projectsContainer = document.getElementById('projects-container');
const today = new Date();

if (projectsContainer) {
    
    projectsContainer.innerHTML = ""; 

    for (let i = 0; i < projectTitles.length; i++) {
        const deadlineDate = new Date(projectDeadlines[i]);
        let statusText = "";
        let statusClass = "";
        
        
        if (deadlineDate > today) {
            statusText = "Ongoing";
            statusClass = "text-primary";
        } else {
            statusText = "Completed";
            statusClass = "text-success";
        }

        projectsContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <h5 class="card-title fw-bold">${projectTitles[i]}</h5>
                        <p class="card-text">${projectDescriptions[i]}</p>
                        <p class="fw-bold ${statusClass}">Status: ${statusText}</p>
                        <small class="text-muted">Deadline: ${projectDeadlines[i]}</small>
                    </div>
                </div>
            </div>`;
    }
}


function generateTable(containerId, title, dataRows) {
    const container = document.getElementById(containerId);
    if (!container) return; 

    let tableHTML = `
        <h3 class="h5 mb-3">${title}</h3>
        <table class="table table-hover border">
            <thead class="table-dark">
                <tr>
                    <th>Role/Degree</th>
                    <th>Company/School</th>
                    <th>Dates</th>
                </tr>
            </thead>
            <tbody>`;

    dataRows.forEach(row => {
        tableHTML += `
            <tr>
                <td>${row.role}</td>
                <td>${row.org}</td>
                <td>${row.date}</td>
            </tr>`;
    });

    tableHTML += `</tbody></table>`;
    container.innerHTML = tableHTML;
}


const experienceData = [
    { role: "Cybersecurity Student", org: "NAU", date: "2024 - Present" },
    { role: "IT Student", org: "Mingus Union", date: "2020 - 2024" }
];

const educationData = [
    { role: "Cybersecurity Degree", org: "Northern Arizona University", date: "Expected 2028" },
    { role: "High School Diploma", org: "Mingus Union High School", date: "Graduated 2024" }
];


generateTable('experience-table-wrapper', 'Work Experience', experienceData);
generateTable('education-table-wrapper', 'Educational Background', educationData);