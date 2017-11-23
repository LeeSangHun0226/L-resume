const express = require('express');

const UserController = require('./controllers/user');
const RegisterController = require('./controllers/register');
const PdfController = require('./controllers/pdf');
const photoController = require('./controllers/photo');
const linkController = require('./controllers/link');
const titleController = require('./controllers/title');

module.exports = function (app) {
  const apiRoutes = express.Router();
  const pdfRoutes = express.Router();
  const userRoutes = express.Router();
  const photoRoutes = express.Router();
  const linkRoutes = express.Router();
  const titleRoutes = express.Router();
  const registerRoutes = express.Router();
  /*------------------------------------------------------------------------------
    PRODUCT ROUTE
  ------------------------------------------------------------------------------*/

  apiRoutes.use('/example', pdfRoutes);
  pdfRoutes.post('/', PdfController.savePhoto);

  apiRoutes.use('/title', titleRoutes);
  titleRoutes.get('/:email', titleController.titleGet);
  titleRoutes.post('/:email', titleController.saveTitle);
  titleRoutes.post('/nav/:email', titleController.saveNav);

  apiRoutes.use('/link', linkRoutes);
  linkRoutes.post('/academic/:email', linkController.saveAcademicLink);
  linkRoutes.post('/academic/modify/:email', linkController.modifyAcademicLink);
  linkRoutes.post('/education/:email', linkController.saveEducationLink);
  linkRoutes.post('/education/modify/:email', linkController.modifyEducationLink);
  linkRoutes.post('/extracurricular/:email', linkController.saveExtracurricularLink);
  linkRoutes.post('/extracurricular/modify/:email', linkController.modifyExtracurricularLink);
  linkRoutes.post('/award/:email', linkController.saveAwardLink);
  linkRoutes.post('/award/modify/:email', linkController.modifyAwardLink);

  // apiRoutes.use('/pdf', pdfRoutes);
  // pdfRoutes.post('/', PdfController.savePdf);

  apiRoutes.use('/photo', photoRoutes);
  photoRoutes.post('/academic/:email', photoController.saveAcademicPhoto);
  photoRoutes.post('/academic/modify/:email', photoController.modifyAcademicPhoto);
  photoRoutes.post('/education/:email', photoController.saveEducationPhoto);
  photoRoutes.post('/education/modify/:email', photoController.modifyEducationPhoto);
  photoRoutes.post('/extracurricular/:email', photoController.saveExtracurricularPhoto);
  photoRoutes.post('/extracurricular/modify/:email', photoController.modifyExtracurricularPhoto);
  photoRoutes.post('/award/:email', photoController.saveAwardPhoto);
  photoRoutes.post('/award/modify/:email', photoController.modifyAwardPhoto);

  apiRoutes.use('/user', userRoutes);

  userRoutes.get('/:email', UserController.oneUserGet);
  userRoutes.post('/', UserController.saveUser);

  apiRoutes.use('/register', registerRoutes);

  // registerRoutes.get('/', RegisterController.allRegisterGet);
  registerRoutes.get('/:email', RegisterController.oneRegisterGet);
  // registerRoutes.post('/new/:email', RegisterController.saveRegister);
  registerRoutes.get('/contact/:email', RegisterController.contactGet);
  registerRoutes.post('/contact/:email', RegisterController.saveContact);
  registerRoutes.get('/academic/:email', RegisterController.academicGet);
  registerRoutes.post('/academic/:email', RegisterController.saveAcademic);
  registerRoutes.get('/education/:email', RegisterController.educationGet);
  registerRoutes.post('/education/:email', RegisterController.saveEducation);
  registerRoutes.get('/extracurricular/:email', RegisterController.extracurricularGet);
  registerRoutes.post('/extracurricular/:email', RegisterController.saveExtracurricular);
  registerRoutes.get('/award/:email', RegisterController.awardGet);
  registerRoutes.post('/award/:email', RegisterController.saveAward);
  // registerRoutes.post('/academic/photo/:email', RegisterController.saveAcademicPhoto);
  // registerRoutes.post('/academic/link/:email', RegisterController.saveAcademicLink);

  app.use('/api', apiRoutes);
};
