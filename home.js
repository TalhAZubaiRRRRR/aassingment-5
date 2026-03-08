
let allIssues = [];
let currentTab = ""


const container = document.getElementById("issuesContainer")
const count = document.getElementById("issueCount")

const allBtn = document.getElementById("allBtn")
const openBtn = document.getElementById("openBtn")
const closedBtn = document.getElementById("closedBtn")

const loadSpin = document.getElementById("loading-spinner")

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
        console.log(issue)
        const div = document.createElement("div")
        let borderColor = issue.status === "open"
            ? "border-green-600"
            : "border-purple-600"

        let icon = issue.status === "open"
            ? "./B13-A5-Github-Issue-Tracker/assets/open.png"
            : "./B13-A5-Github-Issue-Tracker/assets/closed.png"
        console.log(icon)

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





        div.className = `bg-white rounded shadow p-4 border-t-4 ${borderColor}`
        div.innerHTML = `
        
        <div class= "flex justify-between mb-4">

            <img src="${icon}" class="h-6 w-6" alt="">

            <p class="rounded-xl border text-sm text-center w-[80px] h-6 ${pri}">${issue.priority.toUpperCase()}</p>
        </div>
        
        <h3 class="font-semibold">${issue.title}</h3>

        <p class="text-sm text-gray-500 mt-2 mb-4">${issue.description}</p>


         <div class="flex gap-2 flex-wrap mb-4">
            ${labelsHtml}
        </div>
        <hr >

        <p class="text-sm mt-2 mb-2">${issue.author} </p>
        <p class="text-sm mt-2 mb-2">${issue.createdAt} </p>



        `
        container.appendChild(div)
    })
}

