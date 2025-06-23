
function generateCertificate() {
  const mobile = document.getElementById("mobileInput").value.trim();
  const student = students.find(s => s.mobile === mobile);

  if (!student) {
    alert("Mobile number not found!");
    return;
  }

  document.getElementById("studentName").textContent = student.name;
  document.getElementById("workshopName").textContent = student.workshop;
  document.getElementById("location").textContent = student.location;
  document.getElementById("date").textContent = student.date;

  document.getElementById("certificateArea").style.display = "block";
}

function downloadPDF() {
  const element = document.getElementById("certificate");
  const opt = {
    margin: 0,
    filename: 'certificate.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 3, useCORS: true },
    jsPDF: { unit: 'px', format: [1122, 793], orientation: 'landscape' }
  };
  html2pdf().set(opt).from(element).save();
}
