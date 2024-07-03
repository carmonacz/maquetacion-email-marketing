// Codigo para guardar los datos en el portapapeles.

let textarea = document.querySelectorAll("textarea");
let nonce = document.querySelector("#next_nonce");

function copyDataToClipboard() {
  // Combine all relevant data into a single string
  const dataToCopy =
    `Server Seed:\n${textarea[3].value}\n` +
    `Server Hash:\n${textarea[1].value}\n` +
    `Nonce:\n${nonce.innerHTML}\n` +
    `Client:\n${textarea[4].value}`;

  // Create a temporary element for clipboard interaction
  const textArea = document.createElement("textarea");
  textArea.value = dataToCopy;
  document.body.appendChild(textArea);

  // Select the text content
  textArea.select();

  try {
    // Attempt modern clipboard API for broader compatibility
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(dataToCopy)
        .then(() => {
          console.log("Data copied to clipboard successfully!");
        })
        .catch((err) => {
          console.error("Failed to copy data to clipboard:", err);
          // Handle fallback if modern API fails
          copyToClipboardLegacy(dataToCopy);
        });
    } else {
      // Use legacy approach for older browsers
      copyToClipboardLegacy(dataToCopy);
    }
  } catch (err) {
    console.error("Failed to copy data to clipboard:", err);
    // Handle errors gracefully, e.g., display an error message to the user
  } finally {
    // Remove the temporary element
    document.body.removeChild(textArea);
  }
}

function copyToClipboardLegacy(dataToCopy) {
  // Create a temporary input element
  const input = document.createElement("input");
  input.value = dataToCopy;
  document.body.appendChild(input);
  input.select();

  // Simulate a "copy" event using execCommand (may not work in all browsers)
  document.execCommand("copy");

  // Remove the temporary element
  document.body.removeChild(input);
}

const btn = document.getElementById("double_your_btc_2x");
const stake = document.getElementById("double_your_btc_stake");

btn.addEventListener("click", function () {
  const valorStakeString = stake.value;

  const valorStake = parseFloat(valorStakeString);

  const resultado = valorStake * 1.5;

  const resultadoString = resultado.toFixed(8);

  stake.value = resultadoString;
});

document.querySelector("#double_your_btc_2x").innerHTML = "3x";

const botonVerDatos = document.querySelector("li.multiplier_header_background");

botonVerDatos.addEventListener("click", copyDataToClipboard);

///// codigo para guardar los datos en un archivo

let textarea = document.querySelectorAll("textarea");
let nonce = document.querySelector("#next_nonce");

function downloadDataToTextFile() {
  // Combine all relevant data into a single string
  const dataToDownload =
    `Server Seed:\n${textarea[3].value}\n` +
    `Server Hash:\n${textarea[1].value}\n` +
    `Nonce:\n${nonce.innerHTML}\n` +
    `Client:\n${textarea[4].value}`;

  // Create a Blob object with the data and appropriate MIME type
  const blob = new Blob([dataToDownload], { type: "text/plain" });

  // Create a temporary URL for the Blob object
  const url = URL.createObjectURL(blob);

  // Generate a filename based on the content
  const filename = "datos_descargados.txt";

  // Create an anchor element to trigger the download
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;

  // Trigger the click event to initiate the download
  anchor.click();

  // Revoke the temporary URL when done (optional)
  URL.revokeObjectURL(url);
}

const btn = document.getElementById("double_your_btc_2x");
const stake = document.getElementById("double_your_btc_stake");

btn.addEventListener("click", function () {
  const valorStakeString = stake.value;

  const valorStake = parseFloat(valorStakeString);

  const resultado = valorStake * 1.5;

  const resultadoString = resultado.toFixed(8);

  stake.value = resultadoString;
});

document.querySelector("#double_your_btc_2x").innerHTML = "3x";

const botonGuardarDatos = document.querySelector("li.multiplier_header_background"); // Replace with your actual button selector

botonGuardarDatos.addEventListener("click", downloadDataToTextFile);
