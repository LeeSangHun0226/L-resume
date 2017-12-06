import React from 'react';
import styles from './RegisterArrayForm.scss';
import classNames from 'classnames/bind';
import Textarea from '../../atoms/Textarea';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import remove from '../../../images/remove.svg';

const cx = classNames.bind(styles);

const RegisterArrayForm = ({
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
  onDelete,
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
      { label: 'Description', name: 'description'}
    ],
    extra: [
      { label: 'Description', name: 'description' }
    ]
  }

  // console.log(labels[location][0].label === 'School Type' ? true : false)

  return (
    <div className={cx('registerArrayForm')}>
        <div className={cx('textWrapper')}>
              {
                location === 'academic'?
                    <div className={cx('textForm')}>
                        <h1>Academic Achievements</h1>
                        <p>기본적인 정보를 입력하는 공간입니다.</p>
                    </div>
                    :
                    false
              }
              {
                location === 'extracurricular'?
                    <div className={cx('textForm')}>
                        <h1>Extracurricular Activities</h1>
                        <p>기본적인 정보를 입력하는 공간입니다.</p>
                    </div>
                    :
                    false
              }
              {
                location === 'award'?
                    <div className={cx('textForm')}>
                        <h1>Awards & Recognitions</h1>
                        <p>기본적인 정보를 입력하는 공간입니다.</p>
                    </div>
                    :
                    false
              }
        </div>
        <div className={cx('label-wrapper')}>
          {inputData.map((data, index) => (
            <div key={index}>
            {
              labels[location].map((label, i) => (
                <div key={i} className={cx('label-container')}>
                  <p className={cx('label')}>{label.label}</p>
                  {
                    label.label.indexOf("Description") !== -1
                    ?
                      <Textarea
                        // fullWidth
                        name={label.name}
                        onChange={e => onUpdateArrayInputValue(e, label.name, index)}
                        value={data[label.name] ? data[label.name] : ''}
                      />
                    :
                      <Input
                        // fullWidth
                        name={label.name}
                        onChange={e => onUpdateArrayInputValue(e, label.name, index)}
                        value={data[label.name] ? data[label.name] : ''}
                      />
                  }
                </div>
              ))
            }
            </div>
          ))}
          <div className={cx('save-wrapper')}>
            <Button className={cx('save-button')} onClick={onSubmit}>Save</Button>
            {
              location === 'extra' ? <Button className={cx('save-button')} roundCorner onClick={onDelete}>Delete</Button> : false
            }
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
                  <input className={cx('upload')} type="submit" value="upload" />
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
                <input className={cx('submit')} type="submit" value="submit" />
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

export default RegisterArrayForm;
