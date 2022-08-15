let input = document.getElementsByTagName("input");
let form_input = document.querySelectorAll(".outline-input");
let form_outline = document.querySelectorAll(".form-outline");

for (let index = 0; index < input.length; index++) {
  const el = input[index];
  if (el.value.length > 0) {
    const act = document.querySelector(`label[for="${el.name}"]`);
    act.classList.add("active_label");
    el.style.color = "#EF6532";
  }
  el.addEventListener("focus", function (e) {
    const act = document.querySelector(`label[for="${e.target.name}"]`);
    el.style.color = "#EF6532";
    act.style.color = "#EF6532";
    form_outline[index].classList.add('active');
  });
  
  el.addEventListener("focusout", function (e) {
    const act = document.querySelector(`label[for="${e.target.name}"]`);
    if (e.target.value.length > 0) {
      el.style.color = "#B4B4B4";
      act.classList.add('coba');
      form_outline[index].classList.remove('active');
    } else {
      form_outline[index].classList.remove('active');
      act.classList.remove('coba');
      el.style.color = "black";
    }
    act.style.color = "#B4B4B4";
  });
}

let passwordBtn = document.querySelectorAll(".icon");
let passwordBtnIcon = document.querySelectorAll(".icon-text");

for (let index = 0; index < passwordBtn.length; index++) {
  console.log(passwordBtn);
    const element = passwordBtn[index];
    const elementIcon = passwordBtnIcon[index];
    element.addEventListener("click", function (e) {
        let name = element.getAttribute("for");
        let type = document.querySelector(`input[name="${name}"]`).getAttribute("type");
      
        if (type == "password") {
          document.querySelector(`input[name="${name}"]`).setAttribute("type", "text");
          elementIcon.classList.remove("fa-eye-slash");
          elementIcon.classList.add("fa-eye");
      } else {
          document.querySelector(`input[name="${name}"]`).setAttribute("type", "password");
          elementIcon.classList.add("fa-eye-slash");
          elementIcon.classList.remove("fa-eye");
        }
      });
}
