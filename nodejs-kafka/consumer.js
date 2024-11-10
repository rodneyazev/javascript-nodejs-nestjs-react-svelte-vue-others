const kafka = require('kafka-node')
const client = new kafka.KafkaClient({kafkaHost:"localhost:9092"})
const consumer = new kafka.Consumer(client, [{topic:'mytopic', partition: 0}])

consumer.on('message', async message => {
    console.log(message)
})