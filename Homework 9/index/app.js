$(document).ready(function() {
    const name = "Brady Monroe";
    $('#greeting-container').text(`Hello, my name is ${name}! Welcome to my Professional Portfolio!`);

    let downloadCount = 0;
    $('#downloadBtn').on('click', function(e) {
        e.preventDefault();
        downloadCount++;
        $('#downloadCount').text(downloadCount);
    });

    
    let skills = ["HTML", "JavaScript", "Python", "C"];

    function renderSkills() {
        const $skillsList = $('#skills-list');
        $skillsList.empty(); 

        skills.forEach((skill, index) => {
            const skillCard = `
                <div class="col-md-3 skill-item" style="display:none;">
                    <div class="card shadow-sm text-center p-2">
                        <span class="fw-bold">${skill}</span>
                        <div class="mt-2">
                            <button class="btn btn-sm btn-link text-danger remove-skill" data-index="${index}">Delete</button>
                        </div>
                    </div>
                </div>`;
            const $el = $(skillCard);
            $skillsList.append($el);
            $el.fadeIn(400); 
        });
    }

   
    $('#addSkillBtn').on('click', function() {
        const newSkill = $('#skillInput').val().trim();
        if (newSkill !== "" && !skills.includes(newSkill)) {
            skills.push(newSkill);
            $('#skillInput').val("");
            renderSkills();
        }
    });

    
    $('#skills-list').on('click', '.remove-skill', function() {
        const index = $(this).data('index');
        const $parent = $(this).closest('.skill-item');
        
        
        $parent.slideUp(300, function() {
            skills.splice(index, 1);
            renderSkills();
        });
    });

    
    const navItems = ["About", "Skills", "Projects", "Education"];
    const $navMenu = $('#nav-menu-list');

    navItems.forEach(item => {
        $navMenu.append(`<li class="nav-item"><a class="nav-link" href="#${item.toLowerCase()}">${item}</a></li>`);
    });

    
    $(document).on('click', '.nav-link', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 800);
    });

    
    let projects = [
        { title: "Python Lab 1", description: "Foundational coding", deadline: new Date("2023-10-15"), img: "https://via.placeholder.com/150" },
        { title: "Python Lab 2", description: "Data structures", deadline: new Date("2024-02-20"), img: "https://via.placeholder.com/150" },
        { title: "Pentagon Firewall", description: "Classified Reasoning", deadline: new Date("2026-07-08"), img: "https://via.placeholder.com/150" }
    ];

    function renderProjects() {
        const $container = $('#projects-container');
        $container.empty();
        const today = new Date();

        for (let i = 0; i < projects.length; i++) {
            const status = projects[i].deadline > today ? "Ongoing" : "Completed";
            const statusClass = projects[i].deadline > today ? "text-primary" : "text-success";

            $container.append(`
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${projects[i].img}" class="card-img-top" alt="Project Image">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${projects[i].title}</h5>
                            <p class="card-text">${projects[i].description}</p>
                            <p class="fw-bold ${statusClass}">Status: ${status}</p>
                            <small class="text-muted">Deadline: ${projects[i].deadline.toLocaleDateString()}</small>
                        </div>
                    </div>
                </div>`);
        }
    }

    
    $('#sortProjectsBtn').on('click', function() {
        projects.sort((a, b) => a.deadline - b.deadline);
        renderProjects();
    });

    
    $('#skillInput').on('keydown', function(e) {
        if (e.key === "Enter") {
            $('#addSkillBtn').trigger('click');
        } else if (e.key === "Escape") {
            $(this).val("");
        }
    });

    
    function generateTable(containerId, title, dataRows) {
        let tableHTML = `
            <h3 class="h5 mb-3">${title}</h3>
            <table class="table table-hover border">
                <thead class="table-dark">
                    <tr><th>Role/Degree</th><th>Company/School</th><th>Dates</th></tr>
                </thead>
                <tbody>`;

        dataRows.forEach(row => {
            tableHTML += `<tr><td>${row.role}</td><td>${row.org}</td><td>${row.date}</td></tr>`;
        });

        tableHTML += `</tbody></table>`;
        $(`#${containerId}`).html(tableHTML);
    }

    const experienceData = [
        { role: "Cybersecurity Student", org: "NAU", date: "2024 - Present" },
        { role: "IT Student", org: "Mingus Union", date: "2020 - 2024" }
    ];
    
    const educationData = [
        { role: "Cybersecurity Degree", org: "Northern Arizona University", date: "Expected 2028" },
        { role: "High School Diploma", org: "Mingus Union High School", date: "Graduated 2024" }
    ];

    
    renderSkills();
    renderProjects();
    generateTable('experience-table-wrapper', 'Work Experience', experienceData);
    generateTable('education-table-wrapper', 'Educational Background', educationData);
});