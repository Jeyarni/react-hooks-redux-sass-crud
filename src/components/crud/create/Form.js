import React, { useState } from 'react'
import { Button, Input, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { addCRUD } from '../CrudAction';

const CrudForm = ({ isVisibleAdd }) => {
  const dispatch = useDispatch();

  const [saveCrud, setSaveCrud] = useState({});

  const handleOnChange = ((name, value) => {
    setSaveCrud({ ...saveCrud, [name]: value });
  });

  const addHandler = () => {
    dispatch(addCRUD(saveCrud))
    isVisibleAdd(false);
    setSaveCrud({});
  }

  return (
    <div className='create'>
      <div className='create-title'>ADD</div>
      <div className='create-body'>
        ID:<Input placeholder="ID" name='id' value={saveCrud?.id} onChange={(val) => handleOnChange('id', val.target.value)} />
        Name:<Input placeholder="Name" name='name' value={saveCrud?.name} onChange={(val) => handleOnChange('name', val.target.value)} />
        Gender:<Input placeholder="Gender" name='gender' value={saveCrud?.gender} onChange={(val) => handleOnChange('gender', val.target.value)} />
      </div>
      <div className='create-button'>
        <Space>
          <Button onClick={() => addHandler()} type='primary'>Save</Button>
          <Button onClick={() => isVisibleAdd(false)} type='danger'>Cancel</Button>
        </Space>
      </div>
    </div>
  )
}

export default CrudForm;