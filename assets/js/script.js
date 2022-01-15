const btn_topo = document.querySelectorAll('.btn a');


btn_topo.forEach(item => {
  item.addEventListener('click', function(e) {
    btn_topo.forEach(element => {
      element.classList.remove('selecionado');
    });
    e.target.classList.add('selecionado');
  });
});