function checkUser() {
    var name = "Jury"
    let age = 37
    const isStudent = true

    if (age > 18) {
        console.log(name + " is an adult")
    } else {
        console.log(name + " is a child")
    }

    for (let i = 0; i < 10; i++) {
        console.log(i)
    }

    unused = true
    
    return
}

checkUser()