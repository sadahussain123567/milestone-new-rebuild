var steps = document.querySelectorAll(".form-step");
var nextButtons = document.querySelectorAll(".next-btn");
var prevButtons = document.querySelectorAll(".prev-btn");
var addEducationButton = document.getElementById("add-education");
var addSkillButton = document.getElementById("add-skill");
var addProjectButton = document.getElementById("add-project");
var projectField = document.querySelector(".proField");
var educationField = document.querySelector(".eduField");
var skills = document.querySelector(".skillField");
var skill = document.querySelector(".skill");
var saveBtn = document.querySelector(".save");
var fullName = document.querySelector("#name");
var nameField = document.querySelector(".nameField");
var email = document.querySelector("#email");
var emailField = document.querySelector(".emailField");
var objective = document.querySelector("#objective");
var objField = document.querySelector(".objField");
var mobile = document.querySelector("#mobile");
var linkedIn = document.querySelector("#linkedIn");
var gitHub = document.querySelector("#github");
var mobileField = document.querySelector(".phone");
var linkedInField = document.querySelector(".linkedIn");
var githubField = document.querySelector(".github");
var download = document.querySelector(".download");
var resumeForm = document.querySelector(".resume-form");
var resume = document.querySelector(".resume");
var downBtn = document.querySelector(".down-btn");
var edit = document.querySelector(".edit");
edit === null || edit === void 0 ? void 0 : edit.addEventListener("click", function () {
    resumeForm.style.display = "block";
    resume.style.display = "none";
    downBtn.style.display = "none";
});
saveBtn === null || saveBtn === void 0 ? void 0 : saveBtn.addEventListener("click", function () {
    resumeForm.style.display = "none";
    resume.style.display = "block";
    downBtn.style.display = "flex";
    if (nameField) {
        nameField.innerHTML = "";
        nameField.innerHTML = fullName.value;
    }
    if (emailField) {
        emailField.innerHTML = "";
        emailField.innerHTML = email.value;
    }
    if (objField) {
        objField.innerHTML = "";
        objField.innerHTML = objective.value;
    }
    if (mobileField) {
        mobileField.innerHTML = "";
        mobileField.innerHTML = mobile.value;
    }
    if (linkedInField) {
        linkedInField.innerHTML = "";
        linkedInField.innerHTML = linkedIn.value;
    }
    if (githubField) {
        githubField.innerHTML = "";
        githubField.innerHTML = gitHub.value;
    }
    if (educationField) {
        educationField.innerHTML = "";
        var allEduItem = document.querySelectorAll(".education-item");
        allEduItem.forEach(function (eduItem) {
            var lieduField = document.createElement("li");
            var h2eduField = document.createElement("h3");
            var degree = eduItem.querySelector(".degree");
            var institution = eduItem.querySelector(".institution");
            var graduation = eduItem.querySelector(".grad-year");
            if (h2eduField && degree) {
                h2eduField.textContent = degree.value;
            }
            var h4eduField = document.createElement("h4");
            if (h4eduField && institution) {
                h4eduField.textContent = institution.value;
            }
            var h6eduField = document.createElement("h5");
            if (h6eduField && graduation) {
                h6eduField.textContent = graduation.value;
            }
            lieduField.appendChild(h2eduField);
            lieduField.appendChild(h4eduField);
            lieduField.appendChild(h6eduField);
            educationField.appendChild(lieduField);
        });
    }
    if (projectField) {
        projectField.innerHTML = "";
        var allprojectItems = document.querySelectorAll(".project-item");
        allprojectItems.forEach(function (projectItem) {
            var liproField = document.createElement("li");
            var h1proField = document.createElement("h1");
            var projectName = projectItem.querySelector(".project-name");
            var projectDesc = projectItem.querySelector(".project-description");
            if (h1proField && projectName) {
                h1proField.textContent = projectName.value;
            }
            var pproField = document.createElement("p");
            if (pproField && projectDesc) {
                pproField.textContent = projectDesc.value;
            }
            liproField.appendChild(h1proField);
            liproField.appendChild(pproField);
            projectField.appendChild(liproField);
        });
    }
    if (skills) {
        skills.innerHTML = "";
        var allSkills = document.querySelectorAll(".skill");
        allSkills.forEach(function (skillField) {
            var liskillField = document.createElement("li");
            var h3skillField = document.createElement("h3");
            if (skillField.value) {
                h3skillField.textContent = skillField.value;
            }
            liskillField.appendChild(h3skillField);
            skills.appendChild(liskillField);
        });
    }
});
var currentStep = 0;
// Show the first step initially
steps[currentStep].classList.add("active");
nextButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        steps[currentStep].classList.remove("active");
        currentStep++;
        steps[currentStep].classList.add("active");
    });
});
prevButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        steps[currentStep].classList.remove("active");
        currentStep--;
        steps[currentStep].classList.add("active");
    });
});
// Add new Education section
addEducationButton.addEventListener("click", function () {
    var educationSection = document.getElementById("education-section");
    var newEducation = document.createElement("div");
    newEducation.classList.add("education-item");
    newEducation.innerHTML = "\n        <label for=\"degree\">Degree:</label>\n        <input type=\"text\" class=\"degree\" required>\n\n        <label for=\"institution\">Institution:</label>\n        <input type=\"text\" class=\"institution\" required>\n\n        <label for=\"grad-year\">Graduation Year:</label>\n        <input type=\"text\" class=\"grad-year\" required>\n    ";
    educationSection.appendChild(newEducation);
});
// Add new Skill input field
addSkillButton.addEventListener("click", function () {
    var skillsSection = document.getElementById("skills-section");
    var newSkill = document.createElement("input");
    newSkill.type = "text";
    newSkill.classList.add("skill");
    newSkill.required = true;
    skillsSection.appendChild(newSkill);
});
// Add new Project section
addProjectButton.addEventListener("click", function () {
    var projectsSection = document.getElementById("projects-section");
    var newProject = document.createElement("div");
    newProject.classList.add("project-item");
    newProject.innerHTML = "\n        <label for=\"project\">Project Name:</label>\n        <input type=\"text\" class=\"project-name\" required>\n\n        <label for=\"description\">Project Description:</label>\n        <textarea class=\"project-description\" required></textarea>\n    ";
    projectsSection.appendChild(newProject);
});
var form = document.getElementById("multiStepForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    form.reset();
    currentStep = 0;
    steps.forEach(function (step) { return step.classList.remove("active"); });
    steps[currentStep].classList.add("active");
});
download === null || download === void 0 ? void 0 : download.addEventListener("click", function () {
    window.print();
});
