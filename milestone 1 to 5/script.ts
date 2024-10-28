const steps = document.querySelectorAll(".form-step");
const nextButtons = document.querySelectorAll(".next-btn");
const prevButtons = document.querySelectorAll(".prev-btn");
const addEducationButton = document.getElementById("add-education") as HTMLButtonElement;
const addSkillButton = document.getElementById("add-skill") as HTMLButtonElement;
const addProjectButton = document.getElementById("add-project") as HTMLButtonElement;
const projectField = document.querySelector(".proField") as HTMLDivElement
const educationField = document.querySelector(".eduField")
const skills = document.querySelector(".skillField")
const skill = document.querySelector(".skill") as HTMLInputElement
const saveBtn = document.querySelector(".save")
const fullName = document.querySelector("#name") as HTMLInputElement
const nameField = document.querySelector(".nameField")
const email = document.querySelector("#email") as HTMLInputElement
const emailField = document.querySelector(".emailField")
const objective = document.querySelector("#objective") as HTMLInputElement
const objField = document.querySelector(".objField")
const mobile = document.querySelector("#mobile") as HTMLInputElement
const linkedIn = document.querySelector("#linkedIn") as HTMLInputElement
const gitHub = document.querySelector("#github") as HTMLInputElement
const mobileField = document.querySelector(".phone")
const linkedInField = document.querySelector(".linkedIn")
const githubField = document.querySelector(".github")
const download = document.querySelector(".download")
const resumeForm = document.querySelector(".resume-form") as HTMLDivElement
const resume = document.querySelector(".resume") as HTMLDivElement
const downBtn = document.querySelector(".down-btn") as HTMLDivElement
const edit = document.querySelector(".edit") 


edit?.addEventListener("click", ()=>{
    resumeForm.style.display = "block"
    resume.style.display = "none"
    downBtn.style.display = "none"
})
saveBtn?.addEventListener("click", ()=>{
    resumeForm.style.display = "none"
    resume.style.display = "block"
    downBtn.style.display = "flex"

    
    if(nameField){
        nameField.innerHTML = ""
        nameField.innerHTML = fullName.value
    }
    if(emailField){
        emailField.innerHTML = ""
        emailField.innerHTML = email.value
    }
    if(objField){
        objField.innerHTML = ""
        objField.innerHTML = objective.value
    }
    if(mobileField){
        mobileField.innerHTML = ""
        mobileField.innerHTML = mobile.value
    }
    if(linkedInField){
        linkedInField.innerHTML = ""
        linkedInField.innerHTML = linkedIn.value
    }
    if(githubField){
        githubField.innerHTML = ""
        githubField.innerHTML = gitHub.value
    }
    if(educationField){
        educationField.innerHTML = ""
        const allEduItem = document.querySelectorAll(".education-item")
        allEduItem.forEach(eduItem =>{
            const lieduField = document.createElement("li")
            const h2eduField = document.createElement("h3")
            const degree = eduItem.querySelector(".degree") as HTMLInputElement
            const institution = eduItem.querySelector(".institution") as HTMLInputElement
            const graduation = eduItem.querySelector(".grad-year") as HTMLInputElement
            if(h2eduField && degree){
                h2eduField.textContent = degree.value
            }
            const h4eduField = document.createElement("h4")
            if(h4eduField && institution){
                h4eduField.textContent = institution.value
            }
            const h6eduField = document.createElement("h5")
            if(h6eduField && graduation){
                h6eduField.textContent = graduation.value
            }
            lieduField.appendChild(h2eduField)
            lieduField.appendChild(h4eduField)
            lieduField.appendChild(h6eduField)
            educationField.appendChild(lieduField)    
        })
    }
    if(projectField){
        projectField.innerHTML = ""
        const allprojectItems = document.querySelectorAll(".project-item")
        allprojectItems.forEach(projectItem=>{
            const liproField = document.createElement("li")
            const h1proField = document.createElement("h1")
            const projectName = projectItem.querySelector(".project-name") as HTMLInputElement
            const projectDesc = projectItem.querySelector(".project-description") as HTMLInputElement
            if(h1proField && projectName){
                h1proField.textContent = projectName.value
            }
            const pproField = document.createElement("p")
            if(pproField && projectDesc){
                pproField.textContent = projectDesc.value
            }
            liproField.appendChild(h1proField)
            liproField.appendChild(pproField)
            projectField.appendChild(liproField) 
        })

        
    }
    
    if(skills){
        skills.innerHTML = ""
        const allSkills = document.querySelectorAll(".skill") as NodeListOf<HTMLInputElement>;
    
    allSkills.forEach(skillField => {
        const liskillField = document.createElement("li");
        const h3skillField = document.createElement("h3");
        if (skillField.value) {
            h3skillField.textContent = skillField.value;
        }
        liskillField.appendChild(h3skillField);
        skills.appendChild(liskillField);
    });
    }
    
})





let currentStep = 0;

// Show the first step initially
steps[currentStep].classList.add("active");

nextButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        steps[currentStep].classList.remove("active");
        currentStep++;
        steps[currentStep].classList.add("active");
    });
});

prevButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        steps[currentStep].classList.remove("active");
        currentStep--;
        steps[currentStep].classList.add("active");
    });
});

// Add new Education section
addEducationButton.addEventListener("click", () => {
    const educationSection = document.getElementById("education-section") as HTMLElement;
    const newEducation = document.createElement("div");
    newEducation.classList.add("education-item");
    newEducation.innerHTML = `
        <label for="degree">Degree:</label>
        <input type="text" class="degree" required>

        <label for="institution">Institution:</label>
        <input type="text" class="institution" required>

        <label for="grad-year">Graduation Year:</label>
        <input type="text" class="grad-year" required>
    `;
    educationSection.appendChild(newEducation);
});

// Add new Skill input field
addSkillButton.addEventListener("click", () => {
    const skillsSection = document.getElementById("skills-section") as HTMLElement;
    const newSkill = document.createElement("input");
    newSkill.type = "text";
    newSkill.classList.add("skill");
    newSkill.required = true;
    skillsSection.appendChild(newSkill);
});

// Add new Project section
addProjectButton.addEventListener("click", () => {
    const projectsSection = document.getElementById("projects-section") as HTMLElement;
    const newProject = document.createElement("div");
    newProject.classList.add("project-item");
    newProject.innerHTML = `
        <label for="project">Project Name:</label>
        <input type="text" class="project-name" required>

        <label for="description">Project Description:</label>
        <textarea class="project-description" required></textarea>
    `;
    projectsSection.appendChild(newProject);
});

const form = document.getElementById("multiStepForm") as HTMLFormElement;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
    form.reset();
    currentStep = 0;
    steps.forEach(step => step.classList.remove("active"));
    steps[currentStep].classList.add("active");
});


download?.addEventListener("click", ()=>{
    window.print()
})