const User = require('../models/user');
const Register = require('../models/register');

// allRegisterGet, oneRegisterGet, saveRegister

exports.oneRegisterGet = (req, res) => {
  const { email } = req.params;

  Register.find({ email })
    .then((data) => {
      if (data.length !== 0) {
        return res.json(data);
      }
      return false;
    })
    .catch(err => res.send(err));
};

exports.contactGet = (req, res) => {
  const { email } = req.params;

  Register.findOne({ email }, (err, data) => {
    if (err) res.send(err);
    const sendData = data.contact;
    return res.json(sendData);
  });
}

exports.saveContact = (req, res) => {
  const { email } = req.params;
  const { contact } = req.body;
  Register.find({ email })
    .then((data) => {
      if (data.length === 0) {
        const register = new Register({
          email,
          contact,
        });

        return register.save()
          .then(saveContactData => res.json(saveContactData))
          .catch(err => res.send({ err }));
      }

      return Register.update({ email }, { $set: { contact } }, (err) => {
        if (err) res.send({ err });
        res.json({ update: 'success' });
      });
    });
};

exports.academicGet = (req, res) => {
  const { email } = req.params;

  Register.findOne({ email }, (err, data) => {
    if (err) res.send(err);
    const sendData = data.academic;
    return res.json(sendData);
  });
}

exports.saveAcademic = (req, res) => {
  const { email } = req.params;
  const { academic } = req.body;

  Register.find({ email })
    .then((data) => {
      if (data.length === 0) {
        const register = new Register({
          email,
          academic,
        });

        return register.save()
          .then(saveAcademicData => res.json(saveAcademicData))
          .catch(err => res.send({ err }));
      }

      return Register.update({ email }, { $set: { 'academic.body': academic } }, (err) => {
        if (err) res.send({ err });
        res.json({ update: 'success' });
      });
    });
};

exports.educationGet = (req, res) => {
  const { email } = req.params;

  Register.findOne({ email }, (err, data) => {
    if (err) res.send(err);
    const sendData = data.education;
    return res.json(sendData);
  });
}

exports.saveEducation = (req, res) => {
  const { email } = req.params;
  const { education } = req.body;

  Register.find({ email })
    .then((data) => {
      if (data.length === 0) {
        const register = new Register({
          email,
          education,
        });

        return register.save()
          .then(saveEducationData => res.json(saveEducationData))
          .catch(err => res.send({ err }));
      }

      return Register.update({ email }, { $set: { 'education.body': education } }, (err) => {
        if (err) res.send({ err });
        res.json({ update: 'success' });
      });
    });
};

exports.extracurricularGet = (req, res) => {
  const { email } = req.params;

  Register.findOne({ email }, (err, data) => {
    if (err) res.send(err);
    const sendData = data.extracurricular;
    return res.json(sendData);
  });
}

exports.saveExtracurricular = (req, res) => {
  const { email } = req.params;
  const { extracurricular } = req.body;

  Register.find({ email })
    .then((data) => {
      if (data.length === 0) {
        const register = new Register({
          email,
          extracurricular,
        });

        return register.save()
          .then(saveExtracurricularData => res.json(saveExtracurricularData))
          .catch(err => res.send({ err }));
      }

      return Register.update({ email }, { $set: { 'extracurricular.body': extracurricular } }, (err) => {
        if (err) res.send({ err });
        res.json({ update: 'success' });
      });
    });
};

exports.awardGet = (req, res) => {
  const { email } = req.params;

  Register.findOne({ email }, (err, data) => {
    if (err) res.send(err);
    const sendData = data.award;
    return res.json(sendData);
  });
}

exports.saveAward = (req, res) => {
  const { email } = req.params;
  const { award } = req.body;

  Register.find({ email })
    .then((data) => {
      if (data.length === 0) {
        const register = new Register({
          email,
          award,
        });

        return register.save()
          .then(saveAwardData => res.json(saveAwardData))
          .catch(err => res.send({ err }));
      }

      return Register.update({ email }, { $set: { 'award.body': award } }, (err) => {
        if (err) res.send({ err });
        res.json({ update: 'success' });
      });
    });
};

