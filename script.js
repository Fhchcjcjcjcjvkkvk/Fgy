// script.js
document.getElementById("run-code").addEventListener("click", () => {
  const language = document.getElementById("language").value;
  const code = document.getElementById("code-editor").value;

  // Mock execution for demonstration
  let output;
  switch (language) {
    case "python":
      output = `Running Python code:\n${code}`;
      break;
    case "typescript":
      output = `Running TypeScript code:\n${code}`;
      break;
    case "java":
      output = `Running Java code:\n${code}`;
      break;
    case "swift":
      output = `Running Swift code:\n${code}`;
      break;
    default:
      output = "Unsupported language!";
  }

  document.getElementById("code-output").textContent = output;
});
