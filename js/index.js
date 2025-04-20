function mostrarConteudo(numero) {
    const conteudo = document.getElementById(`${numero}bim`);
    const sections = document.querySelectorAll('section[id$="bim"]');
    if(conteudo.style.display === 'none' || conteudo.style.display === '') {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        conteudo.style.display = 'block';
    }
    else {
        conteudo.style.display = 'none';
    }
}
