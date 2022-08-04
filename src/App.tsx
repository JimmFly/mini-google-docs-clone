
import React from 'react'






function App() {

interface User{
  admin:boolean
}
interface DB {
  filterUsers(filter:(this:User)=>boolean):User[]
}

const db:DB = {
  filterUsers:(filter:(this:User)=>boolean)=>{
    let user1 ={
      admin:true
    }
    let user2 ={
      admin:false
    }
    return [user1,user2]
  }
}
const admins=db.filterUsers(function(this:User){
  return this.admin
})
console.log(admins);

  return (
  <div>
    this is it 
    
  </div>
  )
}

export default App;
