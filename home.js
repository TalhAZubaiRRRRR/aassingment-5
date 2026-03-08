
let allIssues = [];
let currentTab = ""


const container = document.getElementById("issuesContainer")
const count = document.getElementById("issueCount")

const allBtn = document.getElementById("allBtn")
const openBtn = document.getElementById("openBtn")
const closedBtn = document.getElementById("closedBtn")

const loadSpin = document.getElementById("loading-spinner")

const issueModal = document.getElementById("issue-modal")

const modalTitle = document.getElementById("modalTitle")
const modalStatus =document.getElementById("modalStatus")
const modalAuthor = document.getElementById("modalAuthor")
const modalDate = document.getElementById("modalDate")
const modalLabels=document.getElementById("modalLabels")
const modalDescription = document.getElementById("modalDescription")
const modalAssignee = document.getElementById("modalAssignee")
const modalPriority = document.getElementById("modalPriority")










async function loadIssues() {
    showLoading()
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json()
    hideLoading()
    allIssues = data.data
    // console.log(allIssues)
    disIssues(allIssues)



}

loadIssues()



function showLoading(){
    loadSpin.classList.remove("hidden")
    loadSpin.classList.add("flex")
    container.innerHTML=""

}
function hideLoading(){
    loadSpin.classList.add("hidden")
}



function disIssues(issues) {
    container.innerHTML = ""

    count.innerHTML = issues.length + " Issues"
    issues.forEach(issue => {
        // console.log(issue)
        const div = document.createElement("div")
        let borderColor = issue.status === "open"
            ? "border-green-600"
            : "border-purple-600"

        let icon = issue.status === "open"
            ? "./B13-A5-Github-Issue-Tracker/assets/open.png"
            : "./B13-A5-Github-Issue-Tracker/assets/closed.png"
        // console.log(icon)

        let pri = issue.priority === "high"
            ? "text-red-500 bg-red-200"
            : issue.priority === "medium"
            ? "text-yellow-500 bg-yellow-200"
            : "text-green-500 bg-green-200";







 

        // let lebal = issue.lebal === 
         const labelsHtml = issue.labels.map(label => {
            let labelColor = "bg-red-100 text-red-500 border-red-200"; // Default style
            let icon = "";

            // specific styles for specific labels
            if (label === "bug") {
                labelColor = "bg-red-100 text-red-500 border-red-200";
                icon = '<i class="fa-solid fa-bug"></i>';
            } else if (label === "help wanted") {
                labelColor = "bg-yellow-100 text-yellow-600 border-yellow-200";
                icon = '<i class="fa-regular fa-life-ring"></i>';
            }

            // Return a styled span for each label. 

            return `
                <span class="rounded-xl border text-xs text-center px-2 py-0.5 flex items-center gap-1 ${labelColor}">
                    ${icon} ${label}
                </span>
            `;
        }).join(""); // Join the array of strings into one single HTML string
        // -----------------------------





        div.className = `bg-white rounded shadow p-4 border-t-4 shadow-md ${borderColor}`
        div.innerHTML = `
        
        <div class="" onclick="openModal(${issue.id})">
            <div class= "flex justify-between mb-4">

            <img src="${icon}" class="h-6 w-6" alt="">

            <p class="rounded-xl border text-sm text-center w-[80px] h-6 ${pri}">${issue.priority.toUpperCase()}</p>
        </div>
        
        <h3 class="font-semibold" onclick="openModal(${issue.id})">${issue.title}</h3>

        <p class="text-sm text-gray-500 mt-2 mb-4">${issue.description}</p>


         <div class="flex gap-2 flex-wrap mb-4">
            ${labelsHtml}
        </div>
        <hr >

        <p class="text-sm mt-2 mb-2">${issue.author} </p>
        <p class="text-sm mt-2 mb-2">${issue.createdAt} </p>


        </div>

        `
        container.appendChild(div)
    })
}


function showAll(){
    currentTab = ""
    setActive(allBtn);

    disIssues(allIssues)


}

function showOpen(){

currentTab = "open"

setActive(openBtn)

const openIssues = allIssues.filter(issue => issue.status === "open")

disIssues(openIssues)

}


function showClosed(){

currentTab = "closed"

setActive(closedBtn)

const closedIssues = allIssues.filter(issue => issue.status === "closed")

disIssues(closedIssues)

}
function setActive(activeBtn){

const buttons = [allBtn, openBtn, closedBtn]

buttons.forEach(btn => {

btn.classList.remove("bg-blue-800","text-white")

btn.classList.add("border")

})

activeBtn.classList.remove("border")

activeBtn.classList.add("bg-blue-800","text-white")

}

// serch option

async function searchIssue(){
    
    const text = document.getElementById("searchInput").value

    
    if(text === ""){
        loadIssues();
        return
    }
    
    container.innerHTML=""
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)
    const data =await res.json()
    disIssues(data.data)
    

    document.getElementById("searchInput").addEventListener("keypress",function(press){
    if(press.key === "Enter"){
        searchIssue()
    }
})


}


async function openModal(issueId){
    const res =await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${issueId}`)






    

    const data =await res.json()
    const issueDetail = data.data
    console.log(issueDetail)
    console.log(data,"data")
    issueModal.showModal()
    modalTitle.innerText = issueDetail.title;
    
    modalAuthor.innerText = " . Open by " + issueDetail.author
    modalDate.innerText = ". " + issueDetail.updatedAt
    modalDescription.innerText = issueDetail.description
    modalAssignee.innerText = issueDetail.assignee
    

    


    let pri = issueDetail.priority === "high"
    ? "text-red-500 bg-red-200"
    : issueDetail.priority === "medium"
    ? "text-yellow-500 bg-yellow-200"
    : "text-green-500 bg-green-200";


    let statusC = issueDetail.status === "open"
    ? "bg-green-500 text-white"
    : "bg-purple-500 text-white"

    modalStatus.className = `text-sm mb-2 px-3 py-1 rounded-full ${statusC}`

    modalStatus.innerText = issueDetail.status
    modalPriority.className = `rounded-xl p-1 text-center text-[11px] ${pri}`
    modalPriority.innerText = issueDetail.priority.toUpperCase()



modalLabels.innerHTML = ""

issueDetail.labels.forEach(label => {

    let labelColor = "bg-red-100 text-red-500 border-red-200"
    let icon = ""

    if(label === "bug"){
        labelColor = "bg-red-100 text-red-500 border-red-200"
        icon = '<i class="fa-solid fa-bug"></i>'
    }
    else if(label === "help wanted"){
        labelColor = "bg-yellow-100 text-yellow-600 border-yellow-200"
        icon = '<i class="fa-regular fa-life-ring"></i>'
    }

    const span = document.createElement("span")

    span.className = `rounded-xl border text-xs px-2 py-1 flex items-center gap-1 mt-2 ${labelColor}`

    span.innerHTML = `${icon} ${label.toUpperCase()}`

    modalLabels.appendChild(span)

})

issueModal.showModal()

    

}