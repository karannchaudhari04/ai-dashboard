// utils/exportToPDF.js
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const exportToPDF = async (elementId, fileName = "chart.pdf") => {
  const input = document.getElementById(elementId);
  if (!input) return;

  const canvas = await html2canvas(input, {
    backgroundColor: "#ffffff",
    scale: 2,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pdfWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  // Add first page
  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pdfHeight;

  // Add more pages if needed
  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;
  }

  pdf.save(fileName);
};

export default exportToPDF;
