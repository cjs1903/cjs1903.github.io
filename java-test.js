// Get the button element
const downloadBtn = document.getElementById("downloadBtn");
 
// Add click event listener
downloadBtn.addEventListener("click", () => {
  // Sample data (e.g., a CSV file)
  const csvData = "Name,Email\nJohn Doe,john@example.com\nJane Smith,jane@example.com";
  
  // Create Blob with CSV MIME type
  const blob = new Blob([csvData], { type: "text/csv" });
  
  // Generate download link (reusing the logic from Section 2)
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "users.csv";
  
  document.body.appendChild(a);
  a.click();
  
  // Cleanup
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
});
