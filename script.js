function downloadPDF() {
  const element = document.getElementById("certificate");

  const opt = {
    margin:       0,
    filename:     'certificate.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  {
      scale: 3,         // High resolution
      useCORS: true     // For external images like logos/signatures
    },
    jsPDF:        {
      unit: 'px',
      format: [1122, 793], // Custom size for 800x600 + borders in pixels
      orientation: 'landscape'
    }
  };

  html2pdf().set(opt).from(element).save();
}
