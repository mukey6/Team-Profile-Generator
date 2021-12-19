const Engineer = require('../lib/Engineer')

describe('an Engineer', () =>{
  
const engineer = new Engineer('Dave', 'dave@gmail.com', '123456','mukey6')

test('will have github usernmae of mukey', () =>{
expect(engineer.githubUsername).toBe('mukey6')
})

test('getRole() should return engineer', ()=>{

    expect(engineer.getRole()).toEqual('engineer')
})

test('githubUsername() should return mukey6', ()=>{

    expect(engineer.getGithubUsername()).toEqual('mukey6')
})
})

