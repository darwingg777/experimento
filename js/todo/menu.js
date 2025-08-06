 
    function mostrar(tabId) {
      document.getElementById("contenido1").classList.remove("active");
      if (tabId === "contenido1") {
        document.getElementById(tabId).classList.add("active");
      } else {
        window.location.href = tabId;
      }
    }
  