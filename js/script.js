// apply dark/light mood
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');


const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode' , 'active');
}

const enableLightMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if (darkmode === "active") enableDarkMode();

themeSwitch.addEventListener("click" , () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkMode() : enableLightMode();
});


// section of operations on the (Active - Inactive - All) buttons

let activeBtn = document.getElementById('active');
let inactiveBtn = document.getElementById('inactive');
let all = document.getElementById('all');
let boxes = document.querySelectorAll('.box');


function filterItems (filter) {
    boxes.forEach(box => {
        const isActive = box.dataset.active === "true";

        if (filter === "active") {
            box.style.display = isActive ? "block" : "none"; 
        }
        else if (filter === "inactive") {
            box.style.display = isActive ? "none" : "block";
        }
        else {
            box.style.display = "block";
        }
    });
}

activeBtn.addEventListener('click' , () => filterItems('active'));
inactiveBtn.addEventListener('click' , () => filterItems('inactive'));
all.addEventListener('click' , () => filterItems('all'));



// update data attribute when toggle bar is changed

document.querySelectorAll('.toggleCheck').forEach(toggle => {
    toggle.addEventListener('change' , function () {
        this.closest('.box').dataset.active = this.checked;
    });
});



// Remove button action

let removBtn = document.querySelectorAll('.remove');

removBtn.forEach(button => {
    button.addEventListener('click' , function () {
        this.closest('.box').remove();
    })
})
