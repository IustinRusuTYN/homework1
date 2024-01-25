document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCumparaturi');
    const lista = document.getElementById('listaCumparaturi');
    const input = document.getElementById('numeArticol');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const nume = input.value.trim();
      if (nume && lista.children.length < 10) {
        lista.innerHTML += `<li><span>${nume}</span>
                            <button onclick="stergeArticol(this)">Șterge</button>
                            <button onclick="cumparaArticol(this)">Cumpărat</button></li>`;
        form.reset();
        input.disabled = lista.children.length >= 10;
      }
    });
  
    window.stergeArticol = element => {
      element.closest('li').remove();
      input.disabled = lista.children.length >= 10;
    };
  
    window.cumparaArticol = element => {
      element.closest('li').classList.toggle('cumparat');
      input.disabled = lista.children.length >= 10;
    };
  });