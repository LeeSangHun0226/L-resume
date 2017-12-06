import React from 'react';
import styles from './RegisterEducationForm.scss';
import classNames from 'classnames/bind';
import Textarea from '../../atoms/Textarea';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import remove from '../../../images/remove.svg';

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
        <div className={cx('textForm')}>
            <h1>Education</h1>
            <p>기본적인 정보를 입력하는 공간입니다.</p>
        </div>
        <div className={cx('label-wrapper')}>
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
                <div className={cx('triangle')}></div>
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
            </div>
          ))}
          <div className={cx('save-wrapper')}>
            <Button className={cx('save-button')} onClick={onSubmit}>Save</Button>
          </div>
      </div>
      <div className={cx('add-wrapper')}>
      <button className={cx('button')} onClick={onAddBodyForm}>+Add another {location}</button>
        <div className={cx('photo-link-wrapper')}>
          <button className={cx('button1')} onClick={onAddPhoto}>+Add Portfolio IMAGE</button>
          <button className={cx('button1')} onClick={onAddLink}>+Add Portfolio MEDIA link</button>
        </div>
      </div>
      <div className={cx('photo-list-wrapper')}>
        {photo.map((data, index) => (
          <div key={index}>
            {
              !data.photoFlag
              ?
                <form className={cx('photo-form')} onSubmit={e => onSubmitPhoto(e, index)} encType="multipart/form-data">
                  <div className={cx('input-cover')}>Add image</div>

                  <input className={cx('input')} id='filename' disabled={data.isSelected} type="file" onChange={e => onUpdatePhoto(e, index)} />
                  <input className={cx('upload')} type="submit" value="Upload" />
                </form>
              :
                <div className={cx('photo-list-form')}>
                  {data.filename}
                  <button className={cx('photo-list-remove')} onClick={e => onDeletePhoto(e, index)}>
                    <img src={remove} alt="remove" className={cx('photo-list-remove-icon')} />
                  </button>
                </div>
            }
          </div>
        ))}
      </div>
      <div className={cx('link-list-wrapper')}>
        {link.map((data, index) => {
          return (
          <div key={index}>
          {
            !data.linkFlag
              ?
              <form className={cx('link-form')} onSubmit={e => onSubmitLink(e, index)} type="text">
                <input className={cx('input')} type="text" onChange={e => onUpdateLink(e, index)} placeholder='write Media link' />
                <input className={cx('submit')} type="submit" value="Submit" />
              </form>
              :
              <div className={cx('link-list-form')}>
                <a href={data.linkUrl}>{data.linkUrl}</a>
                <button className={cx('link-list-remove')} onClick={e => onDeleteLink(e, index)}>
                  <img src={remove} alt="remove" className={cx('link-list-remove-icon')}/>
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
