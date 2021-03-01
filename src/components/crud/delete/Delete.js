import React from 'react'
import { Button, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteCRUD } from '../CrudAction';

const CrudDelete = ({ isVisibleDelete, deleteId }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteCRUD(deleteId));
    isVisibleDelete(false);
  }

  return (
    <div className='delete'>
      <div className='delete-title'>DELETE</div>
      <div className='delete-body'>
        Are your sure to want to delete this item?
      </div>
      <div className='delete-button'>
        <Space>  
          <Button type='danger' onClick={() => deleteHandler()}>Delete</Button>
          <Button type='primary' onClick={() => isVisibleDelete(false)}>Cancel</Button>
        </Space>
      </div>
    </div>
  )
}

export default CrudDelete;