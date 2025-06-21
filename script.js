
function generateCertificate() {
  const mobile = document.getElementById("mobileInput").value.trim();
  const student = students.find(s => s.mobile === mobile);

  if (student) {
    document.getElementById("certificateArea").style.display = "block";
    document.getElementById("studentName").innerText = student.name;
    document.getElementById("certId").innerText = student.certificate_id;
  } else {
    alert("Mobile number not found.");
  }
}

function downloadPDF() {
  var element = document.getElementById('certificate');
  html2pdf().from(element).save("certificate.pdf");
}
