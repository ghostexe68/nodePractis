let fetch = require('node-fetch');
const url = 'https://iss.moex.com/iss/engines/stock/markets/shares/securities/GAZP.json'


fetch(
    url
).then(response => {

        switch (response.status) {
            case 200: {
                const json = response.json()
                console.log('response json ==',json)
                return json
            }

            default : {
                throw {
                    type: 'Error',
                    code: String(response.status),
                    message: 'Неизвестная ошибка',
                    comment: ''
                }
            }
        }
    })
    .then(responseJSON => {
        const body = responseJSON.body
        console.log('responseJSON body ==',responseJSON['marketdata']['data'][2][12])

    })
    .catch(error => {
        console.log('catch error ==',error)
    })


console.log('Всё ок')