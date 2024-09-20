function project(input) {

  let name = (input[0]);
  let numberOfProjects = Number(input[1]);
  let hourWork = numberOfProjects * 3;

  console.log(`The architect ${name} will need ${hourWork} hours to complete ${numberOfProjects} project/s.`)
}
