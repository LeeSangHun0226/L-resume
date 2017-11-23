import React from 'react';
import styles from './RegisterArrayForm.scss';
import classNames from 'classnames/bind';
import Textarea from '../../atoms/Textarea';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

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
      { label: 'Description (Test name, score, year)', name: 'description'}
    ],
    extra: [
      { label: 'Description', name: 'description' }
    ]
  }

  // console.log(labels[location][0].label === 'School Type' ? true : false)

  return (
    <div className={cx('registerArrayForm')}>
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
        <Button className={cx('save-button')} roundCorner width={5} onClick={onSubmit}>Save</Button>
        {
          location === 'extra' ? <Button className={cx('save-button')} roundCorner width={5} onClick={onDelete}>Delete</Button> : false
        }
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

export default RegisterArrayForm;
