import React, { useCallback, useEffect, useState } from 'react'
import { Button, Card, Input, Modal, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { updateCRUD } from '../CrudAction';

const CrudUpdate = ({ isVisibleUpdate, updateData }) => {
  const dispatch = useDispatch();

  const [updateCrud, setuUdateCrud] = useState(updateData);
  useEffect(() => {
    setuUdateCrud(updateData)
  }, [updateData])

  const handleOnChange = (e => {
    setuUdateCrud({ ...updateCrud, [e.target.name]: e.target.value });
  });

  const updateHandler = () => {
    dispatch(updateCRUD(updateCrud))
    isVisibleUpdate(false);
  }

  return (
    <div className='update'>
      <div className='update-title'>Update</div>
      <div className='update-body'>
        ID:<Input placeholder="ID" name='id' value={updateCrud?.id} onChange={(e) => handleOnChange(e)} disabled/>
        Name:<Input placeholder="Name" name='name' value={updateCrud?.name} onChange={(e) => handleOnChange(e)} />
        Gender:<Input placeholder="Gender" name='gender' value={updateCrud?.gender} onChange={(e) => handleOnChange(e)} />
      </div>
      <div className='update-button'>
      <Space>  
          <Button type='primary' onClick={() => updateHandler()}>Save</Button>
        <Button type='danger' onClick={() => isVisibleUpdate(false)}>Cancel</Button>
        </Space>
      </div>
    </div>
  )
}

export default CrudUpdate;