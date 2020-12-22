{
    arrei = ['Fernando', 'Carla', 'João', 'Sabrina', 'Raquel', 'Ana', 'Daniel'];

    console.log(arrei.splice(2, 3))
    console.log(arrei)
}

{
    arrei = ['Fernando', 'Carla', 'João', 'Sabrina', 'Raquel', 'Ana', 'Daniel'];

    console.log(arrei.splice(4, 1))
    console.log(arrei)
}

{
    arrei = ['Fernando', 'Carla', 'João', 'Sabrina', 'Raquel', 'Ana', 'Daniel'];

    console.log(arrei.splice(2, 3, 'nome1', 'nome2'))
    console.log(arrei)
}
//.POP()
{
    arrei = ['Fernando', 'Carla', 'João', 'Sabrina', 'Raquel', 'Ana', 'Daniel'];

    console.log(arrei.splice( -1, 1))
    console.log(arrei)
}

//.PUSH()
{
    arrei = ['Fernando', 'Carla', 'João', 'Sabrina', 'Raquel', 'Ana', 'Daniel'];

    console.log(arrei.splice( Number.MAX_VALUE, 1, 'HUGO'))
    console.log(arrei)
}

//.UNSHIFT()
{
    arrei = ['Fernando', 'Carla', 'João', 'Sabrina', 'Raquel', 'Ana', 'Daniel'];

    console.log(arrei.splice(0, 0, 'HUGO'))
    console.log(arrei)
}

//.SHIFT()
{
    arrei = ['Fernando', 'Carla', 'João', 'Sabrina', 'Raquel', 'Ana', 'Daniel'];

    console.log(arrei.splice(0, 1))
    console.log(arrei)
}