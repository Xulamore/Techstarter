const { QueueServiceClient } = require('@azure/storage-queue');
require('dotenv').config()

const CONNECTION_STRING = process.env.CONNECTION_STRING
const queueServiceClient = QueueServiceClient.fromConnectionString(CONNECTION_STRING);

async function receiveAndDeleteMessage(queueName) {
    // Queue Client erstellen
    const queueClient = queueServiceClient.getQueueClient(queueName);
    
    try {
        // Nachricht empfangen
        const response = await queueClient.receiveMessages();
        
        if (response.receivedMessageItems.length > 0) {
            const message = response.receivedMessageItems[0];
            console.log(`Empfangene Nachricht: ${message.messageText}`);
            
            // Nachricht löschen
            await queueClient.deleteMessage(
                message.messageId,
                message.popReceipt
            );
            console.log(`Nachricht wurde erfolgreich gelöscht`);
        } else {
            console.log('Keine Nachrichten in der Queue vorhanden');
        }
    } catch (error) {
        console.error('Fehler beim Empfangen/Löschen der Nachricht:', error);
    }
}

// Funktion aufrufen
receiveAndDeleteMessage("amazonorderservice");