import React from 'react';
import styles from './RegisterEducationForm.scss';
import classNames from 'classnames/bind';
import Textarea from '../../atoms/Textarea';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const cx = classNames.bind(styles);

const RegisterEducationForm = ({
  inputData,
  onSubmit,
  onAddBodyForm,
  onUpdateArrayInputValue,
  location,
  onAddPhoto,
  onAddLink,
  photoFlag,
  photoProcessing,
  photo,
  onUpdatePhoto,
  onSubmitPhoto,
  link,
  onUpdateLink,
  onSubmitLink,
  onDeletePhoto,
  onDeleteLink,
}) => {

  const labels = {
    education: [
      { label: 'School Type', name: 'schoolType' },
      { label: 'School Name', name: 'schoolName' }, 
      { label: 'Start Date', name: 'startDate' }, 
      { label: 'End Date', name: 'endDate' },
      { label: 'Description', name: 'description' },
    ],
    extracurricular: [
      { label: 'Position', name: 'position' }, 
      { label: 'Acitivity Name', name: 'activityName' },
      { label: 'City', name: 'city' },
      { label: 'Country', name: 'country' },
      { label: 'Start Date', name: 'startDate' },
      { label: 'End Date', name: 'endDate' }, 
      { label: 'Description', name: 'description' }
    ],
    award: [
      { label: 'Name', name: 'name' },
      { label: 'Year', name: 'year' },
    ],
    academic: [
      { label: 'Description (Test name, score, year)', name: 'description'}
    ],
    extra: [
      { label: 'Description', name: 'description' }
    ]
  }
  // console.log(inputData)
  return (
    <div className={cx('RegisterEducationForm')}>
      {inputData.map((data, index) => (
        <div key={index}>
          <div className={cx('label-container')}>
            <p className={cx('label')}>School Type</p>
            <select 
              name="schoolType"
              value={data['schoolType'] ? data['schoolType'] : ''}
              onChange={e => onUpdateArrayInputValue(e, "schoolType", index)}
            >
              <option value="Elementary School">Elementary School</option>
              <option value="Middle School">Middle School</option>
              <option value="High School">High School</option>
              <option value="University">University</option>
              <option value="Graduate School">Graduate School</option>
            </select>
          </div>
          <div className={cx('label-container')}>
            <p className={cx('label')}>School Name</p>
            <Input
              name="schoolName"
              onChange={e => onUpdateArrayInputValue(e, "schoolName", index)}
              value={data['schoolName'] ? data['schoolName'] : ''}
            />
          </div>
          <div className={cx('label-container')}>
            <p className={cx('label')}>Start Date</p>
            <Input
              name="startDate"
              onChange={e => onUpdateArrayInputValue(e, "startDate", index)}
              value={data['startDate'] ? data['startDate'] : ''}
            />
          </div>
          <div className={cx('label-container')}>
            <p className={cx('label')}>End Date</p>
            <Input
              name="endDate"
              onChange={e => onUpdateArrayInputValue(e, "endDate", index)}
              value={data['endDate'] ? data['endDate'] : ''}
            />
          </div>
          <div className={cx('label-container')}>
            <p className={cx('label')}>Description</p>
            <Textarea
              name="description"
              onChange={e => onUpdateArrayInputValue(e, "description", index)}
              value={data['description'] ? data['description'] : ''}
            />
          </div>
        </div>
      ))}
      <div className={cx('save-wrapper')}>
        <Button className={cx('save-button')} roundCorner width={5} onClick={onSubmit}>Save</Button>
      </div>
      <div className={cx('add-wrapper')}>
      <button className={cx('button')} onClick={onAddBodyForm}>+Add another {location}</button>
        <div className={cx('photo-link-wrapper')}>
          <button className={cx('button1')} onClick={onAddPhoto}>+Add Portfolio IMAGE</button>
          <div className={cx('bar')}/>
          <button className={cx('button1')} onClick={onAddLink}>+Add Portfolio MEDIA link</button>
        </div>  
      </div>
      <div>
        {photo.map((data, index) => (
          <div key={index}>
            {
              !data.photoFlag
              ?
                <form className={cx('photo-form')} onSubmit={e => onSubmitPhoto(e, index)} encType="multipart/form-data">
                  <input className={cx('input')} disabled={data.isSelected} type="file" onChange={e => onUpdatePhoto(e, index)} />
                  <input className={cx('input')} type="submit" value="Upload" />
                </form>
              :
                <div>
                  {data.filename}
                  <button onClick={e => onDeletePhoto(e, index)}>
                    remove
                  </button>
                </div>
            }
          </div>  
        ))}
      </div>
      <div>
        {link.map((data, index) => {
          return (
          <div key={index}>
          {
            !data.linkFlag
              ?
              <form onSubmit={e => onSubmitLink(e, index)} type="text">
                <input type="text" onChange={e => onUpdateLink(e, index)} />
                <input type="submit" value="submit" />
              </form>
              :
              <div>
                <a href={data.linkUrl}>{data.linkUrl}</a>
                <button onClick={e => onDeleteLink(e, index)}>
                  remove
                </button>
              </div>
          }
        </div>  
        )
        })}
      </div>
    </div>
  );
};

export default RegisterEducationForm;
