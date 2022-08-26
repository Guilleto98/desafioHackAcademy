const API_URL = 'https://reqres.in/api/users';



fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((users)=>{
        const tpl = users.data.map((users) => devPj(users.avatar, users.first_name))

        document.getElementById('app').innerHTML = tpl.join('')

})
  
function devPj(avatar,first_name){
      return `
      <div class="cart">
          <img class='img-cart' src = '${avatar}'></img>
          <p>${first_name}<p>
      </div>
      `
} 

let numero = 7

const getUser = async () =>{
  let API = 'https://reqres.in/api/users/'+numero
  const response = await  fetch(API)
  const data = await response.json()
  .then(({data})=>{
        document.getElementById('app').innerHTML += devPj(data.avatar, data.first_name)
        console.log(`Personaje ${numero} agregado`)
        numero++
  })
  .catch(()=> alert('No se encontraron nuevos personajes'))
  .finally(()=>{
    console.log(`Buen trabajo!`)
  })
} 
