import axios from 'axios';



export function fetchEasy() {
  const request = axios.get('https://opentdb.com/api.php?amount=5&difficulty=easy');
  return{

  }
}
