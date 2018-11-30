function getAddress(address) {
    return 'O usuário mora em ' + address.city + ' / ' + address.state + 
           ', no bairro ' + address.district + 
           ', na rua \"' + address.street + 
           '\" com nº ' + address.number + '.';
}

var address = {
    street: 'Rua dos pinheiros',
    number: 1293,
    district: 'Centro',
    city: 'São Paulo',
    state: 'SP'
};
    
console.log(getAddress(address));