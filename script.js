
function generateCertificate() {
  const mobile = document.getElementById("mobileInput").value.trim();
  const student = students.find(s => s.mobile === mobile);

  if (!student) {
    alert("Mobile number not found.");
    return;
  }

  const certHTML = `
    <div style="width:800px; height:600px; padding:40px; border:10px solid #2c3e50; text-align:center; font-family:sans-serif; background: #fdfefe;">
      <h1 style="color:#2c3e50;">Certificate of Participation</h1>
      <p style="font-size:20px;">This is to certify that</p>
      <h2 style="color:#1abc9c;">${student.name}</h2>
      <p style="font-size:20px;">has successfully participated in</p>
      <h3>🌟 Your Workshop Name 🌟</h3>
      <p style="margin-top:20px;">Date: 21st June 2025</p>
      <p>Certificate ID: ${student.certificate_id}</p>
      <p style="margin-top:40px;">Organizer Name | Signature</p>
    </div>
  `;

  document.getElementById("certificate").innerHTML = certHTML;
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
