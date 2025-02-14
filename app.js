async function submitWaste() {
  const date = document.getElementById("flightDate").value;
  const flightRoute = document.getElementById("flightRoute").value;

  if (!date) {
    document.getElementById("response").innerText = "⚠️ Please select a flight date!";
    return;
  }

  const wasteData = { "Organic Brownie GF": 2 };

  const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date, flightRoute, wasteData })
  });

  const result = await response.json();
  document.getElementById("response").innerText = result.success 
    ? "✅ Submission successful!"
    : "⚠️ Error: " + result.error;
}
