function aparecerConteudo(numero){
    const content = document.getElementById(`${numero}bim`)
    const sections = document.querySelectorAll('section[id$="bim"]')
            
    if (content.style.display === 'none'|| content.style.display === '') {
        
        sections.forEach(section =>{
            section.style.display = 'none'
        })

        content.style.display = 'block'
    } else {
        content.style.display = 'none'
    }
}