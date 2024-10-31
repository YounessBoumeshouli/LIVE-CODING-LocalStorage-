let nom = document.getElementById("messageInputNom")
let prenom = document.getElementById("messageInputPrenom")
let email = document.getElementById("messageInputEmail")
let genre = document.getElementById("messageInputGenre")
let form  = document.getElementById("form")


let Membres = JSON.parse(localStorage.getItem("Membre")) || [];
let list = document.getElementById("membreList")
console.log("javascript it's working")
form.addEventListener("submit",function(){

    let Membre1 = {
        nom : nom.value,
        prenom : prenom.value,
        email : email.value,
        genre : genre.value,
        id : Date.now()
    }
    Membres.push(Membre1);
    localStorage.setItem('Membre', JSON.stringify(Membres));
    showdata()

})

function showdata(){
    list.innerHTML = "";
    Membres.forEach(membre => {
        list.innerHTML += `
        
        <div>
            <p>le nom de membre ${membre.nom}</p>
              <p>le prenom de membre ${membre.prenom}</p>
                <p>le email de membre ${membre.email}</p>
                  <p>le genre de membre ${membre.genre}</p>
                  
                    <button onclick="edit(${membre.id})">edit</button>
                     <button onclick="deleteMembre(${membre.id})">delete</button>
        </div>
        
        `
    });
}


function edit(idEdit){
    Membres.forEach(m => {
        if (m.id == idEdit) {
            nom.value = m.nom
            prenom.value = m.prenom
            email.value =m.email
            genre.value =m.genre
        }
    });
    Membres = Membres.filter(m => m.id !== idEdit);
  

}
function deleteMembre(idDelete){
    Membres = Membres.filter(m => m.id !== idDelete);
    localStorage.setItem('Membre', JSON.stringify(Membres));
    location.reload();
}

showdata()
