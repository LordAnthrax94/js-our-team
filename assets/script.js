const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

for(let key of teamMembers){
  const {name, role, email, img} = key ;
  let cardMember = `<div class="card-header">
  <div class="card" style="width: 20rem;">
    <img src="./assets/${img}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${name}</p>
      <p>${role}</p>
      <p>${email}</p>
    </div>
  </div>
</div>`;
console.log(cardMember);
document.querySelector('.colMembers').innerHTML += cardMember;
}









// //function insCard(cardMember){
// //scomposizione delle proprietà dell'array di oggetti
//   const {name, role, email, img} = teamMembers;
// //composizione della card con template literal per ricollegare le proprietà dell'oggetto sulla carta
// //   return cardMember = `"<div class="card-header">
// //   <div class="card" style="width: 18rem;">
// //     <img src="./assets/${img}" class="card-img-top" alt="...">
// //     <div class="card-body">
// //       <p class="card-text">${name}</p>
// //       <p>${role}</p>
// //       <p>${email}</p>
// //     </div>
// //   </div>
// // </div>`;
// //}

// // const cardTry = insCard(cardMember);

// // console.log(cardTry);


// function stampCard(memberGroup){

//   for(let key of teamMembers){
//     memberGroup += cardMember
//   }

//   return document.querySelector('.row').innerHTML = cardMember;
// }


// console.log();
