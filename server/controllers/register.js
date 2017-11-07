const User = require('../models/user');
const Register = require('../models/register');

// allRegisterGet, oneRegisterGet, saveRegister

exports.oneRegisterGet = (req, res) => {
  const { userId } = req.params;

  Register.find({ userId })
    .then((data) => {
      if (data.length !== 0) {
        return res.json(data);
      }
      return false;
    })
    .catch(err => res.send(err));
};

exports.contactGet = (req, res) => {
  const { userId } = req.params;

  Register.findOne({ userId }, (err, data) => {
    if (err) res.send(err);
    const sendData = data.contact;
    return res.json(sendData);
  });
}

exports.saveContact = (req, res) => {
  const { userId } = req.params;
  const { contact } = req.body;
  Register.find({ userId })
    .then((data) => {
      if (data.length === 0) {
        const register = new Register({
          userId,
          contact,
        });

        return register.save()
          .then(saveContactData => res.json(saveContactData))
          .catch(err => res.send({ err }));
      }

      return Register.update({ userId }, { $set: { contact } }, (err) => {
        if (err) res.send({ err });
        res.json({ update: 'success' });
      });
    });
};

exports.academicGet = (req, res) => {
  const { userId } = req.params;

  Register.findOne({ userId }, (err, data) => {
    if (err) res.send(err);
    const sendData = data.academic;
    return res.json(sendData);
  });
}

exports.saveAcademic = (req, res) => {
  const { userId } = req.params;
  const { academic } = req.body;

  Register.find({ userId })
    .then((data) => {
      if (data.length === 0) {
        const register = new Register({
          userId,
          academic,
        });

        return register.save()
          .then(saveAcademicData => res.json(saveAcademicData))
          .catch(err => res.send({ err }));
      }

      return Register.update({ userId }, { $set: { 'academic.body': academic } }, (err) => {
        if (err) res.send({ err });
        res.json({ update: 'success' });
      });
    });
};

exports.educationGet = (req, res) => {
  const { userId } = req.params;

  Register.findOne({ userId }, (err, data) => {
    if (err) res.send(err);
    const sendData = data.education;
    return res.json(sendData);
  });
}

exports.saveEducation = (req, res) => {
  const { userId } = req.params;
  const { education } = req.body;

  Register.find({ userId })
    .then((data) => {
      if (data.length === 0) {
        const register = new Register({
          userId,
          education,
        });

        return register.save()
          .then(saveEducationData => res.json(saveEducationData))
          .catch(err => res.send({ err }));
      }

      return Register.update({ userId }, { $set: { 'education.body': education } }, (err) => {
        if (err) res.send({ err });
        res.json({ update: 'success' });
      });
    });
};

exports.extracurricularGet = (req, res) => {
  const { userId } = req.params;

  Register.findOne({ userId }, (err, data) => {
    if (err) res.send(err);
    const sendData = data.extracurricular;
    return res.json(sendData);
  });
}

exports.saveExtracurricular = (req, res) => {
  const { userId } = req.params;
  const { extracurricular } = req.body;

  Register.find({ userId })
    .then((data) => {
      if (data.length === 0) {
        const register = new Register({
          userId,
          extracurricular,
        });

        return register.save()
          .then(saveExtracurricularData => res.json(saveExtracurricularData))
          .catch(err => res.send({ err }));
      }

      return Register.update({ userId }, { $set: { 'extracurricular.body': extracurricular } }, (err) => {
        if (err) res.send({ err });
        res.json({ update: 'success' });
      });
    });
};

exports.awardGet = (req, res) => {
  const { userId } = req.params;

  Register.findOne({ userId }, (err, data) => {
    if (err) res.send(err);
    const sendData = data.award;
    return res.json(sendData);
  });
}

exports.saveAward = (req, res) => {
  const { userId } = req.params;
  const { award } = req.body;

  Register.find({ userId })
    .then((data) => {
      if (data.length === 0) {
        const register = new Register({
          userId,
          award,
        });

        return register.save()
          .then(saveAwardData => res.json(saveAwardData))
          .catch(err => res.send({ err }));
      }

      return Register.update({ userId }, { $set: { 'award.body': award } }, (err) => {
        if (err) res.send({ err });
        res.json({ update: 'success' });
      });
    });
};

