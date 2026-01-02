
// slidebar
const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const arrow = document.querySelector(".arrow");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  arrow.classList.toggle("rotate");
});

//notice bord
const closeBtn = document.getElementById("closeBtn");
      const board = document.getElementById("noticeBoard");

      closeBtn.addEventListener("click", function () {
        board.style.display = "none";
      });
  
// project section
const projectData = {
  task_title:"Explore The Word of Management",
  task_Description:"As a project manager you play an important role in a liding a project through iniation, Planning, excution, monitoring,controling and completion. How do you manage each and every step of your life.",

assets: [
  {
    asset_title:"Technical Project Management ",
    asset_Description:" Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
    asset_content:"https://www.youtube.com/embed/TiMRwri1xJ8",
    asset_content_type:"video"
  },

  {
    asset_title:"ThreadBuild ",
    asset_Description:" Watch the video and threadbuild, and jot out key threads while watching the video"
  },
  {
   asset_title:"Structure your Pointers",
   asset_Description:"Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world."
  },
  {
    asset_title:"4SA Method",
    asset_Description:"To explore more read more",
    asset_content:"https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878"
  }
],
}
// Title
document.getElementById("taskTitle").innerText=
projectData.task_title;

document.getElementById("taskDesc").innerText=
projectData.task_Description;

//video

document.getElementById("videoTitle").innerText=
projectData.assets[0].asset_title;

document.getElementById("videoDesc").innerText=
projectData.assets[0].asset_Description;

document.getElementById("video").src=
projectData.assets[0].asset_content;

//Thread
document.getElementById("threadTitle").innerText=
projectData.assets[1].asset_title;

document.getElementById("threadDesc").innerText=
projectData.assets[1].asset_Description;

//Artical input

document.getElementById("articalTitle").innerText=
projectData.assets[2].asset_title;

document.getElementById("articalDesc").innerText=
projectData.assets[2].asset_Description;

//Artical Link

document.getElementById("linkTitle").innerText=
projectData.assets[3].asset_title;

document.getElementById("linkDesc").innerText=
projectData.assets[3].asset_Description;

document.getElementById("linkUrl").href=
projectData.assets[3].asset_content;




