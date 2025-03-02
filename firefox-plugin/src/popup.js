let title = "Not a YouTube video";
let output = "";
const buttons = document.getElementById("buttons");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    const url = new URL(tab.url);

    if (url.hostname === "www.youtube.com" && url.pathname === "/watch") {
      const videoId = url.searchParams.get("v");
      title = "Markdown for this YouTube video";
      output = `[![${tab.title}](https://img.youtube.com/vi/${videoId}/0.jpg)](https://www.youtube.com/watch?v=${videoId} "${tab.title}")`;
      document.getElementById("output").textContent = output;

      const btnCopy = document.createElement("button");
      btnCopy.textContent = "Copy";
      btnCopy.id = "copy";
      buttons.appendChild(btnCopy);
      btnCopy.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(output);
          alert("Copied to clipboard!");
          window.close();
        } catch (error) {
          alert("Failed to copy to clipboard");
          console.error("Failed to copy to clipboard:", error);
        }
      });
    }

    const btnClose = document.createElement("button");
    btnClose.textContent = "Close";
    btnClose.id = "close";
    buttons.appendChild(btnClose);
    btnClose.addEventListener("click", () => {
      window.close();
    });

    document.getElementById("title").textContent = title;
  } catch (error) {
    console.error("Failed to initialize popup:", error);
  }
});
