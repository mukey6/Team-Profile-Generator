const prompts = {

    employee :[
        {
            type:"list",
            name:"role",
            message: "what is the role?",
            choices:['manager', 'engineer', 'intern']
        },
       {
           type: "input",
           name: "name",
           message:(answer)=> `What is the ${answer.role} name?`,
         },
         {
           type: "input",
           name: "email",
           message:(answer)=> `What is the ${answer.role} Email?`,
         },
         {
           type: "input",
           name: "employeeId",
           message:(answer)=> `What is the ${answer.role} employeeId?`,
         },
         {
           type: "input",
           name: "office",
           message:(answer)=> `What is the ${answer.role} office number?`,
           when: (answer)=> answer.role === 'manager'
         },
         {
           type: "input",
           name: "github",
           message:(answer)=> `What is the ${answer.role} github?`,
           when: (answer)=> answer.role === 'engineer'
         },
         {
           type: "input",
           name: "school",
           message:(answer)=> `What is the ${answer.role} school?`,
           when: (answer)=> answer.role === 'intern'
         }
   ],
   continue : [
       {
           type: 'confirm',
           name:'continue',
           message:'do you want to add more?',
           
       }
   ]
}



module.exports = prompts