// ==UserScript==
// @name         Bypass ChatGPT
// @namespace    https://www.facebook.com/m.a.n.h.h.ieeu
// @version      0.8.1.0.1
// @description  bypass chatGPT khi quá tải
// @author       Max Stewie
// @match        https://chat.openai.com/auth/login
// @icon         https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png
// @grant        none
// ==/UserScript==

(() => {
  const content = document.body.innerHTML;
  if(!content.includes("Welcome to ChatGPT") && !content.includes("checking")) {
    location.reload();
    return;
  }
  console.log("Mua ChatGPT liên hệ fb.com/m.a.n.h.h.ieeu ");
})();
