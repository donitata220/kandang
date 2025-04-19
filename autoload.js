
(function () {
  const urls = [
    "https://www.profitableratecpm.com/ymkq6d6p?key=187493c8159e3934f28c7782b0f1cf04",
    "https://www.profitableratecpm.com/xe9ywmt8d?key=bab4804d69366375fc41ad51af50f9ec"
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
