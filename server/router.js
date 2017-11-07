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
  titleRoutes.get('/:userId', titleController.titleGet);
  titleRoutes.post('/:userId', titleController.saveTitle);
  titleRoutes.post('/nav/:userId', titleController.saveNav);

  apiRoutes.use('/link', linkRoutes);
  linkRoutes.post('/academic/:userId', linkController.saveAcademicLink);
  linkRoutes.post('/academic/modify/:userId', linkController.modifyAcademicLink);
  linkRoutes.post('/education/:userId', linkController.saveEducationLink);
  linkRoutes.post('/education/modify/:userId', linkController.modifyEducationLink);
  linkRoutes.post('/extracurricular/:userId', linkController.saveExtracurricularLink);
  linkRoutes.post('/extracurricular/modify/:userId', linkController.modifyExtracurricularLink);
  linkRoutes.post('/award/:userId', linkController.saveAwardLink);
  linkRoutes.post('/award/modify/:userId', linkController.modifyAwardLink);

  // apiRoutes.use('/pdf', pdfRoutes);
  // pdfRoutes.post('/', PdfController.savePdf);

  apiRoutes.use('/photo', photoRoutes);
  photoRoutes.post('/academic/:userId', photoController.saveAcademicPhoto);
  photoRoutes.post('/academic/modify/:userId', photoController.modifyAcademicPhoto);
  photoRoutes.post('/education/:userId', photoController.saveEducationPhoto);
  photoRoutes.post('/education/modify/:userId', photoController.modifyEducationPhoto);
  photoRoutes.post('/extracurricular/:userId', photoController.saveExtracurricularPhoto);
  photoRoutes.post('/extracurricular/modify/:userId', photoController.modifyExtracurricularPhoto);
  photoRoutes.post('/award/:userId', photoController.saveAwardPhoto);
  photoRoutes.post('/award/modify/:userId', photoController.modifyAwardPhoto);

  apiRoutes.use('/user', userRoutes);

  userRoutes.get('/:email', UserController.oneUserGet);
  userRoutes.post('/', UserController.saveUser);

  apiRoutes.use('/register', registerRoutes);

  // registerRoutes.get('/', RegisterController.allRegisterGet);
  registerRoutes.get('/:userId', RegisterController.oneRegisterGet);
  // registerRoutes.post('/new/:userId', RegisterController.saveRegister);
  registerRoutes.get('/contact/:userId', RegisterController.contactGet);
  registerRoutes.post('/contact/:userId', RegisterController.saveContact);
  registerRoutes.get('/academic/:userId', RegisterController.academicGet);
  registerRoutes.post('/academic/:userId', RegisterController.saveAcademic);
  registerRoutes.get('/education/:userId', RegisterController.educationGet);
  registerRoutes.post('/education/:userId', RegisterController.saveEducation);
  registerRoutes.get('/extracurricular/:userId', RegisterController.extracurricularGet);
  registerRoutes.post('/extracurricular/:userId', RegisterController.saveExtracurricular);
  registerRoutes.get('/award/:userId', RegisterController.awardGet);
  registerRoutes.post('/award/:userId', RegisterController.saveAward);
  // registerRoutes.post('/academic/photo/:userId', RegisterController.saveAcademicPhoto);
  // registerRoutes.post('/academic/link/:userId', RegisterController.saveAcademicLink);

  app.use('/api', apiRoutes);
};
