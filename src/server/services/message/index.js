import axios from "axios";


const msg=  function message() {
axios.post('https://textbelt.com/text', {
  phone: '+9779702467564',  
  message: 'Hello from Node.js!',
  key: 'textbelt'           
})
.then(response => console.log(response.data))
.catch(err => console.error(err));
}
export default msg;