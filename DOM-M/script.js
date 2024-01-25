function creareTablaSah() {
    const tablasah = document.getElementById('tablasah');
  
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const patrat = document.createElement('div');
        patrat.className = (row + col) % 2 === 0 ? 'patrat alb' : 'patrat negru';
        tablasah.appendChild(patrat);
      }
    }
  }
  
  creareTablaSah();