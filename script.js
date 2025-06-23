function downloadPDF() {
  const element = document.getElementById("certificate");

  const opt = {
    margin:       [0, 0, 0, 0],
    filename:     'certificate.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  {
      scale: 3,
      useCORS: true,
      windowWidth: 1122,
      windowHeight: 793
    },
    jsPDF: {
      unit: 'px',
      format: [3508, 2480], // exact A4 landscape in pixels
      orientation: 'landscape'
    }
  };

  html2pdf().set(opt).from(element).save();
}
