/*==toggle icon navbar==*/
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




/*==scroll section active link==*/
let sections=document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height)
        {
            navlinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });
    /*=======sticky navbar======*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    /*==remove toggle icon and navbar when click navbar link(scroll)==*/
menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
reset:true,
distance:'80px',
duration:2000,
delay:200

});
ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-conent h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});


const roles = [
  'Computer Science Student',
  'Frontend Developer',
  'Android Developer',
  'Club Coordinator'
];
const typed=new Typed('.multiple-text',{
    strings:roles,
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
    preStringTyped: (arrayPos, self) => {
    const currentRole = roles[arrayPos];
    const article = /^[aeiou]/i.test(currentRole) ? 'an' : 'a';
    document.getElementById("article").innerText = article;
  }
  });
// === Contact Form Handling ===
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let data = new FormData(form);

    let response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert("✅ Thank you! Your message has been sent.");
      form.reset();
    } else {
      alert("❌ Oops! Something went wrong. Please try again.");
    }
  });
}
 document.querySelectorAll('.svc-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelector(btn.dataset.target).classList.add('active');
    });
  });
  document.querySelectorAll('[data-close]').forEach(el=>{
    el.addEventListener('click',()=>{
      el.closest('.svc-modal').classList.remove('active');
    });
  });
