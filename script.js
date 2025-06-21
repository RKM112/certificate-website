
function generateCertificate() {
  const name = document.getElementById("participant").value.trim();
  const workshop = document.getElementById("workshop").value.trim();
  const location = document.getElementById("location").value.trim();
  const date = document.getElementById("date").value.trim();

  if (!name || !workshop || !location || !date) {
    alert("Please fill all fields!");
    return;
  }

  document.getElementById("certName").textContent = name;
  document.getElementById("certWorkshop").textContent = workshop;
  document.getElementById("certLocation").textContent = location;
  document.getElementById("certDate").textContent = date;

  document.getElementById("certificateArea").style.display = "block";
}

function downloadPDF() {
  const element = document.getElementById("certificate");
  const opt = {
    margin: 0,
    filename: 'certificate.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
  };
  html2pdf().set(opt).from(element).save();
}
