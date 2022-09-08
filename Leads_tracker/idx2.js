let myLeads = []
let oldLeads = []

const inputButton = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('unordered-list')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')

 
const  leadsFromLocalStorage = JSON.parse (localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage

    render(myLeads)
}

tabBtn.addEventListener('click', ()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {
    let listItems = '';
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target = '_blank' href = ' "+ leads[i] +" '>" + leads[i] +"</a></li> "
        listItems += `
            <li>
                <a target = '_blank' href = 'https://${leads[i]}/ '>
                ${leads[i]}
                </a>
                
            </li> 
        `

    }
    
    ulEl.innerHTML =  listItems 
    
}


deleteBtn.addEventListener('dblclick', ()=>{
    localStorage.clear()
    myLeads = []
    render(myLeads)
    
})

///data storage function

