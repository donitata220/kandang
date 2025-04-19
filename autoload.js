
(function () {
  const urls = [
    "https://www.effectiveratecpm.com/ge65qx6gs?key=28a0fcaf13c60ae90e1d94503ac2f67b",
    "https://www.effectiveratecpm.com/w4deur4mzh?key=f9741a58a274f0182a88f1ff37734bd9",
    "https://www.effectiveratecpm.com/ge65qx6gs?key=28a0fcaf13c60ae90e1d94503ac2f67b"
  ];

  let index = 0;

  function openNextTab() {
    const url = urls[index];
    window.open(url, '_blank');
    console.log(`Opened: ${url}`);
    index = (index + 1) % urls.length;
  }

  window.onload = () => {
    openNextTab();  
    setInterval(openNextTab, 10000);  
  };
})();