const node_for_click= document.getElementById("for_click")

function find_edit(){
    const item  = document.getElementsByTagName('div')[3]
    console.log(item.innerText)
    item.innerText = 'Beteva'

    document.getElementsByTagName('div')[4].innerText='Elizaveta'

    document.getElementsByTagName('div')[5].innerText='Evgenievna'

}



node_for_click.addEventListener("click",find_edit)