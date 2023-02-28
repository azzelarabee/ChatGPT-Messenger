import admin from "firebase-admin";
import {getApps} from "firebase-admin/app";

const serviceAccount ={
    "projectId": "chatgpt-messenger-yt-378812",
    "privateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCspD+BeunMxy7/\ndw8ETENC8zmHVLqPh9qMBzPMULuwWrVimzxqiGHqCn8a5NjZa/JmXdce/t/NQEsk\n3AQtLqje2OFte03q4updA2onm721O+wtNy8uGRG8BbJ6kC0WXzi1+8RmAnxnLnjr\nkl13WvPKz/CSOtM0rNn3iyIRfm7G2I0kqPv6t2d7E4tGsaqQpWhfKqURD7sD04gw\ndh5p51ZrI9DTOIfoZHGIfsX1+Wr83VPz3U6E9w3fUf0mccquXassiUY0WuwUMLus\nsSxXsV3eTSWIIv4F7CSTJaW8ApyHa101z6/LBSNFUZy8jCSaweos7IrCvfiPsesA\n6WlFCB5dAgMBAAECggEADSMzQ/anBl1ynvUf8ECfbl+qP+P7jcLq/Mnq2qrwGsj5\npvHPj1R74v6pJ9JEtYg95M/89/pcQeHDy3UaCkLT40rCHiiKcuE8BWz7mIevpYl+\n/P0x5Wz5861upLNbralRsaOMPAOyFNCtWfvZifoitYsiWvZdWSj9g0AUDRxqcKOC\nJCX4x0IRaUcLSmYVWzsI4D7ONtdxxd2HXo4j4PjETLTGKvY39gY/X/UnOgJtt6Z5\n4dHEDXDzCFlUYFucYZmwuGRFDZ9a8UWtmjnAzNKdqog889d+skDSs9eD8RHXF0jz\n+GCnDFU7HxMuG4dBnMjH+U8z4OGBoOEfAZ22mB1r8QKBgQDsXhXwxpLNLfTNzyoG\nXVgCS860eb38jEiBCsntsfp/uAiVK2aniDv4LOwXKxpuDZekNXX3rYhDJ+QZY5V7\noPfevkpsEZlopsfJ45LNd9uBJWYYaW1GS5D0CqxnuBH8eIpzom2EFyA7Z2F2p6sH\n3pxqE4KVJTaT9uI33UguIMo6hQKBgQC6+yY/+C/Tv9lNRpdr35PJRLa/bMHUXqYX\n5xTksu4QtLYDZqSUhT4+b3idKQOaAXn7u9rrUzpOdhUbwSZx+zbHgdQ/V4M13fub\nEMkBLEOeXRvzDEI+tYwReAt4y1//kk+uiSmDSLL6uWZqkrWB2z3ryeRXgC58YvFl\neHp9jEpX+QKBgQCrsnSRoE1HChkH33KRiQDDOjn+02h0qZqJUkL4jQ5/9DkX0p0R\nGV8mmcst0Tuzsd/zgnoc3ktbLQD+iF4vnfAwN15sPiSH5o6+Urdy1Zv3pikRlpOw\nOngjLhWqigVWtmEsOlL/XqUlQaWEwar1XnmUfHOgz5VjyjTti6pBB8Se2QKBgEUO\nNFYzxxYhKJQNmibQ77fJlOSlugBA5H63bVP5cUriMsaWxfnEK/TLHnSMjTP3j6GV\nA4kdt876dVlGwHggG18bZ9Ps8hyW2zGtxU6VlnOKV6Qvxtd6HTzmZPY7xjyRQLRp\nG9fMpa1Lg7Ogc0B+RCQs8BQQ1xpBQH4FPNfZVCuhAoGAVRo+CzcilM4Gd+kFXoNv\nMZtg1uqQUQ/8b5CHh2YxqHvJ4Dx/QngIScJHJ6nQ69qYNH5VgVTQJs/2a8TpmWYa\n5rDzd0pYXli0PTW59UGR9RmusSFIXOLsBGnBjODCSnJ8c1kIhDVSTjzIeIl5D1Gx\nE8LxMyzSDvSxrEc/nHGrcPA=\n-----END PRIVATE KEY-----\n",
    "clientEmail": "firebase-adminsdk-zgopt@chatgpt-messenger-yt-378812.iam.gserviceaccount.com",
  }

if (!getApps().length){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

const adminDb = admin.firestore();

export {adminDb};