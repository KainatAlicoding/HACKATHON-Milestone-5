function generateResume() {
    // Get input values
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Display values in the resume preview
    document.getElementById('display-name').innerText = name || "Your Name";
    document.getElementById('display-title').innerText = title || "Job Title";
    document.getElementById('display-email').innerText = "Email: " + (email || "example@example.com");
    document.getElementById('display-phone').innerText = "Phone: " + (phone || "123-456-7890");
    document.getElementById('display-location').innerText = "Location: " + (location || "City, Country");
    document.getElementById('display-experience').innerText = experience || "Your experience details will appear here.";
    document.getElementById('display-skills').innerText = skills || "Your skills will appear here.";
}

function downloadResumeAsPDF() {
    const element = document.getElementById('resume');
    const options = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(options).from(element).save();
}
