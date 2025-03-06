document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Learn more about " + skill.textContent.trim());
    });
});
