(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{b:()=>u});const t=document.getElementById("space");function n(e){const n=document.createElement("div");n.classList.add("form-container"),n.id="formContainer";const o=document.createElement("form");o.id="newTaskForm",o.classList.add("popup-form","needs-validation"),o.setAttribute("novalidate","");const l=document.createElement("label");l.textContent="Title:",l.className="form-label",l.htmlFor="projectTitle";const s=document.createElement("input");s.type="text",s.className="form-control",s.id="projectTitle",s.name="title",s.required=!0,s.style.height="50px";const r=document.createElement("label");r.textContent="Description:",r.className="form-label",r.htmlFor="projectDescription";const d=document.createElement("textarea");d.className="form-control",d.id="projectDescription",d.name="description",d.maxLength=40,d.required=!0;const i=document.createElement("label");i.textContent="Due Date:",i.className="form-label",i.htmlFor="projectDueDate";const m=document.createElement("input");m.type="date",m.className="form-control",m.id="projectDueDate",m.name="dueDate",m.style.height="50px",m.required=!0;const p=document.createElement("label");p.textContent="Priority:",p.className="form-label",p.htmlFor="projectPriority";const u=document.createElement("select");u.className="form-select",u.id="projectPriority",u.name="priority",u.required=!0,u.style.height="50px",["Low","Medium","High"].forEach((e=>{const t=document.createElement("option");t.value=e.toLowerCase(),t.textContent=e,u.appendChild(t)}));const y=document.createElement("button");y.type="submit",y.textContent="Create Project",y.className="btn btn-success mt-3";const h=document.createElement("button");return h.type="button",h.textContent="Cancel",h.className="btn btn-danger mt-3 ms-2",h.addEventListener("click",(()=>{n.style.display="none"})),o.appendChild(l),o.appendChild(s),o.appendChild(r),o.appendChild(d),o.appendChild(i),o.appendChild(m),o.appendChild(p),o.appendChild(u),o.appendChild(y),o.appendChild(h),n.appendChild(o),o.addEventListener("submit",(t=>{if(t.preventDefault(),!m.value)return void m.classList.add("is-invalid");m.classList.remove("is-invalid");const o=s.value,l=d.value,r=m.value,i=u.value,p=new a(o,l,function(e){const[t,n,o]=e.split("-");return`${new Date(t,n-1,o).toLocaleDateString("en-US",{weekday:"long"})}, ${o}/${n}/${t}`}(r),i,!1);e.push(p),c.prototype.displayer(e),n.style.display="none"})),t.append(n),n}const o=document.getElementById("space");class a{constructor(e,t,n,o,a=!1){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.isCompleted=a}completedFunc(e){return this.isCompleted=e.checked,console.log(this.isCompleted),this.isCompleted}statusChange(e,t){const n=JSON.parse(localStorage.getItem("projects"))||[];e.isCompleted=t,localStorage.setItem("projects",JSON.stringify(n)),u().saveProjects()}deleteTask(e,t){const n=confirm("Are you sure you want to delete this Task?"),o=JSON.parse(localStorage.getItem("projects"))||[];n&&(e.splice(t,1),localStorage.setItem("projects",JSON.stringify(o)),document.querySelector(`.card.task-card[data-index="${t}"]`).remove())}editTask(e,t){const a=n([]);o.appendChild(a);const l=a.querySelector("form"),s=l.querySelector("#projectTitle"),r=l.querySelector("#projectDescription"),d=l.querySelector("#projectDueDate"),i=l.querySelector("#projectPriority");s.value=e.title,r.value=e.description,d.value=this.formatDateToDMY(e.dueDate),i.value=e.priority,l.addEventListener("submit",(n=>{n.preventDefault(),e.title=s.value,e.description=r.value,d.value&&(e.dueDate=this.formatDateToDMY(d.value)),e.priority=i.value;const o=JSON.parse(localStorage.getItem("projects"))||[];localStorage.setItem("projects",JSON.stringify(o)),u().saveProjects(),c.prototype.displayer(t),a.style.display="none"})),a.style.display="block"}formatDateToDMY(e){const[t,n,o]=e.split("-");return`${new Date(t,n-1,o).toLocaleDateString("en-US",{weekday:"long"})}, ${o}/${n}/${t}`}}function l(e){const t=document.getElementById("space");e.forEach(((n,o)=>{const l=n.title,s=n.description,c=n.dueDate,r=n.priority,d=n.isCompleted,i=document.createElement("div");i.className="card task-card mb-3",i.setAttribute("data-index",o);const m=document.createElement("div");m.className="row no-gutters";const p=document.createElement("div");switch(p.className="priority-bar",r){case"low":p.style.backgroundColor="#28a745";break;case"medium":p.style.backgroundColor="#ffc107";break;case"high":p.style.backgroundColor="#dc3545";break;default:p.style.backgroundColor="#6c757d"}const u=document.createElement("div");u.className="col-md-2 w-100 d-flex align-items-center justify-content-center text-white position-relative",u.id="titleContainer";const y=document.createElement("h2");y.className="card-title",y.textContent=l,u.style.backgroundColor=p.style.backgroundColor,u.appendChild(p),u.appendChild(y);const h=document.createElement("div");h.className="label-container d-flex justify-content-between";const g=document.createElement("span");g.className="label",g.innerHTML='<small class="text-muted"><i class="fa-solid fa-note-sticky"></i> Description</small>',g.id="descriptionLabelTask";const E=document.createElement("span");E.className="label",E.innerHTML='<small class="text-muted"><i class="fas fa-calendar-day"></i> Due Date</small>';const C=document.createElement("span");C.className="label",C.innerHTML='<small class="text-muted"><i class="fas fa-flag"></i> Priority</small>',h.appendChild(g),h.appendChild(E),h.appendChild(C),u.appendChild(h);const f=document.createElement("div");f.className="element-container d-flex align-items-center",f.id="elementContainer";const b=document.createElement("span");b.className="col-8 card-text description",b.textContent=s,b.id="carddescription";const k=document.createElement("button");k.classList.add("btn","btn-outline-primary","view-button","d-lg-none","d-md-none"),k.id="viewDescription",k.innerHTML='<i class="fa-solid fa-eye"></i>';let j=!0;k.addEventListener("click",(()=>{b.classList.toggle("d-none"),j?(k.innerHTML='<i class="fa-solid fa-eye"></i>',b.style.display="none",N.style.display="flex",v.style.display="flex"):(b.style.display="flex",N.style.display="none",v.style.display="none",k.innerHTML='<i class="fa-solid fa-eye-slash"></i>'),j=!j}));const v=document.createElement("p");v.className="card-text priority",v.innerHTML=`<small class="text-muted"><i class="fas fa-flag"></i> ${r}</small>`;const N=document.createElement("p");N.className="card-text",N.innerHTML=`<small class="text-muted">\n    <i class="fas fa-calendar-day"></i> ${c}</small>`,N.setAttribute("required",!0);const T=document.createElement("div");T.className="card-body",T.appendChild(f);const x=document.createElement("div");x.className="d-flex align-items-center p-2",x.id="buttonContainer";const P=document.createElement("div");P.style.margin="10px";const L=document.createElement("button");L.className="btn btn-warning btn-sm m-2",L.id="editBtnOfTask",L.innerHTML='<i class="fas fa-edit"></i> Edit';const D=document.createElement("button");D.className="btn btn-danger btn-sm",D.id="deletebtnOfTask",D.innerHTML='<i class="fas fa-trash"></i> Delete',x.style.padding="10px";const w=document.createElement("span");w.className="checkbox-span",w.style.margin="10px",w.id="checkBoxSpanOfTask";const S=document.createElement("input");S.type="checkbox",S.className="form-check-input form-check-input-lg",S.ariaLabel="Task Complete";const M=document.createElement("span");M.className="status-text",f.appendChild(b),f.appendChild(k),f.appendChild(N),f.appendChild(v),w.appendChild(S),w.appendChild(M),x.appendChild(w),P.appendChild(L),P.appendChild(D),x.appendChild(P),m.appendChild(u),m.appendChild(T),m.appendChild(x),i.appendChild(m),t.appendChild(i),L.addEventListener("click",(()=>{a.prototype.editTask(n,e)})),d?(S.checked=!0,M.textContent="Completed",w.style.backgroundColor="green",m.style.backgroundColor="lightgrey",S.style.color="white",w.style.padding="15px"):(S.checked=!1,M.textContent="Incomplete",w.style.backgroundColor="lightgrey",w.style.padding="15px",m.style.backgroundColor="white"),S.addEventListener("change",(()=>{S.checked?(M.textContent="Completed",w.style.backgroundColor="green",m.style.backgroundColor="lightgrey",S.style.color="white",w.style.padding="15px",a.prototype.statusChange(n,!0)):(M.textContent="Incomplete",w.style.backgroundColor="lightgrey",w.style.padding="15px",m.style.backgroundColor="white",a.prototype.statusChange(n,!1))})),D.addEventListener("click",(()=>{a.prototype.deleteTask(e,o,n)}))}))}const s=document.getElementById("space");document.getElementById("title");class c{constructor(e,t,n){this.id=e,this.name=t,this.color=n,this.project=[]}simpleDisplayer(e){l(e)}displayer(e){s.innerHTML="",l(e),this.dom(),n(e),this.newTaskFormBtn(e)}newTaskFormBtn(e){document.getElementById("addTaskButton").addEventListener("click",(()=>{const t=n(e);s.append(t),t.style.display="block"}))}dom(){const e=document.createElement("button");e.textContent="Add Task",e.id="addTaskButton",e.className="btn btn-secondary",e.style.width="100%",s.append(e)}}document.getElementById("taskSpace");const r=document.getElementById("space"),d=function(){const e=document.createElement("div");e.className="modal";const t=document.createElement("div");t.className="modal-content";const n=document.createElement("div");n.className="modal-header";const o=document.createElement("h2");o.textContent="New Project",n.appendChild(o);const a=document.createElement("span");a.className="close",a.textContent="×",n.appendChild(a);const l=document.createElement("div");l.className="modal-body";const s=document.createElement("label");s.textContent="Project Name:";const c=document.createElement("input");c.type="text",c.id="projectName",c.className="form-control",l.appendChild(s),l.appendChild(c);const d=document.createElement("label");d.textContent="Color:";const i=document.createElement("select");i.id="projectColor",i.className="form-control",["None","Red","Green","Blue","Pink","Yellow","Brown"].forEach((e=>{const t=document.createElement("option");t.textContent=e,i.appendChild(t)})),l.appendChild(d),l.appendChild(i);const m=document.createElement("button");m.className="btn btn-primary mt-2",m.id="saveBtnNewProject",m.textContent="Create Folder",l.appendChild(m);const p=document.createElement("button");function u(){e.style.display="none"}return p.type="button",p.textContent="Cancel",p.className="btn btn-danger mt-2 ms-2",p.addEventListener("click",(()=>{e.style.display="none"})),l.appendChild(p),t.appendChild(n),t.appendChild(l),e.appendChild(t),a.addEventListener("click",(()=>{e.style.display="none"})),m.addEventListener("click",(()=>{c.value,i.value,u()})),{openModal:function(){e.style.display="block",r.append(e),c.value="",i.selectedIndex=0},closeModal:u,saveButton:m,nameInput:c,colorSelect:i}}();document.getElementById("taskSpace");const i=document.getElementById("space"),m=document.getElementById("title"),p=new class{constructor(){this.allProjectFolder=[],this.loadProjects(),0===this.allProjectFolder.length&&this.userData()}userData(){const e=document.getElementById("nameForm");e.style.display="block";const t=JSON.parse(localStorage.getItem("userName"))||"User";localStorage.setItem("userName",JSON.stringify(t)),document.getElementById("navUserName"),e.addEventListener("submit",(t=>{t.preventDefault();const n=document.getElementById("userName").value;n?(localStorage.setItem("userName",JSON.stringify(n)),console.log("Name saved:",n),this.addNewProject(0,"Default","black"),e.style.display="none",this.displayer()):(console.log("User name is empty."),document.getElementById("errorMessage").textContent="Name cannot be empty.")}))}homePage(){i.style.backgroundColor="#cedbe9",m.innerHTML="Home",this.displayer()}allTodos(){i.innerHTML="",m.innerText="All Todos",this.allProjectFolder.forEach((e=>{const t=e.project;""===t&&(i.innerHTML="<h4>No Task Found</h4>"),c.prototype.simpleDisplayer(t)}))}completedTask(){i.innerHTML="",m.innerText="Completed Tasks";let e=!1;this.allProjectFolder.forEach((t=>{t.project.forEach((t=>{t.isCompleted&&(e=!0,c.prototype.simpleDisplayer([t]))}))})),e||(i.innerHTML="<h4>No Completed Task Found</h4>")}pendingTodo(){i.innerHTML="",m.innerText="Pending Tasks";const e=new Date,t=[];this.allProjectFolder.forEach((n=>{n.project.forEach((n=>{const o=new Date(n.dueDate);!1===n.isCompleted&&e<=o&&t.push(n)}))})),t.length>0?t.forEach((e=>{c.prototype.simpleDisplayer([e])})):i.innerHTML="<h4>No Pending Tasks Found</h4>"}todayTodos(){const e=(new Date).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"});i.innerHTML="",m.innerText="Today Tasks",this.allProjectFolder.forEach((t=>{t.project.forEach((t=>{t.dueDate===e&&c.prototype.simpleDisplayer([t])}))}))}missedTasks(){i.innerHTML="",m.innerText="Missed Tasks";const e=new Date,t=[];this.allProjectFolder.forEach((n=>{n.project.forEach((n=>{const o=new Date(n.dueDate);!1===n.isCompleted&&e>o&&(t.push(n),m.style.backgroundColor="red")}))})),t.length>0?t.forEach((e=>{c.prototype.simpleDisplayer([e])})):i.innerHTML="<h4>No Missed Tasks Found</h4>"}loadProjects(){this.allProjectFolder=function(){const e=localStorage.getItem("projects");return e?JSON.parse(e):[]}()}saveProjects(){var e;e=this.allProjectFolder,localStorage.setItem("projects",JSON.stringify(e))}addNewProject(e,t,n){const o=new c(e,t,n);return this.allProjectFolder.push(o),this.saveProjects(),o}deleteProject(e){confirm("Are you sure you want to delete this Task?")&&(this.allProjectFolder.splice(e,1),this.saveProjects(),this.projectPageandSideBarDOM(this.allProjectFolder),this.newProjectBtn())}displayer(){i.innerHTML="",m.innerHTML="Home",navUserName.textContent=JSON.parse(localStorage.getItem("userName")),i.style.backgroundColor="",this.projectPageandSideBarDOM(this.allProjectFolder),this.newProjectBtn(),this.newProjectForm(this.allProjectFolder),this.footer()}newProjectBtn(){const e=document.createElement("button");e.textContent="Add Project",e.id="addProject",e.className="btn btn-primary createNewProject",e.style.width="100%",i.append(e),document.querySelectorAll(".createNewProject").forEach((e=>{e.addEventListener("click",(()=>{d.openModal()}))}))}newProjectForm(e){d.saveButton.addEventListener("click",(()=>{const t=d.nameInput.value,n=d.colorSelect.value,o=this.allProjectFolder.length+1;this.allProjectFolder.find((e=>e.name===t))?alert("A project with this name already exists."):(this.addNewProject(o,t,n),this.projectPageandSideBarDOM(e),d.closeModal(),this.newProjectBtn())}))}getSelectedProjectArray(e){return c.prototype.simpleDisplayer(e),this.saveProjects(),e}refresher(e){c.prototype.simpleDisplayer(e),this.saveProjects()}projectPageandSideBarDOM(e){const t=document.getElementById("newProjectUL");t.innerHTML="",i.innerHTML="",m.innerText="My Projects",e.forEach(((e,n)=>{const o=document.createElement("li");o.className="list-group-item",o.id="projectFolder",o.setAttribute("data-index",n);const a=document.createElement("i");a.className="fa-solid fa-folder project-icon",a.style.color=e.color;const l=document.createElement("span");l.className="project-name",l.textContent=e.name,o.append(a),o.append(l),o.style.backgroundColor="White",o.addEventListener("click",(()=>{let t=e.project;c.prototype.displayer(t),m.innerText=e.name})),t.append(o);const s=document.createElement("li");s.className="project-card",s.setAttribute("data-index",n);const r=document.createElement("i");r.className="fa-solid fa-folder project-card-icon",r.style.color=e.color,s.append(r);const d=document.createElement("span");d.className="project-card-title",d.innerText=e.name,s.append(d);const p=document.createElement("i");p.className="fa-solid fa-trash delete-icon",p.id="deleteProject",p.style.padding="5px",p.addEventListener("click",(e=>{e.stopPropagation();const t=parseInt(s.getAttribute("data-index"));this.deleteProject(t)})),s.appendChild(p),i.append(s),s.addEventListener("click",(()=>{let t=e.project;c.prototype.displayer(t),m.innerText=e.name}))}))}footer(){const e=document.createElement("footer");e.innerHTML="&copy; 2024 by Mo_Mansur ";const t=document.createElement("a");t.href="https://github.com/MoMansur",t.className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover";const n=document.createTextNode(" Mo_Mansur GitHub");t.appendChild(n),e.appendChild(t);const o=document.createTextNode(". All rights reserved.");e.appendChild(o),e.style.textAlign="center",i.appendChild(e)}};p.allProjectFolder.length>=1&&p.displayer();const u=()=>p,y=document.getElementById("taskSpace"),h=document.querySelectorAll(".allTodos"),g=document.querySelectorAll(".TodayTodos"),E=document.querySelectorAll(".CompletedTodo"),C=document.querySelectorAll(".UpcomingTodo"),f=document.querySelectorAll(".MissedTodo"),b=document.querySelectorAll(".homePage"),k=document.getElementById("sidebarContainer"),j=document.getElementById("sidebarIcon"),v=document.getElementById("mainSpaceCol"),N=document.getElementById("navMenuRow");b.forEach((e=>e.addEventListener("click",(()=>{p.homePage(),p.saveProjects()})))),h.forEach((e=>e.addEventListener("click",(()=>{p.allTodos(),p.saveProjects()})))),g.forEach((e=>e.addEventListener("click",(()=>{console.log("Today item clicked"),p.todayTodos(),p.saveProjects()})))),E.forEach((e=>e.addEventListener("click",(()=>{p.completedTask(),p.saveProjects()})))),C.forEach((e=>e.addEventListener("click",(()=>{p.pendingTodo()})))),f.forEach((e=>e.addEventListener("click",(()=>{p.missedTasks()}))));let T=!0;j.addEventListener("click",(()=>{T?(k.style.display="none",v.className="col-12",N.style.display="block",y.style.padding="10px"):(k.style.display="block",v.className="col-10",N.style.display="none"),T=!T}))})();
//# sourceMappingURL=main.js.map