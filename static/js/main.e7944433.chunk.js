(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),s=n.n(i),l=n(4),o=n.n(l),c=n(5),r=n(6),d=n(8),u=n(7),x=n(2),j=n.n(x),b=function(e){var t=e.generalInfo;return Object(a.jsxs)("div",{className:"general-info",children:[Object(a.jsxs)("div",{className:"name-header",children:[t.firstName," ",t.lastName]}),Object(a.jsxs)("div",{className:"info-header",children:[t.email," \u2022 ",t.phoneNumber]})]})},m=function(e){var t=e.totalEducation;return 0===t.length?Object(a.jsx)("div",{}):Object(a.jsxs)("div",{className:"education-info",children:[Object(a.jsx)("div",{className:"section-title",children:"Education"}),t.map((function(e){return Object(a.jsxs)("div",{className:"education-container",children:[Object(a.jsxs)("div",{className:"entry-title-container",children:[Object(a.jsx)("p",{className:"title-text",children:e.schoolName}),Object(a.jsxs)("p",{className:"date-title",children:[e.schoolDateFrom," ","\u2014"," ",e.schoolDateTo," "]})]}),Object(a.jsx)("p",{children:e.schoolDegree}),Object(a.jsxs)("p",{children:["Major:"," ",e.schoolMajor]}),Object(a.jsxs)("p",{children:["GPA:"," ",e.GPA]})]},e.index)}))]})},h=function(e){var t=e.totalSkills;return 0===t.length?Object(a.jsx)("div",{}):Object(a.jsxs)("div",{className:"skills-info",children:[Object(a.jsx)("div",{className:"section-title",children:"Skills"}),Object(a.jsx)("ul",{children:t.map((function(e){return Object(a.jsx)("li",{children:e.skillText},e.index)}))})]})},p=function(e){var t=e.totalExperience;return 0===t.length?Object(a.jsx)("div",{}):Object(a.jsxs)("div",{className:"experience-info",children:[Object(a.jsx)("div",{className:"section-title",children:"Experience"}),t.map((function(e){return Object(a.jsxs)("div",{className:"experience-container",children:[Object(a.jsxs)("div",{className:"entry-title-container",children:[Object(a.jsx)("p",{className:"title-text",children:e.companyName}),Object(a.jsxs)("p",{className:"date-title",children:[e.workDateFrom," ","\u2014"," ",e.workDateTo," "]})]}),Object(a.jsx)("p",{children:e.positionTitle}),Object(a.jsx)("ul",{children:e.tasks.map((function(e){return Object(a.jsx)("li",{children:e.taskText},e.index)}))})]},e.index)}))]})},f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=e.state,a=n.generalInfo,i=n.totalEducation,s=n.totalExperience,l=n.totalSkills,o=t.target.getAttribute("data-index");switch(t.target.className){case"general-info-input":a[t.target.id]=t.target.value,e.setState({generalInfo:a});break;case"education-info-input":i.find((function(e){return e.index===o}))[t.target.id]=t.target.value,e.setState({totalEducation:i});break;case"skills-info-input":l.find((function(e){return e.index===o})).skillText=t.target.value,e.setState({totalSkills:l});break;case"experience-info-input":s.find((function(e){return e.index===o}))[t.target.id]=t.target.value,e.setState({totalExperience:s});break;case"tasks-info-input":var c=s.find((function(e){return e.index===o})),r=t.target.getAttribute("data-task-index");c.tasks.find((function(e){return e.index===r})).taskText=t.target.value,e.setState({totalExperience:s})}},e.createAdditionalForm=function(t){var n=e.state,a=n.totalEducation,i=n.totalExperience,s=n.totalSkills,l=j()();switch(t.target.className){case"add-education-info":var o={index:l,schoolName:"",schoolDateFrom:"",schoolDateTo:"",schoolDegree:"",schoolMajor:"",GPA:""};e.setState({totalEducation:a.concat(o)});break;case"add-skill":var c={index:l,skillText:""};e.setState({totalSkills:s.concat(c)});break;case"add-experience-info":var r={index:j()(),companyName:"",positionTitle:"",workDateFrom:"",workDateTo:"",tasks:[{index:j()(),taskText:""}]};e.setState({totalExperience:i.concat(r)});break;case"add-task":var d={index:l,taskText:""},u=i.find((function(e){return e.index===t.target.getAttribute("data-index")}));u.tasks=u.tasks.concat(d),e.setState({totalExperience:i})}},e.deleteForm=function(t){var n=e.state,a=n.totalEducation,i=n.totalExperience,s=n.totalSkills;switch(t.target.classList[0]){case"delete-education-info":e.setState({totalEducation:a.filter((function(e){return e.index!==t.target.getAttribute("data-index")}))});break;case"delete-skills-info":e.setState({totalSkills:s.filter((function(e){return e.index!==t.target.getAttribute("data-index")}))});break;case"delete-experience-info":e.setState({totalExperience:i.filter((function(e){return e.index!==t.target.getAttribute("data-index")}))});break;case"delete-tasks-info":var l=i.find((function(e){return e.index===t.target.getAttribute("data-index")}));l.tasks=l.tasks.filter((function(e){return e.index!==t.target.getAttribute("data-task-index")})),e.setState({totalExperience:i})}},e.printResume=function(){window.print()},e.enterToSubmit=function(e){13===e.keyCode&&e.target.blur()},e.state={generalInfo:{firstName:"",lastName:"",email:"",phoneNumber:""},totalEducation:[{index:j()(),schoolName:"",schoolDateFrom:"",schoolDateTo:"",schoolDegree:"",schoolMajor:"",GPA:""}],totalSkills:[{index:j()(),skillText:""}],totalExperience:[{index:j()(),companyName:"",positionTitle:"",workDateFrom:"",workDateTo:"",tasks:[{index:j()(),taskText:""}]}]},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.generalInfo,i=t.totalEducation,s=t.totalSkills,l=t.totalExperience;return Object(a.jsxs)("div",{className:"main-container",children:[Object(a.jsx)("div",{className:"form-header",children:"Resume Maker"}),Object(a.jsxs)("div",{className:"sub-container",children:[Object(a.jsxs)("div",{className:"cv-form-container",children:[Object(a.jsx)("div",{className:"form-section-title",children:"General Information"}),Object(a.jsx)("br",{}),Object(a.jsxs)("form",{className:"general-info-form",onSubmit:this.onSubmitTask,children:[Object(a.jsxs)("label",{htmlFor:"firstName",children:["First Name",Object(a.jsx)("input",{onBlur:this.handleChange,defaultValue:n.firstName,type:"text",id:"firstName",className:"general-info-input",onKeyDown:this.enterToSubmit})]}),Object(a.jsxs)("label",{htmlFor:"lastName",children:["Last Name",Object(a.jsx)("input",{onBlur:this.handleChange,defaultValue:n.lastName,type:"text",id:"lastName",className:"general-info-input",onKeyDown:this.enterToSubmit})]}),Object(a.jsxs)("label",{htmlFor:"email",children:["Email Address",Object(a.jsx)("input",{onBlur:this.handleChange,defaultValue:n.email,type:"text",id:"email",className:"general-info-input",onKeyDown:this.enterToSubmit})]}),Object(a.jsxs)("label",{htmlFor:"phoneNumber",children:["Phone Number",Object(a.jsx)("input",{onBlur:this.handleChange,defaultValue:n.phoneNumber,type:"tel",id:"phoneNumber",className:"general-info-input",onKeyDown:this.enterToSubmit})]})]}),Object(a.jsx)("div",{className:"form-section-title",children:"Education"}),Object(a.jsx)("br",{}),i.map((function(t){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{className:"education-info-form",onSubmit:e.onSubmitTask,children:[Object(a.jsxs)("label",{htmlFor:"schoolName",children:["School Name",Object(a.jsx)("input",{onBlur:e.handleChange,defaultValue:t.schoolName,type:"text",id:"schoolName",className:"education-info-input","data-index":t.index,onKeyDown:e.enterToSubmit})]}),Object(a.jsxs)("label",{htmlFor:"schoolDateFrom",children:["Starting Date",Object(a.jsx)("input",{onBlur:e.handleChange,defaultValue:t.schoolDateFrom,type:"date",id:"schoolDateFrom",className:"education-info-input","data-index":t.index,onKeyDown:e.enterToSubmit})]}),Object(a.jsxs)("label",{htmlFor:"schoolDateTo",children:["Ending Date",Object(a.jsx)("input",{onBlur:e.handleChange,defaultValue:t.schoolDateTo,type:"date",id:"schoolDateTo",className:"education-info-input","data-index":t.index})]}),Object(a.jsxs)("label",{htmlFor:"schoolDegree",children:["Degree Achieved",Object(a.jsx)("input",{onBlur:e.handleChange,defaultValue:t.schoolDegree,type:"text",id:"schoolDegree",className:"education-info-input","data-index":t.index,onKeyDown:e.enterToSubmit})]}),Object(a.jsxs)("label",{htmlFor:"schoolMajor",children:["Study of Field",Object(a.jsx)("input",{onBlur:e.handleChange,defaultValue:t.schoolMajor,type:"text",id:"schoolMajor",className:"education-info-input","data-index":t.index,onKeyDown:e.enterToSubmit})]}),Object(a.jsxs)("label",{htmlFor:"GPA",children:["Grade Point Average",Object(a.jsx)("input",{onBlur:e.handleChange,defaultValue:t.GPA,type:"number",id:"GPA",className:"education-info-input","data-index":t.index,onKeyDown:e.enterToSubmit})]})]}),Object(a.jsx)("button",{type:"button","data-index":t.index,className:"delete-education-info",onClick:e.deleteForm,children:"Delete Education"})]},t.index)})),Object(a.jsx)("button",{type:"button",className:"add-education-info",onClick:this.createAdditionalForm,children:"Add New Education"}),Object(a.jsx)("div",{className:"form-section-title",children:"Skills"}),Object(a.jsx)("br",{}),Object(a.jsx)("form",{children:Object(a.jsx)("label",{htmlFor:"skills",children:s.map((function(t){return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{onBlur:e.handleChange,defaultValue:t.skillText,type:"text",id:"skills",className:"skills-info-input","data-index":t.index,onKeyDown:e.enterToSubmit}),Object(a.jsx)("button",{type:"button",id:"skill","data-index":t.index,className:"delete-skills-info delete-entry",onClick:e.deleteForm,children:"\u2014"})]},t.index)}))})}),Object(a.jsx)("button",{type:"button",className:"add-skill",onClick:this.createAdditionalForm,children:"Add New Skill"}),Object(a.jsx)("div",{className:"form-section-title",children:"Experience"}),Object(a.jsx)("br",{}),l.map((function(t){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{className:"experience-info-form",onSubmit:e.onSubmitTask,children:[Object(a.jsxs)("label",{htmlFor:"companyName",children:["Company Name",Object(a.jsx)("input",{onBlur:e.handleChange,defaultValue:t.companyName,type:"text",id:"companyName",className:"experience-info-input","data-index":t.index,onKeyDown:e.enterToSubmit})]}),Object(a.jsxs)("label",{htmlFor:"workDateFrom",children:["Starting Date",Object(a.jsx)("input",{onBlur:e.handleChange,defaultValue:t.workDateFrom,type:"date",id:"workDateFrom",className:"experience-info-input","data-index":t.index,onKeyDown:e.enterToSubmit})]}),Object(a.jsxs)("label",{htmlFor:"workDateTo",children:["Ending Date",Object(a.jsx)("input",{onBlur:e.handleChange,defaultValue:t.workDateTo,type:"date",id:"workDateTo",className:"experience-info-input","data-index":t.index,onKeyDown:e.enterToSubmit})]}),Object(a.jsxs)("label",{htmlFor:"positionTitle",children:["Position Title",Object(a.jsx)("input",{onBlur:e.handleChange,defaultValue:t.positionTitle,type:"text",id:"positionTitle",className:"experience-info-input","data-index":t.index,onKeyDown:e.enterToSubmit})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("label",{htmlFor:"tasks",children:["Tasks",t.tasks.map((function(n){return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{onBlur:e.handleChange,defaultValue:n.taskText,type:"text",id:"tasks",className:"tasks-info-input","data-index":t.index,"data-task-index":n.index,onKeyDown:e.enterToSubmit}),Object(a.jsx)("button",{type:"button",id:"tasks","data-index":t.index,"data-task-index":n.index,className:"delete-tasks-info delete-entry",onClick:e.deleteForm,children:"\u2014"})]},n.index)}))]})})]}),Object(a.jsx)("button",{type:"button","data-index":t.index,className:"add-task",onClick:e.createAdditionalForm,children:"Add New Task"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"button","data-index":t.index,className:"delete-experience-info",onClick:e.deleteForm,children:"Delete Experience"})]},t.index)})),Object(a.jsx)("button",{type:"button",className:"add-experience-info",onClick:this.createAdditionalForm,children:"Add New Experience"})]}),Object(a.jsxs)("div",{className:"resume-container",children:[Object(a.jsx)(b,{generalInfo:n}),Object(a.jsx)(m,{totalEducation:i}),Object(a.jsx)(h,{totalSkills:s}),Object(a.jsx)(p,{totalExperience:l}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"button",className:"print-button",onClick:this.printResume,children:"Print Resume"})})]})]})]})}}]),n}(i.Component),O=(n(15),function(){return Object(a.jsx)(f,{})});o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e7944433.chunk.js.map