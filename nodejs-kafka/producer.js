const kafka = require('kafka-node')
const client = new kafka.KafkaClient({kafkaHost:"localhost:9092"})
const producer = new kafka.Producer(client)

const payload = [{topic: 'mytopic', messages: 'test kafka-node message'}]

setInterval( () => {
    producer.send(payload, (error, result) => {
        if(error) {
          console.log('Payload sending failed: ', error)
        } else {
            console.log('Payload sent successfully')
        }
    })
}, 1000)