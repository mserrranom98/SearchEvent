import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const conexion = functions.https.onRequest((request, response) => {
  response.send({
    code: '0',
    message: 'Conexion exitosa'
  });
});

export const getEventos = functions.https.onRequest((request, response) => {
  admin.firestore().collection('Empresas/6krplRsAPhLH74DWE9tt/Establecimientos/j3ylmSEYM71x3LdmC3h9/Eventos').get()
    .then(snapshot => {
      const data = snapshot.docs.map(doc => doc.data());
      response.send({
        code: '0',
        message: 'Los datos fueron recuperados correctamente',
        eventos: data
      });
    })
    .catch(error => {
      console.log(error);
      response.status(500).send({
        code: '500',
        message: error
      });
    });
});

export const getImage = functions.https.onRequest((request, response) => {
  const file = admin.storage().bucket().file('logo-small.png');

  file.getSignedUrl({
    action: 'read',
    expires: '03-01-2500',
  }).then(url => {
    response.send({
      code: '0',
      message: 'Archivo recuperado correctamente',
      url: url
    });
  }).catch(error => {
    console.log(error);
    response.status(500).send({
      code: '500',
      message: error
    });
  });
});
